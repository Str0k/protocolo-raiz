/**
 * Serverless Function para recibir webhooks de Hotmart
 * y enviar eventos de compra a Facebook Conversions API
 */

// Configuración de Facebook
const FACEBOOK_PIXEL_ID = '863038383089458';
const FACEBOOK_ACCESS_TOKEN = 'EAATd5U1325oB0cQM24drTrcVEM9Ece2U2dXggktZAotJTDIdcB2wuBUPrrOXctELT9QFb67B1uZBjJHbToKDLkU61Jgxrhsf1KpqqRpnXYQaI2UZAy21mgkZA2B6RGdSZApkTXNepbMEZBZC9vBRq1D1VRSSWMenAYVPFQPXjCLeXxs0ZAgSJOPT1YKnBvzF1vQJ34QZDZb';
const FACEBOOK_API_VERSION = 'v18.0';

/**
 * Función para hashear datos sensibles usando SHA256
 * Facebook requiere que ciertos datos se envíen hasheados
 */
async function sha256Hash(data) {
    if (!data) return null;

    // Normalizar: convertir a minúsculas y limpiar espacios
    const normalized = data.toString().toLowerCase().trim();

    // Usar Web Crypto API para hashear (disponible en Vercel serverless)
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(normalized);
    const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    return hashHex;
}

/**
 * Función para extraer nombre y apellido de un nombre completo
 */
function extractNames(fullName) {
    if (!fullName) return { firstName: null, lastName: null };

    const parts = fullName.trim().split(/\s+/);
    const firstName = parts[0] || null;
    const lastName = parts.length > 1 ? parts.slice(1).join(' ') : null;

    return { firstName, lastName };
}

/**
 * Función para enviar evento a Facebook Conversions API
 */
async function sendFacebookConversion(purchaseData) {
    const url = `https://graph.facebook.com/${FACEBOOK_API_VERSION}/${FACEBOOK_PIXEL_ID}/events`;

    // Timestamp actual en segundos Unix
    const eventTime = Math.floor(Date.now() / 1000);

    // Extraer y hashear datos del usuario
    const { firstName, lastName } = extractNames(purchaseData.buyerName);

    const userData = {
        em: purchaseData.email ? await sha256Hash(purchaseData.email) : null,
        ph: purchaseData.phone ? await sha256Hash(purchaseData.phone.replace(/\D/g, '')) : null,
        fn: firstName ? await sha256Hash(firstName) : null,
        ln: lastName ? await sha256Hash(lastName) : null,
    };

    // Limpiar campos null
    Object.keys(userData).forEach(key => {
        if (userData[key] === null) delete userData[key];
    });

    // Datos personalizados del evento
    const customData = {
        currency: purchaseData.currency || 'MXN',
        value: parseFloat(purchaseData.value) || 0,
    };

    // Construir el payload para Facebook
    const payload = {
        data: [
            {
                event_name: 'Purchase',
                event_time: eventTime,
                action_source: 'website',
                event_source_url: 'https://sanatucuerpo.vercel.app',
                user_data: userData,
                custom_data: customData,
            }
        ],
        access_token: FACEBOOK_ACCESS_TOKEN,
    };

    // Enviar a Facebook
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(`Facebook API error: ${JSON.stringify(result)}`);
    }

    return result;
}

/**
 * Handler principal de la función serverless
 */
export default async function handler(req, res) {
    // Configurar CORS para permitir requests de Hotmart
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Manejar preflight OPTIONS request
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Validar que sea método POST
    if (req.method !== 'POST') {
        return res.status(405).json({
            success: false,
            error: 'Method not allowed. Use POST.',
        });
    }

    try {
        // Leer datos del webhook de Hotmart
        const hotmartData = req.body;

        // Log para debugging (visible en Vercel logs)
        console.log('Webhook recibido de Hotmart:', JSON.stringify(hotmartData, null, 2));

        // Verificar que sea un evento de compra completada
        if (hotmartData.event !== 'PURCHASE_COMPLETE') {
            console.log(`Evento ignorado: ${hotmartData.event}`);
            return res.status(200).json({
                success: true,
                message: `Evento ${hotmartData.event} recibido pero no procesado.`,
            });
        }

        // Extraer datos del comprador
        // La estructura puede variar según la versión del webhook de Hotmart
        const buyer = hotmartData.data?.buyer || hotmartData.buyer || {};
        const purchase = hotmartData.data?.purchase || hotmartData.purchase || {};

        const purchaseData = {
            email: buyer.email,
            buyerName: buyer.name,
            phone: buyer.phone || buyer.checkout_phone,
            value: purchase.price?.value || purchase.transaction?.value,
            currency: purchase.price?.currency_code || 'MXN',
        };

        // Validar que tengamos al menos el email
        if (!purchaseData.email) {
            throw new Error('No se encontró email del comprador en los datos de Hotmart');
        }

        console.log('Datos de compra extraídos:', purchaseData);

        // Enviar evento a Facebook Conversions API
        const fbResult = await sendFacebookConversion(purchaseData);

        console.log('Evento enviado a Facebook:', fbResult);

        // Responder con éxito
        return res.status(200).json({
            success: true,
            message: 'Webhook procesado correctamente',
            facebookResponse: fbResult,
        });

    } catch (error) {
        console.error('Error procesando webhook:', error);

        // Responder con error pero status 200 para que Hotmart no reintente
        return res.status(200).json({
            success: false,
            error: error.message,
            message: 'Error procesando webhook, pero recibido correctamente',
        });
    }
}

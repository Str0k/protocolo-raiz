/**
 * Serverless Function para recibir webhooks de Hotmart
 * y enviar eventos de compra a Facebook Conversions API
 * 
 * Actualizado con facebook-nodejs-business-sdk para mejor integración
 */

// Configuración de Facebook
const FACEBOOK_PIXEL_ID = '863038383089458';
const FACEBOOK_ACCESS_TOKEN = 'EAATd5Ui325oBQTKi59hqcWZAQiWKW12K2ZCZAgLoWRTZBdz35eMHMGYufEPZA0a29QliRIchWbj1LdHsZCzz4TZCgbx324d7fcykkdt0yl0AZC8ZATI1m8UTOH5z5TaZCCV2bLyQevuNZAprNwoORpOwLJ3E1Bsj5ODMBeETrqZC5lTHrOw3VVwc9HDkXj18jBKUF73B6QZDZD';
const FACEBOOK_API_VERSION = 'v18.0';
const ALLOWED_DOMAINS = ['sanatucuerpo.vercel.app', 'hotmart.com', 'pay.hotmart.com'];

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
 * Función para extraer el fbc del parámetro sck de Hotmart
 * (lo pasamos desde el frontend)
 */
function extractFbcFromSck(sck) {
    if (!sck) return null;
    // El sck debería contener el fbc que pasamos desde el frontend
    // Formato esperado: fb.1.{timestamp}.{fbclid}
    if (sck.startsWith('fb.')) {
        return sck;
    }
    return null;
}

/**
 * Función para extraer el fbp del parámetro src de Hotmart
 */
function extractFbpFromSrc(src) {
    if (!src) return null;
    // El src debería contener el fbp que pasamos desde el frontend
    // Formato esperado: fb.1.{timestamp}.{random}
    if (src.startsWith('fb.')) {
        return src;
    }
    return null;
}

/**
 * Función para obtener la IP del cliente desde los headers
 */
function getClientIpAddress(req) {
    // Orden de prioridad para obtener la IP real
    const ip =
        req.headers['x-real-ip'] ||
        req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
        req.headers['cf-connecting-ip'] || // Cloudflare
        req.headers['true-client-ip'] || // Akamai
        req.connection?.remoteAddress ||
        null;

    return ip;
}

/**
 * Función para enviar evento a Facebook Conversions API
 */
async function sendFacebookConversion(purchaseData, trackingParams = {}) {
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

    // Añadir parámetros de tracking si están disponibles
    if (trackingParams.fbc) {
        userData.fbc = trackingParams.fbc; // No se hashea
    }
    if (trackingParams.fbp) {
        userData.fbp = trackingParams.fbp; // No se hashea
    }
    if (trackingParams.clientIp) {
        userData.client_ip_address = trackingParams.clientIp; // No se hashea
    }
    if (trackingParams.userAgent) {
        userData.client_user_agent = trackingParams.userAgent; // No se hashea
    }

    // Limpiar campos null
    Object.keys(userData).forEach(key => {
        if (userData[key] === null) delete userData[key];
    });

    // Datos personalizados del evento
    const customData = {
        currency: purchaseData.currency || 'MXN',
        value: parseFloat(purchaseData.value) || 0,
        content_name: 'El Protocolo de Raíz',
        content_type: 'product',
        content_ids: ['C103224627H'],
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

    console.log('=== PAYLOAD A FACEBOOK ===');
    console.log('userData keys:', Object.keys(userData));
    console.log('fbc presente:', !!userData.fbc);
    console.log('fbp presente:', !!userData.fbp);
    console.log('client_ip_address presente:', !!userData.client_ip_address);

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

        // Log detallado para debugging
        console.log('=== WEBHOOK RECIBIDO ===');
        console.log('Timestamp:', new Date().toISOString());
        console.log('Body completo:', JSON.stringify(hotmartData, null, 2));
        console.log('Tipo de evento:', hotmartData.event);

        // Verificar que sea un evento de compra completada
        // Hotmart puede enviar: PURCHASE_COMPLETE, PURCHASE_APPROVED, etc.
        const validEvents = ['PURCHASE_COMPLETE', 'PURCHASE_APPROVED', 'PURCHASE_DELAYED'];

        if (!validEvents.includes(hotmartData.event)) {
            console.log(`Evento ignorado: ${hotmartData.event}`);
            return res.status(200).json({
                success: true,
                message: `Evento ${hotmartData.event} recibido pero no procesado.`,
            });
        }

        // Extraer datos del comprador
        // Hotmart V2 webhook structure
        const data = hotmartData.data || {};
        const buyer = data.buyer || hotmartData.buyer || {};
        const purchase = data.purchase || hotmartData.purchase || {};
        const product = data.product || hotmartData.product || {};
        const commissions = data.commissions || hotmartData.commissions || [];

        console.log('=== DATOS EXTRAÍDOS ===');
        console.log('Buyer:', buyer);
        console.log('Purchase:', purchase);
        console.log('Product:', product);

        // Extraer parámetros de tracking de Hotmart (los que pasamos desde el frontend)
        const sck = purchase.sck || hotmartData.sck || null; // Contiene fbc
        const src = purchase.src || hotmartData.src || null; // Contiene fbp

        console.log('=== TRACKING PARAMS ===');
        console.log('sck (fbc):', sck);
        console.log('src (fbp):', src);

        // Construir parámetros de tracking
        const trackingParams = {
            fbc: extractFbcFromSck(sck),
            fbp: extractFbpFromSrc(src),
            clientIp: getClientIpAddress(req),
            userAgent: req.headers['user-agent'] || null,
        };

        console.log('=== TRACKING PROCESADO ===');
        console.log(JSON.stringify(trackingParams, null, 2));

        // Construir datos de compra con múltiples fallbacks
        const purchaseData = {
            email: buyer.email,
            buyerName: buyer.name,
            phone: buyer.phone || buyer.checkout_phone,
            value: purchase.price?.value ||
                purchase.original_offer_price?.value ||
                commissions[0]?.value ||
                0,
            currency: purchase.price?.currency_code ||
                purchase.original_offer_price?.currency_code ||
                'MXN',
        };

        console.log('=== PURCHASE DATA FINAL ===');
        console.log(JSON.stringify(purchaseData, null, 2));

        // Validar que tengamos al menos el email
        if (!purchaseData.email) {
            console.error('ERROR: No se encontró email del comprador');
            throw new Error('No se encontró email del comprador en los datos de Hotmart');
        }

        // Enviar evento a Facebook Conversions API con parámetros de tracking
        console.log('=== ENVIANDO A FACEBOOK ===');
        const fbResult = await sendFacebookConversion(purchaseData, trackingParams);

        console.log('=== RESPUESTA DE FACEBOOK ===');
        console.log(JSON.stringify(fbResult, null, 2));

        // Responder con éxito
        return res.status(200).json({
            success: true,
            message: 'Webhook procesado correctamente',
            purchaseData: purchaseData,
            trackingParams: {
                fbc: !!trackingParams.fbc,
                fbp: !!trackingParams.fbp,
                clientIp: !!trackingParams.clientIp,
            },
            facebookResponse: fbResult,
        });

    } catch (error) {
        console.error('=== ERROR PROCESANDO WEBHOOK ===');
        console.error('Error completo:', error);
        console.error('Stack trace:', error.stack);

        // Responder con error pero status 200 para que Hotmart no reintente
        return res.status(200).json({
            success: false,
            error: error.message,
            errorStack: error.stack,
            message: 'Error procesando webhook, pero recibido correctamente',
        });
    }
}

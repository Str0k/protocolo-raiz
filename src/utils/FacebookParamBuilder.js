/**
 * Facebook CAPI Parameter Builder - Client Side
 * Implementación manual de las funcionalidades de @facebook/capi-param-builder-client-js
 * 
 * Captura y almacena:
 * - fbc: Meta Click ID (del parámetro fbclid en la URL)
 * - fbp: Meta Browser ID (generado o recuperado de cookie)
 * - client_ip_address: IP del cliente
 * - client_user_agent: User Agent del navegador
 */

const DOMAINS = ['sanatucuerpo.vercel.app', 'localhost'];
const FBC_COOKIE_NAME = '_fbc';
const FBP_COOKIE_NAME = '_fbp';
const STORAGE_KEY = 'fb_capi_params';

/**
 * Genera un ID único para el browser (fbp)
 * Formato: fb.1.{timestamp}.{random}
 */
function generateFbp() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 10000000000);
    return `fb.1.${timestamp}.${random}`;
}

/**
 * Extrae el fbclid de la URL y genera el fbc
 * Formato: fb.1.{timestamp}.{fbclid}
 */
function extractFbc(url) {
    try {
        const urlObj = new URL(url);
        const fbclid = urlObj.searchParams.get('fbclid');
        if (fbclid) {
            const timestamp = Date.now();
            return `fb.1.${timestamp}.${fbclid}`;
        }
    } catch (e) {
        console.warn('Error extracting fbclid:', e);
    }
    return null;
}

/**
 * Lee una cookie por nombre
 */
function getCookie(name) {
    if (typeof document === 'undefined') return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return parts.pop().split(';').shift();
    }
    return null;
}

/**
 * Establece una cookie
 */
function setCookie(name, value, days = 90) {
    if (typeof document === 'undefined') return;
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);

    // Determinar el dominio correcto
    let domain = '';
    const hostname = window.location.hostname;
    if (hostname !== 'localhost') {
        // Usar el dominio principal (sin subdominio)
        const parts = hostname.split('.');
        if (parts.length > 1) {
            domain = `.${parts.slice(-2).join('.')}`;
        }
    }

    const cookieString = `${name}=${value}; expires=${expires.toUTCString()}; path=/; SameSite=Lax${domain ? `; domain=${domain}` : ''}`;
    document.cookie = cookieString;
}

/**
 * Obtiene la IP del cliente usando servicios externos
 * Intenta IPv6 primero, luego IPv4
 */
async function getClientIp() {
    try {
        // Intentar obtener IPv6 primero
        const response = await fetch('https://api64.ipify.org?format=json', {
            signal: AbortSignal.timeout(3000)
        });
        const data = await response.json();
        return data.ip;
    } catch (error) {
        try {
            // Fallback a IPv4
            const response = await fetch('https://api.ipify.org?format=json', {
                signal: AbortSignal.timeout(3000)
            });
            const data = await response.json();
            return data.ip;
        } catch (fallbackError) {
            console.warn('Could not fetch client IP:', fallbackError);
            return null;
        }
    }
}

/**
 * Guarda los parámetros en localStorage
 */
function saveParams(params) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(params));
    } catch (e) {
        console.warn('Could not save params to localStorage:', e);
    }
}

/**
 * Recupera los parámetros de localStorage
 */
function loadParams() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : null;
    } catch (e) {
        console.warn('Could not load params from localStorage:', e);
        return null;
    }
}

/**
 * Clase principal del Facebook Param Builder
 */
class FacebookParamBuilder {
    constructor() {
        this.fbc = null;
        this.fbp = null;
        this.clientIp = null;
        this.userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : null;
        this.initialized = false;
    }

    /**
     * Inicializa y recolecta todos los parámetros
     */
    async initialize() {
        if (this.initialized) return this.getParams();

        // 1. Intentar cargar parámetros previos
        const stored = loadParams();
        if (stored) {
            this.fbc = stored.fbc;
            this.fbp = stored.fbp;
            this.clientIp = stored.clientIp;
        }

        // 2. Verificar si hay un nuevo fbclid en la URL
        if (typeof window !== 'undefined') {
            const newFbc = extractFbc(window.location.href);
            if (newFbc) {
                this.fbc = newFbc;
                setCookie(FBC_COOKIE_NAME, newFbc);
            } else if (!this.fbc) {
                // Intentar recuperar de cookie existente
                this.fbc = getCookie(FBC_COOKIE_NAME);
            }
        }

        // 3. Generar o recuperar fbp
        if (!this.fbp) {
            this.fbp = getCookie(FBP_COOKIE_NAME);
            if (!this.fbp) {
                this.fbp = generateFbp();
                setCookie(FBP_COOKIE_NAME, this.fbp);
            }
        }

        // 4. Obtener IP del cliente (async)
        if (!this.clientIp) {
            this.clientIp = await getClientIp();
        }

        // 5. Guardar todos los parámetros
        saveParams(this.getParams());

        this.initialized = true;

        console.log('[FB Param Builder] Initialized:', this.getParams());

        return this.getParams();
    }

    /**
     * Retorna todos los parámetros capturados
     */
    getParams() {
        return {
            fbc: this.fbc,
            fbp: this.fbp,
            clientIp: this.clientIp,
            userAgent: this.userAgent,
            timestamp: Date.now()
        };
    }

    /**
     * Retorna los parámetros formateados para la URL de Hotmart
     * Se pueden pasar como query params para recuperarlos luego
     */
    getParamsForUrl() {
        const params = new URLSearchParams();
        if (this.fbc) params.set('_fbc', this.fbc);
        if (this.fbp) params.set('_fbp', this.fbp);
        if (this.clientIp) params.set('_ip', this.clientIp);
        return params.toString();
    }

    /**
     * Añade los parámetros a una URL existente de Hotmart
     */
    appendToUrl(url) {
        const paramsString = this.getParamsForUrl();
        if (!paramsString) return url;

        const separator = url.includes('?') ? '&' : '?';
        return `${url}${separator}${paramsString}`;
    }

    /**
     * Getters individuales
     */
    getFbc() { return this.fbc; }
    getFbp() { return this.fbp; }
    getClientIp() { return this.clientIp; }
    getUserAgent() { return this.userAgent; }
}

// Instancia singleton
let instance = null;

/**
 * Obtiene o crea la instancia del FacebookParamBuilder
 */
export function getFacebookParamBuilder() {
    if (!instance) {
        instance = new FacebookParamBuilder();
    }
    return instance;
}

/**
 * Hook para usar en componentes React
 */
export function useFacebookParams() {
    const builder = getFacebookParamBuilder();
    return {
        initialize: () => builder.initialize(),
        getParams: () => builder.getParams(),
        appendToUrl: (url) => builder.appendToUrl(url),
        getFbc: () => builder.getFbc(),
        getFbp: () => builder.getFbp()
    };
}

export default FacebookParamBuilder;

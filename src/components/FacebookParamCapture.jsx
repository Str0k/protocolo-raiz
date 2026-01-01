import { useEffect, useState } from 'react';
import { getFacebookParamBuilder } from '../utils/FacebookParamBuilder';

/**
 * Componente que inicializa el Facebook Parameter Builder
 * y captura fbc, fbp, IP para mejorar el tracking de conversiones
 * 
 * Debe colocarse en el componente raíz (App.jsx) para que se ejecute
 * en cada carga de página.
 */
function FacebookParamCapture() {
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        const initParams = async () => {
            try {
                const builder = getFacebookParamBuilder();
                const params = await builder.initialize();

                // Exponer los parámetros globalmente para que otros scripts puedan accederlos
                window.__fbParams = params;

                // También crear un evento custom para notificar a otros componentes
                window.dispatchEvent(new CustomEvent('fbParamsReady', { detail: params }));

                setInitialized(true);

                console.log('[FacebookParamCapture] Parameters captured:', {
                    fbc: params.fbc ? '✓ captured' : '✗ not available',
                    fbp: params.fbp ? '✓ captured' : '✗ not available',
                    clientIp: params.clientIp ? '✓ captured' : '✗ not available',
                    userAgent: params.userAgent ? '✓ captured' : '✗ not available'
                });
            } catch (error) {
                console.error('[FacebookParamCapture] Error initializing:', error);
            }
        };

        initParams();
    }, []);

    // Este componente no renderiza nada visible
    return null;
}

export default FacebookParamCapture;

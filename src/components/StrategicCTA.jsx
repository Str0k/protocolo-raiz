import React from 'react';

const StrategicCTA = ({ variant = 'default', urgencyText = null, headline = null, subheadline = null, className = "" }) => {
    const containerClass = variant === 'highlight'
        ? 'max-w-2xl mx-auto text-center my-20 p-8 bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl border-2 border-emerald-200'
        : 'max-w-md mx-auto text-center my-12';

    return (
        <div className={`${containerClass} ${className}`}>
            {urgencyText && (
                <p className="text-red-600 font-semibold text-base animate-pulse mb-4">
                    {urgencyText}
                </p>
            )}
            {headline && (
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{headline}</h3>
            )}
            {subheadline && (
                <p className="text-gray-600 mb-6">{subheadline}</p>
            )}
            <a
                href="https://pay.hotmart.com/C103224627H?checkoutMode=2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-block bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-lg md:text-xl font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105"
            >
                COMENZAR MI RESET AHORA →
            </a>
            <p className="text-sm text-gray-600 mt-4 flex items-center justify-center gap-4 flex-wrap">
                <span>🔒 Pago 100% seguro</span>
                <span>·</span>
                <span>⚡ Acceso inmediato</span>
                <span>·</span>
                <span>🛡️ Garantía 7 días</span>
            </p>
        </div>
    );
};

export default StrategicCTA;

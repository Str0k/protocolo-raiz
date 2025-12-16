import React from 'react';

const PaymentMethods = ({ className = "", theme = "light" }) => {
    // Theme 'light' is for light backgrounds (dark text/logos)
    // Theme 'dark' is for dark backgrounds (light text/logos)

    const textColor = theme === 'dark' ? 'text-slate-400' : 'text-slate-500';
    const containerClass = theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-100 border-slate-200';

    return (
        <div className={`flex flex-col items-center gap-4 ${className}`}>
            <p className={`text-xs font-semibold tracking-widest uppercase ${textColor}`}>
                Métodos de Pago Aceptados
            </p>
            <div className={`flex flex-wrap justify-center items-center gap-4 md:gap-6 p-4 rounded-xl border ${containerClass} backdrop-blur-sm`}>
                {/* Visa */}
                <img src="/payment-icons/visa.svg" alt="Visa" className="h-6 md:h-8 opacity-70 hover:opacity-100 transition-opacity" />

                {/* Mastercard */}
                <img src="/payment-icons/mastercard.svg" alt="Mastercard" className="h-6 md:h-8 opacity-70 hover:opacity-100 transition-opacity" />

                {/* Amex */}
                <img src="/payment-icons/amex.svg" alt="Amex" className="h-6 md:h-8 opacity-70 hover:opacity-100 transition-opacity" />

                {/* PayPal */}
                <img src="/payment-icons/paypal.svg" alt="PayPal" className="h-6 md:h-8 opacity-70 hover:opacity-100 transition-opacity" />

                {/* Mercado Pago */}
                <div className="h-6 md:h-8 flex items-center justify-center bg-[#009EE3] px-2 rounded opacity-70 hover:opacity-100 transition-opacity">
                    <span className="text-xs font-bold text-white whitespace-nowrap">Mercado Pago</span>
                </div>

                {/* OXXO */}
                <img src="/payment-icons/oxxo.svg" alt="OXXO" className="h-6 md:h-8 opacity-70 hover:opacity-100 transition-opacity" />

                {/* SPEI */}
                <div className="h-6 md:h-8 flex items-center justify-center bg-white px-2 rounded border border-slate-200 opacity-70 hover:opacity-100 transition-opacity">
                    <span className="text-xs font-bold text-slate-700">SPEI</span>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethods;

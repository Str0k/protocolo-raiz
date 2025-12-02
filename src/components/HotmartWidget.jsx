import React, { useEffect } from 'react';
import { ShieldCheck, Lock, CreditCard, Banknote } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const HotmartWidget = () => {
    useEffect(() => {
        const importHotmart = () => {
            // Check if script already exists
            if (document.querySelector('script[src="https://static.hotmart.com/checkout/widget.min.js"]')) {
                return;
            }

            const script = document.createElement('script');
            script.src = 'https://static.hotmart.com/checkout/widget.min.js';
            script.async = true;
            document.head.appendChild(script);

            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'https://static.hotmart.com/css/hotmart-fb.min.css';
            document.head.appendChild(link);
        };

        importHotmart();
    }, []);

    return (
        <section className="py-16 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <RevealOnScroll width="100%">
                    <div className="max-w-3xl mx-auto bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl text-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-text mb-8">
                            Empieza tu transformación hoy
                        </h3>

                        {/* Hotmart Button Container */}
                        <div className="mb-10 flex justify-center">
                            <a
                                onclick="return false;"
                                href="https://pay.hotmart.com/C103224627H?checkoutMode=2"
                                className="hotmart-fb group relative bg-gradient-to-r from-primary to-green-600 hover:from-primary/90 hover:to-green-600/90 text-white font-bold text-xl py-5 px-10 rounded-2xl shadow-xl hover:shadow-primary/30 transition-all transform hover:-translate-y-1 w-full md:w-auto inline-block text-center overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-700 skew-x-12 -translate-x-full"></div>
                                <div className="absolute inset-0 rounded-2xl ring-4 ring-white/20 group-hover:ring-white/40 transition-all"></div>

                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    DESCARGAR AHORA
                                    <span className="bg-white/20 px-2 py-0.5 rounded text-sm font-normal">$17 USD</span>
                                </span>
                                <span className="relative z-10 block text-xs font-normal opacity-90 mt-1">Oferta por tiempo limitado</span>
                            </a>
                        </div>

                        {/* Trust Indicators */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-200">
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                    <Lock size={20} />
                                </div>
                                <span className="text-sm font-medium text-slate-600">Pago 100% Seguro</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                                    <ShieldCheck size={20} />
                                </div>
                                <span className="text-sm font-medium text-slate-600">Garantía de 7 Días</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                    <CreditCard size={20} />
                                </div>
                                <span className="text-sm font-medium text-slate-600">Tarjetas y Paypal</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                    <Banknote size={20} />
                                </div>
                                <span className="text-sm font-medium text-slate-600">Pago en Efectivo</span>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default HotmartWidget;

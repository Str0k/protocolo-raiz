import React, { useEffect } from 'react';
import { ShieldCheck, Lock, CreditCard, Banknote } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import CountdownTimer from './CountdownTimer';
import PaymentMethods from './PaymentMethods';

const HotmartWidget = () => {
    useEffect(() => {
        // Listen for Hotmart checkout completion events
        const handleHotmartPurchase = (event) => {
            // Check if it's a Hotmart purchase completion event
            if (event.data && event.data.type === 'hotmart:purchase:approved') {
                // Fire Facebook Pixel Purchase event
                if (window.fbq) {
                    window.fbq('track', 'Purchase', {
                        value: 17.00,
                        currency: 'USD',
                        content_name: 'El Protocolo de Raíz',
                        content_type: 'product'
                    });
                    console.log('Facebook Pixel: Purchase event fired');
                }
            }
        };

        // Add event listener for postMessage from Hotmart iframe
        window.addEventListener('message', handleHotmartPurchase);

        // Cleanup
        return () => {
            window.removeEventListener('message', handleHotmartPurchase);
        };
    }, []);

    return (
        <section id="checkout" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-slate-50 to-slate-100 opacity-70 -z-10"></div>

            <div className="container mx-auto px-4 relative z-10">
                <RevealOnScroll width="100%">
                    <div className="max-w-4xl mx-auto">
                        {/* Secure Checkout Header */}
                        <div className="flex items-center justify-center gap-2 mb-6 text-slate-400 text-sm font-semibold tracking-widest uppercase">
                            <Lock size={16} />
                            Checkout Seguro SSL
                        </div>
                        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-2xl shadow-slate-200/50 relative overflow-hidden">
                            {/* Premium Top Border */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

                            <div className="text-center mb-10">
                                <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                                    Empieza tu transformación hoy
                                </h3>
                                <p className="text-slate-500 text-lg">
                                    Acceso inmediato • Garantía de satisfacción • Soporte 24/7
                                </p>
                            </div>

                            <CountdownTimer className="mb-8 justify-center" />

                            {/* Hotmart Button Container */}
                            <div className="mb-12 flex justify-center">
                                <a
                                    href="https://pay.hotmart.com/C103224627H?checkoutMode=2"
                                    className="hotmart-fb hotmart__button-checkout group relative bg-gradient-to-r from-primary to-green-600 hover:from-primary/90 hover:to-green-600/90 text-white font-bold text-2xl py-6 px-12 rounded-2xl shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all transform hover:-translate-y-1 w-full md:w-auto inline-block text-center overflow-hidden cursor-pointer"
                                    style={{ border: 'none', textDecoration: 'none' }}
                                >
                                    <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-700 skew-x-12 -translate-x-full"></div>
                                    <div className="absolute inset-0 rounded-2xl ring-4 ring-white/20 group-hover:ring-white/40 transition-all"></div>

                                    <span className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-3">
                                        <span>DESCARGAR AHORA</span>
                                        <span className="bg-white/20 px-3 py-1 rounded-lg text-lg font-normal flex items-center gap-2">
                                            <span className="line-through opacity-70 text-sm">$30</span>
                                            $17 USD / $375 MXN
                                        </span>
                                    </span>
                                    <span className="relative z-10 block text-sm font-normal opacity-90 mt-1">Oferta por tiempo limitado</span>
                                </a>
                            </div>

                            <div className="mb-10">
                                <PaymentMethods theme="light" />
                            </div>

                            {/* Trust Indicators */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-slate-100">
                                <div className="flex flex-col items-center gap-3 group">
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                                        <Lock size={24} />
                                    </div>
                                    <span className="text-sm font-semibold text-slate-600">Pago 100% Seguro</span>
                                </div>
                                <div className="flex flex-col items-center gap-3 group">
                                    <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform duration-300">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <span className="text-sm font-semibold text-slate-600">Garantía de 7 Días</span>
                                </div>
                                <div className="flex flex-col items-center gap-3 group">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
                                        <CreditCard size={24} />
                                    </div>
                                    <span className="text-sm font-semibold text-slate-600">Tarjetas y Paypal</span>
                                </div>
                                <div className="flex flex-col items-center gap-3 group">
                                    <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform duration-300">
                                        <Banknote size={24} />
                                    </div>
                                    <span className="text-sm font-semibold text-slate-600">Pago en Efectivo</span>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-8">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Hotmart_logo.svg" alt="Hotmart" className="h-8 mx-auto opacity-70 grayscale hover:grayscale-0 transition-all duration-300" />
                        </div>
                    </div >
                </RevealOnScroll >
            </div >
        </section >
    );
};

export default HotmartWidget;

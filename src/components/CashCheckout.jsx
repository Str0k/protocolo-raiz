import React from 'react';
import { ArrowRight, Banknote } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import CountdownTimer from './CountdownTimer';

const CashCheckout = () => {
    return (
        <section className="py-16 bg-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

            <div className="container mx-auto px-4 relative z-10">
                <RevealOnScroll width="100%">
                    <div className="max-w-4xl mx-auto bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-slate-700 shadow-2xl">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                            {/* Left Side: Text & Value */}
                            <div className="flex-1 text-center md:text-left">
                                <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                                    <Banknote size={16} />
                                    Pago en Efectivo Disponible
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                    ¿No tienes tarjeta? No hay problema.
                                </h3>
                                <p className="text-slate-400 mb-6">
                                    Puedes pagar en efectivo en OXXO, Sencillito, PagoEfectivo y más.
                                </p>
                                <CountdownTimer className="justify-center md:justify-start mb-6" />
                            </div>

                            {/* Right Side: CTA */}
                            <div className="flex-1 w-full md:w-auto flex justify-center md:justify-end">
                                <a
                                    href="https://pay.hotmart.com/C103224627H?checkoutMode=2&bid=1764818365260"
                                    className="group relative inline-flex items-center justify-center gap-3 bg-white text-slate-900 font-bold text-xl py-5 px-10 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all transform hover:-translate-y-1 w-full md:w-auto"
                                >
                                    <span>DESCARGAR AHORA</span>
                                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                    <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce">
                                        OFERTA $17
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default CashCheckout;

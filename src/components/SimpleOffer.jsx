import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Check, Zap, Clock, CreditCard, Banknote } from 'lucide-react';
import PaymentMethods from './PaymentMethods';

const SimpleOffer = () => {
    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-3">
                        Tu inversión hoy
                    </h2>
                    <p className="text-lg text-slate-600">
                        Sin riesgo. Con garantía total.
                    </p>
                </motion.div>

                {/* Offer Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-gradient-to-br from-slate-50 to-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden"
                >
                    <div className="grid md:grid-cols-2">

                        {/* Left: Price & CTA */}
                        <div className="p-8 md:p-10 bg-white">
                            {/* Price Display */}
                            <div className="text-center md:text-left mb-8">
                                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                                    <span className="text-slate-400 text-lg line-through">$172 USD</span>
                                    <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded-full text-xs font-bold">
                                        -90%
                                    </span>
                                </div>
                                <div className="flex items-baseline justify-center md:justify-start gap-2 mb-2">
                                    <span className="text-5xl md:text-6xl font-bold text-emerald-600">$17</span>
                                    <span className="text-xl text-slate-500">USD</span>
                                </div>
                                <p className="text-slate-600 font-medium">≈ $375 MXN</p>
                                <p className="text-sm text-slate-500 mt-1">
                                    Pago único • Sin suscripciones
                                </p>
                            </div>

                            {/* What's Included Summary */}
                            <div className="bg-slate-50 rounded-xl p-4 mb-6">
                                <p className="text-sm font-bold text-slate-700 mb-3">Todo incluido:</p>
                                <div className="space-y-2 text-sm text-slate-600">
                                    {[
                                        "Plan de 7 días paso a paso",
                                        "+30 recetas anti-inflamatorias",
                                        "Lista de compras lista",
                                        "Guía de situaciones sociales",
                                        "BONUS: Grupo privado WhatsApp",
                                        "BONUS: Guía Escudo Anti-Rebote",
                                        "BONUS: Meditaciones para alimentación consciente",
                                        "BONUS: Audios de relajación anti-estrés"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <Check size={14} className="text-emerald-500 shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <a
                                href="#checkout"
                                className="block w-full text-center bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-emerald-500/20 transition-all transform hover:scale-[1.02]"
                                onClick={() => {
                                    if (window.fbq) window.fbq('track', 'InitiateCheckout');
                                }}
                            >
                                OBTENER MI GUÍA AHORA →
                            </a>

                            {/* Trust Indicators */}
                            <div className="flex items-center justify-center gap-4 mt-4 text-xs text-slate-500">
                                <span className="flex items-center gap-1">
                                    <Zap size={12} className="text-emerald-500" />
                                    Acceso inmediato
                                </span>
                                <span className="flex items-center gap-1">
                                    <ShieldCheck size={12} className="text-emerald-500" />
                                    Pago seguro
                                </span>
                            </div>

                            {/* Payment Methods */}
                            <div className="mt-6 pt-6 border-t border-slate-100">
                                <p className="text-xs text-slate-500 text-center mb-3">Métodos de pago:</p>
                                <div className="flex items-center justify-center gap-3 flex-wrap">
                                    <div className="px-3 py-1.5 bg-slate-100 rounded-lg text-xs font-medium text-slate-600">VISA</div>
                                    <div className="px-3 py-1.5 bg-slate-100 rounded-lg text-xs font-medium text-slate-600">Mastercard</div>
                                    <div className="px-3 py-1.5 bg-slate-100 rounded-lg text-xs font-medium text-slate-600">PayPal</div>
                                    <div className="px-3 py-1.5 bg-slate-100 rounded-lg text-xs font-medium text-slate-600">OXXO</div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Guarantee */}
                        <div className="p-8 md:p-10 bg-gradient-to-br from-emerald-50 to-teal-50 flex flex-col justify-center border-t md:border-t-0 md:border-l border-slate-200">
                            <div className="text-center">
                                {/* Shield Icon */}
                                <motion.div
                                    initial={{ scale: 0.9 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="mb-6"
                                >
                                    <div className="relative inline-block">
                                        <div className="absolute inset-0 bg-emerald-400/30 blur-xl rounded-full"></div>
                                        <ShieldCheck size={64} className="text-emerald-600 relative" />
                                    </div>
                                </motion.div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                                    Garantía Total
                                </h3>
                                <p className="text-emerald-700 font-bold tracking-wide uppercase text-sm mb-6">
                                    7 días sin riesgo
                                </p>

                                <div className="bg-white rounded-2xl p-5 shadow-sm border border-emerald-100 mb-6">
                                    <p className="text-slate-700 leading-relaxed">
                                        "Si sigues el protocolo y no ves resultados visibles en 7 días, te devolvemos el{' '}
                                        <strong className="text-emerald-600">100% de tu dinero</strong>."
                                    </p>
                                </div>

                                <div className="space-y-2 text-left max-w-xs mx-auto">
                                    {[
                                        "Sin preguntas incómodas",
                                        "Sin letra chica",
                                        "Reembolso en 24-48 horas"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-2 text-sm text-slate-600">
                                            <Check size={16} className="text-emerald-500 shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-slate-500 bg-white px-4 py-2 rounded-full border border-slate-200">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                    El riesgo es TODO nuestro
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default SimpleOffer;

import React from 'react';
import { ShieldCheck, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import PaymentMethods from './PaymentMethods';
import CountdownTimer from './CountdownTimer';
import ObjectionCrusher from './ObjectionCrusher';

const Pricing = () => {
    return (
        <section id="pricing" className="py-20 md:py-24 bg-white relative">
            <div className="container mx-auto px-4 max-w-5xl">
                <ObjectionCrusher />
                <CountdownTimer />
                <div className="bg-surface rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
                    <div className="grid md:grid-cols-2">
                        {/* LEFT SIDE: PRICING & CTA */}
                        <div className="p-8 md:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-200 bg-white">
                            <div className="text-center md:text-left mb-6">
                                <img
                                    src="/bundle-gold.jpg"
                                    alt="Paquete Post-Fiestas"
                                    className="w-full rounded-xl shadow-lg mb-6 transform hover:scale-105 transition-transform duration-300"
                                />
                                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-4 inline-block">
                                    83% DE DESCUENTO
                                </span>
                                <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                                    <span className="text-slate-400 text-2xl line-through decoration-red-500/50">
                                        $97 USD
                                    </span>
                                    <span className="text-6xl font-bold text-primary tracking-tight">
                                        $17
                                    </span>
                                    <span className="text-xl font-bold text-slate-500 self-end mb-2">USD</span>
                                </div>
                                <p className="text-slate-500 text-sm font-medium">oferta exclusiva por tiempo limitado</p>
                            </div>

                            <a
                                href="#checkout"
                                className="custom-btn w-full text-xl py-4 mb-4 shadow-xl shadow-primary/20 hover:shadow-primary/40"
                                onClick={() => {
                                    if (window.fbq) window.fbq('track', 'InitiateCheckout');
                                }}
                            >
                                <span>COMENZAR MI RESET AHORA</span>
                            </a>

                            <p className="text-sm text-slate-500 mb-6 text-center flex items-center justify-center gap-2 font-medium">
                                <span className="text-green-500 font-bold">✓</span>
                                <span>Sin riesgo</span>
                                <span className="text-slate-300">·</span>
                                <span>Cancelación en 1 clic</span>
                            </p>

                            {/* Payment Methods */}
                            <div className="text-center mb-4">
                                <p className="text-xs text-slate-500 mb-3">Métodos de pago aceptados:</p>
                                <div className="flex items-center justify-center gap-4 mb-4">
                                    <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-slate-200">
                                        <span className="font-bold text-slate-700">VISA</span>
                                    </div>
                                    <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-slate-200">
                                        <span className="font-bold text-slate-700">Mastercard</span>
                                    </div>
                                    <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-slate-200">
                                        <span className="font-bold text-slate-700">PayPal</span>
                                    </div>
                                </div>
                                <p className="text-xs text-emerald-600 font-semibold mb-2">🔒 Pago 100% seguro con cifrado SSL</p>
                                <p className="text-xs text-slate-500">Sin cargos ocultos ni suscripciones automáticas</p>
                            </div>

                            <div className="mb-8">
                                <PaymentMethods theme="light" className="!gap-2" />
                            </div>

                            <div className="flex flex-col gap-2 text-sm text-slate-500">
                                <div className="flex items-center gap-2">
                                    <Check size={16} className="text-green-500" />
                                    <span>Acceso inmediato de por vida</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check size={16} className="text-green-500" />
                                    <span>Todos los bonos incluidos gratis</span>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE: GUARANTEE */}
                        <div className="p-8 md:p-12 bg-slate-50 flex flex-col items-center justify-center text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="mb-6 relative"
                            >
                                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
                                <ShieldCheck size={80} className="text-primary relative z-10" />
                            </motion.div>

                            <h3 className="text-2xl font-bold text-text mb-2">GARANTÍA BLINDADA</h3>
                            <p className="text-primary font-bold tracking-widest uppercase text-sm mb-6">
                                7 DÍAS SIN RIESGO
                            </p>

                            <p className="text-slate-600 leading-relaxed mb-6 text-sm md:text-base">
                                "Si sigues el protocolo durante 7 días y no ves una reducción visible en tu abdomen, te devolvemos el <strong>100% de tu dinero</strong>. Sin preguntas. Sin letra chica."
                            </p>

                            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-green-500 table"></span>
                                Reembolso garantizado en 24-48 horas
                            </div>
                        </div>
                    </div>
                </div>

                {/* Final Trust Message */}
                <p className="text-sm text-center text-slate-600 italic max-w-md mx-auto mt-8">
                    Miles de mujeres ya han confiado en este proceso. Hoy la decisión está en tus manos, pero el riesgo lo asumimos nosotras.
                </p>
            </div>
        </section>
    );
};

export default Pricing;

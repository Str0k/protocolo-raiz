import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, Heart } from 'lucide-react';

const FinalCTA = () => {
    return (
        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-3xl relative">

                {/* Subtle background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px]" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center relative z-10"
                >
                    {/* Emotional Headline */}
                    <h2 className="text-2xl md:text-4xl font-bold mb-6">
                        Los próximos 7 días van a pasar{' '}
                        <span className="text-emerald-400">de todas formas</span>
                    </h2>

                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                        La única pregunta es: ¿cómo te vas a sentir cuando terminen?
                    </p>

                    {/* Two Options */}
                    <div className="grid md:grid-cols-2 gap-4 mb-10 max-w-xl mx-auto">
                        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 text-left">
                            <p className="text-red-400 font-medium mb-2">❌ Sin el protocolo:</p>
                            <p className="text-slate-400 text-sm">
                                Igual de hinchada, cansada y frustrada
                            </p>
                        </div>
                        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5 text-left">
                            <p className="text-emerald-400 font-medium mb-2">✓ Con el protocolo:</p>
                            <p className="text-slate-300 text-sm">
                                Ligera, con energía, y con cm menos de cintura
                            </p>
                        </div>
                    </div>

                    {/* Social Proof */}
                    <p className="text-slate-400 mb-6 flex items-center justify-center gap-2">
                        <Heart size={16} className="text-red-400" />
                        +1,500 mujeres ya tomaron esta decisión
                    </p>

                    {/* Guarantee Reminder */}
                    <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700 rounded-full px-4 py-2 mb-8 text-sm text-slate-400">
                        <Shield size={16} className="text-emerald-400" />
                        <span>
                            Recuerda: 7 días de garantía total. Riesgo <strong className="text-white">CERO</strong>.
                        </span>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <a
                            href="#checkout"
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-lg font-bold py-4 px-10 rounded-2xl shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all transform hover:scale-[1.02] group"
                            onClick={() => {
                                if (window.fbq) window.fbq('track', 'InitiateCheckout');
                            }}
                        >
                            <span>SÍ, QUIERO COMENZAR HOY</span>
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>

                    {/* Price Reminder */}
                    <p className="text-slate-500 text-sm mt-4">
                        Solo $17 USD (≈ $375 MXN) • Acceso inmediato
                    </p>

                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;

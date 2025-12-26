import React from 'react';
import { motion } from 'framer-motion';

const ValueStack = () => {
    return (
        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-3xl p-4 md:p-8 bg-white/50 backdrop-blur-sm border border-slate-100 shadow-xl"
                    >
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                            <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 animate-[shimmer_3s_infinite]" />
                        </div>

                        {/* Title - Optional since image has text, but good for SEO/Lead-in */}
                        <h3 className="text-2xl md:text-3xl font-bold text-text mb-8">
                            Desglose de <span className="text-primary">Valor Total</span>
                        </h3>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.4 }}
                            className="relative z-10"
                        >
                            <img
                                src="/bundle-cream.jpg"
                                alt="Diagrama de Valor - El Protocolo de Raíz"
                                className="w-full h-auto rounded-xl shadow-lg"
                                loading="lazy"
                                decodying="async"
                            />

                            {/* Pulse Effect on the Price Circle Center (Approximate position) */}
                            <motion.div
                                className="absolute top-[48%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-amber-400/20 rounded-full blur-2xl -z-10"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <style jsx>{`
                @keyframes shimmer {
                    100% {
                        left: 200%;
                    }
                }
            `}</style>
        </section>
    );
};

export default ValueStack;

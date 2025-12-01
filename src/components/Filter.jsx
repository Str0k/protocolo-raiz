import React from 'react';
import { motion } from 'framer-motion';
import AnimatedTitle from './AnimatedTitle';
import { Check, X } from 'lucide-react';

const Filter = () => {
    const yesItems = [
        "Sientes que tu abdomen se hincha conforme pasa el día.",
        "Quieres una solución natural sin pastillas ni batidos mágicos.",
        "Estás dispuesto a cocinar recetas simples de 15 minutos.",
        "Buscas resultados sostenibles, no un rebote rápido."
    ];

    const noItems = [
        "Buscas una píldora mágica para bajar 10 kilos en 2 días.",
        "No estás dispuesto a dejar el alcohol por solo 7 días.",
        "Prefieres contar calorías que nutrir tu cuerpo.",
        "Buscas dietas de moda sin base científica."
    ];

    return (
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <AnimatedTitle
                        text="¿Es el Protocolo de Raíz para ti?"
                        className="text-3xl md:text-5xl font-bold text-text mb-6"
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* YES Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-emerald-50/50 p-8 md:p-12 rounded-3xl border border-emerald-100"
                    >
                        <h3 className="text-2xl font-bold text-emerald-800 mb-8 flex items-center gap-3">
                            <div className="bg-emerald-100 p-2 rounded-full">
                                <Check size={24} className="text-emerald-600" />
                            </div>
                            SÍ ES PARA TI
                        </h3>
                        <ul className="space-y-6">
                            {yesItems.map((item, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <Check size={20} className="text-emerald-600 mt-1 shrink-0" />
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* NO Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-red-50/50 p-8 md:p-12 rounded-3xl border border-red-100"
                    >
                        <h3 className="text-2xl font-bold text-red-800 mb-8 flex items-center gap-3">
                            <div className="bg-red-100 p-2 rounded-full">
                                <X size={24} className="text-red-600" />
                            </div>
                            NO ES PARA TI
                        </h3>
                        <ul className="space-y-6">
                            {noItems.map((item, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <X size={20} className="text-red-500 mt-1 shrink-0" />
                                    <span className="text-slate-600">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Filter;

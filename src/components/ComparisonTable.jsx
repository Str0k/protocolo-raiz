import React from 'react';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedTitle from './AnimatedTitle';

const ComparisonTable = () => {
    const features = [
        {
            name: "Dietas de Moda / Keto",
            items: [
                { text: "Pasa hambre", positive: false },
                { text: "Efecto rebote", positive: false },
                { text: "Daña el metabolismo", positive: false }
            ],
            highlight: false
        },
        {
            name: "Jugos Detox / Pastillas",
            items: [
                { text: "Pura azúcar líquida", positive: false },
                { text: "Peligroso para el riñón", positive: false },
                { text: "Solución temporal", positive: false }
            ],
            highlight: false
        },
        {
            name: "Protocolo de Raíz",
            items: [
                { text: "Comida real y saciante", positive: true },
                { text: "Basado en ciencia intestinal", positive: true },
                { text: "Resultados en 7 días", positive: true },
                { text: "Sin efecto rebote", positive: true }
            ],
            highlight: true
        }
    ];

    return (
        <section className="py-24 md:py-32 bg-background relative overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img src="/comparison.jpg" alt="Comparison Background" className="w-full h-full object-cover opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <AnimatedTitle
                        text="¿Por qué el Protocolo de Raíz es diferente?"
                        className="text-3xl md:text-5xl font-bold mb-6 text-text"
                    />
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {features.map((column, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative p-8 rounded-2xl border ${column.highlight
                                ? 'bg-white border-primary/50 shadow-[0_0_30px_rgba(16,185,129,0.1)] transform md:-translate-y-4'
                                : 'bg-slate-50 border-slate-200'
                                }`}
                        >
                            {column.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide shadow-lg">
                                    RECOMENDADO
                                </div>
                            )}

                            <h3 className={`text-xl font-bold mb-8 text-center ${column.highlight ? 'text-primary' : 'text-slate-500'}`}>
                                {column.name}
                            </h3>

                            <ul className="space-y-4">
                                {column.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className={`mt-1 shrink-0 ${item.positive ? 'text-primary' : 'text-red-500'}`}>
                                            {item.positive ? <Check size={20} /> : <X size={20} />}
                                        </div>
                                        <span className={`text-sm md:text-base ${column.highlight ? 'text-slate-700 font-medium' : 'text-slate-500'}`}>
                                            {item.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ComparisonTable;

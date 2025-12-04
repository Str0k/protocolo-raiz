import React from 'react';
import { Flame, Utensils, Brain, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedTitle from './AnimatedTitle';

const Solution = () => {
    const benefits = [
        {
            icon: <Flame size={32} />,
            title: "Apagar el Incendio",
            description: "Elimina los irritantes ocultos que mantienen tu cuerpo en \"modo defensa\"."
        },
        {
            icon: <Utensils size={32} />,
            title: "Alquimia Intestinal",
            description: "Menú estratégico de 7 días con \"Superhéroes\" como el Caldo de Huesos y la Cúrcuma que sellan el intestino permeable."
        },
        {
            icon: <Brain size={32} />,
            title: "Claridad Total",
            description: "Recupera tu energía y enfoque mental al eliminar las neurotoxinas de tu dieta."
        },
        {
            icon: <Zap size={32} />,
            title: "Cocina Inteligente",
            description: "Metodología \"Cook Once, Eat Twice\". Cocina en 15 minutos, come delicioso y olvídate de vivir en la cocina."
        }
    ];

    return (
        <section id="solution" className="py-24 md:py-32 bg-surface relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary text-sm font-medium tracking-wider mb-4 border border-primary/30"
                    >
                        LA SOLUCIÓN DEFINITIVA
                    </motion.span>
                    <AnimatedTitle
                        text="Presentamos: El Protocolo de Raíz"
                        className="text-3xl md:text-5xl font-bold mb-6 text-text"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-xl text-slate-600 max-w-2xl mx-auto"
                    >
                        El sistema de 3 fases para resetear tu microbiota en el tiempo exacto que tardan tus células intestinales en regenerarse: 7 días.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="hidden md:block relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
                    >
                        <img src="/meal.jpg" alt="Solución Natural" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
                    </motion.div>

                    <div className="grid gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white/80 p-6 rounded-2xl border border-slate-200 hover:border-primary/30 hover:bg-white transition-all group shadow-sm"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="text-secondary shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        {benefit.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-2 text-text">{benefit.title}</h3>
                                        <p className="text-slate-500 leading-relaxed text-sm">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;

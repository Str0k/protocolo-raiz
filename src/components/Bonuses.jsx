import React from 'react';
import { ShoppingCart, GlassWater, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedTitle from './AnimatedTitle';

const Bonuses = () => {
    const bonuses = [
        {
            icon: <ShoppingCart size={24} />,
            title: "LA LISTA DE COMPRA MAESTRA",
            value: "$19",
            description: "No pienses qué comprar. Ve al súper, sigue la checklist y listo."
        },
        {
            icon: <GlassWater size={24} />,
            title: "RECETARIO DE JUGOS 'ROOT RESET'",
            value: "$15",
            description: "Los 3 elixires líquidos para drenar la retención de líquidos en 24 horas."
        },
        {
            icon: <Users size={24} />,
            title: "GUÍA DE SUPERVIVENCIA SOCIAL",
            value: "$27",
            description: "Cómo comer en restaurantes sin inflamarme y el 'Semáforo del Alcohol'."
        }
    ];

    return (
        <section className="py-24 md:py-32 bg-background relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-surface opacity-50 -z-10"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <AnimatedTitle
                        text="Esto no es solo un Ebook, es un Sistema Completo."
                        className="text-3xl md:text-4xl font-bold text-text mb-4"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-xl text-primary font-medium"
                    >
                        Ordena hoy y recibe GRATIS:
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {bonuses.map((bonus, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:border-secondary/30 hover:shadow-secondary/10 transition-all group"
                        >
                            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                {bonus.icon}
                            </div>
                            <div className="mb-4">
                                <span className="text-xs font-bold tracking-wider text-secondary uppercase">
                                    Valor {bonus.value} - GRATIS
                                </span>
                                <h3 className="text-lg font-bold text-text mt-1">{bonus.title}</h3>
                            </div>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                {bonus.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Bonuses;

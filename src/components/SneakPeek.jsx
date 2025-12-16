import React from 'react';
import { motion } from 'framer-motion';
import AnimatedTitle from './AnimatedTitle';
import { Smartphone, BookOpen, ShoppingBag } from 'lucide-react';

const SneakPeek = () => {
    const cards = [
        {
            title: "Tabla del Menú Semanal",
            subtitle: "Lunes a Domingo",
            icon: <BookOpen size={48} />,
            color: "from-blue-500/20 to-cyan-500/20"
        },
        {
            title: "Guía Visual de Restaurantes",
            subtitle: "Come fuera sin miedo",
            icon: <Smartphone size={48} />,
            color: "from-purple-500/20 to-pink-500/20"
        },
        {
            title: "Lista de Compras Interactiva",
            subtitle: "Ahorra tiempo y dinero",
            icon: <ShoppingBag size={48} />,
            color: "from-emerald-500/20 to-teal-500/20"
        }
    ];

    return (
        <section className="py-24 md:py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <AnimatedTitle
                        text="No es otro PDF aburrido de solo texto"
                        className="text-3xl md:text-5xl font-bold mb-6 text-text"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-xl text-slate-500 max-w-2xl mx-auto"
                    >
                        Hemos diseñado cada página para que sea fácil de leer, bonita de ver y simple de seguir en tu celular.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="aspect-[3/4] rounded-3xl bg-white border border-slate-200 relative overflow-hidden group hover:border-primary/30 transition-all duration-500 shadow-lg"
                        >
                            {/* Card Background Gradient & Image */}
                            <div className="absolute inset-0">
                                <img src="/sneakpeek.jpg" alt="Sneak Peek" loading="lazy" decoding="async" className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-60 mix-blend-overlay`}></div>
                            </div>

                            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
                                <div className="w-20 h-20 rounded-2xl bg-white/50 flex items-center justify-center mb-6 text-slate-500 group-hover:text-primary group-hover:scale-110 transition-all duration-300 backdrop-blur-sm shadow-sm">
                                    {card.icon}
                                </div>
                                <h3 className="text-xl font-bold text-text mb-2">{card.title}</h3>
                                <p className="text-slate-500 group-hover:text-slate-700 transition-colors">{card.subtitle}</p>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent opacity-50"></div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-sm text-slate-400 flex items-center justify-center gap-2">
                        <Smartphone size={16} />
                        Formato vertical optimizado para leer en cualquier Smartphone o Tablet.
                    </p>
                </div>
            </div >
        </section >
    );
};

export default SneakPeek;

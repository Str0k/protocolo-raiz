import React from 'react';
import { motion } from 'framer-motion';
import AnimatedTitle from './AnimatedTitle';
import { Beaker, Flame, Leaf } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Ingredients = () => {
    const ingredients = [
        {
            name: "Caldo de Huesos",
            headline: "El Cemento Intestinal",
            description: "Rico en Colágeno y Glutamina. Literalmente 'sella' las grietas microscópicas de tu pared intestinal (Leaky Gut) evitando que las toxinas pasen a tu sangre.",
            icon: <Beaker size={32} />,
            color: "bg-amber-100 text-amber-600"
        },
        {
            name: "Cúrcuma Activada",
            headline: "El Apaga-Fuegos",
            description: "Combinada con pimienta negra, reduce la inflamación sistémica con la misma potencia que algunos fármacos, pero sin efectos secundarios.",
            icon: <Flame size={32} />,
            image: "/turmeric.jpg",
            color: "bg-orange-100 text-orange-600"
        },
        {
            name: "Hojas Amargas",
            headline: "El Detox Hepático",
            description: "Rúcula y Diente de León estimulan la bilis para arrastrar las toxinas fuera de tu cuerpo de forma natural.",
            icon: <Leaf size={32} />,
            color: "bg-emerald-100 text-emerald-600"
        }
    ];

    return (
        <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <RevealOnScroll width="100%">
                    <div className="text-center mb-16">
                        <AnimatedTitle
                            text="No es magia, es Bioquímica"
                            className="text-3xl md:text-5xl font-bold text-text mb-6"
                        />
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-xl text-slate-600 max-w-2xl mx-auto"
                        >
                            Utilizamos ingredientes funcionales estratégicos para sellar tu intestino.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {ingredients.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow text-center group"
                            >
                                <div className={`w-24 h-24 mx-auto rounded-full ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 overflow-hidden`}>
                                    {item.image ? (
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    ) : (
                                        item.icon
                                    )}
                                </div>

                                <h3 className="text-2xl font-bold text-text mb-2">{item.name}</h3>
                                <div className="text-primary font-medium text-sm tracking-wider uppercase mb-4">{item.headline}</div>

                                <p className="text-slate-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default Ingredients;

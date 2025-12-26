import React from 'react';
import { motion } from 'framer-motion';
import { Beaker, Flame, Leaf } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Ingredients = () => {
    const ingredients = [
        {
            name: "Caldo de Huesos",
            headline: "El Cemento Intestinal",
            description: "Rico en Colágeno y Glutamina. Literalmente 'sella' las grietas microscópicas de tu pared intestinal (Leaky Gut) evitando que las toxinas pasen a tu sangre.",
            icon: <Beaker size={32} />,
            color: "text-amber-300"
        },
        {
            name: "Cúrcuma Activada",
            headline: "El Apaga-Fuegos",
            description: "Combinada con pimienta negra, reduce la inflamación sistémica con la misma potencia que algunos fármacos, pero sin efectos secundarios.",
            icon: <Flame size={32} />,
            color: "text-orange-400"
        },
        {
            name: "Hojas Amargas",
            headline: "El Detox Hepático",
            description: "Rúcula y Diente de León estimulan la bilis para arrastrar las toxinas fuera de tu cuerpo de forma natural.",
            icon: <Leaf size={32} />,
            color: "text-emerald-300"
        }
    ];

    return (
        <section className="py-24 md:py-32 bg-gradient-to-br from-[#064E3B] to-[#065F46] relative overflow-hidden text-white">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <RevealOnScroll width="100%">
                    <div className="text-center mb-20">
                        <span className="text-emerald-300 font-bold tracking-widest text-sm uppercase mb-4 block">
                            FORMULACIÓN CLÍNICA
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            No es magia, es <span className="text-emerald-200">Bioquímica</span>
                        </h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-xl text-emerald-100/80 max-w-2xl mx-auto"
                        >
                            Utilizamos ingredientes funcionales estratégicos para sellar tu intestino de adentro hacia afuera.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {ingredients.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl hover:bg-white/15 transition-all group"
                            >
                                <div className={`w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${item.color}`}>
                                    {item.icon}
                                </div>

                                <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                                <div className={`font-medium text-sm tracking-wider uppercase mb-6 ${item.color} opacity-90`}>{item.headline}</div>

                                <p className="text-emerald-50 leading-relaxed opacity-90">
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

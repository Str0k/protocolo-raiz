import React from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedTitle from './AnimatedTitle';

const Transformation = () => {
    return (
        <section className="py-24 md:py-32 bg-surface relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 relative">
                        <div className="absolute -left-4 -top-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl animate-pulse"></div>
                        <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse animation-delay-1000"></div>
                        <img
                            src="/freedom.jpg"
                            alt="Libertad y bienestar"
                            className="relative z-10 rounded-2xl shadow-2xl w-full h-auto object-cover border border-slate-200"
                        />
                    </div>

                    <div className="order-1 md:order-2">
                        <AnimatedTitle
                            text="Imagina despertar el próximo lunes..."
                            className="text-3xl md:text-5xl font-bold text-text mb-6 justify-start"
                        />

                        <div className="space-y-6">
                            {[
                                {
                                    title: "Sin esa presión en el abdomen",
                                    desc: "Tu ropa te queda cómoda de nuevo. Te sientes ligera, como si te hubieras quitado una mochila de piedras de encima."
                                },
                                {
                                    title: "Con energía estable todo el día",
                                    desc: "Adiós al bajón de las 3pm. Tu mente está clara, enfocada y lista para conquistar tus metas de año nuevo."
                                },
                                {
                                    title: "En control de tu cuerpo",
                                    desc: "Ya no eres víctima de la inflamación. Tienes el manual de instrucciones para resetearte cuando quieras."
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex gap-4 group"
                                >
                                    <div className="bg-primary/10 p-3 rounded-full h-fit text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Sparkles size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl text-text mb-2">{item.title}</h3>
                                        <p className="text-slate-500">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Transformation;

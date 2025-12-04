import React from 'react';
import { motion } from 'framer-motion';
import AnimatedTitle from './AnimatedTitle';

const Reviews = () => {
    const reviews = [
        "/reviews/review1.png",
        "/reviews/review2.png",
        "/reviews/review3.png",
        "/reviews/review4.png"
    ];

    return (
        <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-slate-50 to-slate-100 opacity-70 -z-10"></div>

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <span className="text-green-600 font-bold tracking-wider text-sm uppercase mb-3 block">
                        RESULTADOS REALES
                    </span>
                    <AnimatedTitle
                        text="Lo que dicen quienes ya lo probaron"
                        className="text-3xl md:text-5xl font-bold text-slate-800 justify-center mb-6"
                    />
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Historias de transformación real. Sin filtros, directo de WhatsApp.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {reviews.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-green-500/10 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 -z-10"></div>
                            <div className="bg-white p-2 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 transform group-hover:-translate-y-2 transition-transform duration-300">
                                <div className="relative overflow-hidden rounded-xl bg-slate-100 aspect-[9/16]">
                                    <img
                                        src={src}
                                        alt={`Testimonio ${index + 1}`}
                                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;

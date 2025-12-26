import React from 'react';
import { motion } from 'framer-motion';
import AnimatedTitle from './AnimatedTitle';

const Reviews = () => {
    const reviews = [
        {
            src: "/reviews/review1.png",
            caption: "Bajó 2 tallas en 2 semanas",
            highlight: "Sin hacer ejercicio"
        },
        {
            src: "/reviews/review2.png",
            caption: "Adiós inflamación crónica",
            highlight: "Resultados en 4 días"
        },
        {
            src: "/reviews/review3.png",
            caption: "Recuperó su energía",
            highlight: "Mamá de 2 hijos"
        },
        {
            src: "/reviews/review4.png",
            caption: "Ropa que no le quedaba",
            highlight: "Ahora le queda grande"
        }
    ];

    return (
        <section className="py-20 md:py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-slate-50 to-slate-100 opacity-70 -z-10"></div>

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="text-center mb-12">
                    <span className="text-green-600 font-bold tracking-wider text-sm uppercase mb-3 block">
                        HISTORIAS VERIFICADAS
                    </span>
                    <AnimatedTitle
                        text="Resultados Reales de Personas Como Tú"
                        className="text-3xl md:text-5xl font-bold text-slate-900 justify-center mb-4"
                    />
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Sin filtros, sin ediciones. Capturas directas de nuestro grupo de soporte.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="flex flex-col h-full bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow"
                        >
                            <div className="relative bg-slate-200 aspect-[9/16] overflow-hidden">
                                <img
                                    src={review.src}
                                    alt={`Testimonio ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-4 bg-white text-center">
                                <p className="font-bold text-slate-800 text-sm mb-1">{review.caption}</p>
                                <span className="inline-block px-2 py-0.5 rounded-md bg-green-50 text-green-700 text-[10px] uppercase font-bold tracking-wide">
                                    {review.highlight}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;

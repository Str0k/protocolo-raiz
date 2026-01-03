import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ChevronLeft, ChevronRight, X, CheckCircle, Quote } from 'lucide-react';

const WhatsAppScreenshots = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const screenshots = [
        {
            src: '/whatsapp-1.png',
            highlight: 'Perdí 3 kilos y mi esposo perdió más de 6 kilos en 2 semanas',
            name: 'Cliente verificada'
        },
        {
            src: '/whatsapp-2.png',
            highlight: 'Mi figura se marcó, mi autoestima subió, me siento llena de energía',
            name: 'Cliente verificada'
        },
        {
            src: '/whatsapp-3.png',
            highlight: 'Bajé casi 5kg en casi 2 semanas, es increíble',
            name: 'Cliente verificada'
        },
        {
            src: '/whatsapp-4.png',
            highlight: 'Bajé 4 kilos y llevo 2 semanas apenas, estoy muy sorprendida',
            name: 'Cliente verificada'
        }
    ];

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % screenshots.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    };

    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full font-semibold text-sm mb-4 border border-green-500/30">
                        <MessageCircle size={18} />
                        PRUEBA REAL
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
                        Mensajes reales de clientas
                    </h2>
                    <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
                        Capturas directas de WhatsApp. Sin filtros. Sin edición.
                    </p>
                </motion.div>

                {/* Mobile Carousel */}
                <div className="md:hidden relative">
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex"
                            animate={{ x: `-${activeIndex * 100}%` }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {screenshots.map((screenshot, index) => (
                                <div
                                    key={index}
                                    className="w-full flex-shrink-0 px-4"
                                >
                                    <motion.div
                                        className="relative cursor-pointer"
                                        onClick={() => setSelectedImage(screenshot.src)}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {/* Phone Frame */}
                                        <div className="relative mx-auto max-w-[280px]">
                                            <div className="bg-slate-800 p-2 rounded-[2rem] shadow-2xl border border-slate-700">
                                                <img
                                                    src={screenshot.src}
                                                    alt={`Testimonio WhatsApp ${index + 1}`}
                                                    className="w-full rounded-[1.5rem] object-cover"
                                                    loading="lazy"
                                                />
                                            </div>
                                        </div>

                                        {/* Highlight Badge */}
                                        <div className="mt-4 mx-2">
                                            <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-3 text-center backdrop-blur">
                                                <p className="text-sm text-emerald-400 font-medium flex items-center justify-center gap-2">
                                                    <Quote size={14} className="shrink-0 rotate-180" />
                                                    <span>{screenshot.highlight}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/3 -translate-y-1/2 bg-slate-800/90 backdrop-blur-sm shadow-lg rounded-full p-2 z-10 hover:bg-slate-700 transition-colors border border-slate-700"
                    >
                        <ChevronLeft size={24} className="text-white" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/3 -translate-y-1/2 bg-slate-800/90 backdrop-blur-sm shadow-lg rounded-full p-2 z-10 hover:bg-slate-700 transition-colors border border-slate-700"
                    >
                        <ChevronRight size={24} className="text-white" />
                    </button>

                    {/* Dot Indicators */}
                    <div className="flex justify-center gap-2 mt-6">
                        {screenshots.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index ? 'w-8 bg-emerald-500' : 'w-2 bg-slate-600'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {screenshots.map((screenshot, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative cursor-pointer group"
                            onClick={() => setSelectedImage(screenshot.src)}
                        >
                            {/* Phone Frame */}
                            <div className="relative">
                                {/* Glow on hover */}
                                <div className="absolute inset-0 bg-emerald-400/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Phone body */}
                                <div className="relative bg-gradient-to-b from-slate-700 to-slate-800 p-1.5 rounded-[1.8rem] shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300 border border-slate-600">
                                    <img
                                        src={screenshot.src}
                                        alt={`Testimonio WhatsApp ${index + 1}`}
                                        className="w-full rounded-[1.5rem] object-cover"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Zoom indicator */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
                                        Clic para ampliar
                                    </div>
                                </div>
                            </div>

                            {/* Highlight Badge */}
                            <div className="mt-3">
                                <div className="bg-slate-800/80 border border-slate-700 rounded-lg p-2">
                                    <p className="text-xs text-emerald-400 font-medium line-clamp-2 flex items-start gap-1.5">
                                        <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                                        <span>"{screenshot.highlight}"</span>
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-10"
                >
                    <p className="text-slate-500 text-sm">
                        📱 Capturas reales de nuestro grupo privado de WhatsApp
                    </p>
                </motion.div>

                {/* Lightbox Modal */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                            onClick={() => setSelectedImage(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="relative max-w-sm w-full max-h-[90vh]"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="absolute -top-12 right-0 text-white/80 hover:text-white p-2"
                                >
                                    <X size={28} />
                                </button>

                                <div className="bg-slate-800 p-2 rounded-[2.5rem] shadow-2xl border border-slate-700">
                                    <img
                                        src={selectedImage}
                                        alt="Testimonio WhatsApp ampliado"
                                        className="w-full rounded-[2rem] object-contain max-h-[80vh]"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
};

export default WhatsAppScreenshots;

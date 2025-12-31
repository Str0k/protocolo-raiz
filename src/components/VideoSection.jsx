import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-emerald-50/30 to-white">
            <div className="container mx-auto px-4 max-w-2xl">

                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4"
                >
                    Mira lo que dicen mujeres como tú
                </motion.h2>

                {/* Video Container - Vertical 9:16 Aspect Ratio */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, type: 'spring', stiffness: 200 }}
                    className="relative mx-auto mb-8"
                    style={{ maxWidth: '360px' }}
                >
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900" style={{ aspectRatio: '9/16' }}>

                        {/* Animated Text-Based Video Mockup */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-slate-900 flex flex-col items-center justify-center p-8">

                            {/* Before/After Illustration */}
                            <motion.div
                                animate={{
                                    opacity: [0.6, 1, 0.6],
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="mb-8"
                            >
                                <div className="flex items-center gap-8">
                                    {/* Before */}
                                    <div className="text-center">
                                        <div className="text-5xl mb-2">😞</div>
                                        <p className="text-white/60 text-xs">Antes</p>
                                    </div>

                                    {/* Arrow */}
                                    <motion.div
                                        animate={{ x: [0, 10, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                        className="text-3xl text-accent"
                                    >
                                        →
                                    </motion.div>

                                    {/* After */}
                                    <div className="text-center">
                                        <div className="text-5xl mb-2">😊</div>
                                        <p className="text-white/60 text-xs">Después</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Text Overlays */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="space-y-4 text-center"
                            >
                                <p className="text-white text-xl md:text-2xl font-bold">
                                    7 días
                                </p>
                                <p className="text-emerald-300 text-lg font-semibold">
                                    Sin pasar hambre
                                </p>
                                <p className="text-emerald-300 text-lg font-semibold">
                                    Sin gimnasio
                                </p>
                            </motion.div>

                            {/* Bottom CTA */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                                className="absolute bottom-8 left-0 right-0 text-center px-4"
                            >
                                <p className="text-white/90 text-sm font-medium">
                                    "Esto también puede ser tu historia"
                                </p>
                            </motion.div>

                            {/* Stats Ticker */}
                            <motion.div
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute top-8 left-0 right-0 text-center"
                            >
                                <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                    <p className="text-white text-xs font-bold">
                                        ✓ 1,524 mujeres transformadas
                                    </p>
                                </div>
                            </motion.div>

                            {/* Play Button Overlay (if not playing) */}
                            {!isPlaying && (
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setIsPlaying(true)}
                                    className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm cursor-pointer group"
                                >
                                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:bg-white transition-colors">
                                        <Play size={28} className="text-primary ml-1" fill="currentColor" />
                                    </div>
                                </motion.button>
                            )}
                        </div>
                    </div>

                    {/* Video Frame Reflection */}
                    <div className="absolute -bottom-2 left-0 right-0 h-8 bg-gradient-to-b from-slate-900/20 to-transparent blur-xl" />
                </motion.div>

                {/* CTA Below Video */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center"
                >
                    <a
                        href="#checkout"
                        className="inline-block bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-emerald-700 text-white text-base md:text-lg font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
                    >
                        Quiero resultados como este → Solo $17 USD / $375 MXN hoy
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default VideoSection;

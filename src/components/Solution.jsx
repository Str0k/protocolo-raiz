import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Solution = () => {
    const [activeCard, setActiveCard] = useState(1);
    const scrollContainerRef = useRef(null);

    const phases = [
        {
            id: 1,
            days: 'Días 1–2',
            title: 'Apaga el Incendio',
            color: '#EF4444', // Red
            description: 'Elimina los 5 Jinetes de la inflamación. Tu sistema digestivo comienza a desinflamarse desde la primera comida.',
            icon: '🔥',
        },
        {
            id: 2,
            days: 'Días 3–5',
            title: 'Sella tu Barrera',
            color: '#F97316', // Orange
            description: 'Jugos específicos, caldos y alimentos funcionales regeneran tu mucosa intestinal. Aquí notas el cambio visual.',
            icon: '🛡️',
        },
        {
            id: 3,
            days: 'Días 6–7',
            title: 'Reconstruye tu Microbiota',
            color: '#10B981', // Emerald
            description: 'Reintroducción estratégica de prebióticos que evitan el rebote y consolidan tu transformación.',
            icon: '🌱',
        },
    ];

    const scrollToCard = (index) => {
        const container = scrollContainerRef.current;
        if (container) {
            const cardWidth = container.scrollWidth / phases.length;
            container.scrollTo({
                left: cardWidth * index,
                behavior: 'smooth',
            });
            setActiveCard(index);
        }
    };

    return (
        <section className="py-24 bg-gradient-to-b from-white to-emerald-50/30 relative overflow-hidden">
            {/* Background particle effects */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -50, 0],
                            opacity: [0, 0.6, 0],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Cómo Funciona el Protocolo de Raíz
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Un sistema en 3 fases diseñado para trabajar CON tu biología, no en su contra
                    </p>
                </div>

                {/* Desktop: Horizontal Layout */}
                <div className="hidden md:grid md:grid-cols-3 gap-8 mb-12">
                    {phases.map((phase, index) => (
                        <motion.div
                            key={phase.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="relative p-8 rounded-3xl bg-white shadow-xl border-2 transition-all"
                            style={{
                                borderColor: phase.color + '40',
                            }}
                        >
                            <div className="text-5xl mb-4">{phase.icon}</div>
                            <div
                                className="text-sm font-bold uppercase tracking-wider mb-2"
                                style={{ color: phase.color }}
                            >
                                {phase.days}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{phase.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{phase.description}</p>

                            {/* Connecting line (except for last) */}
                            {index < phases.length - 1 && (
                                <motion.div
                                    className="absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent hidden lg:block"
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    transition={{ duration: 0.8, delay: index * 0.3 + 0.5 }}
                                />
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Mobile: Swipeable Timeline */}
                <div className="md:hidden relative">
                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        onScroll={(e) => {
                            const scrollLeft = e.target.scrollLeft;
                            const cardWidth = e.target.scrollWidth / phases.length;
                            const newActive = Math.round(scrollLeft / cardWidth);
                            setActiveCard(newActive);
                        }}
                    >
                        {phases.map((phase, index) => (
                            <motion.div
                                key={phase.id}
                                className="flex-shrink-0 w-[85vw] snap-center"
                                style={{
                                    filter: activeCard === index ? 'none' : 'brightness(0.7)',
                                    transition: 'filter 0.3s',
                                }}
                            >
                                <div
                                    className="p-8 rounded-3xl bg-white shadow-2xl border-2 h-full relative overflow-hidden"
                                    style={{
                                        borderColor: phase.color + '40',
                                        boxShadow:
                                            activeCard === index
                                                ? `0 20px 60px ${phase.color}30`
                                                : '0 10px 30px rgba(0,0,0,0.1)',
                                    }}
                                >
                                    {/* Glow effect when centered */}
                                    {activeCard === index && (
                                        <motion.div
                                            className="absolute inset-0 opacity-10 pointer-events-none"
                                            style={{ backgroundColor: phase.color }}
                                            animate={{ opacity: [0.05, 0.15, 0.05] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                    )}

                                    <div className="text-5xl mb-4">{phase.icon}</div>
                                    <div
                                        className="text-sm font-bold uppercase tracking-wider mb-2"
                                        style={{ color: phase.color }}
                                    >
                                        {phase.days}
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{phase.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{phase.description}</p>

                                    {/* Particle animation */}
                                    {activeCard === index && (
                                        <>
                                            {[...Array(5)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="absolute w-2 h-2 rounded-full"
                                                    style={{ backgroundColor: phase.color, opacity: 0.6 }}
                                                    initial={{ x: '50%', y: '50%', scale: 0 }}
                                                    animate={{
                                                        x: `${50 + (Math.random() - 0.5) * 100}%`,
                                                        y: `${50 + (Math.random() - 0.5) * 100}%`,
                                                        scale: [0, 1, 0],
                                                        opacity: [0, 0.6, 0],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        delay: i * 0.4,
                                                    }}
                                                />
                                            ))}
                                        </>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Dot Indicators */}
                    <div className="flex justify-center gap-2 mt-6">
                        {phases.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToCard(index)}
                                className={`h-2 rounded-full transition-all ${activeCard === index ? 'w-8 bg-primary' : 'w-2 bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;

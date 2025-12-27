import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User } from 'lucide-react';

const StickyBottomBar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [cuposText, setCuposText] = useState('Solo 12 cupos hoy');

    useEffect(() => {
        const handleScroll = () => {
            // Show after 20% scroll
            const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
            setIsVisible(scrollPercent > 20);

            // Update cupos text when near pricing section
            const pricingElement = document.getElementById('pricing');
            if (pricingElement) {
                const pricingTop = pricingElement.offsetTop;
                const scrollPos = window.scrollY + window.innerHeight;
                if (scrollPos > pricingTop - 200) {
                    setCuposText('¡Últimos cupos!');
                } else {
                    setCuposText('Solo 12 cupos hoy');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-primary to-primary-dark shadow-2xl border-t border-white/20 z-50 md:hidden"
                >
                    <div className="flex items-center justify-between px-4 py-3 max-w-lg mx-auto">

                        {/* Left: Expert Avatar */}
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-10 h-10 rounded-full bg-emerald-200 flex items-center justify-center">
                                    <User size={20} className="text-primary-dark" />
                                </div>
                                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
                            </div>

                            {/* Center: Text */}
                            <div className="flex flex-col">
                                <span className="text-white text-xs font-semibold leading-tight">
                                    Desinflama tu abdomen
                                </span>
                                <span className="text-emerald-100 text-xs">
                                    Protocolo de 7 días
                                </span>
                            </div>
                        </div>

                        {/* Right: CTA Button + Cupos Pill */}
                        <div className="flex items-center gap-2">
                            <motion.span
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-[10px] bg-red-500 text-white px-2 py-1 rounded-full font-bold whitespace-nowrap"
                            >
                                {cuposText}
                            </motion.span>
                            <a
                                href="#checkout"
                                className="bg-white text-primary px-5 py-2.5 rounded-full font-bold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all whitespace-nowrap"
                            >
                                Empezar →
                            </a>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default StickyBottomBar;

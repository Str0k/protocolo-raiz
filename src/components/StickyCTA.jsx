import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StickyCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling down 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 100 }}
                    className="fixed bottom-0 left-0 w-full z-50 bg-[#1C1917] border-t border-white/10 shadow-2xl py-4 px-4 md:py-6"
                >
                    <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-white font-medium text-lg hidden md:block">
                            Desinflama tu cuerpo en 7 días.
                        </p>
                        <a
                            onclick="return false;"
                            href="https://pay.hotmart.com/C103224627H?checkoutMode=2"
                            className="hotmart-fb w-full md:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-bold text-lg py-3 px-8 rounded-xl shadow-lg hover:shadow-amber-500/20 transition-all transform hover:-translate-y-1 text-center inline-block"
                        >
                            Descargar Ahora ($17)
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default StickyCTA;

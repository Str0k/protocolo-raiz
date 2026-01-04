import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Hide/show header based on scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
            setScrolled(currentScrollY > 20);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.header
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                            ? 'header-glass-scrolled'
                            : 'header-glass'
                        }`}
                >
                    {/* Animated gradient border bottom */}
                    <motion.div
                        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{
                            opacity: scrolled ? 1 : 0.3,
                            scaleX: 1
                        }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />

                    {/* Shimmer Effect Overlay */}
                    <div className="header-shimmer pointer-events-none" />

                    {/* Floating particles in background */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
                                initial={{
                                    x: `${20 + i * 30}%`,
                                    y: '100%',
                                    opacity: 0
                                }}
                                animate={{
                                    y: '-100%',
                                    opacity: [0, 0.6, 0],
                                }}
                                transition={{
                                    duration: 4 + i,
                                    repeat: Infinity,
                                    delay: i * 1.5,
                                    ease: 'linear'
                                }}
                            />
                        ))}
                    </div>

                    <div className="container mx-auto px-4">
                        <div className="flex items-center justify-between h-16 md:h-20 transition-all duration-300">

                            {/* Logo Area with Premium Animation */}
                            <motion.div
                                className="flex items-center gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                {/* Animated Logo Icon */}
                                <motion.div
                                    className="relative"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {/* Glow ring */}
                                    <motion.div
                                        className="absolute inset-0 rounded-xl bg-emerald-500/40 blur-lg"
                                        animate={{
                                            scale: [1, 1.3, 1],
                                            opacity: [0.3, 0.6, 0.3]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />

                                    {/* Logo container */}
                                    <motion.div
                                        className="relative w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/25 overflow-hidden"
                                        animate={{
                                            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                                        }}
                                        transition={{
                                            duration: 5,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                        style={{ backgroundSize: '200% 200%' }}
                                    >
                                        {/* Inner shine */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0"
                                            animate={{
                                                x: [-40, 40],
                                                opacity: [0, 1, 0]
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                repeatDelay: 3
                                            }}
                                        />
                                        <span className="relative text-white font-bold text-lg md:text-xl drop-shadow-sm">R</span>
                                    </motion.div>
                                </motion.div>

                                {/* Brand Text with Reveal Animation */}
                                <div className={`hidden sm:block transition-all duration-500 ${scrolled ? 'opacity-100' : 'opacity-90'}`}>
                                    <motion.p
                                        className="font-bold text-white text-sm md:text-base tracking-wide"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        Protocolo de Raíz
                                    </motion.p>
                                    <motion.p
                                        className="text-xs text-emerald-400/80 font-medium tracking-wider uppercase"
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        Desinflamación intestinal
                                    </motion.p>
                                </div>
                            </motion.div>

                            {/* Premium CTA Button */}
                            <motion.a
                                href="#checkout"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative overflow-hidden group"
                                onClick={() => {
                                    if (window.fbq) window.fbq('track', 'InitiateCheckout');
                                }}
                            >
                                {/* Button glow */}
                                <motion.div
                                    className="absolute inset-0 bg-emerald-500/50 blur-xl rounded-full"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.3, 0.5, 0.3]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />

                                {/* Button body */}
                                <div className="relative bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 text-white font-bold text-xs md:text-sm py-2.5 px-6 rounded-full shadow-lg shadow-emerald-500/30">
                                    {/* Animated shine effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
                                        initial={{ x: '-100%' }}
                                        animate={{ x: '200%' }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            repeatDelay: 2,
                                            ease: "easeInOut"
                                        }}
                                    />

                                    {/* Button text with arrow animation */}
                                    <span className="relative z-10 flex items-center gap-2">
                                        <span>OBTENER GUÍA</span>
                                        <motion.span
                                            animate={{ x: [0, 4, 0] }}
                                            transition={{
                                                duration: 1,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        >
                                            →
                                        </motion.span>
                                    </span>
                                </div>
                            </motion.a>

                        </div>
                    </div>
                </motion.header>
            )}
        </AnimatePresence>
    );
};

export default Header;

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    // Background opacity that increases with scroll
    const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.95]);
    const backdropBlur = useTransform(scrollY, [0, 100], ["0px", "12px"]);
    const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.1]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            style={{
                backgroundColor: `rgba(15, 23, 42, ${scrolled ? 0.95 : 0.8})`,
                backdropFilter: scrolled ? 'blur(12px)' : 'blur(5px)',
                borderBottom: `1px solid rgba(255, 255, 255, ${scrolled ? 0.1 : 0})`
            }}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* Shimmer Effect Overlay */}
            <div className="header-shine pointer-events-none" />

            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 md:h-20 transition-all duration-300">

                    {/* Logo Area */}
                    <div className="flex items-center gap-3">
                        <motion.div
                            whileHover={{ rotate: 5, scale: 1.05 }}
                            className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-900/20"
                        >
                            <span className="text-white font-bold text-lg md:text-xl">R</span>
                        </motion.div>
                        <div className={`hidden sm:block transition-all duration-300 ${scrolled ? 'opacity-100' : 'opacity-90'}`}>
                            <p className="font-bold text-white text-sm md:text-base tracking-wide">Protocolo de Raíz</p>
                            <p className="text-xs text-slate-400 font-medium tracking-wider uppercase">Desinflamación intestinal</p>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <motion.a
                        href="#checkout"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative overflow-hidden bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold text-xs md:text-sm py-2.5 px-6 rounded-full shadow-lg shadow-emerald-500/20 group"
                        onClick={() => {
                            if (window.fbq) window.fbq('track', 'InitiateCheckout');
                        }}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            OBTENER GUÍA
                        </span>
                        {/* Button Glow on Hover */}
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </motion.a>

                </div>
            </div>
        </motion.header>
    );
};

export default Header;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-10 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-slate-900/80 backdrop-blur-sm py-3'}`}>
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex-shrink-0">
                    <img
                        src="/logo.jpg"
                        alt="Protocolo de Raíz"
                        className={`h-9 md:h-11 w-auto object-contain ${scrolled ? '' : 'brightness-0 invert'}`}
                    />
                </a>

                {/* Desktop Menu */}
                <nav className={`hidden md:flex items-center gap-8 text-sm font-medium ${scrolled ? 'text-slate-600' : 'text-white/90'}`}>
                    <a href="#problem" className="hover:text-emerald-400 transition-colors">El Problema</a>
                    <a href="#solution" className="hover:text-emerald-400 transition-colors">La Solución</a>
                    <a href="#pricing" className="hover:text-emerald-400 transition-colors">Obtener Oferta</a>
                </nav>

                {/* CTA Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-full font-bold text-sm shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all"
                >
                    Comenzar
                </motion.button>
            </div>
        </header>
    );
};

export default Header;

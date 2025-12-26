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
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex-shrink-0">
                    <img
                        src="/logo.jpg"
                        alt="Protocolo de Raíz"
                        className="h-10 md:h-12 w-auto object-contain mix-blend-multiply"
                    />
                </a>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                    <a href="#problem" className="hover:text-primary transition-colors">El Problema</a>
                    <a href="#solution" className="hover:text-primary transition-colors">La Solución</a>
                    <a href="#pricing" className="hover:text-primary transition-colors">Obtener Oferta</a>
                </nav>

                {/* CTA Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-[#10B981] text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-[#10B981]/20 hover:shadow-[#10B981]/40 transition-all"
                >
                    Comenzar
                </motion.button>
            </div>
        </header>
    );
};

export default Header;

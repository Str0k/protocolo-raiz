import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[90%]">
            <div className="bg-white/70 backdrop-blur-xl border border-white/20 rounded-full shadow-lg shadow-black/5 px-6 py-3 flex items-center gap-6 md:gap-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative group cursor-pointer flex-shrink-0"
                >
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <motion.img
                        src="/logo.jpg"
                        alt="Protocolo de Raíz"
                        className="h-10 md:h-12 w-auto object-contain mix-blend-multiply relative z-10"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                </motion.div>

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
                    <a href="#problem" className="hover:text-primary transition-colors">El Problema</a>
                    <a href="#solution" className="hover:text-primary transition-colors">La Solución</a>
                    <a href="#pricing" className="hover:text-primary transition-colors">Obtener Oferta</a>
                </nav>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' })}
                    className="custom-btn text-xs md:text-sm !px-6 !py-2"
                >
                    <span>Comenzar</span>
                </motion.button>
            </div>
        </header>
    );
};

export default Header;

import React from 'react';
import { motion } from 'framer-motion';
import { Snowflake } from 'lucide-react';

const Header = ({ isSnowEnabled, onToggleSnow }) => {
    return (
        <header className="fixed top-3 md:top-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[95%] md:max-w-[90%]">
            <div className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-full shadow-lg shadow-black/5 px-3 py-2 md:px-6 md:py-3 flex items-center gap-2 md:gap-8">
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
                        className="h-8 md:h-12 w-auto object-contain mix-blend-multiply relative z-10"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                </motion.div>

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
                    <a href="#problem" className="hover:text-primary transition-colors">El Problema</a>
                    <a href="#solution" className="hover:text-primary transition-colors">La Solución</a>
                    <a href="#pricing" className="hover:text-primary transition-colors">Obtener Oferta</a>
                </nav>

                {/* Snow Toggle Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onToggleSnow}
                    className={`relative p-2 rounded-full transition-all duration-300 ${isSnowEnabled
                        ? 'bg-blue-100 text-blue-600'
                        : 'bg-slate-100 text-slate-400'
                        }`}
                    title={isSnowEnabled ? "Desactivar nieve" : "Activar nieve"}
                >
                    <Snowflake
                        size={18}
                        className={`transition-all ${isSnowEnabled ? 'animate-spin-slow' : ''}`}
                        style={{ animationDuration: '3s' }}
                    />
                    {isSnowEnabled && (
                        <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"
                        />
                    )}
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' })}
                    className="custom-btn text-xs md:text-sm !px-4 md:!px-6 !py-1.5 md:!py-2 !min-w-[auto]"
                >
                    <span>Comenzar</span>
                </motion.button>
            </div>
        </header>
    );
};

export default Header;

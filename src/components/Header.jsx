import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-slate-200">
            <div className="container mx-auto px-4 h-24 flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative group cursor-pointer"
                >
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <motion.img
                        src="/logo.jpg"
                        alt="Protocolo de Raíz"
                        className="h-16 md:h-20 w-auto object-contain mix-blend-multiply relative z-10"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                </motion.div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative overflow-hidden bg-primary text-white px-8 py-3 rounded-full font-bold text-sm md:text-base shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] group"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        Quiero más información
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        >
                            →
                        </motion.span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                </motion.button>
            </div>
        </header>
    );
};

export default Header;

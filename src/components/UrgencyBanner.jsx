import React from 'react';
import { motion } from 'framer-motion';

const UrgencyBanner = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed top-0 left-0 right-0 z-[60] w-full bg-gradient-to-r from-red-600 via-red-500 to-orange-500 py-2.5 px-4 text-center overflow-hidden"
        >
            <motion.div
                className="absolute inset-0 bg-white/10"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <p className="text-white font-bold text-xs md:text-sm relative z-10">
                🚨 <span className="underline">ENERO 2026</span> — ¿Cuántos años llevas prometiendo "este año sí bajo de peso"?
                <span className="hidden md:inline"> Este es el momento de ACTUAR, no de seguir esperando.</span>
            </p>
        </motion.div>
    );
};

export default UrgencyBanner;

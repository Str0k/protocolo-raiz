import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show button after 3 seconds
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 3000);

        // Show tooltip after 8 seconds
        const tooltipTimer = setTimeout(() => {
            setShowTooltip(true);
            // Hide tooltip after 5 seconds
            setTimeout(() => setShowTooltip(false), 5000);
        }, 8000);

        return () => {
            clearTimeout(timer);
            clearTimeout(tooltipTimer);
        };
    }, []);

    const whatsappNumber = '18165006446'; // Real number
    const message = encodeURIComponent('Hola, tengo una duda sobre el Protocolo de Raíz');
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    if (!isVisible) return null;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-6 right-6 z-40"
        >
            {/* Tooltip */}
            <AnimatePresence>
                {showTooltip && (
                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="absolute bottom-full right-0 mb-3 w-48"
                    >
                        <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-3 relative">
                            <button
                                onClick={() => setShowTooltip(false)}
                                className="absolute -top-2 -right-2 bg-slate-200 rounded-full p-0.5 hover:bg-slate-300 transition-colors"
                            >
                                <X size={12} />
                            </button>
                            <p className="text-sm text-slate-700">
                                ¿Tienes dudas? <strong className="text-emerald-600">Escríbenos</strong>
                            </p>
                            {/* Arrow */}
                            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-slate-200 transform rotate-45" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* WhatsApp Button */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all transform hover:scale-105"
                onClick={() => {
                    if (window.fbq) window.fbq('track', 'Contact');
                }}
            >
                <MessageCircle size={26} className="text-white" fill="white" />

                {/* Pulse animation */}
                <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
            </a>
        </motion.div>
    );
};

export default WhatsAppButton;

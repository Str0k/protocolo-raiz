import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ExitIntentModal = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseLeave = (e) => {
            // Check if mouse left the top of the viewport (intention to change tab/close)
            if (e.clientY <= 0) {
                const hasSeen = sessionStorage.getItem('exitIntentShown');
                if (!hasSeen) {
                    setIsVisible(true);
                    sessionStorage.setItem('exitIntentShown', 'true');
                }
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);
        return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }, []);

    const closeModal = () => setIsVisible(false);

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={closeModal}
                    ></motion.div>

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden text-center p-8 border-4 border-yellow-400"
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="mb-6">
                            <span className="text-6xl mb-2 block">⚠️</span>
                            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-2">
                                ¡ESPERA!
                            </h2>
                            <p className="text-lg text-slate-600 font-medium">
                                ¿Seguro que quieres perder tu oportunidad?
                            </p>
                        </div>

                        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6 mb-8 relative overflow-hidden">
                            {/* Dashed border effect */}
                            <div className="absolute inset-0 border-2 border-yellow-400 border-dashed rounded-2xl m-1 pointer-events-none opacity-30"></div>

                            <p className="text-sm font-bold text-yellow-700 uppercase tracking-wider mb-2">
                                Usa el código: <span className="text-black bg-yellow-300 px-2 py-0.5 rounded ml-1">RESET10</span>
                            </p>
                            <p className="text-2xl font-bold text-slate-900 mb-2">
                                Para obtener $10 de descuento adicional
                            </p>
                            <div className="flex items-center justify-center gap-3 text-lg">
                                <span className="text-slate-400 line-through md:text-xl relative top-0.5">
                                    $17 USD
                                </span>
                                <span className="text-4xl font-extrabold text-[#10B981]">
                                    $7 USD
                                </span>
                            </div>
                            <p className="text-xs text-red-500 font-bold mt-3 animate-pulse">
                                ⏰ Este código expira en 5 minutos
                            </p>
                        </div>

                        <div className="space-y-3">
                            <a
                                href="https://pay.hotmart.com/C103224627H?checkoutMode=2&off=RESET10" // Assuming generic link structure, ordinarily we'd append coupon param if platform supports it
                                className="w-full block bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-lg font-bold py-4 rounded-xl shadow-lg hover:shadow-emerald-500/50 transition-all transform hover:scale-[1.02]"
                            >
                                SÍ, QUIERO MI DESCUENTO →
                            </a>
                            <button
                                onClick={closeModal}
                                className="text-sm text-slate-400 hover:text-slate-600 underline decoration-slate-300 underline-offset-4 transition-colors font-medium"
                            >
                                No gracias, prefiero pagar $17
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ExitIntentModal;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, Clock } from 'lucide-react';

const ExitIntentPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
    const [hasShown, setHasShown] = useState(false);

    useEffect(() => {
        // Check if already shown in this session
        const shown = sessionStorage.getItem('exitIntentShown');
        if (shown) {
            setHasShown(true);
            return;
        }

        // Desktop: mouse leave detection
        const handleMouseLeave = (e) => {
            if (e.clientY <= 0 && !hasShown) {
                showPopup();
            }
        };

        // Mobile: scroll up detection (rapid upward scroll)
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollDelta = lastScrollY - currentScrollY;

            // Rapid scroll up (> 50px) at top 20% of page
            if (scrollDelta > 50 && currentScrollY < window.innerHeight * 0.2 && !hasShown) {
                showPopup();
            }
            lastScrollY = currentScrollY;
        };

        const showPopup = () => {
            setIsVisible(true);
            setHasShown(true);
            sessionStorage.setItem('exitIntentShown', 'true');
        };

        document.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasShown]);

    // Countdown timer
    useEffect(() => {
        if (!isVisible || timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft(prev => Math.max(0, prev - 1));
        }, 1000);

        return () => clearInterval(timer);
    }, [isVisible, timeLeft]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items - center justify - center p - 4"
                >
                    {/* Backdrop */}
                    < motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Popup */}
                    < motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 md:p-10"
                    >
                        {/* Close Button */}
                        < button
                            onClick={handleClose}
                            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
                        >
                            <X size={18} className="text-slate-600" />
                        </button >

                        {/* Warning Icon */}
                        < div className="text-center mb-6" >
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="inline-block text-6xl mb-4"
                            >
                                ⚠️
                            </motion.div>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                                ¡ESPERA!
                            </h2>
                            <p className="text-slate-600 text-sm md:text-base">
                                ¿Seguro que quieres perder tu oportunidad?
                            </p>
                        </div >

                        {/* Offer Content */}
                        < div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 mb-6 border-2 border-primary/20" >
                            <div className="flex items-start gap-3 mb-4">
                                <Gift className="text-primary flex-shrink-0 mt-1" size={24} />
                                <div>
                                    <p className="font-bold text-slate-900 mb-2">
                                        Protocolo de Raíz + TODOS los bonos por $17 USD / $375 MXN
                                    </p>
                                    <p className="text-sm text-slate-700 mb-3">
                                        + Video exclusivo <strong>GRATIS</strong>: "Los 3 Errores que Mantienen tu Abdomen Inflamado Aunque Comas Bien" (valor $27)
                                    </p>
                                    <p className="text-xs text-primary font-bold">
                                        Solo si compras en los próximos 10 minutos
                                    </p>
                                </div>
                            </div>

                            {/* Countdown */}
                            <div className="bg-white rounded-xl p-4 flex items-center justify-center gap-3">
                                <Clock size={20} className="text-red-500" />
                                <motion.p
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                    className="text-3xl font-bold text-red-500 tabular-nums"
                                >
                                    {formatTime(timeLeft)}
                                </motion.p>
                            </div>
                        </div >

                        {/* CTAs */}
                        < div className="space-y-3" >
                            <a
                                href="#checkout"
                                className="block w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-emerald-700 text-white text-center font-bold py-4 px-6 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
                                onClick={() => {
                                    if (window.fbq) window.fbq('track', 'InitiateCheckout');
                                }}
                            >
                                Sí, quiero mi oferta completa ahora →
                            </a>

                            <button
                                onClick={handleClose}
                                className="block w-full text-slate-400 text-center text-sm hover:text-slate-600 transition-colors py-2"
                            >
                                No gracias, no me interesa desinflamar mi abdomen
                            </button>
                        </div >

                        {/* Bottom reassurance */}
                        < p className="text-xs text-center text-slate-500 mt-4" >
                            ✓ Garantía 7 días sin riesgo · ✓ Acceso inmediato
                        </p >
                    </motion.div >
                </motion.div >
            )}
        </AnimatePresence >
    );
};

export default ExitIntentPopup;

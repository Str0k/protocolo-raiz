import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, ShieldCheck, ArrowRight } from 'lucide-react';

const StickyBottomBar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isPastHalf, setIsPastHalf] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after 20% scroll
            const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
            setIsVisible(scrollPercent > 15);

            // Change CTA text after 50% scroll (user has seen enough)
            setIsPastHalf(scrollPercent > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => {
        if (isPastHalf) {
            // If past 50%, go directly to checkout
            const checkout = document.getElementById('checkout');
            if (checkout) {
                checkout.scrollIntoView({ behavior: 'smooth' });
            } else {
                // Fallback to pricing section
                const pricing = document.getElementById('pricing');
                if (pricing) pricing.scrollIntoView({ behavior: 'smooth' });
            }
            // Track checkout intent
            if (window.fbq) window.fbq('track', 'InitiateCheckout');
        } else {
            // If early in page, scroll down to see more
            window.scrollBy({
                top: window.innerHeight * 0.8,
                behavior: 'smooth'
            });
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-primary to-primary-dark shadow-2xl border-t border-white/20 z-50 md:hidden"
                >
                    <div className="flex items-center justify-between px-4 py-3 max-w-lg mx-auto">

                        {/* Left: Value Proposition */}
                        <div className="flex flex-col">
                            <span className="text-white text-sm font-bold leading-tight flex items-center gap-1.5">
                                {isPastHalf ? (
                                    <>
                                        <ShieldCheck size={14} className="text-emerald-300" />
                                        Garantía 7 días
                                    </>
                                ) : (
                                    <>
                                        <Zap size={14} className="text-yellow-300" />
                                        Desinflama en 7 días
                                    </>
                                )}
                            </span>
                            <span className="text-emerald-100 text-xs">
                                {isPastHalf ? 'Solo $17 USD · Sin riesgo' : 'Protocolo científico'}
                            </span>
                        </div>

                        {/* Right: Dynamic CTA Button */}
                        <button
                            onClick={handleClick}
                            className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full font-bold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all whitespace-nowrap ${isPastHalf
                                    ? 'bg-yellow-400 text-slate-900 animate-pulse'
                                    : 'bg-white text-primary'
                                }`}
                        >
                            {isPastHalf ? (
                                <>
                                    ¡Comprar por $17!
                                    <ArrowRight size={14} />
                                </>
                            ) : (
                                'Ver más'
                            )}
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default StickyBottomBar;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, ArrowRight } from 'lucide-react';

const StickyMobileCTA = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isPastHalf, setIsPastHalf] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Only show if StickyBottomBar is NOT visible (avoid duplicates)
            // This component appears on top, StickyBottomBar at bottom
            const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

            // Show in header area only when near top
            setIsVisible(scrollPercent < 15);
            setIsPastHalf(scrollPercent > 50);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => {
        // Scroll to checkout or pricing
        const checkout = document.getElementById('checkout');
        if (checkout) {
            checkout.scrollIntoView({ behavior: 'smooth' });
        } else {
            const pricing = document.getElementById('pricing');
            if (pricing) pricing.scrollIntoView({ behavior: 'smooth' });
        }
        if (window.fbq) window.fbq('track', 'InitiateCheckout');
    };

    // Don't render this component - let StickyBottomBar handle mobile CTAs
    // This prevents duplicate sticky bars
    return null;
};

export default StickyMobileCTA;

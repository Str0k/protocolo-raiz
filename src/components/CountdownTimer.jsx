import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

const CountdownTimer = ({ className = "" }) => {
    // Initial time: 2 hours in seconds
    const [timeLeft, setTimeLeft] = useState(2 * 60 * 60);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h.toString().padStart(2, '0')} : ${m.toString().padStart(2, '0')} : ${s.toString().padStart(2, '0')}`;
    };

    const scrollToCheckout = () => {
        const checkoutSection = document.getElementById('checkout');
        if (checkoutSection) {
            checkoutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div
            onClick={scrollToCheckout}
            className={`flex items-center gap-2 text-red-600 cursor-pointer hover:scale-105 transition-transform ${className}`}
        >
            <Timer size={20} className="animate-pulse" />
            <span className="font-medium uppercase tracking-wider text-sm">La oferta termina en:</span>
            <span className="font-mono font-bold text-xl tracking-widest tabular-nums">
                {formatTime(timeLeft)}
            </span>
        </div>
    );
};

export default CountdownTimer;

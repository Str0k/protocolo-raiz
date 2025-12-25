import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

const CountdownTimer = ({ className = "" }) => {
    const DURATION_HOURS = 2; // Duration of the timer in hours
    const RESET_WINDOW_HOURS = 12; // When to fully reset the timer cycle

    // Initialize state properly
    const [timeLeft, setTimeLeft] = useState(DURATION_HOURS * 60 * 60);

    useEffect(() => {
        const STORAGE_KEY = 'offer_countdown_data';

        const initTimer = () => {
            const now = Date.now();
            const savedData = localStorage.getItem(STORAGE_KEY);

            let targetTime;

            if (savedData) {
                const { target, createdAt } = JSON.parse(savedData);
                const ageHours = (now - createdAt) / (1000 * 60 * 60);

                // If existing timer is valid (within 12h reset window)
                if (ageHours < RESET_WINDOW_HOURS) {
                    targetTime = target;
                }
            }

            // If no valid timer exists, create new one
            if (!targetTime) {
                targetTime = now + (DURATION_HOURS * 60 * 60 * 1000);
                localStorage.setItem(STORAGE_KEY, JSON.stringify({
                    target: targetTime,
                    createdAt: now
                }));
            }

            return targetTime;
        };

        const targetTime = initTimer();

        const updateTimer = () => {
            const now = Date.now();
            const difference = Math.floor((targetTime - now) / 1000);

            if (difference > 0) {
                setTimeLeft(difference);
            } else {
                setTimeLeft(0);
                // Optional: Force reset if we want it to loop immediately after 0
                // but usually "expired" means expired until the 12h window passes.
            }
        };

        // Run immediately to avoid initial flash of wrong time
        updateTimer();

        const timer = setInterval(updateTimer, 1000);

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

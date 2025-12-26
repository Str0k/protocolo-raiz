'use client';
import { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({ hours: 72, minutes: 0, seconds: 0 });

    useEffect(() => {
        // Only run on client-side to match the 'use client' directive context
        const storedEndTime = localStorage.getItem('countdownEndTime');
        let endTime;

        if (storedEndTime) {
            endTime = parseInt(storedEndTime);
        } else {
            endTime = Date.now() + (72 * 60 * 60 * 1000);
            localStorage.setItem('countdownEndTime', endTime.toString());
        }

        const updateTimer = () => {
            const now = Date.now();
            const difference = endTime - now;

            if (difference <= 0) {
                // Reset timer if expired
                const newEndTime = Date.now() + (72 * 60 * 60 * 1000);
                localStorage.setItem('countdownEndTime', newEndTime.toString());
                endTime = newEndTime;
                return;
            }

            const hours = Math.floor(difference / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft({ hours, minutes, seconds });
        };

        updateTimer(); // Initial call
        const timer = setInterval(updateTimer, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatNumber = (num) => String(num).padStart(2, '0');

    return (
        <div className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 rounded-xl p-6 mb-8 max-w-lg mx-auto shadow-2xl">
            <p className="text-white text-center text-sm md:text-base font-semibold uppercase tracking-wider mb-3">
                ⚠️ Esta oferta termina en:
            </p>
            <div className="flex justify-center items-center gap-3 md:gap-6">
                <div className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 md:p-4 min-w-[70px] md:min-w-[90px]">
                        <span className="text-white font-bold text-4xl md:text-5xl block leading-none">
                            {formatNumber(timeLeft.hours)}
                        </span>
                    </div>
                    <span className="text-white text-xs md:text-sm font-medium uppercase tracking-wider mt-2 block">
                        Horas
                    </span>
                </div>
                <span className="text-white text-3xl md:text-4xl font-bold">:</span>
                <div className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 md:p-4 min-w-[70px] md:min-w-[90px]">
                        <span className="text-white font-bold text-4xl md:text-5xl block leading-none">
                            {formatNumber(timeLeft.minutes)}
                        </span>
                    </div>
                    <span className="text-white text-xs md:text-sm font-medium uppercase tracking-wider mt-2 block">
                        Minutos
                    </span>
                </div>
                <span className="text-white text-3xl md:text-4xl font-bold">:</span>
                <div className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 md:p-4 min-w-[70px] md:min-w-[90px]">
                        <span className="text-white font-bold text-4xl md:text-5xl block leading-none">
                            {formatNumber(timeLeft.seconds)}
                        </span>
                    </div>
                    <span className="text-white text-xs md:text-sm font-medium uppercase tracking-wider mt-2 block">
                        Segundos
                    </span>
                </div>
            </div>
            <p className="text-white text-center text-xs md:text-sm mt-4 opacity-90">
                🔥 Después vuelve a $97 USD
            </p>
        </div>
    );
};

export default CountdownTimer;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye } from 'lucide-react';

const LiveViewerCount = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [viewerCount, setViewerCount] = useState(0);

    useEffect(() => {
        // Show after 13 seconds
        const showTimer = setTimeout(() => {
            setIsVisible(true);
        }, 13000);

        // Get or generate viewer count
        const initializeViewerCount = () => {
            const stored = localStorage.getItem('viewerCountData');

            if (stored) {
                const data = JSON.parse(stored);
                const now = Date.now();
                const threeHours = 3 * 60 * 60 * 1000; // 3 hours in milliseconds

                // Check if 3 hours have passed
                if (now - data.timestamp < threeHours) {
                    // Use stored count
                    setViewerCount(data.count);
                } else {
                    // Generate new random count (3 hours passed)
                    const newCount = generateRandomCount();
                    setViewerCount(newCount);
                    localStorage.setItem('viewerCountData', JSON.stringify({
                        count: newCount,
                        timestamp: now
                    }));
                }
            } else {
                // First time - generate new count
                const newCount = generateRandomCount();
                setViewerCount(newCount);
                localStorage.setItem('viewerCountData', JSON.stringify({
                    count: newCount,
                    timestamp: Date.now()
                }));
            }
        };

        initializeViewerCount();

        return () => clearTimeout(showTimer);
    }, []);

    const generateRandomCount = () => {
        // Random number between 23 and 87
        return Math.floor(Math.random() * (87 - 23 + 1)) + 23;
    };

    // Simulate slight fluctuations every 15 seconds
    useEffect(() => {
        if (!isVisible) return;

        const fluctuateInterval = setInterval(() => {
            setViewerCount(prev => {
                // Randomly add or subtract 1-3
                const change = Math.floor(Math.random() * 3) + 1;
                const direction = Math.random() > 0.5 ? 1 : -1;
                const newCount = prev + (change * direction);

                // Keep within reasonable bounds (20-100)
                return Math.max(20, Math.min(100, newCount));
            });
        }, 15000); // Every 15 seconds

        return () => clearInterval(fluctuateInterval);
    }, [isVisible]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 100, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                    className="fixed top-1/3 right-0 z-40 hidden md:block"
                >
                    <div className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-l-2xl border-l-4 border-primary px-5 py-4 min-w-[200px]">
                        <div className="flex items-center gap-3">
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-3 h-3 bg-green-500 rounded-full relative"
                            >
                                <span className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></span>
                            </motion.div>

                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <Eye size={16} className="text-slate-600" />
                                    <span className="text-xs text-slate-600 font-medium">
                                        Viendo ahora
                                    </span>
                                </div>
                                <motion.div
                                    key={viewerCount}
                                    initial={{ scale: 1.2 }}
                                    animate={{ scale: 1 }}
                                    className="text-2xl font-bold text-primary"
                                >
                                    {viewerCount}
                                </motion.div>
                                <p className="text-[10px] text-slate-500">
                                    personas en línea
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LiveViewerCount;

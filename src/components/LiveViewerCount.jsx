import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye } from 'lucide-react';

const LiveViewerCount = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [viewerCount, setViewerCount] = useState(0);

    useEffect(() => {
        // Show after 3 seconds (faster, less delay)
        const showTimer = setTimeout(() => {
            setIsVisible(true);
        }, 3000);

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
        // Random number between 15 and 45 (más realista)
        return Math.floor(Math.random() * (45 - 15 + 1)) + 15;
    };

    // Simulate slight fluctuations every 12 seconds
    useEffect(() => {
        if (!isVisible) return;

        const fluctuateInterval = setInterval(() => {
            setViewerCount(prev => {
                // Randomly add or subtract 1-2 (más sutil)
                const change = Math.floor(Math.random() * 2) + 1;
                const direction = Math.random() > 0.5 ? 1 : -1;
                const newCount = prev + (change * direction);

                // Keep within reasonable bounds (12-50)
                return Math.max(12, Math.min(50, newCount));
            });
        }, 12000); // Every 12 seconds

        return () => clearInterval(fluctuateInterval);
    }, [isVisible]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 100, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className="fixed top-24 md:top-32 right-4 z-40"
                >
                    {/* Desktop Version - Más sutil */}
                    <div className="hidden md:block">
                        <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl border border-emerald-100/50 px-4 py-3 min-w-[160px]">
                            <div className="flex items-center gap-3">
                                {/* Pulse indicator */}
                                <motion.div
                                    animate={{ scale: [1, 1.15, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-2 h-2 bg-emerald-500 rounded-full relative"
                                >
                                    <span className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-60"></span>
                                </motion.div>

                                <div className="flex-1">
                                    <div className="flex items-center gap-1.5 mb-0.5">
                                        <Eye size={14} className="text-slate-500" />
                                        <span className="text-[11px] text-slate-600 font-medium">
                                            En línea
                                        </span>
                                    </div>
                                    <motion.div
                                        key={viewerCount}
                                        initial={{ scale: 1.15, opacity: 0.7 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-xl font-bold text-emerald-600"
                                    >
                                        {viewerCount}
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Version - Más compacto */}
                    <div className="block md:hidden">
                        <div className="bg-white/90 backdrop-blur-md shadow-lg rounded-full border border-emerald-100/50 px-3 py-2 flex items-center gap-2">
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-1.5 h-1.5 bg-emerald-500 rounded-full relative"
                            >
                                <span className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-60"></span>
                            </motion.div>

                            <Eye size={12} className="text-slate-500" />

                            <motion.span
                                key={viewerCount}
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                className="text-sm font-bold text-emerald-600"
                            >
                                {viewerCount}
                            </motion.span>

                            <span className="text-[10px] text-slate-500 font-medium">
                                viendo
                            </span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LiveViewerCount;

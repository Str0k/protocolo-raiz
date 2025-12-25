import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye } from 'lucide-react';

const ViewerCount = () => {
    const [count, setCount] = useState(null);

    useEffect(() => {
        const STORAGE_KEY = 'viewer_count_data';
        const EXPIRY_TIME = 12 * 60 * 60 * 1000; // 12 hours

        const getViewerCount = () => {
            try {
                const savedData = localStorage.getItem(STORAGE_KEY);

                if (savedData) {
                    const { value, timestamp } = JSON.parse(savedData);
                    const isValid = (Date.now() - timestamp) < EXPIRY_TIME;

                    if (isValid) {
                        setCount(value);
                        return;
                    }
                }

                // Generate new random number between 15 and 98 to look realistic but < 100
                const newCount = Math.floor(Math.random() * (98 - 15 + 1)) + 15;

                localStorage.setItem(STORAGE_KEY, JSON.stringify({
                    value: newCount,
                    timestamp: Date.now()
                }));
                setCount(newCount);

            } catch (error) {
                console.error('Error getting viewer count:', error);
                setCount(27); // Default fallback
            }
        };

        getViewerCount();
    }, []);

    if (count === null) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                className="fixed top-0 left-0 w-full z-[60] bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md overflow-hidden"
            >
                <div className="container mx-auto px-4 py-2 flex items-center justify-center gap-2 text-xs md:text-sm font-medium">
                    <Eye className="w-4 h-4 animate-pulse text-white/90" />
                    <p className="tracking-wide">
                        <span className="font-bold tabular-nums">{count}</span> personas están viendo esto ahora.
                    </p>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ViewerCount;

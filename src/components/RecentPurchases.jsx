import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, ShoppingBag } from 'lucide-react';

const RecentPurchases = () => {
    const [count, setCount] = useState(null);

    useEffect(() => {
        const STORAGE_KEY = 'recent_purchases_data';
        const EXPIRY_TIME = 12 * 60 * 60 * 1000; // 12 hours

        const getPurchaseCount = () => {
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

                // Generate new random number between 18 and 45 to look realistic
                const newCount = Math.floor(Math.random() * (45 - 18 + 1)) + 18;

                localStorage.setItem(STORAGE_KEY, JSON.stringify({
                    value: newCount,
                    timestamp: Date.now()
                }));
                setCount(newCount);

            } catch (error) {
                console.error('Error getting purchase count:', error);
                setCount(23); // Default fallback
            }
        };

        getPurchaseCount();
    }, []);

    if (count === null) return null;

    return (
        <div className="w-full max-w-4xl mx-auto px-4 mb-2 mt-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center justify-center gap-3 text-green-800 shadow-sm"
            >
                <div className="bg-green-100 p-2 rounded-full hidden md:block">
                    <TrendingUp size={20} className="text-green-600" />
                </div>
                <p className="text-sm md:text-base font-medium text-center">
                    <span className="inline-block animate-pulse mr-2">🔥</span>
                    <span className="font-bold">{count} personas</span> adquirieron el Protocolo en las últimas 24 horas.
                </p>
            </motion.div>
        </div>
    );
};

export default RecentPurchases;

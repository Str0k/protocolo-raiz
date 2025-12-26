import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Eye } from 'lucide-react';

const FomoNotifications = () => {
    const [currentNotification, setCurrentNotification] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    const notifications = [
        {
            type: 'purchase',
            name: 'María C.',
            city: 'CDMX',
            action: 'comenzó su reset',
            timeAgo: '4 min',
            icon: ShoppingBag,
        },
        {
            type: 'purchase',
            name: 'Lucía R.',
            city: 'Guadalajara',
            action: 'consiguió su protocolo',
            timeAgo: '12 min',
            icon: ShoppingBag,
        },
        {
            type: 'purchase',
            name: 'Ana M.',
            city: 'Monterrey',
            action: 'inició su transformación',
            timeAgo: '8 min',
            icon: ShoppingBag,
        },
        {
            type: 'viewing',
            count: Math.floor(Math.random() * 5) + 6,
            action: 'personas viendo esta página ahora',
            icon: Eye,
        },
        {
            type: 'purchase',
            name: 'Carmen S.',
            city: 'Puebla',
            action: 'comenzó su reset',
            timeAgo: '15 min',
            icon: ShoppingBag,
        },
        {
            type: 'purchase',
            name: 'Sofia L.',
            city: 'Querétaro',
            action: 'consiguió su protocolo',
            timeAgo: '6 min',
            icon: ShoppingBag,
        },
    ];

    useEffect(() => {
        const showNotification = () => {
            // Random notification
            const randomNotif = notifications[Math.floor(Math.random() * notifications.length)];

            // Update viewing count if it's a viewing notification
            if (randomNotif.type === 'viewing') {
                randomNotif.count = Math.floor(Math.random() * 5) + 6;
            }

            setCurrentNotification(randomNotif);
            setIsVisible(true);

            // Hide after 4 seconds
            setTimeout(() => {
                setIsVisible(false);
            }, 4000);
        };

        // Initial delay before first notification
        const initialDelay = setTimeout(() => {
            showNotification();

            // Set recurring interval (8-15 seconds)
            const interval = setInterval(() => {
                showNotification();
            }, Math.random() * 7000 + 8000); // Random between 8-15s

            return () => clearInterval(interval);
        }, 5000);

        return () => clearTimeout(initialDelay);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && currentNotification && (
                <motion.div
                    initial={{ x: -400, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 400, opacity: 0 }}
                    transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 25,
                        mass: 0.8
                    }}
                    className="fixed bottom-24 md:bottom-8 left-4 z-50 max-w-sm"
                >
                    <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 flex items-center gap-3">

                        {/* Avatar Circle */}
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center">
                                {currentNotification.type === 'purchase' ? (
                                    <span className="text-white text-lg font-bold">
                                        {currentNotification.name.charAt(0)}
                                    </span>
                                ) : (
                                    <Eye size={20} className="text-white" />
                                )}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                            {currentNotification.type === 'purchase' ? (
                                <>
                                    <p className="text-sm font-bold text-slate-900 truncate">
                                        {currentNotification.name} de {currentNotification.city}
                                    </p>
                                    <p className="text-xs text-slate-600">
                                        {currentNotification.action}
                                    </p>
                                    <p className="text-xs text-slate-400 mt-0.5">
                                        hace {currentNotification.timeAgo}
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p className="text-sm font-bold text-primary">
                                        {currentNotification.count} {currentNotification.action}
                                    </p>
                                    <p className="text-xs text-slate-600">
                                        En tiempo real
                                    </p>
                                </>
                            )}
                        </div>

                        {/* Pulse Indicator */}
                        <div className="flex-shrink-0 relative">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FomoNotifications;

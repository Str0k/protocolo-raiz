import React from 'react';
import { motion } from 'framer-motion';
import { Users, Star, ShieldCheck, MessageCircle } from 'lucide-react';

const SocialProofStrip = () => {
    const stats = [
        { icon: <Users size={20} />, value: '1,500+', label: 'Mujeres transformadas' },
        { icon: <Star size={20} />, value: '4.9/5', label: 'Calificación' },
        { icon: <ShieldCheck size={20} />, value: '100%', label: 'Garantía' },
        { icon: <MessageCircle size={20} />, value: '24/7', label: 'Soporte' },
    ];

    return (
        <section className="py-6 bg-slate-50 border-y border-slate-200">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-wrap justify-center gap-8 md:gap-12"
                >
                    {stats.map((stat, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <div className="text-emerald-600">
                                {stat.icon}
                            </div>
                            <div>
                                <p className="font-bold text-slate-900 text-lg">{stat.value}</p>
                                <p className="text-xs text-slate-500">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SocialProofStrip;

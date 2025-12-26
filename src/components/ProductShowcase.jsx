import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Download, RefreshCw } from 'lucide-react';

const ProductShowcase = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                        Todo lo que necesitas para tu Transformación
                    </h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                        No es solo un libro. Es un <span className="text-orange-500 font-bold">arsenal completo</span> diseñado para rescatar tu salud intestinal.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative max-w-4xl mx-auto mb-16"
                >
                    {/* Background Decorative Blur */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-green-50 to-orange-50 blur-3xl -z-10 rounded-full opacity-50"></div>

                    {/* Main Image */}
                    <img
                        src="/bundle-green.jpg"
                        alt="Protocolo de Raíz Completo"
                        className="w-full h-auto drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                    />
                </motion.div>

                <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                    {[
                        { icon: <Download size={20} />, text: "Acceso Digital Inmediato" },
                        { icon: <Smartphone size={20} />, text: "Compatible con todos los dispositivos" },
                        { icon: <RefreshCw size={20} />, text: "Actualizaciones de por vida" }
                    ].map((badge, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (index * 0.1) }}
                            className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 text-sm font-semibold text-slate-600 shadow-sm"
                        >
                            <span className="text-[#10B981]">{badge.icon}</span>
                            <span>{badge.text}</span>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ProductShowcase;

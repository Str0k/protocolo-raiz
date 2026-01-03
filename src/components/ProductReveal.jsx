import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ShoppingCart, Utensils, Users, Gift, Shield, Check, Smartphone, Clock, Infinity } from 'lucide-react';

const ProductReveal = () => {
    const deliverables = [
        { icon: <FileText size={18} />, text: "Plan de alimentación día por día (exactamente qué comer)" },
        { icon: <ShoppingCart size={18} />, text: "Lista de compras lista para Walmart, Soriana o Chedraui" },
        { icon: <Utensils size={18} />, text: "+30 recetas anti-inflamatorias de 15 minutos" },
        { icon: <Users size={18} />, text: "Guía para cenas, fiestas y restaurantes" },
        { icon: <Gift size={18} />, text: "BONUS: Acceso al grupo privado de WhatsApp" },
        { icon: <Shield size={18} />, text: "BONUS: Guía Escudo Anti-Rebote" },
    ];

    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white">
            <div className="container mx-auto px-4 max-w-5xl">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">
                        ¿Qué recibes hoy?
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Todo lo que necesitas para desinflamar tu abdomen en 7 días, paso a paso
                    </p>
                </motion.div>

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-8 items-center">

                    {/* Left: Product Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="order-2 lg:order-1"
                    >
                        <div className="relative">
                            <img
                                src="/bundle-gold.jpg"
                                alt="Protocolo de Raíz - Contenido completo"
                                className="w-full rounded-2xl shadow-xl"
                            />

                            {/* Format Badges */}
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                                <div className="bg-white shadow-lg rounded-xl px-4 py-2 flex items-center gap-2">
                                    <Smartphone size={16} className="text-emerald-600" />
                                    <span className="text-sm font-medium text-slate-700">100% Digital</span>
                                </div>
                                <div className="bg-white shadow-lg rounded-xl px-4 py-2 flex items-center gap-2">
                                    <Clock size={16} className="text-emerald-600" />
                                    <span className="text-sm font-medium text-slate-700">Acceso inmediato</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Deliverables List */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="order-1 lg:order-2"
                    >
                        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <Gift className="text-emerald-600" size={24} />
                                Incluye todo esto:
                            </h3>

                            <div className="space-y-4">
                                {deliverables.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                                        className="flex items-start gap-3 group"
                                    >
                                        <div className="bg-emerald-100 text-emerald-600 p-2 rounded-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                            {item.icon}
                                        </div>
                                        <span className="text-slate-700 pt-1">{item.text}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Forever Access */}
                            <div className="mt-8 pt-6 border-t border-slate-100">
                                <div className="flex items-center gap-3 text-slate-600">
                                    <Infinity size={20} className="text-emerald-600" />
                                    <span className="font-medium">Acceso de por vida • Sin pagos recurrentes</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-16"
                >
                    <a
                        href="#checkout"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-4 px-10 rounded-2xl shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all transform hover:scale-[1.02]"
                        onClick={() => {
                            if (window.fbq) window.fbq('track', 'InitiateCheckout');
                        }}
                    >
                        <span>QUIERO TODO ESTO POR SOLO $17 USD</span>
                        <Check size={20} />
                    </a>
                    <p className="text-sm text-slate-500 mt-3">
                        ≈ $375 MXN • Menos que 2 cafés de Starbucks
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default ProductReveal;

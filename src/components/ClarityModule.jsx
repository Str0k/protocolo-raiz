import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Clock, Infinity, Check, FileText, ShoppingCart, Utensils, Users, Gift, Shield } from 'lucide-react';

const ClarityModule = () => {
    const deliverables = [
        { icon: <FileText size={20} />, text: "Plan de alimentación día por día (exactamente qué comer y cuándo)" },
        { icon: <ShoppingCart size={20} />, text: "Lista de compras lista para imprimir o llevar en tu celular" },
        { icon: <Utensils size={20} />, text: "Más de 30 recetas anti-inflamatorias de 15 minutos" },
        { icon: <Users size={20} />, text: "Guía de situaciones sociales (cenas, fiestas, restaurantes)" },
        { icon: <Gift size={20} />, text: "BONUS: Acceso al grupo privado de WhatsApp con soporte real" },
        { icon: <Shield size={20} />, text: "BONUS: Guía Escudo Anti-Rebote para mantener resultados" },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        ¿Qué es exactamente el Protocolo de Raíz?
                    </h2>
                </motion.div>

                {/* Main Explanation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-slate-50 rounded-3xl p-8 md:p-12 mb-12"
                >
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        El Protocolo de Raíz es un <strong className="text-primary">sistema digital de 7 días</strong> diseñado específicamente para desinflamar tu abdomen desde la raíz del problema: tu intestino.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        <span className="text-red-500 font-medium">No es otra dieta.</span>{' '}
                        <span className="text-red-500 font-medium">No es un detox mágico.</span>{' '}
                        <span className="text-red-500 font-medium">No es un plan de ejercicio.</span>
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        Es un protocolo paso a paso que ataca la <strong className="text-secondary">inflamación intestinal</strong>—la verdadera razón por la que tu abdomen parece 3 meses de embarazo aunque no hayas comido nada.
                    </p>
                </motion.div>

                {/* Format & Access Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid md:grid-cols-3 gap-6 mb-12"
                >
                    <div className="bg-emerald-50 rounded-2xl p-6 text-center border border-emerald-100">
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Smartphone className="text-primary" size={28} />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">100% Digital</h3>
                        <p className="text-slate-600 text-sm">Acceso inmediato desde tu celular</p>
                    </div>

                    <div className="bg-emerald-50 rounded-2xl p-6 text-center border border-emerald-100">
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Clock className="text-primary" size={28} />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">Resultados en 7 días</h3>
                        <p className="text-slate-600 text-sm">Sin esperas interminables</p>
                    </div>

                    <div className="bg-emerald-50 rounded-2xl p-6 text-center border border-emerald-100">
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Infinity className="text-primary" size={28} />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">Tuyo para siempre</h3>
                        <p className="text-slate-600 text-sm">Sin membresías ni pagos recurrentes</p>
                    </div>
                </motion.div>

                {/* Deliverables List */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-gradient-to-br from-primary/5 to-emerald-50 rounded-3xl p-8 md:p-10 border border-primary/10"
                >
                    <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
                        Lo que recibes hoy:
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {deliverables.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm"
                            >
                                <div className="text-primary mt-0.5">{item.icon}</div>
                                <span className="text-slate-700 text-sm leading-relaxed">{item.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Differentiator Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-12 text-center"
                >
                    <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-2xl p-6 md:p-8 text-left">
                        <p className="text-slate-700 leading-relaxed">
                            <strong className="text-amber-700">Esto NO es otra dieta que abandonarás en 3 días.</strong>
                            <br /><br />
                            Es un protocolo de reset intestinal con instrucciones claras, recetas reales y apoyo humano.
                            Está diseñado para <strong>mujeres reales, con vidas reales</strong>, que no tienen 2 horas para cocinar.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default ClarityModule;

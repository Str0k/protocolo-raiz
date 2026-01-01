import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, ShoppingCart, Utensils, Ruler, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            number: 1,
            icon: <Smartphone size={28} />,
            title: 'Compra con 1 clic',
            subtitle: '(menos de 2 minutos)',
            description: 'Recibes acceso inmediato por email y WhatsApp. Descargas todo en tu celular en segundos.',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            number: 2,
            icon: <ShoppingCart size={28} />,
            title: 'Imprime tu lista y llena tu refrigerador',
            subtitle: '(30 minutos)',
            description: 'La lista está organizada por pasillo. Una sola compra de supermercado y tienes todo para los 7 días.',
            color: 'from-purple-500 to-violet-500'
        },
        {
            number: 3,
            icon: <Utensils size={28} />,
            title: 'Sigue el plan día por día',
            subtitle: '(15-20 min de cocina)',
            description: 'Cada día te dice exactamente qué preparar. Sin adivinar. Sin improvisar. Solo sigue las instrucciones.',
            color: 'from-orange-500 to-amber-500'
        },
        {
            number: 4,
            icon: <Ruler size={28} />,
            title: 'Mide tu cintura el día 7',
            subtitle: '(el momento wow)',
            description: 'Compara con el día 1. La mayoría de mujeres pierden de 3 a 7 cm. Algunas hasta 10 cm.',
            color: 'from-emerald-500 to-green-500'
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
            <div className="container mx-auto px-4 max-w-5xl">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                        Así de simple es empezar hoy
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        4 pasos. Sin complicaciones. Sin confusión.
                    </p>
                </motion.div>

                {/* Steps Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative"
                        >
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 h-full hover:shadow-xl transition-shadow">
                                {/* Step Number */}
                                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-lg mb-4`}>
                                    {step.number}
                                </div>

                                {/* Icon */}
                                <div className="text-slate-600 mb-3">
                                    {step.icon}
                                </div>

                                {/* Title */}
                                <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                                <p className="text-primary text-sm font-medium mb-3">{step.subtitle}</p>

                                {/* Description */}
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>

                            {/* Arrow connector (hidden on mobile, shown on desktop) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                                    <ArrowRight className="text-slate-300" size={20} />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Reassurance Box */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-emerald-50 rounded-2xl p-6 md:p-8 border border-emerald-100 max-w-2xl mx-auto text-center"
                >
                    <p className="text-lg text-slate-700 leading-relaxed">
                        💡 <strong>No necesitas ser una chef experta.</strong>
                        <br />
                        No necesitas 2 horas en la cocina.
                        <br />
                        No necesitas ingredientes raros.
                        <br /><br />
                        <span className="text-primary font-medium">
                            Si sabes hervir agua y seguir instrucciones simples, puedes hacer esto.
                        </span>
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default HowItWorks;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: '¿Cuánto tiempo tengo que dedicarle al día?',
            answer: 'Las recetas toman máximo 15-20 minutos. El plan está diseñado para mujeres con vidas ocupadas. Lo puedes seguir desde tu celular mientras cocinas o compras.'
        },
        {
            question: '¿Por qué esto funcionaría si nada más me ha funcionado?',
            answer: 'Porque esto no es una dieta de calorías. Trabaja directamente sobre la inflamación intestinal—la raíz real del problema. Es como finalmente atacar la causa, no solo los síntomas.'
        },
        {
            question: '¿Funciona si tengo intestino sensible o colon irritable?',
            answer: 'Está diseñado precisamente para intestinos sensibles. Eliminamos los alimentos irritantes y los reintroducimos gradualmente. Más del 60% de nuestras clientas tienen intestino sensible.'
        },
        {
            question: '¿Qué pasa después de los 7 días?',
            answer: 'Incluye la Guía Escudo Anti-Rebote que te enseña exactamente cómo mantener los resultados. No es un reset temporal—es un cambio de hábitos permanente.'
        },
        {
            question: '¿Cómo recibo el protocolo?',
            answer: 'Inmediatamente después del pago, recibes acceso por email y WhatsApp. Descargas todo en tu celular en menos de 2 minutos.'
        },
        {
            question: '¿La garantía es real?',
            answer: 'Sí, 100% real. Tienes 7 días para probar el protocolo. Si no ves resultados, te devolvemos cada centavo. Sin preguntas. Proceso automático en 24-48 horas.'
        }
    ];

    return (
        <section className="py-16 md:py-20 bg-slate-50">
            <div className="container mx-auto px-4 max-w-3xl">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <div className="inline-flex items-center gap-2 text-slate-500 mb-4">
                        <HelpCircle size={20} />
                        <span className="font-medium">Preguntas frecuentes</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                        ¿Tienes dudas?
                    </h2>
                </motion.div>

                {/* FAQ Accordion */}
                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-emerald-200 transition-colors shadow-sm"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left hover:bg-slate-50 transition-colors"
                            >
                                <span className="font-medium text-slate-800">
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="shrink-0"
                                >
                                    <ChevronDown size={18} className="text-slate-400" />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="px-5 pb-4 pt-0">
                                            <p className="text-slate-600 leading-relaxed text-sm">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-10"
                >
                    <a
                        href="#checkout"
                        className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-xl transition-colors"
                    >
                        QUIERO COMENZAR AHORA →
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default FAQ;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'No tengo tiempo para cocinar complicado, ¿igual puedo hacerlo?',
            answer: 'Todas las recetas están diseñadas para completarse en 15-20 minutos máximo. No necesitas técnicas avanzadas ni ingredientes exóticos. Incluye lista de compra lista y menú pre-planeado día por día. Si esto resuena contigo, este protocolo es para ti.'
        },
        {
            question: 'Ya probé de todo (keto, ayuno, detox) y nada me funciona. ¿Qué hace diferente este protocolo?',
            answer: 'Este protocolo no se enfoca en calorías ni macros. Trabaja a nivel de inflamación intestinal y microbiota, que es la raíz del 80% de los problemas de peso y energía. Si tu intestino está inflamado, ninguna dieta funcionará a largo plazo. Por eso ves resultados en 5-7 días y sin efecto rebote.'
        },
        {
            question: 'Tengo intestino sensible o colon irritable, ¿es seguro para mí?',
            answer: 'El protocolo está diseñado precisamente para intestinos sensibles. Eliminamos los alimentos irritantes típicos y reintroducimos de forma gradual. Más del 60% de nuestras clientas tienen diagnóstico de intestino irritable y reportan mejora significativa en gases, hinchazón y regularidad.'
        },
        {
            question: '¿Qué pasa después de los 7 días? ¿Voy a recuperar todo lo perdido?',
            answer: 'Incluye la Guía Escudo Anti-Rebote que te enseña exactamente cómo comer después del reset para mantener resultados de por vida. No es una dieta temporal, es un reset permanente de tu sistema digestivo. Aprenderás a identificar qué alimentos te inflaman y cuáles te sanan.'
        },
        {
            question: '¿Funciona si soy vegetariana o vegana?',
            answer: 'Sí, completamente. El protocolo incluye adaptaciones específicas y sustituciones para vegetarianas, veganas y otras restricciones alimentarias. Los principios de desinflamación intestinal funcionan igual con fuentes vegetales.'
        },
        {
            question: '¿Necesito suplementos caros o productos especiales?',
            answer: 'No. Todo se consigue en cualquier supermercado normal (Walmart, Soriana, Chedraui, etc.). La lista de compra incluye marcas accesibles y alternativas económicas. El protocolo está diseñado para ser realista y sostenible, no para venderte productos extra.'
        },
        {
            question: '¿Cómo recibo el protocolo después de pagar?',
            answer: 'Acceso inmediato por email y WhatsApp. Descargas todo en tu celular en menos de 2 minutos. El formato está diseñado para móvil, así que puedes consultarlo mientras compras, cocinas o comes fuera. Sin esperas, sin complicaciones.'
        },
        {
            question: '¿Realmente puedo pedir reembolso si no veo resultados?',
            answer: 'Sí, sin letra chica. Tienes 7 días completos para probar el protocolo. Si no ves reducción visible en tu abdomen ni mejora en tu energía, te devolvemos el 100% de tu dinero. Sin preguntas incómodas. Proceso automático en 24-48 horas. Asumimos todo el riesgo, tú solo decides si quieres probar.'
        }
    ];

    return (
        <section className="py-20 md:py-24 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                        Preguntas frecuentes
                    </h2>
                    <p className="text-lg text-slate-600">
                        Si tú lo has pensado, probablemente ya nos lo preguntaron.
                    </p>
                </motion.div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:border-primary/30 transition-colors"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left hover:bg-slate-100/50 transition-colors"
                            >
                                <span className="font-semibold text-slate-900 leading-relaxed flex-1">
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex-shrink-0 mt-1"
                                >
                                    <ChevronDown size={20} className="text-primary" />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <div className="px-6 pb-5 pt-2">
                                            <p className="text-slate-600 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Reassurance */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <p className="text-slate-500 text-sm">
                        ¿Tienes otra duda? Escríbenos por WhatsApp y te respondemos en menos de 2 horas.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;

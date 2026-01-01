import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'No tengo tiempo para cocinar complicado. ¿Igual puedo hacerlo?',
            answer: 'Todas las recetas toman 15-20 minutos máximo. No necesitas ser chef. Los ingredientes están en cualquier supermercado (Walmart, Soriana, Chedraui). La lista de compras ya está hecha. Solo sigues el plan.'
        },
        {
            question: 'Ya probé keto, ayuno, detox... nada me funciona. ¿Por qué esto sería diferente?',
            answer: 'Porque esto no es una dieta de calorías. Trabaja a nivel de inflamación intestinal—la raíz del problema. Si tu intestino está inflamado, ninguna dieta funcionará a largo plazo. Por eso ves resultados visibles en 5-7 días.'
        },
        {
            question: 'Tengo intestino sensible o colon irritable. ¿Es seguro para mí?',
            answer: 'Está diseñado precisamente para intestinos sensibles. Eliminamos los alimentos irritantes y reintroducimos gradualmente. Más del 60% de nuestras clientas tienen intestino sensible y reportan mejora significativa.'
        },
        {
            question: '¿Qué pasa después de los 7 días? ¿Voy a recuperar todo?',
            answer: 'No si sigues la Guía Escudo Anti-Rebote (incluida gratis). Te enseña exactamente qué comer después del reset para mantener resultados de por vida. Aprenderás a identificar qué te inflama y qué te sana.'
        },
        {
            question: '¿Funciona si soy vegetariana o vegana?',
            answer: 'Sí. El protocolo incluye adaptaciones específicas para vegetarianas, veganas y otras restricciones. Los principios de desinflamación funcionan igual con fuentes vegetales.'
        },
        {
            question: '¿Necesito comprar suplementos caros?',
            answer: 'No. Todo se consigue en cualquier supermercado normal. La lista incluye marcas accesibles y alternativas económicas. No te vendemos productos extra.'
        },
        {
            question: '¿Cómo recibo el protocolo después de pagar?',
            answer: 'Acceso inmediato por email y WhatsApp. Descargas todo en tu celular en menos de 2 minutos. El formato está optimizado para móvil—consultas mientras compras o cocinas.'
        },
        {
            question: '¿De verdad puedo pedir reembolso si no funciona?',
            answer: 'Sí, sin letra chica. Tienes 7 días completos. Si no ves reducción visible en tu abdomen, te devolvemos el 100%. Sin preguntas incómodas. Proceso automático en 24-48 horas.'
        },
        {
            question: '¿Puedo hacerlo si trabajo o viajo?',
            answer: 'Sí. Las recetas son rápidas y puedes adaptar cuando comes fuera con la Guía de Situaciones Sociales. Muchas mujeres lo hacen mientras trabajan tiempo completo o viajan.'
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
                    <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                        <div className="flex items-center justify-center gap-2 text-primary mb-2">
                            <MessageCircle size={20} />
                            <span className="font-bold">¿Tienes otra duda?</span>
                        </div>
                        <p className="text-slate-600 text-sm">
                            Escríbenos por WhatsApp y te respondemos en menos de 2 horas.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedTitle from './AnimatedTitle';
import InlineWhatsAppButton from './InlineWhatsAppButton';

const FAQ = () => {
    const faqs = [
        {
            question: "¿Pasaré hambre?",
            answer: "Jamás. Este es un protocolo de ABUNDANCIA nutricional. Comerás proteínas, grasas saludables y vegetales hasta saciarte."
        },
        {
            question: "¿Es complicado de cocinar?",
            answer: "No. Usamos la regla \"Cocina una vez, come dos veces\". Recetas de 15 minutos máximo."
        },
        {
            question: "¿Qué pasa después de los 7 días?",
            answer: "Incluimos el capítulo \"Tu Nueva Normalidad\" y la Regla 80/20 para que mantengas los resultados para siempre."
        },
        {
            question: "¿Soy vegano, me sirve?",
            answer: "El protocolo base recomienda caldo de huesos y proteína animal por su perfil de nutrientes, pero puedes adaptarlo si tienes conocimientos básicos de sustitución vegetal."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 md:py-32 bg-surface relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-surface opacity-50 -z-10"></div>
            <div className="container mx-auto px-4 max-w-3xl relative z-10">
                <AnimatedTitle
                    text="Preguntas Frecuentes"
                    className="text-3xl md:text-4xl font-bold text-text text-center mb-12"
                />

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="border border-slate-200 rounded-lg overflow-hidden"
                        >
                            <button
                                className="w-full flex items-center justify-between p-6 bg-white hover:bg-slate-50 transition-colors text-left"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="font-bold text-text text-lg">{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="text-secondary" />
                                ) : (
                                    <ChevronDown className="text-slate-400" />
                                )}
                            </button>

                            {openIndex === index && (
                                <div className="p-6 bg-slate-50 text-slate-600 leading-relaxed border-t border-slate-200">
                                    {faq.answer}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12">
                    <InlineWhatsAppButton text="¿Aún tienes preguntas? Escríbenos" />
                </div>
            </div>
        </section>
    );
};

export default FAQ;

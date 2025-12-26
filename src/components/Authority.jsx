import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Star, Microscope, ShieldCheck, LifeBuoy, CreditCard, ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:border-[#10B981] transition-colors cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="p-6 flex justify-between items-center">
                <h4 className="font-bold text-slate-800 flex items-center gap-3">
                    <span className="text-[#10B981] text-lg">❓</span>
                    {question}
                </h4>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown size={20} className="text-slate-400" />
                </motion.div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const Authority = () => {
    return (
        <section className="py-20 bg-[#F9FAFB] border-y border-slate-200">
            <div className="container mx-auto px-4 max-w-5xl">

                {/* TOP: Authority Grid */}
                <div className="text-center mb-16">
                    <span className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-8 block">RESPALDADO POR CIENCIA Y RESULTADOS REALES</span>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="flex flex-col items-center">
                            <div className="bg-green-100 p-4 rounded-full mb-4 text-[#10B981]">
                                <Users size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-1">1,500+</h3>
                            <p className="text-slate-500 font-medium">Personas Transformadas</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-yellow-100 p-4 rounded-full mb-4 text-yellow-500">
                                <Star size={32} fill="currentColor" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-1">4.9/5</h3>
                            <p className="text-slate-500 font-medium">Calificación Promedio</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-blue-100 p-4 rounded-full mb-4 text-blue-500">
                                <Microscope size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-1">100%</h3>
                            <p className="text-slate-500 font-medium">Basado en Ciencia</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-wide">
                        <span className="flex items-center gap-1"><ShieldCheck size={14} /> SSL Secure</span>
                        <span className="hidden md:inline">|</span>
                        <span className="flex items-center gap-1"><Star size={14} /> Satisfacción Garantizada</span>
                        <span className="hidden md:inline">|</span>
                        <span className="flex items-center gap-1"><LifeBuoy size={14} /> Soporte 24/7</span>
                        <span className="hidden md:inline">|</span>
                        <span className="flex items-center gap-1"><CreditCard size={14} /> Pago Protegido</span>
                    </div>
                </div>

                {/* BOTTOM: Mini FAQ */}
                <div className="max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold text-center text-slate-800 mb-8">Preguntas Frecuentes</h3>
                    <div className="space-y-4">
                        <FAQItem
                            question="¿Pasaré hambre?"
                            answer="No. Comerás hasta estar satisfecho con alimentos reales y nutritivos. El protocolo se basa en calmar la inflamación, no en restricción calórica."
                        />
                        <FAQItem
                            question="¿Es complicado de seguir?"
                            answer="Para nada. Todas las recetas toman 15 minutos o menos. Los ingredientes están en cualquier supermercado y la lista de compras ya está lista para ti. Solo sigues el plan."
                        />
                        <FAQItem
                            question="¿Qué pasa si no funciona para mí?"
                            answer="7 días de garantía total. Si sigues el protocolo y no ves reducción en tu abdomen, te devolvemos el 100% sin preguntas. El riesgo es todo nuestro."
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Authority;

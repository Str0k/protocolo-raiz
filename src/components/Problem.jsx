import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, AlertTriangle } from 'lucide-react';

const Problem = () => {
    return (
        <section id="problem" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl relative z-10">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                        La Verdad Sobre Tu "Peso" de Diciembre
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-0 md:gap-8 max-w-5xl mx-auto items-stretch">

                    {/* COL 1: Lo Que Crees (Red) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-[#FEE2E2] p-8 md:p-12 rounded-t-3xl md:rounded-3xl border border-red-200"
                    >
                        <h3 className="text-xl font-bold text-red-800 mb-8 flex items-center gap-2">
                            <X className="bg-red-200 p-1 rounded-full text-red-600 box-content" size={20} />
                            Lo que crees que pasó
                        </h3>
                        <ul className="space-y-6">
                            {[
                                "Subí 5 kilos de grasa en 2 semanas",
                                "No tengo disciplina",
                                "Necesito una dieta extrema para bajar"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <X size={28} className="text-red-500 shrink-0 mt-1" />
                                    <span className="text-red-900/80 font-medium text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* COL 2: La Realidad (Green) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-[#D1FAE5] p-8 md:p-12 rounded-b-3xl md:rounded-3xl border border-green-200"
                    >
                        <h3 className="text-xl font-bold text-green-800 mb-8 flex items-center gap-2">
                            <Check className="bg-green-200 p-1 rounded-full text-green-600 box-content" size={20} />
                            La Realidad Científica
                        </h3>
                        <ul className="space-y-6">
                            {[
                                "Tu intestino está inflamado por los 5 Jinetes (gluten, azúcar, lácteos, aceites, alcohol)",
                                "Tu cuerpo retuvo 2-3 kg de agua y glucógeno",
                                "Solo necesitas apagar el incendio interno, no pasar hambre"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <Check size={28} className="text-[#10B981] shrink-0 mt-1" />
                                    <span className="text-green-900/80 font-medium text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>

                {/* Callout Box */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 max-w-3xl mx-auto bg-[#FEF3C7] border border-[#F59E0B] rounded-2xl p-6 md:p-8 relative"
                >
                    <div className="absolute -top-3 left-8 bg-[#F59E0B] text-white text-xs font-bold px-3 py-1 rounded shadow-sm">
                        DATO CIENTÍFICO
                    </div>
                    <div className="flex gap-4">
                        <AlertTriangle className="text-[#F59E0B] shrink-0 hidden md:block" size={32} />
                        <p className="text-amber-900 font-medium leading-relaxed">
                            <span className="font-bold">La báscula miente.</span> El 80% del "peso" que subiste es inflamación, retención de líquidos y desarreglo de tu microbiota. Tu cuerpo renueva las células intestinales cada 5-7 días. Tienes una ventana perfecta para resetear.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Problem;

import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, AlertTriangle } from 'lucide-react';

const Problem = () => {
    return (
        <section id="problem" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                        Por qué tu "panza" NO baja aunque hagas ejercicio
                    </h2>
                    <p className="text-xl text-slate-600">
                        (Y por qué <strong className="text-primary">no es tu culpa</strong>)
                    </p>
                </motion.div>

                {/* Education Content */}
                <div className="max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-6 text-lg text-slate-700 leading-relaxed"
                    >
                        <p>
                            Imagina tu intestino como una esponja. Cuando está sano, absorbe nutrientes y elimina desperdicios normalmente. Pero cuando se inflama, esa esponja se hincha, retiene líquidos, y <strong className="text-secondary">tu abdomen se expande como un globo</strong>—sin importar cuánto ejercicio hagas o cuántas calorías cuentes.
                        </p>
                        <p>
                            Esa barriga dura que parece "grasa atrapada" <strong className="text-primary">no es grasa</strong>. Es inflamación crónica causada por lo que la ciencia llama los <strong>"5 Jinetes"</strong>: gluten, azúcar refinada, lácteos procesados, aceites industriales y alcohol. Estos agentes inflaman silenciosamente tu intestino cada día.
                        </p>
                        <p>
                            Por eso las dietas tradicionales no funcionan. Porque atacan las calorías, no la inflamación. <span className="italic text-slate-500">Es como intentar vaciar una bañera con el tapón puesto.</span> Puedes esforzarte todo lo que quieras, pero el agua sigue entrando.
                        </p>
                    </motion.div>
                </div>

                {/* Comparison Grid */}
                <div className="grid md:grid-cols-2 gap-0 md:gap-8 max-w-5xl mx-auto items-stretch mb-16">

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
                                "Subí kilos de grasa rebelde",
                                "No tengo disciplina ni fuerza de voluntad",
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
                                "Tu intestino está inflamado por los 5 Jinetes",
                                "Tu cuerpo retuvo líquidos y glucógeno",
                                "Solo necesitas apagar el incendio interno"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <Check size={28} className="text-[#10B981] shrink-0 mt-1" />
                                    <span className="text-green-900/80 font-medium text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>

                {/* Scientific Callout Box */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="max-w-3xl mx-auto bg-[#FEF3C7] border border-[#F59E0B] rounded-2xl p-6 md:p-8 relative mb-16"
                >
                    <div className="absolute -top-3 left-8 bg-[#F59E0B] text-white text-xs font-bold px-3 py-1 rounded shadow-sm">
                        📊 DATO CIENTÍFICO
                    </div>
                    <div className="flex gap-4">
                        <AlertTriangle className="text-[#F59E0B] shrink-0 hidden md:block" size={32} />
                        <p className="text-amber-900 font-medium leading-relaxed">
                            <span className="font-bold">El 80% del "peso" que subiste NO es grasa.</span> Es inflamación, retención de líquidos y desbalance de tu microbiota. La báscula te está mintiendo.
                        </p>
                    </div>
                </motion.div>

                {/* Good News + Villain Absolution */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <div className="bg-gradient-to-br from-emerald-50 to-primary/5 rounded-3xl p-8 md:p-10 border border-primary/20">
                        <p className="text-lg text-slate-700 leading-relaxed mb-6">
                            <strong className="text-primary">La buena noticia:</strong> tu cuerpo renueva las células intestinales cada <strong className="text-secondary">5-7 días</strong>. Eso significa que tienes una ventana de reset natural. Solo necesitas darle las herramientas correctas.
                        </p>
                        <div className="pt-6 border-t border-primary/10">
                            <p className="text-slate-600 italic">
                                El villano no eres tú. No es tu falta de disciplina.
                                <br />
                                <strong className="text-slate-800 not-italic">El villano es la inflamación intestinal silenciosa.</strong>
                                <br />
                                Y hoy la vamos a apagar.
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Problem;

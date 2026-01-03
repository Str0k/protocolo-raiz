import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, Lightbulb } from 'lucide-react';

const ProblemAgitation = () => {
    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">
                        ¿Por qué ninguna dieta te ha funcionado?
                    </h2>
                    <p className="text-lg text-slate-600">
                        (Spoiler: <strong className="text-emerald-600">no es tu culpa</strong>)
                    </p>
                </motion.div>

                {/* The Insight */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 md:p-10 mb-10 border border-amber-200/50"
                >
                    <div className="flex items-start gap-4">
                        <div className="bg-amber-400 rounded-full p-2 mt-1 shrink-0">
                            <Lightbulb size={20} className="text-white" />
                        </div>
                        <div>
                            <p className="text-lg md:text-xl text-slate-800 leading-relaxed">
                                Esa barriga hinchada que parece <strong>"grasa atrapada"</strong> no es grasa.
                                Es <strong className="text-amber-700">inflamación crónica</strong> en tu intestino.
                            </p>
                            <p className="text-slate-600 mt-4">
                                Por eso las dietas de calorías no funcionan. Están atacando el síntoma, no la raíz.
                                Es como intentar vaciar una bañera con el tapón puesto.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Comparison Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-10">

                    {/* What Doesn't Work */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-red-50 rounded-2xl p-6 border border-red-100"
                    >
                        <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                            <X className="bg-red-200 p-1 rounded-full" size={22} />
                            Lo que NO funciona
                        </h3>
                        <ul className="space-y-3">
                            {[
                                "Contar calorías obsesivamente",
                                "Dietas extremas (keto, ayuno, detox)",
                                "Ejercicio excesivo sin resultados"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-red-700">
                                    <X size={18} className="shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* What Works */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100"
                    >
                        <h3 className="font-bold text-emerald-800 mb-4 flex items-center gap-2">
                            <Check className="bg-emerald-200 p-1 rounded-full" size={22} />
                            Lo que SÍ funciona
                        </h3>
                        <ul className="space-y-3">
                            {[
                                "Eliminar los 5 alimentos inflamatorios",
                                "Reset intestinal de 7 días",
                                "Desinflamar primero, después todo es más fácil"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-emerald-700">
                                    <Check size={18} className="shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* The Good News */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100"
                >
                    <p className="text-lg text-slate-700">
                        <strong className="text-emerald-700">La buena noticia:</strong> tu cuerpo renueva las células intestinales cada 5-7 días.
                        <br className="hidden md:block" />
                        Con las herramientas correctas, puedes ver resultados visibles en una semana.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default ProblemAgitation;

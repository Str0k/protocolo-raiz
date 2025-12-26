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

            {/* Intestine Icon Animation - Swollen to Calm */}
            <motion.div
                className="flex justify-center my-12"
                whileHover={{ scale: 1.05 }}
            >
                <motion.div
                    className="relative w-32 h-32 md:w-40 md:h-40"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center text-6xl md:text-7xl"
                        animate={{
                            filter: ['hue-rotate(0deg) saturate(150%)', 'hue-rotate(120deg) saturate(100%)'],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut'
                        }}
                    >
                        🫃
                    </motion.div>
                    <motion.div
                        className="absolute -right-2 -top-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center"
                        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <span className="text-white text-xl">→</span>
                    </motion.div>
                    <motion.div
                        className="absolute -right-16 top-1/2 -translate-y-1/2 text-5xl"
                        animate={{ opacity: [0, 1], scale: [0.8, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        ✨
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Glassmorphism Science Card with 7-Day Cycle */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mx-auto mt-16 p-8 rounded-3xl glass border-2 border-accent/30 shadow-2xl backdrop-blur-xl bg-gradient-to-br from-white/80 to-emerald-50/50"
            >
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                        <span className="text-2xl">🔬</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Dato Científico</h3>
                </div>

                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    El <strong className="text-primary">80% del 'peso' que subiste</strong> en las
                    fiestas no es grasa, es inflamación, retención de líquidos y desbalance de tu
                    microbiota.
                </p>

                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    Tu cuerpo renueva las células intestinales cada{' '}
                    <strong className="text-secondary">5–7 días</strong>: es tu ventana perfecta
                    para un reset profundo.
                </p>

                {/* 7-Day Cycle Progress Animation */}
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-accent/20">
                    {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                        <motion.div
                            key={day}
                            className="flex flex-col items-center gap-1"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: day * 0.1, duration: 0.3 }}
                        >
                            <motion.div
                                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center text-white font-bold text-sm shadow-lg"
                                animate={{
                                    boxShadow: [
                                        '0 0 0 0 rgba(16, 185, 129, 0.4)',
                                        '0 0 0 10px rgba(16, 185, 129, 0)',
                                    ],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: day * 0.2,
                                }}
                            >
                                {day}
                            </motion.div>
                            <span className="text-xs text-slate-600 font-medium">Día</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Problem;

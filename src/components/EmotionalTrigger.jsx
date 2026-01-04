import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Heart, Sparkles } from 'lucide-react';

const EmotionalTrigger = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    return (
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 overflow-hidden">

            {/* Dramatic background effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >

                    {/* The Hook - Pain Statement */}
                    <motion.div variants={itemVariants} className="text-center mb-12">
                        <motion.div
                            className="inline-flex items-center gap-2 bg-red-500/10 border border-red-400/20 rounded-full px-4 py-2 mb-6"
                            animate={{
                                boxShadow: ['0 0 20px rgba(239, 68, 68, 0)', '0 0 30px rgba(239, 68, 68, 0.3)', '0 0 20px rgba(239, 68, 68, 0)']
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <AlertTriangle size={16} className="text-red-400" />
                            <span className="text-red-300 font-medium text-sm">Momento de honestidad brutal</span>
                        </motion.div>
                    </motion.div>

                    {/* Main Psychological Copy */}
                    <motion.div variants={itemVariants} className="space-y-8 text-center">

                        {/* The Pain */}
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                            ¿Cuántas veces te has prometido{' '}
                            <motion.span
                                className="text-red-400"
                                animate={{ opacity: [1, 0.7, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                "esta vez sí"
                            </motion.span>
                            ...
                            <br className="hidden md:block" />
                            <span className="text-slate-400 text-xl md:text-3xl">
                                solo para terminar peor que antes?
                            </span>
                        </h2>

                        {/* Agitation Bullets */}
                        <motion.div
                            variants={itemVariants}
                            className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto my-10"
                        >
                            {[
                                "Evitas las fotos porque odias cómo se ve tu abdomen",
                                "Usas ropa holgada para esconder lo que no quieres ver",
                                "Sientes vergüenza al verte en el espejo",
                                "Te prometiste que este año sería diferente... otra vez"
                            ].map((pain, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-3 text-left p-4 bg-slate-800/50 rounded-xl border border-slate-700/50"
                                >
                                    <span className="text-red-400 mt-0.5">✗</span>
                                    <span className="text-slate-300 text-sm md:text-base">{pain}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* The Deep Cut */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-gradient-to-r from-slate-800/50 via-slate-800/80 to-slate-800/50 rounded-2xl p-8 md:p-10 border border-slate-700/30 my-10"
                        >
                            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6">
                                Lo más doloroso no es la inflamación...
                            </p>
                            <p className="text-xl md:text-2xl text-white font-semibold leading-relaxed">
                                Es esa voz en tu cabeza que dice:{' '}
                                <motion.span
                                    className="italic text-red-400"
                                    animate={{ scale: [1, 1.02, 1] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                >
                                    "ya intentaste todo, nada funciona para ti"
                                </motion.span>
                            </p>
                            <p className="text-slate-400 mt-6">
                                Esa sensación de que tu cuerpo está en tu contra. De que otras lo logran pero tú no.
                            </p>
                        </motion.div>

                        {/* The Truth Bomb */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <p className="text-lg md:text-xl text-slate-400">
                                ¿Y si te dijera que...
                            </p>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                                <span className="text-emerald-400">No es tu culpa.</span>
                                <br />
                                <span className="text-slate-300 text-xl md:text-2xl">
                                    El problema nunca fue tu "fuerza de voluntad"
                                </span>
                            </h3>
                        </motion.div>

                        {/* The Revelation */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-gradient-to-r from-emerald-500/10 via-emerald-500/20 to-emerald-500/10 rounded-2xl p-8 md:p-10 border border-emerald-400/20 my-10"
                        >
                            <motion.div
                                className="flex justify-center mb-6"
                                animate={{ rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            >
                                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                    <Sparkles size={32} className="text-emerald-400" />
                                </div>
                            </motion.div>

                            <p className="text-lg md:text-xl text-emerald-100 leading-relaxed mb-4">
                                Miles de mujeres como tú descubrieron que su problema no era comer mucho o hacer poco ejercicio...
                            </p>
                            <p className="text-xl md:text-2xl text-white font-bold">
                                Era <span className="text-emerald-400">inflamación intestinal silenciosa</span>
                            </p>
                            <p className="text-slate-400 mt-4">
                                Un problema que ninguna dieta tradicional puede resolver—porque no es un problema de calorías.
                            </p>
                        </motion.div>

                        {/* The Promise */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <div className="flex justify-center">
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <Heart size={48} className="text-emerald-400" fill="currentColor" />
                                </motion.div>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-white">
                                Imagina despertar en 7 días...
                            </h3>

                            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                                {[
                                    "Con el abdomen visiblemente más plano al espejo",
                                    "Sin esa hinchazón incómoda después de comer",
                                    "Con energía real, no agotamiento constante",
                                    "Sintiéndote orgullosa de lo que ves"
                                ].map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.1 * index }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.03, borderColor: 'rgba(16, 185, 129, 0.5)' }}
                                        className="flex items-start gap-3 text-left p-4 bg-emerald-500/5 rounded-xl border border-emerald-400/20 transition-colors"
                                    >
                                        <span className="text-emerald-400 mt-0.5">✓</span>
                                        <span className="text-slate-200 text-sm md:text-base">{benefit}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* The Transition */}
                        <motion.div
                            variants={itemVariants}
                            className="pt-8"
                        >
                            <p className="text-lg text-slate-400 mb-4">
                                Esto no es magia. Es ciencia aplicada en un método paso a paso.
                            </p>
                            <motion.p
                                className="text-xl md:text-2xl font-semibold text-white"
                                animate={{
                                    textShadow: ['0 0 20px rgba(16, 185, 129, 0)', '0 0 30px rgba(16, 185, 129, 0.5)', '0 0 20px rgba(16, 185, 129, 0)']
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                Esto es lo que recibirás hoy...
                            </motion.p>

                            {/* Arrow pointing down */}
                            <motion.div
                                className="flex justify-center mt-6"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                    <span className="text-emerald-400 text-xl">↓</span>
                                </div>
                            </motion.div>
                        </motion.div>

                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default EmotionalTrigger;

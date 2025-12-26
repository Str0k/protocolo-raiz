import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Map, CheckCircle } from 'lucide-react';

const LongTermRoadmap = () => {
    const phases = [
        {
            icon: <Calendar size={28} className="text-blue-500" />,
            period: "DÍA 8-14",
            title: "Fase de Estabilización",
            description: "Integras alimentos flexibles sin perder el progreso. Tu abdomen se mantiene plano y tu digestión sigue ligera."
        },
        {
            icon: <CheckCircle size={28} className="text-green-500" />,
            period: "DÍA 15-30",
            title: "Nueva Normalidad",
            description: "Tu microbiota está balanceada. Ya sabes intuitivamente qué comer en cualquier situación sin inflamarte."
        },
        {
            icon: <Map size={28} className="text-amber-500" />,
            period: "LARGO PLAZO",
            title: "Sin Rebote",
            description: "Tienes el mapa mental para siempre. Incluye tu 'Escudo Anti-Rebote' para disfrutar fiestas y eventos sin miedo."
        }
    ];

    return (
        <section className="py-20 md:py-24 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -z-10"></div>

            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                        ¿Qué Pasa Después del Día 7?
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        No es una dieta temporal. Es un reset permanente de tu química intestinal.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-6 relative">
                    {/* Connecting Arrows (Desktop) */}
                    <div className="hidden md:flex absolute top-1/2 left-0 w-full justify-between px-32 -translate-y-1/2 pointer-events-none z-0">
                        <ArrowRight className="text-slate-200 w-8 h-8" />
                        <ArrowRight className="text-slate-200 w-8 h-8" />
                    </div>

                    {phases.map((phase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="flex-1 bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative z-10 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300"
                        >
                            <div className="mb-4 p-4 rounded-full bg-slate-50 group-hover:bg-slate-100 transition-colors">
                                {phase.icon}
                            </div>

                            <span className="inline-block px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] font-bold tracking-[0.2em] mb-4">
                                {phase.period}
                            </span>

                            <h3 className="text-xl font-bold text-text mb-3">{phase.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                {phase.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LongTermRoadmap;

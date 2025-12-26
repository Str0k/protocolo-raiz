import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Sparkles, Wind, CheckCircle2 } from 'lucide-react';

const DailyTransformation = () => {
    const phases = [
        {
            days: "DÍA 1-2",
            title: "EL DRENAJE",
            icon: <Droplets className="text-blue-500" size={32} />,
            desc: "Tu cuerpo expulsa el exceso de sodio y agua. Orinarás más seguido. Sientes que te vas 'desinflando' como un globo."
        },
        {
            days: "DÍA 3-4",
            title: "LA ENERGÍA",
            icon: <Sparkles className="text-yellow-500" size={32} />,
            desc: "La inflamación baja y tu cerebro se despeja. Desaparece el sueño después de comer y te despiertas sin alarma."
        },
        {
            days: "Día 5-6",
            title: "LA DIGESTIÓN",
            icon: <Wind className="text-green-500" size={32} />,
            desc: "Silencio total en tu abdomen. Sin gases, sin ruidos molesto. Tu vientre se mantiene plano todo el día."
        },
        {
            days: "DÍA 7",
            title: "EL ESCUDO",
            icon: <CheckCircle2 className="text-emerald-600" size={32} />,
            desc: "Tu barrera intestinal está sellada. Has perdido entre 3 y 7 cm de cintura y reprogramaste tu relación con la comida."
        }
    ];

    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Una Semana para Cambiar tu Año
                    </h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                        Así es como se sentirá tu cuerpo día tras día mientras aplicas el protocolo.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {phases.map((phase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-[#10B981]/30 hover:shadow-lg transition-all flex items-start gap-6 group"
                        >
                            <div className="bg-white p-4 rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                                {phase.icon}
                            </div>
                            <div>
                                <span className="text-xs font-bold tracking-widest text-slate-400 uppercase block mb-1">
                                    {phase.days}
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#10B981] transition-colors">
                                    {phase.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed font-medium">
                                    {phase.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DailyTransformation;

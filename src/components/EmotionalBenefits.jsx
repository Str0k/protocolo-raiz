import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Zap } from 'lucide-react';

const EmotionalBenefits = () => {
    const benefits = [
        {
            icon: <Brain size={48} />,
            title: "CLARIDAD MENTAL",
            subtitle: "De la Niebla al Enfoque Láser",
            quote: "¿Te sientes lento, te cuesta concentrarte y olvidas cosas simples?",
            description: "Al eliminar los disparadores inflamatorios, tu cerebro se enciende. Recuperarás la concentración, la agilidad mental y esa sensación de estar 'despierto' de verdad."
        },
        {
            icon: <Sparkles size={48} />,
            title: "LIBERTAD DIGESTIVA",
            subtitle: "De la Pesadez a la Ligereza",
            quote: "¿Te desabrochas el pantalón después de comer y te da miedo salir a cenar?",
            description: "Imagina comer delicioso y sentirte ligero después. Sin gases, sin esa barriga de embarazada de 6 meses y con la confianza de ponerte la ropa que te gusta."
        },
        {
            icon: <Zap size={48} />,
            title: "ENERGÍA VITAL",
            subtitle: "De Sobrevivir a Vivir",
            quote: "¿Te arrastras para salir de la cama y necesitas 3 cafés para funcionar?",
            description: "Tu cuerpo gasta el 70% de su energía gestionando la digestión. Cuando la optimizas, liberas un torrente de energía pura para disfrutar tu vida, jugar con tus hijos o rendir en el trabajo."
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-[#F0FDF4] to-[#ECFDF5]">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#111827] mb-4">
                        Esto va mucho más allá de un número en la báscula
                    </h2>
                    <h3 className="text-xl text-[#10B981] font-semibold">
                        El Protocolo de Raíz resetea tu sistema operativo completo
                    </h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -8 }}
                            className="bg-white p-8 md:p-10 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-xl hover:shadow-[#10B981]/10 transition-all cursor-default group"
                        >
                            <div className="bg-green-50 w-20 h-20 rounded-2xl flex items-center justify-center text-[#10B981] mb-8 group-hover:scale-110 transition-transform duration-300">
                                {benefit.icon}
                            </div>
                            <h4 className="text-xl font-extrabold text-[#111827] mb-1">{benefit.title}</h4>
                            <p className="text-[#10B981] font-bold text-sm uppercase tracking-wider mb-6">{benefit.subtitle}</p>

                            <p className="text-slate-500 italic text-sm mb-4 border-l-4 border-green-200 pl-4 py-1">
                                "{benefit.quote}"
                            </p>

                            <p className="text-slate-600 leading-relaxed">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EmotionalBenefits;

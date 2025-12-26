import React from 'react';
import { Flame, Wrench, Sprout } from 'lucide-react';
import { motion } from 'framer-motion';

const Solution = () => {
    const steps = [
        {
            icon: <Flame size={40} className="text-red-500" />,
            title: "Apaga el Incendio",
            days: "Días 1-2",
            description: "Eliminas los 5 Jinetes de la Inflamación y reduces la respuesta inmune intestinal.",
            color: "bg-red-50 border-red-100"
        },
        {
            icon: <Wrench size={40} className="text-blue-500" />,
            title: "Sella tu Barrera",
            days: "Días 3-5",
            description: "Usas jugos específicos, caldos y alimentos funcionales que regeneran tu mucosa intestinal.",
            color: "bg-blue-50 border-blue-100"
        },
        {
            icon: <Sprout size={40} className="text-green-500" />,
            title: "Reconstruyes tu Microbiota",
            days: "Días 6-7",
            description: "Reintroduces prebióticos y alimentos estratégicos que estabilizan tu flora y evitan el rebote.",
            color: "bg-green-50 border-green-100"
        }
    ];

    return (
        <section id="solution" className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text">
                        Cómo Funciona El Protocolo de Raíz
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Un sistema científico paso a paso para resetear tu salud intestinal en una semana.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gradient-to-r from-red-100 via-blue-100 to-green-100 -z-10"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={`relative rounded-3xl p-8 border ${step.color} shadow-sm hover:shadow-md transition-shadow h-full flex flex-col items-center text-center bg-white`}
                        >
                            <div className="absolute -top-6 bg-white p-2 rounded-full shadow-sm border border-slate-100">
                                <div className={`${step.color.split(' ')[0]} p-4 rounded-full`}>
                                    {step.icon}
                                </div>
                            </div>

                            <div className="mt-8 mb-2">
                                <span className="inline-block py-1 px-3 rounded-full bg-slate-100 text-slate-600 text-xs font-bold tracking-wider uppercase">
                                    {step.days}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-text">{step.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solution;

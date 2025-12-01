import React from 'react';
import { motion } from 'framer-motion';
import AnimatedTitle from './AnimatedTitle';

const Timeline = () => {
    const steps = [
        {
            days: "Día 1-2",
            title: "El Drenaje",
            description: "Tu cuerpo empieza a soltar el exceso de agua. Vas mucho al baño. La hinchazón baja drásticamente."
        },
        {
            days: "Día 3-4",
            title: "La Claridad",
            description: "La 'niebla mental' desaparece. Tu energía se estabiliza. Dejas de tener antojos de azúcar."
        },
        {
            days: "Día 5-6",
            title: "La Reparación",
            description: "Tu digestión es silenciosa y ligera. Tu piel se ve más limpia. Duermes profundo."
        },
        {
            days: "Día 7",
            title: "El Resultado",
            description: "Te despiertas con el abdomen plano. El pantalón cierra sin esfuerzo. Te sientes ligero y en control."
        }
    ];

    return (
        <section className="py-24 md:py-32 bg-surface relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-transparent"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <AnimatedTitle
                        text="Lo que pasará en tu cuerpo la próxima semana"
                        className="text-3xl md:text-5xl font-bold mb-6 text-text"
                    />
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20 -translate-x-1/2 hidden md:block"></div>
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20 -translate-x-1/2 md:hidden"></div>

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Content */}
                                <div className="flex-1 pl-12 md:pl-0 md:text-center md:px-8">
                                    <div className={`md:text-left ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider mb-2 border border-primary/20">
                                            {step.days}
                                        </span>
                                        <h3 className="text-2xl font-bold text-text mb-3">{step.title}</h3>
                                        <p className="text-slate-500 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Node */}
                                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary shadow-[0_0_15px_rgba(16,185,129,0.5)] z-10 flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>

                                {/* Spacer for alternate side */}
                                <div className="flex-1 hidden md:block"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;

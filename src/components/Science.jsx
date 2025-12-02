import React from 'react';
import { motion } from 'framer-motion';
import AnimatedTitle from './AnimatedTitle';

const Science = () => {
    return (
        <section className="py-24 md:py-32 bg-background text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-surface to-transparent opacity-50 -z-10"></div>
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-secondary font-bold tracking-wider text-sm uppercase mb-2 block">
                            CIENCIA, NO MAGIA
                        </span>
                        <AnimatedTitle
                            text="Tu cuerpo no está roto. Solo está defendiéndose."
                            className="text-3xl md:text-4xl font-bold mb-6 justify-start text-slate-900"
                        />

                        <div className="space-y-6 text-slate-600 leading-relaxed">
                            <p>
                                Imagina tu intestino como un jardín. Durante las fiestas, los excesos actuaron como una tormenta que dañó la barrera protectora (microbiota).
                            </p>
                            <p>
                                La hinchazón no es más que tu sistema inmune enviando agua para "apagar el fuego" de la inflamación.
                                <strong className="text-slate-900 block mt-2">No necesitas menos comida. Necesitas los nutrientes correctos para reparar el daño.</strong>
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-8 p-6 bg-white/80 rounded-xl border border-slate-200 backdrop-blur-sm shadow-sm"
                        >
                            <h4 className="font-bold text-secondary mb-2">El Ciclo de 7 Días</h4>
                            <p className="text-sm text-slate-500">
                                Tus células intestinales (enterocitos) se renuevan completamente cada 5-7 días.
                                Si les das el descanso y los materiales correctos, literalmente tendrás un intestino nuevo en una semana.
                            </p>
                        </motion.div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl transform rotate-2 blur-lg animate-pulse"></div>
                        <img
                            src="/body-nature.jpg"
                            alt="Conexión cuerpo y naturaleza"
                            className="relative z-10 rounded-2xl shadow-2xl w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 border border-white/10"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Science;

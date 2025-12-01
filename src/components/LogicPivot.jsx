import React from 'react';
import { motion } from 'framer-motion';
import AnimatedTitle from './AnimatedTitle';

const LogicPivot = () => {
    return (
        <section className="py-24 md:py-32 bg-background relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-surface to-background opacity-50 -z-10"></div>

            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <AnimatedTitle
                    text="Por qué las dietas de enero siempre fallan"
                    className="text-3xl md:text-4xl font-bold text-text text-center mb-12"
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border-l-4 border-secondary mb-10 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                    <p className="text-lg md:text-xl font-medium text-slate-700 italic relative z-10">
                        "Las Matemáticas no mienten: Para ganar 1kg de grasa real necesitas comer 7,700 calorías EXTRA.
                        Para subir los 4kg que marca tu báscula, tendrías que haber comido 30,000 calorías extra. ¡Es imposible!"
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="prose prose-lg mx-auto text-slate-600"
                >
                    <p>
                        El problema no son las calorías. El problema son los <strong className="text-primary">'5 Jinetes de la Inflamación'</strong> (Gluten moderno, Azúcar, Lácteos industriales, Aceites de semillas y Alcohol) que activaron una respuesta inmune.
                    </p>
                    <p className="mt-4">
                        Si haces dieta de hambre, tu cuerpo se estresa y retiene MÁS líquido.
                        Necesitas un <span className="bg-secondary/20 text-secondary px-2 py-0.5 rounded font-semibold">Reset Químico</span>, no contar calorías.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default LogicPivot;

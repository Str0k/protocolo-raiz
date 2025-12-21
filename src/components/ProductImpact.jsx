import React from 'react';
import { motion } from 'framer-motion';

const ProductImpact = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-white to-amber-50/50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-8 max-w-2xl"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text">
                            Todo lo que necesitas para tu <span className="text-primary">Transformación</span>
                        </h2>
                        <p className="text-lg md:text-xl text-slate-600">
                            No es solo un libro. Es un <span className="font-semibold text-secondary">arsenal completo</span> diseñado para rescatar tu salud intestinal.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-full max-w-4xl"
                    >
                        {/* Background Glow Effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/10 to-secondary/10 blur-[100px] rounded-full -z-10" />

                        <motion.img
                            src="/product-bundle.jpg"
                            alt="El Protocolo de Raíz - Bundle Completo"
                            className="w-full h-auto drop-shadow-2xl rounded-xl"
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProductImpact;

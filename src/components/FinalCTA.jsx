import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Clock } from 'lucide-react';

const FinalCTA = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
            <div className="container mx-auto px-4 max-w-3xl">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    {/* Emotional Copy */}
                    <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                        Los próximos <strong className="text-white">7 días van a pasar de todas formas.</strong>
                    </p>

                    <p className="text-lg text-slate-400 mb-6">
                        La única pregunta es: ¿Cómo te vas a sentir cuando pasen?
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-10 max-w-xl mx-auto text-left">
                        {/* Option A - Without */}
                        <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-5">
                            <p className="text-red-300 font-medium mb-2">❌ Sin el protocolo:</p>
                            <p className="text-slate-400 text-sm">
                                Igual de hinchada, cansada y frustrada
                            </p>
                        </div>

                        {/* Option B - With */}
                        <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-5">
                            <p className="text-emerald-300 font-medium mb-2">✓ Con el protocolo:</p>
                            <p className="text-slate-300 text-sm">
                                Ligera, con energía, y con 3-7 cm menos de cintura
                            </p>
                        </div>
                    </div>

                    <p className="text-slate-300 mb-6">
                        Más de <strong className="text-primary">1,500 mujeres</strong> ya tomaron la decisión.
                        <br />
                        Son las mismas que ahora cierran su pantalón sin problema.
                        <br />
                        Son las que tienen energía para hacer lo que aman.
                        <br />
                        Son las que dejaron de verse "embarazadas" después de comer.
                    </p>

                    <p className="text-xl text-white font-medium mb-8">
                        Hoy, esa decisión es tuya.
                    </p>

                    {/* Guarantee Reminder */}
                    <div className="bg-slate-800/50 rounded-xl p-4 mb-8 inline-block border border-slate-700">
                        <p className="text-slate-400 text-sm flex items-center justify-center gap-2">
                            <Shield className="text-primary" size={18} />
                            Recuerda: el riesgo es <strong className="text-white">CERO</strong>.
                            Si no ves resultados en 7 días, te devolvemos cada centavo.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <a
                            href="#checkout"
                            className="inline-block bg-gradient-to-r from-primary to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-lg md:text-xl font-bold py-5 px-10 md:px-14 rounded-full shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 animate-breathing"
                            onClick={() => {
                                if (window.fbq) window.fbq('track', 'InitiateCheckout');
                            }}
                        >
                            SÍ, QUIERO COMENZAR MI RESET HOY →
                        </a>
                    </motion.div>

                    {/* Trust indicators */}
                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-6 text-sm text-slate-500">
                        <span className="flex items-center gap-1">
                            <Zap size={14} className="text-primary" />
                            Acceso inmediato
                        </span>
                        <span className="flex items-center gap-1">
                            <Shield size={14} className="text-primary" />
                            7 días de garantía
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock size={14} className="text-primary" />
                            $17 USD ($375 MXN)
                        </span>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;

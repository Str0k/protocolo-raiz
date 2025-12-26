import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

const Science = () => {
    return (
        <section className="py-24 bg-white overflow-hidden relative">
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="grid md:grid-cols-5 gap-12 items-center">

                    {/* LEFT COLUMN (40%): Text Content */}
                    <div className="md:col-span-2 order-2 md:order-1">
                        <span className="text-orange-500 font-bold tracking-wider text-sm uppercase mb-3 block flex items-center gap-2">
                            <RefreshCw size={16} className="animate-spin-slow" />
                            CIENCIA, NO MAGIA
                        </span>

                        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#111827] leading-tight">
                            Tu cuerpo <span className="text-red-500 relative inline-block">no está roto
                                <svg className="absolute w-full h-2 bottom-0 left-0 text-red-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
                            </span>. <br />
                            Solo está <span className="text-[#10B981]">defendiéndose</span>.
                        </h2>

                        <div className="space-y-6 text-slate-600 font-medium leading-relaxed mb-8">
                            <p>
                                Imagina tu intestino como un jardín. Durante las fiestas, el alcohol y el azúcar actuaron como una tormenta que dañó la barrera protectora (tu microbiota).
                            </p>
                            <p>
                                La hinchazón no es grasa. Es tu sistema inmune enviando agua para "apagar el fuego" de la inflamación.
                            </p>
                            <div className="bg-green-50 border-l-4 border-[#10B981] p-4 rounded-r-lg">
                                <p className="text-green-800 font-semibold italic">
                                    No necesitas menos comida. Necesitas los nutrientes correctos para reparar el daño.
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="bg-[#10B981] rounded-full p-1.5 text-white">
                                    <RefreshCw size={16} />
                                </div>
                                <h4 className="font-bold text-slate-900">El Ciclo de 7 Días</h4>
                            </div>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                Tus células intestinales (enterocitos) se renuevan completamente cada 5-7 días. Si les das el descanso y los materiales correctos, literalmente tendrás un intestino nuevo en una semana.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT COLUMN (60%): Illustration */}
                    <div className="md:col-span-3 relative order-1 md:order-2">
                        <div className="absolute inset-0 bg-gradient-to-tr from-green-200 to-orange-100 rounded-[3rem] transform rotate-3 blur-2xl opacity-40 -z-10"></div>
                        <img
                            src="/body-nature.jpg"
                            alt="Jardín Intestinal - Conexión Cuerpo Naturaleza"
                            className="relative z-10 rounded-[2rem] shadow-2xl w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-700"
                        />
                        {/* Floating Tag */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="absolute -bottom-8 -left-8 bg-white p-4 rounded-xl shadow-xl hidden md:block"
                        >
                            <p className="text-sm font-bold text-slate-800">Renovación Celular</p>
                            <p className="text-xs text-[#10B981] font-bold">En curso...</p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Science;

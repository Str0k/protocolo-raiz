import React from 'react';
import { motion } from 'framer-motion';
import { Users, Star, Microscope, ShieldCheck, LifeBuoy, CreditCard, Award, Heart } from 'lucide-react';

const Authority = () => {
    return (
        <section className="py-20 bg-[#F9FAFB] border-y border-slate-200">
            <div className="container mx-auto px-4 max-w-5xl">

                {/* TOP: Authority Stats Grid */}
                <div className="text-center mb-16">
                    <span className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-8 block">RESPALDADO POR CIENCIA Y RESULTADOS REALES</span>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-center"
                        >
                            <div className="bg-green-100 p-4 rounded-full mb-4 text-[#10B981]">
                                <Users size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-1">1,500+</h3>
                            <p className="text-slate-500 font-medium">Mujeres Transformadas</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="flex flex-col items-center"
                        >
                            <div className="bg-yellow-100 p-4 rounded-full mb-4 text-yellow-500">
                                <Star size={32} fill="currentColor" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-1">4.9/5</h3>
                            <p className="text-slate-500 font-medium">Calificación Promedio</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-col items-center"
                        >
                            <div className="bg-blue-100 p-4 rounded-full mb-4 text-blue-500">
                                <Microscope size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-1">100%</h3>
                            <p className="text-slate-500 font-medium">Basado en Ciencia</p>
                        </motion.div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-wide">
                        <span className="flex items-center gap-1"><ShieldCheck size={14} /> SSL Secure</span>
                        <span className="hidden md:inline">|</span>
                        <span className="flex items-center gap-1"><Star size={14} /> Satisfacción Garantizada</span>
                        <span className="hidden md:inline">|</span>
                        <span className="flex items-center gap-1"><LifeBuoy size={14} /> Soporte 24/7</span>
                        <span className="hidden md:inline">|</span>
                        <span className="flex items-center gap-1"><CreditCard size={14} /> Pago Protegido</span>
                    </div>
                </div>

                {/* CREATOR STORY SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                            ¿Quién creó este protocolo?
                        </h2>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-slate-200">
                        {/* Creator Photo Placeholder + Name */}
                        <div className="flex flex-col md:flex-row items-center gap-6 mb-8 pb-8 border-b border-slate-100">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center text-white text-4xl shadow-lg">
                                👩‍⚕️
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl font-bold text-slate-900">Marisol Gutiérrez</h3>
                                <p className="text-primary font-medium">Nutrióloga Certificada · Especialista en Salud Digestiva</p>
                            </div>
                        </div>

                        {/* Story */}
                        <div className="space-y-4 text-slate-700 leading-relaxed">
                            <p>
                                <span className="text-2xl">👋</span> Hola, soy Marisol.
                            </p>
                            <p>
                                Soy nutrióloga certificada con más de <strong className="text-primary">8 años de experiencia</strong> especializada en salud digestiva y desinflamación intestinal. He trabajado con más de 3,000 mujeres—en consulta privada y a través de mis programas digitales.
                            </p>
                            <p>
                                Pero mi historia no empezó en un consultorio. Empezó cuando <strong>YO era la mujer con la panza hinchada</strong>. La que se veía "embarazada" después de cada comida. La que probó TODAS las dietas y NINGUNA funcionaba a largo plazo.
                            </p>
                            <p>
                                Después de años de frustración, descubrí que mi problema no era el peso. Era la <strong className="text-secondary">inflamación intestinal crónica</strong>. Cuando ataqué la raíz del problema—no los síntomas—todo cambió.
                            </p>
                            <p className="text-lg font-medium text-slate-800 bg-emerald-50 rounded-xl p-4 border-l-4 border-primary">
                                Perdí 8 cm de cintura en 10 días. Mi energía volvió. Mi digestión se normalizó.
                            </p>
                            <p>
                                Y desde entonces, mi misión es ayudar a otras mujeres a descubrir lo mismo que yo descubrí: que <strong>no estás rota, no te falta disciplina, y tu cuerpo PUEDE responder</strong>—solo necesita las herramientas correctas.
                            </p>
                            <p className="italic text-slate-600">
                                El Protocolo de Raíz es la versión simplificada y accesible de todo lo que aprendí en 8 años de práctica clínica. Es lo que le daría a mi hermana, a mi mamá, a mi mejor amiga.
                            </p>
                            <p className="text-primary font-bold text-lg">
                                Y ahora, es tuyo.
                            </p>
                        </div>

                        {/* Trust Credentials */}
                        <div className="mt-8 pt-8 border-t border-slate-100">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                <div className="flex flex-col items-center gap-2">
                                    <Award className="text-primary" size={24} />
                                    <span className="text-sm text-slate-600">8+ años experiencia</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <Users className="text-primary" size={24} />
                                    <span className="text-sm text-slate-600">3,000+ mujeres</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <Microscope className="text-primary" size={24} />
                                    <span className="text-sm text-slate-600">Especialista digestiva</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <Heart className="text-primary" size={24} />
                                    <span className="text-sm text-slate-600">5 programas creados</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Authority;

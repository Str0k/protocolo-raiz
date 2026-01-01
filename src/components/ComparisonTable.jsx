import React from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const ComparisonTable = () => {
    const comparisons = [
        {
            traditional: "Cuentan calorías (tedioso y restrictivo)",
            protocol: "Comes hasta saciarte con alimentos que desinfleman"
        },
        {
            traditional: "Requieren ejercicio intenso",
            protocol: "Cero ejercicio obligatorio"
        },
        {
            traditional: "Prohíben tortillas, frijoles, arroz",
            protocol: "Compatible con la comida mexicana real"
        },
        {
            traditional: "Atacan el síntoma (peso)",
            protocol: "Atacan la raíz (inflamación intestinal)"
        },
        {
            traditional: "Efecto rebote casi garantizado",
            protocol: "Reset permanente de tu sistema digestivo"
        },
        {
            traditional: "Te dejan con hambre y mal humor",
            protocol: "Te dejan satisfecha y con energía"
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
            <div className="container mx-auto px-4 max-w-5xl">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                        Por qué esto funciona cuando TODO lo demás falló
                    </h2>
                </motion.div>

                {/* Desktop Comparison Table */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="hidden md:block bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200"
                >
                    {/* Table Header */}
                    <div className="grid grid-cols-2">
                        <div className="bg-red-50 p-6 text-center border-b border-r border-slate-200">
                            <h3 className="text-xl font-bold text-red-700 flex items-center justify-center gap-2">
                                <X className="text-red-500" size={24} />
                                Dietas Tradicionales
                            </h3>
                        </div>
                        <div className="bg-emerald-50 p-6 text-center border-b border-slate-200">
                            <h3 className="text-xl font-bold text-emerald-700 flex items-center justify-center gap-2">
                                <Check className="text-emerald-500" size={24} />
                                Protocolo de Raíz
                            </h3>
                        </div>
                    </div>

                    {/* Table Rows */}
                    {comparisons.map((row, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="grid grid-cols-2"
                        >
                            <div className={`p-5 border-r border-slate-200 flex items-center gap-3 ${index < comparisons.length - 1 ? 'border-b' : ''}`}>
                                <X className="text-red-400 shrink-0" size={20} />
                                <span className="text-slate-600">{row.traditional}</span>
                            </div>
                            <div className={`p-5 flex items-center gap-3 bg-emerald-50/50 ${index < comparisons.length - 1 ? 'border-b border-slate-200' : ''}`}>
                                <Check className="text-emerald-500 shrink-0" size={20} />
                                <span className="text-slate-700 font-medium">{row.protocol}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Mobile Comparison Cards */}
                <div className="md:hidden space-y-4">
                    {comparisons.map((row, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200"
                        >
                            <div className="bg-red-50 p-4 flex items-start gap-3 border-b border-slate-200">
                                <X className="text-red-400 shrink-0 mt-0.5" size={18} />
                                <span className="text-slate-600 text-sm">{row.traditional}</span>
                            </div>
                            <div className="bg-emerald-50 p-4 flex items-start gap-3">
                                <Check className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                                <span className="text-slate-700 font-medium text-sm">{row.protocol}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Emotional Absolution */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 max-w-3xl mx-auto text-center"
                >
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 md:p-10 border border-amber-200">
                        <p className="text-lg text-slate-700 leading-relaxed mb-6">
                            Si probaste keto, ayuno intermitente, detox de jugos, pastillas, fajas, y <strong className="text-amber-700">NADA funcionó a largo plazo</strong>...
                        </p>
                        <p className="text-xl text-slate-600 mb-4">
                            No es porque te falte disciplina.
                            <br />
                            <strong className="text-slate-800">Es porque estabas peleando la batalla equivocada.</strong>
                        </p>
                        <p className="text-slate-600 italic">
                            Estabas atacando las calorías cuando el verdadero enemigo era la inflamación.
                        </p>
                        <div className="mt-6 pt-6 border-t border-amber-200">
                            <p className="text-primary font-bold text-xl">
                                Hoy eso cambia.
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default ComparisonTable;

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ShoppingCart, Utensils, Users, Gift, Shield, Sparkles } from 'lucide-react';

const OfferBreakdown = () => {
    const modules = [
        {
            icon: <FileText size={28} />,
            title: 'Plan de Acción de 7 Días',
            subtitle: '"El Blueprint de Desinflamación"',
            description: 'El mapa completo día por día de exactamente qué comer, cuándo, y cómo prepararlo.',
            problem: 'Elimina la confusión. Cero decisiones que tomar.',
            result: 'Al día 7, tu abdomen está visiblemente más plano.',
            value: '$47 USD',
            color: 'from-emerald-500 to-green-600'
        },
        {
            icon: <Utensils size={28} />,
            title: 'Recetario Anti-Inflamación',
            subtitle: '"+30 Recetas de 15 Minutos"',
            description: 'Más de 30 recetas deliciosas diseñadas para desinflamar—todas listas en 15 minutos o menos.',
            problem: 'Nada de cocinar 2 horas ni buscar ingredientes exóticos.',
            result: 'Comes rico MIENTRAS desinflas.',
            value: '$27 USD',
            color: 'from-orange-500 to-amber-600'
        },
        {
            icon: <ShoppingCart size={28} />,
            title: 'Lista de Compras Inteligente',
            subtitle: '"Imprime y Listo"',
            description: 'Lista de supermercado organizada por pasillo. La imprimes o la abres en tu celular.',
            problem: 'Cero tiempo perdido pensando qué comprar.',
            result: 'Compras en 30 minutos todo para la semana.',
            value: '$17 USD',
            color: 'from-blue-500 to-cyan-600'
        },
        {
            icon: <Users size={28} />,
            title: 'Guía de Supervivencia Social',
            subtitle: '"Cenas, Fiestas y Restaurantes"',
            description: 'Estrategias específicas para salir a comer, ir a fiestas y cenas familiares sin arruinar tu progreso.',
            problem: '¿Tienes un evento este fin? No hay problema.',
            result: 'Vida social intacta MIENTRAS pierdes centímetros.',
            value: '$17 USD',
            color: 'from-purple-500 to-violet-600'
        }
    ];

    const bonuses = [
        {
            icon: <Shield size={24} />,
            title: 'Guía Escudo Anti-Rebote',
            subtitle: 'Mantén tus resultados de por vida',
            description: 'El protocolo de mantenimiento post-reset. Exactamente cómo comer después del día 7.',
            value: '$27 USD',
            highlight: true
        },
        {
            icon: <Gift size={24} />,
            title: 'Grupo Privado de WhatsApp',
            subtitle: 'Soporte real de personas reales',
            description: 'Comunidad de mujeres haciendo el protocolo. Dudas resueltas en minutos.',
            value: '$37 USD',
            highlight: true
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-emerald-50/30">
            <div className="container mx-auto px-4 max-w-5xl">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                        Todo lo que recibes hoy
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Un sistema completo para desinflamar tu abdomen en 7 días
                    </p>
                </motion.div>

                {/* Main Modules */}
                <div className="space-y-6 mb-12">
                    {modules.map((module, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow"
                        >
                            <div className="flex flex-col md:flex-row">
                                {/* Icon + Module Number */}
                                <div className={`bg-gradient-to-br ${module.color} p-6 md:p-8 flex flex-col items-center justify-center text-white md:w-40`}>
                                    <span className="text-sm font-bold opacity-80 mb-2">MÓDULO {index + 1}</span>
                                    {module.icon}
                                </div>

                                {/* Content */}
                                <div className="flex-1 p-6 md:p-8">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-slate-900 mb-1">{module.title}</h3>
                                            <p className="text-primary font-medium text-sm mb-3">{module.subtitle}</p>
                                            <p className="text-slate-600 mb-3">{module.description}</p>
                                            <p className="text-slate-500 text-sm mb-2">
                                                <span className="font-medium">✓ Problema que resuelve:</span> {module.problem}
                                            </p>
                                            <p className="text-emerald-600 font-medium text-sm">
                                                <span className="font-medium">→ Resultado:</span> {module.result}
                                            </p>
                                        </div>
                                        <div className="md:text-right">
                                            <span className="text-slate-400 text-sm">Valor:</span>
                                            <p className="text-2xl font-bold text-slate-300 line-through">{module.value}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bonus Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full font-bold text-sm">
                            <Sparkles size={18} />
                            BONOS EXCLUSIVOS GRATIS
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {bonuses.map((bonus, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                    GRATIS
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                                        {bonus.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-slate-900 mb-1">{bonus.title}</h4>
                                        <p className="text-amber-700 text-sm font-medium mb-2">{bonus.subtitle}</p>
                                        <p className="text-slate-600 text-sm mb-3">{bonus.description}</p>
                                        <p className="text-slate-400 text-sm">
                                            Valor: <span className="line-through">{bonus.value}</span>
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Total Value Stack */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-center text-white"
                >
                    <p className="text-slate-400 text-sm uppercase tracking-wider mb-2">Valor Total del Programa</p>
                    <p className="text-4xl md:text-5xl font-bold text-slate-300 line-through mb-4">$172 USD</p>

                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="text-slate-400 text-xl">Tu inversión hoy:</span>
                    </div>

                    <div className="flex items-center justify-center gap-3 mb-2">
                        <span className="text-5xl md:text-6xl font-extrabold text-primary">$17</span>
                        <span className="text-2xl font-bold text-slate-300">USD</span>
                    </div>
                    <p className="text-emerald-400 font-semibold text-lg mb-6">($375 MXN)</p>

                    <p className="text-slate-400 max-w-md mx-auto">
                        💡 Menos de lo que gastas en 2 cafés de Starbucks.
                        <br />
                        Por el sistema completo para desinflamar tu abdomen en 7 días.
                    </p>
                </motion.div>

                {/* Psychological Push */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-16 max-w-3xl mx-auto text-center"
                >
                    <div className="bg-red-50/50 rounded-2xl p-8 border border-red-100">
                        <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-6">
                            Una pregunta honesta...
                            <br />
                            <span className="text-red-700">¿Cuánto te está costando <i>realmente</i> no hacer nada?</span>
                        </h3>

                        <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                            <p>
                                No hablo de los $17 USD. Eso es menos de lo que gastas en una pizza que te inflama más.
                            </p>
                            <p>
                                Hablo del costo real:
                                <br />
                                La ropa que ya no te pones. Las fotos en las que te escondes.
                                <br />
                                La energía que te falta al final del día.
                            </p>
                            <p className="font-medium text-slate-800">
                                Tu cuerpo es el único lugar donde tienes que vivir por el resto de tu vida.
                            </p>
                            <p className="italic text-slate-500 text-base mt-4">
                                ¿No crees que vale la pena invertir en él lo mismo que cuesta un par de calcetines?
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default OfferBreakdown;

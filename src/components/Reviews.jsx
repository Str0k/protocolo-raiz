import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, User } from 'lucide-react';

const Reviews = () => {
    const testimonials = [
        {
            name: 'Ana M.',
            age: 34,
            city: 'Guadalajara',
            verified: true,
            avatar: '👩‍🦰',
            mainQuote: 'En 7 días mi pantalón volvió a cerrar sin hacer ejercicio. Pensé que era grasa, pero era pura inflamación.',
            secondaryQuote: 'Bajé 5 cm de cintura y ya no tengo esa barriga de 6 meses después de comer.',
            rating: 5
        },
        {
            name: 'María C.',
            age: 29,
            city: 'CDMX',
            verified: true,
            avatar: '👩',
            mainQuote: 'Por fin entendí que mi problema no era fuerza de voluntad. Era mi intestino inflamado.',
            secondaryQuote: 'En 6 días dejé de verme embarazada después de cada comida. Es increíble.',
            rating: 5
        },
        {
            name: 'Lucía R.',
            age: 42,
            city: 'Monterrey',
            verified: true,
            avatar: '👱‍♀️',
            mainQuote: 'Probé keto, ayuno intermitente, todo. Nada funcionó hasta que arreglé mi raíz.',
            secondaryQuote: 'Ya no tengo gases constantes ni esa sensación de estar siempre hinchada.',
            rating: 5
        },
        {
            name: 'Carmen S.',
            age: 38,
            city: 'Puebla',
            verified: true,
            avatar: '👩‍💼',
            mainQuote: 'Tengo intestino sensible y pensé que nada me iba a funcionar. Me equivoqué totalmente.',
            secondaryQuote: 'El protocolo es súper gentil pero efectivo. Perdí 6 cm y mi digestión mejoró 100%.',
            rating: 5
        },
        {
            name: 'Sofia L.',
            age: 31,
            city: 'Querétaro',
            verified: true,
            avatar: '👩‍🎓',
            mainQuote: 'No es una dieta más. Es realmente un reset completo. Mi energía cambió desde el día 3.',
            secondaryQuote: 'Ya no necesito 3 cafés para funcionar. Me levanto con claridad mental.',
            rating: 5
        },
        {
            name: 'Patricia G.',
            age: 45,
            city: 'Tijuana',
            verified: true,
            avatar: '👩‍⚕️',
            mainQuote: 'Después de las fiestas estaba desesperada. 7 días después volví a sentirme yo.',
            secondaryQuote: 'Mi ropa volvió a quedarme y lo mejor: sin pasar hambre ni contar calorías.',
            rating: 5
        }
    ];

    return (
        <section className="py-20 md:py-24 bg-gradient-to-b from-white to-slate-50">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                        Resultados reales de mujeres como tú
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Sin filtros. Sin promesas vacías. Solo historias reales de transformación.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 relative hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Verified Badge */}
                            <div className="absolute top-4 right-4">
                                <div className="flex items-center gap-1 px-3 py-1 bg-emerald-50 rounded-full">
                                    <CheckCircle size={14} className="text-primary" />
                                    <span className="text-xs font-semibold text-primary">Verificado</span>
                                </div>
                            </div>

                            {/* Avatar and Name */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-100 to-green-100 flex items-center justify-center text-2xl">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-xs text-slate-500">
                                        {testimonial.age} años, {testimonial.city}
                                    </p>
                                </div>
                            </div>

                            {/* Rating Stars */}
                            <div className="flex gap-1 mb-3">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="text-accent fill-accent" />
                                ))}
                            </div>

                            {/* Main Quote */}
                            <blockquote className="mb-3">
                                <p className="text-slate-700 font-medium leading-relaxed">
                                    "{testimonial.mainQuote}"
                                </p>
                            </blockquote>

                            {/* Secondary Quote */}
                            {testimonial.secondaryQuote && (
                                <p className="text-sm text-slate-600 italic">
                                    {testimonial.secondaryQuote}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* WhatsApp Screenshots Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mt-20"
                >
                    <div className="text-center mb-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                            Pantallas reales de nuestro grupo privado
                        </h3>
                        <p className="text-slate-600">
                            Sin filtros. Sin promesas vacías. Solo mensajes de mujeres que ya empezaron su reset.
                        </p>
                    </div>

                    {/* Screenshot Cards - Horizontal Scroll */}
                    <div className="overflow-x-auto pb-4 -mx-4 px-4">
                        <div className="flex gap-4 md:justify-center" style={{ minWidth: 'min-content' }}>
                            {[
                                {
                                    name: 'María C. – 29 años',
                                    message: 'No lo puedo creer, mi pantalón volvió a cerrar en 5 días 😭🙏',
                                    time: '10:23 AM'
                                },
                                {
                                    name: 'Ana M. – 34 años',
                                    message: 'Ya no tengo gases todo el día, por fin puedo ir a reuniones sin miedo 🙌',
                                    time: '2:15 PM'
                                },
                                {
                                    name: 'Lucía R. – 42 años',
                                    message: 'Pensé que era grasa, pero en 7 días mi barriga bajó muchísimo. Gracias ❤️',
                                    time: '5:47 PM'
                                }
                            ].map((screenshot, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.15 }}
                                    className="flex-shrink-0 w-80 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 shadow-2xl border border-slate-700"
                                    style={{ minWidth: '320px' }}
                                >
                                    {/* Header with blurred contact info */}
                                    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center">
                                            <User size={20} className="text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white font-semibold text-sm">
                                                {screenshot.name}
                                            </p>
                                            <p className="text-white/40 text-xs blur-sm select-none">
                                                +52 *** *** ****
                                            </p>
                                        </div>
                                    </div>

                                    {/* Message Bubble */}
                                    <div className="bg-emerald-600 rounded-2xl rounded-tl-sm p-4 mb-2">
                                        <p className="text-white text-sm leading-relaxed">
                                            {screenshot.message}
                                        </p>
                                    </div>

                                    {/* Timestamp */}
                                    <p className="text-white/40 text-xs text-right">
                                        {screenshot.time}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Reviews;

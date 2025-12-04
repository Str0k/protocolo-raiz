import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedTitle from './AnimatedTitle';
import RevealOnScroll from './RevealOnScroll';
import InlineWhatsAppButton from './InlineWhatsAppButton';

const Problem = () => {
    const symptoms = [
        {
            title: "La Prueba del Espejo",
            description: "Tu abdomen amanece plano pero termina el día distendido como un globo."
        },
        {
            title: "Niebla Mental",
            description: "Te cuesta concentrarte y sientes un cansancio que no se quita durmiendo."
        },
        {
            title: "El Engaño de la Báscula",
            description: "Subiste 3-4 kilos en días. (Spoiler: Es agua y glucógeno retenido, no grasa real)."
        }
    ];

    return (
        <section id="problem" className="py-24 md:py-32 bg-surface relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <RevealOnScroll width="100%">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 relative">
                            <div className="absolute -left-10 -top-10 w-64 h-64 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
                            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-secondary/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
                            <img
                                src="/bloating-pain.jpg"
                                alt="Sensación de pesadez e inflamación"
                                className="relative z-10 rounded-2xl shadow-2xl w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-500 border border-white/10"
                            />
                        </div>

                        <div className="order-1 md:order-2">
                            <div className="mb-8">
                                <span className="text-red-400 font-bold tracking-wider text-sm uppercase mb-2 block">
                                    ⚠️ LA REALIDAD SILENCIOSA
                                </span>
                                <AnimatedTitle
                                    text="¿Te reconoces en el espejo hoy?"
                                    className="text-3xl md:text-4xl font-bold text-text mb-6 justify-start"
                                />
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    Es 2 de enero. Te despiertas, te miras al espejo y sientes pesadez.
                                    El botón del pantalón que cerraba en noviembre ahora te corta la respiración.
                                    Tu mente te castiga: 'No tengo disciplina', 'Arruiné todo'.
                                    Pero espera... Revisa si tienes estos síntomas:
                                </p>
                            </div>

                            <div className="space-y-4">
                                {symptoms.map((symptom, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-red-400/30 transition-colors group shadow-sm"
                                    >
                                        <div className="text-red-400 shrink-0 mt-1 group-hover:scale-110 transition-transform">
                                            <AlertTriangle size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-text mb-1">{symptom.title}</h3>
                                            <p className="text-slate-500 text-sm">{symptom.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-8">
                                <InlineWhatsAppButton text="¿Te identificas? Hablemos por WhatsApp" />
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default Problem;

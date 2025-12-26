import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Problem = () => {
    return (
        <section id="problem" className="py-16 md:py-24 bg-surface relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-5xl relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                        La Verdad Sobre Tu "Peso" de Diciembre
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                    {/* LEFT COLUMN - MYTH */}
                    <div className="bg-red-50/50 rounded-2xl p-6 md:p-8 border border-red-100 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-6">
                            <XCircle className="text-red-500 w-8 h-8 flex-shrink-0" />
                            <h3 className="text-xl font-bold text-red-700">Lo Que Crees Que Pasó</h3>
                        </div>
                        <ul className="space-y-4 flex-1">
                            <li className="flex items-start gap-3">
                                <span className="text-red-400 mt-1">•</span>
                                <span className="text-slate-700 font-medium">"Subí 5 kilos de grasa en 2 semanas"</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-400 mt-1">•</span>
                                <span className="text-slate-700 font-medium">"No tengo disciplina"</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-400 mt-1">•</span>
                                <span className="text-slate-700 font-medium">"Necesito una dieta extrema para bajar"</span>
                            </li>
                        </ul>
                    </div>

                    {/* RIGHT COLUMN - REALITY */}
                    <div className="bg-green-50/50 rounded-2xl p-6 md:p-8 border border-green-100 flex flex-col h-full shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-bl-lg">
                            DATO CIENTÍFICO
                        </div>
                        <div className="flex items-center gap-3 mb-6">
                            <CheckCircle className="text-green-500 w-8 h-8 flex-shrink-0" />
                            <h3 className="text-xl font-bold text-green-700">Lo Que Realmente Pasó</h3>
                        </div>
                        <ul className="space-y-4 flex-1">
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 mt-1">✓</span>
                                <span className="text-slate-700 font-medium">Tu intestino está inflamado por los <strong>5 Jinetes</strong> (gluten, azúcar, lácteos, aceites, alcohol)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 mt-1">✓</span>
                                <span className="text-slate-700 font-medium">Tu cuerpo retuvo 2-3 kg de agua y glucógeno</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 mt-1">✓</span>
                                <span className="text-slate-700 font-medium">Solo necesitas apagar el incendio interno, no pasar hambre</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                        La báscula miente. El <strong>80% del "peso"</strong> que subiste es inflamación, retención de líquidos y desarreglo de tu microbiota.
                        Tu cuerpo renueva las células intestinales cada 5-7 días. <span className="text-primary font-bold">Tienes una ventana perfecta para resetear.</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Problem;

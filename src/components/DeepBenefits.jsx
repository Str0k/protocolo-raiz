import React from 'react';
import { Brain, Feather, Zap, Sparkles, Sun, Leaf } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const DeepBenefits = () => {
    const benefits = [
        {
            icon: <Brain size={32} className="text-amber-600" />,
            bgIcon: <Sparkles size={120} className="text-amber-500/10" />,
            gradient: "from-amber-50 to-orange-50",
            borderColor: "border-amber-100",
            title: "CLARIDAD MENTAL",
            headline: "De la Niebla al Enfoque Láser",
            painPoint: "¿Te sientes lento, te cuesta concentrarte o se te olvidan las cosas simples? Esa 'niebla mental' son las neurotoxinas de la inflamación afectando tu cerebro.",
            benefit: "Al eliminar los disparadores inflamatorios, tu cerebro se enciende. Recuperarás la concentración, la agilidad mental y esa sensación de estar 'despierto' de verdad. Adiós a la ansiedad por el azúcar a media tarde."
        },
        {
            icon: <Leaf size={32} className="text-emerald-600" />,
            bgIcon: <Feather size={120} className="text-emerald-500/10" />,
            gradient: "from-emerald-50 to-teal-50",
            borderColor: "border-emerald-100",
            title: "LIBERTAD DIGESTIVA",
            headline: "De la Pesadez a la Ligereza",
            painPoint: "Esa sensación de 'embarazo de comida', los gases dolorosos y el tener que desabrocharte el botón después de comer. El miedo a comer fuera por si te cae mal.",
            benefit: "Imagina comer y no sentir nada. Una digestión silenciosa. Tu abdomen se mantiene plano desde que despiertas hasta que te duermes. La ropa te queda igual de cómoda todo el día."
        },
        {
            icon: <Sun size={32} className="text-blue-600" />,
            bgIcon: <Zap size={120} className="text-blue-500/10" />,
            gradient: "from-blue-50 to-indigo-50",
            borderColor: "border-blue-100",
            title: "ENERGÍA VITAL",
            headline: "De Sobrevivir a Vivir",
            painPoint: "Levantarte cansado aunque hayas dormido. Necesitar 3 cafés para arrancar. Llegar al final del día arrastrándote y sin ganas de jugar con tus hijos o salir.",
            benefit: "Energía estable y constante sin picos ni bajones. Te levantarás renovado antes de que suene la alarma. Tendrás combustible de sobra para tu trabajo, tu familia y para ti mismo."
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <RevealOnScroll width="100%">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Esto va mucho más allá de un número en la báscula
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            El Protocolo de Raíz no solo desinflama tu cuerpo. <span className="text-secondary font-semibold">Resetea tu sistema operativo completo.</span> Así es como se siente la verdadera desintoxicación:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {benefits.map((item, index) => (
                            <div
                                key={index}
                                className={`relative bg-gradient-to-br ${item.gradient} rounded-3xl p-8 border ${item.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden`}
                            >
                                {/* Background Icon */}
                                <div className="absolute -bottom-4 -right-4 rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                                    {item.bgIcon}
                                </div>

                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="bg-white p-3 rounded-2xl shadow-sm">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-sm font-bold tracking-widest text-slate-500 uppercase">
                                            {item.title}
                                        </h3>
                                    </div>

                                    {/* Content */}
                                    <h4 className="text-2xl font-bold text-slate-800 mb-6">
                                        {item.headline}
                                    </h4>

                                    <div className="space-y-6">
                                        <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white/50">
                                            <p className="text-slate-500 text-sm leading-relaxed italic">
                                                "{item.painPoint}"
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-slate-800 font-medium leading-relaxed">
                                                {item.benefit}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default DeepBenefits;

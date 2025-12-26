import React from 'react';
import { ShoppingCart, GlassWater, Users, Headphones, Shield, Utensils } from 'lucide-react';
import { motion } from 'framer-motion';

const Bonuses = () => {
    const bonuses = [
        {
            icon: <Headphones size={28} />,
            title: "Mente Anti-Inflamatoria",
            value: "$97",
            description: "5 Sesiones de reprogramación subconsciente para eliminar la ansiedad por comer."
        },
        {
            icon: <Shield size={28} />,
            title: "Escudo Anti-Rebote",
            value: "$37",
            description: "Estrategia exacta para reintroducir alimentos sin recuperar el peso perdido."
        },
        {
            icon: <Utensils size={28} />,
            title: "Recetario Express",
            value: "$27",
            description: "9 Recetas deliciosas anti-inflamatorias que se cocinan en menos de 15 minutos."
        },
        {
            icon: <Users size={28} />,
            title: "Guía Social",
            value: "$27",
            description: "Cómo comer en restaurantes sin inflamarme y el 'Semáforo del Alcohol'."
        },
        {
            icon: <GlassWater size={28} />,
            title: "Jugos 'Root Reset'",
            value: "$19",
            description: "Los 3 elixires líquidos para drenar la retención de líquidos en 24 horas."
        },
        {
            icon: <ShoppingCart size={28} />,
            title: "Lista de Compra",
            value: "$19",
            description: "No pienses qué comprar. Ve al súper, sigue la checklist y listo."
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                        Todo Esto Incluido Gratis Hoy
                    </h2>
                    <p className="text-xl font-bold text-primary">
                        Valor Total: <span className="line-through text-slate-400 decoration-red-500/50">$226 USD</span> <span className="text-text">→ Hoy Incluido</span>
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mb-12">
                    {bonuses.map((bonus, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow"
                        >
                            <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4">
                                {bonus.icon}
                            </div>
                            <h3 className="text-base font-bold text-text mb-1">{bonus.title}</h3>
                            <p className="text-slate-400 text-xs font-bold mb-2">Valor: {bonus.value}</p>
                            <p className="text-slate-500 text-xs leading-relaxed hidden md:block">
                                {bonus.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Bonuses;

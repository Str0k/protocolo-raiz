import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Utensils, ShoppingCart, MapPin, Headphones, Shield } from 'lucide-react';

const ProductSneakPeek = () => {
    const previews = [
        {
            title: 'Menú Día 3',
            description: 'Desayuno, comida y cena pre-planeados',
            icon: Utensils,
            rotation: -2
        },
        {
            title: 'Receta: Caldo Root Reset',
            description: '15 min · Anti-inflamatorio',
            icon: FileText,
            rotation: 1
        },
        {
            title: 'Lista de Compra',
            description: 'Por fase · Marcas accesibles',
            icon: ShoppingCart,
            rotation: -1
        },
        {
            title: 'Guía Social',
            description: 'Restaurantes, fiestas, reuniones',
            icon: MapPin,
            rotation: 2
        }
    ];

    return (
        <section className="py-20 md:py-24 bg-gradient-to-b from-slate-50 to-white">
            <div className="container mx-auto px-4 max-w-5xl">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                        Una mirada dentro de tu protocolo
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        No es un PDF aburrido. Es un ecosistema diseñado para tu celular.
                    </p>
                </motion.div>

                {/* Preview Cards Collage */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    {previews.map((preview, index) => {
                        const Icon = preview.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30, rotate: 0 }}
                                whileInView={{ opacity: 1, y: 0, rotate: preview.rotation }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, rotate: 0 }}
                                className="bg-white rounded-2xl p-6 shadow-xl border border-slate-200 cursor-pointer"
                                style={{
                                    transformOrigin: 'center center'
                                }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center mb-4">
                                    <Icon size={24} className="text-white" />
                                </div>
                                <h3 className="font-bold text-slate-900 text-sm mb-1">
                                    {preview.title}
                                </h3>
                                <p className="text-xs text-slate-600">
                                    {preview.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Features List */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-emerald-50 rounded-2xl p-8 border border-primary/20"
                >
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-slate-700">
                            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                                <span className="text-white text-sm font-bold">✓</span>
                            </div>
                            <span className="font-medium">
                                Diseñado en formato vertical para tu celular
                            </span>
                        </li>
                        <li className="flex items-center gap-3 text-slate-700">
                            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                                <span className="text-white text-sm font-bold">✓</span>
                            </div>
                            <span className="font-medium">
                                Navegación intuitiva por días y fases
                            </span>
                        </li>
                        <li className="flex items-center gap-3 text-slate-700">
                            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                                <span className="text-white text-sm font-bold">✓</span>
                            </div>
                            <span className="font-medium">
                                Todo listo para usar sin pensar qué comer
                            </span>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

export default ProductSneakPeek;

import React from 'react';
import { Check, ShieldCheck, Play, Shield, Utensils } from 'lucide-react';
import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import TrustRow from './TrustRow';

const Pricing = () => {
    return (
        <section id="pricing" className="py-24 md:py-32 bg-background text-text relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/10 to-transparent -z-10"></div>
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto bg-white text-text rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-slate-200"
                >

                    <div className="md:w-1/2 bg-slate-100 relative min-h-[300px] md:min-h-full group">
                        <img
                            src="/bundle.jpg"
                            alt="El Protocolo de Raíz Bundle"
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent md:bg-gradient-to-r"></div>
                    </div>

                    <div className="md:w-1/2 p-8 md:p-12">
                        <div className="bg-secondary inline-block px-4 py-1 rounded-full text-white font-bold tracking-wider text-xs uppercase mb-6 shadow-lg shadow-secondary/20">
                            Oferta Limitada
                        </div>

                        <div className="text-center md:text-left">
                            <CountdownTimer className="mb-4 justify-center md:justify-start" />
                            <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                                <span className="text-slate-400 text-xl line-through decoration-red-500 decoration-2">
                                    $30 USD
                                </span>
                                <span className="text-5xl font-bold text-primary">
                                    $17 USD
                                </span>
                            </div>

                            <p className="text-slate-600 mb-8 font-medium">
                                Acceso inmediato y de por vida
                            </p>

                            <ul className="text-left space-y-4 mb-10">
                                <li className="flex items-start gap-3">
                                    <Check className="text-primary shrink-0" size={20} />
                                    <span className="text-slate-600">Ebook Completo (PDF)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="text-primary shrink-0" size={20} />
                                    <span className="text-slate-600">3 Bonos Exclusivos</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="text-primary shrink-0" size={20} />
                                    <span className="text-slate-600">Acceso de por vida</span>
                                </li>
                            </ul>

                            {/* Premium Audio Bonus Card */}
                            <div className="bg-slate-900 rounded-xl p-6 mb-8 border border-amber-500/30 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 blur-3xl -z-10 rounded-full"></div>

                                {/* Header Badge */}
                                <div className="inline-block bg-amber-500/20 text-amber-400 text-[10px] font-bold px-2 py-1 rounded mb-3 border border-amber-500/20 tracking-wider">
                                    🎁 REGALO VIP (Valorado en $97 USD)
                                </div>

                                {/* Main Title */}
                                <h4 className="text-white font-bold text-lg leading-tight mb-2">
                                    Pack de Neuro-Programación: <span className="text-amber-400">'Mente Anti-Inflamatoria'</span>
                                </h4>
                                <p className="text-slate-400 text-xs mb-5 leading-relaxed">
                                    No uses fuerza de voluntad. Usa ciencia. 5 sesiones de audio diseñadas para apagar la ansiedad y reprogramar tu relación con la comida.
                                </p>

                                {/* The Playlist */}
                                <div className="space-y-3 mb-6">
                                    {[
                                        { title: "Botón de Pánico: Stop Ansiedad Inmediata", duration: "3 min" },
                                        { title: "Ducha Anti-Cortisol: Elimina el estrés del día", duration: "5 min" },
                                        { title: "Hipnopedia Nocturna: Repara tu cuerpo mientras duermes", duration: "" },
                                        { title: "Escudo Social: Confianza indestructible en fiestas", duration: "" },
                                        { title: "Reseteo de Emergencia: Borra la culpa y reinicia", duration: "" }
                                    ].map((track, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm group/track">
                                            <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center shrink-0 group-hover/track:bg-amber-500 transition-colors duration-300">
                                                <Play size={10} className="fill-current text-slate-400 group-hover/track:text-slate-900 ml-0.5" />
                                            </div>
                                            <div className="flex-1">
                                                <span className="text-slate-300 font-medium">{track.title}</span>
                                                {track.duration && <span className="text-slate-500 text-xs ml-1">({track.duration})</span>}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* The Closer */}
                                <div className="text-center pt-4 border-t border-slate-800">
                                    <p className="text-slate-400 text-xs mb-1">GRATIS - INCLUIDO EN TU ORDEN HOY</p>
                                    <div className="text-amber-400 font-bold text-xl tracking-widest">GRATIS</div>
                                </div>
                            </div>

                            {/* Bonus 2: Anti-Rebote Shield */}
                            <div className="bg-emerald-900 rounded-xl p-6 mb-8 border border-emerald-500/30 relative overflow-hidden group">
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/10 blur-3xl -z-10 rounded-full"></div>

                                {/* Header Badge */}
                                <div className="inline-block bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded text-[10px] font-bold mb-3 border border-emerald-500/20 tracking-wider">
                                    🛡️ GARANTÍA DE RESULTADOS
                                </div>

                                {/* Main Content */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-emerald-800 flex items-center justify-center shrink-0 border-2 border-emerald-500/40">
                                        <Shield size={24} className="text-emerald-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-white font-bold text-lg leading-tight mb-2">
                                            Guía de Salida: <span className="text-emerald-400">El Escudo Anti-Rebote</span>
                                        </h4>
                                        <p className="text-slate-400 text-xs mb-4 leading-relaxed">
                                            ¿Qué pasa el día 8? No pierdas tu progreso. Aprende a reintroducir alimentos sin recuperar la inflamación.
                                        </p>
                                    </div>
                                </div>

                                {/* Bullet Points */}
                                <div className="space-y-2 mb-5 ml-16">
                                    <div className="flex items-start gap-2 text-sm">
                                        <span className="text-emerald-400 shrink-0">✅</span>
                                        <span className="text-slate-300">Estrategia para comer fuera de casa sin culpa.</span>
                                    </div>
                                    <div className="flex items-start gap-2 text-sm">
                                        <span className="text-emerald-400 shrink-0">✅</span>
                                        <span className="text-slate-300">Cómo mantener el vientre plano de por vida.</span>
                                    </div>
                                    <div className="flex items-start gap-2 text-sm">
                                        <span className="text-emerald-400 shrink-0">✅</span>
                                        <span className="text-slate-300">La regla del 80/20 explicada.</span>
                                    </div>
                                </div>

                                {/* Value */}
                                <div className="text-center pt-4 border-t border-emerald-800">
                                    <p className="text-slate-400 text-xs mb-1">
                                        Valor Real: <span className="line-through text-slate-500">$37 USD</span>
                                    </p>
                                    <div className="text-emerald-400 font-bold text-xl tracking-widest">GRATIS HOY</div>
                                </div>
                            </div>

                            {/* Bonus 3: Recetario Express */}
                            <div className="bg-slate-900 rounded-xl p-6 mb-8 border border-orange-500/30 relative overflow-hidden group">
                                <div className="absolute top-0 left-1/2 w-40 h-40 bg-orange-500/10 blur-3xl -z-10 rounded-full -translate-x-1/2"></div>

                                {/* Header Badge */}
                                <div className="inline-block bg-orange-500/20 text-orange-400 px-2 py-1 rounded text-[10px] font-bold mb-3 border border-orange-500/20 tracking-wider">
                                    🍽️ PARA LOS AMANTES DEL SABOR
                                </div>

                                {/* Main Content */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-orange-900/50 flex items-center justify-center shrink-0 border-2 border-orange-500/40">
                                        <Utensils size={24} className="text-orange-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-white font-bold text-lg leading-tight mb-2">
                                            Recetario Express: <span className="text-orange-400">Desinflama Comiendo</span>
                                        </h4>
                                        <p className="text-slate-400 text-xs mb-4 leading-relaxed">
                                            ¿Crees que comer sano es aburrido? Te equivocas. 9 Recetas deliciosas que se cocinan en menos de 15 minutos.
                                        </p>
                                    </div>
                                </div>

                                {/* The Menu */}
                                <div className="space-y-2 mb-5 ml-16">
                                    <div className="flex items-start gap-2 text-sm">
                                        <span className="text-orange-400 shrink-0">🥞</span>
                                        <span className="text-slate-300"><strong>Desayunos:</strong> Pancakes sin culpa y Bowls de energía.</span>
                                    </div>
                                    <div className="flex items-start gap-2 text-sm">
                                        <span className="text-orange-400 shrink-0">🥗</span>
                                        <span className="text-slate-300"><strong>Comidas:</strong> Platos fuertes que no te dejan con hambre.</span>
                                    </div>
                                    <div className="flex items-start gap-2 text-sm">
                                        <span className="text-orange-400 shrink-0">🍵</span>
                                        <span className="text-slate-300"><strong>Cenas:</strong> Opciones ligeras para quemar grasa mientras duermes.</span>
                                    </div>
                                </div>

                                {/* Value */}
                                <div className="text-center pt-4 border-t border-slate-800">
                                    <p className="text-slate-400 text-xs mb-1">
                                        Valor Real: <span className="line-through text-slate-500">$27 USD</span>
                                    </p>
                                    <div className="text-orange-400 font-bold text-xl tracking-widest">GRATIS</div>
                                </div>
                            </div>

                            <a
                                href="https://pay.hotmart.com/C103224627H?checkoutMode=2"
                                className="custom-btn w-full text-lg block"
                            >
                                <span>QUIERO MI RESET AHORA</span>
                            </a>

                            <TrustRow className="items-center md:items-start mb-6" />

                            <div className="flex items-center justify-center gap-2 text-xs text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-200">
                                <ShieldCheck size={16} className="text-primary" />
                                <p>
                                    Pruébalo por 7 días. Si no sientes la diferencia, te devolvemos el 100% de tu dinero.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;

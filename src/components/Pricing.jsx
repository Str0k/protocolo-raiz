import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import TrustRow from './TrustRow';

const Pricing = () => {
    return (
        <section className="py-24 md:py-32 bg-background text-text relative overflow-hidden">
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

                            <a
                                onclick="return false;"
                                href="https://pay.hotmart.com/C103224627H?checkoutMode=2"
                                className="hotmart-fb w-full bg-gradient-to-r from-primary to-green-600 hover:from-primary/90 hover:to-green-600/90 text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-primary/20 transition-all mb-6 transform hover:-translate-y-1 block text-center"
                            >
                                QUIERO MI RESET AHORA
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

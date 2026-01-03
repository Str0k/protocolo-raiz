import React, { useEffect, useState } from 'react';
import { Lock, ShieldCheck, CreditCard, Banknote, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import PaymentMethods from './PaymentMethods';
import { getFacebookParamBuilder } from '../utils/FacebookParamBuilder';

const HOTMART_BASE_URL = 'https://pay.hotmart.com/C103224627H?checkoutMode=2';

const HotmartWidget = () => {
    const [hotmartUrl, setHotmartUrl] = useState(HOTMART_BASE_URL);

    useEffect(() => {
        const setupUrl = async () => {
            try {
                const builder = getFacebookParamBuilder();
                await builder.initialize();

                const params = builder.getParams();
                const url = new URL(HOTMART_BASE_URL);

                if (params.fbc) {
                    url.searchParams.set('sck', params.fbc);
                }
                if (params.fbp) {
                    url.searchParams.set('src', params.fbp);
                }

                localStorage.setItem('fb_tracking_params', JSON.stringify({
                    fbc: params.fbc,
                    fbp: params.fbp,
                    clientIp: params.clientIp,
                    userAgent: params.userAgent
                }));

                setHotmartUrl(url.toString());
            } catch (error) {
                console.error('[HotmartWidget] Error setting up URL:', error);
            }
        };

        setupUrl();

        const handleHotmartPurchase = (event) => {
            if (event.data && event.data.type === 'hotmart:purchase:approved') {
                if (window.fbq) {
                    window.fbq('track', 'Purchase', {
                        value: 17.00,
                        currency: 'USD',
                        content_name: 'El Protocolo de Raíz',
                        content_type: 'product'
                    });
                }
            }
        };

        window.addEventListener('message', handleHotmartPurchase);
        return () => window.removeEventListener('message', handleHotmartPurchase);
    }, []);

    return (
        <section id="checkout" className="py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white">
            <div className="container mx-auto px-4 max-w-2xl">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <div className="flex items-center justify-center gap-2 text-slate-400 text-sm font-medium mb-4">
                        <Lock size={14} />
                        Checkout Seguro SSL
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                        Completa tu compra
                    </h2>
                    <p className="text-slate-600">
                        Acceso inmediato después del pago
                    </p>
                </motion.div>

                {/* Checkout Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-2xl shadow-slate-200/50"
                >
                    {/* Price Summary */}
                    <div className="text-center mb-8 pb-8 border-b border-slate-100">
                        <p className="text-sm text-slate-500 mb-2">El Protocolo de Raíz</p>
                        <div className="flex items-baseline justify-center gap-2">
                            <span className="text-4xl md:text-5xl font-bold text-slate-900">$17</span>
                            <span className="text-lg text-slate-500">USD</span>
                        </div>
                        <p className="text-slate-600 mt-1">≈ $375 MXN</p>
                    </div>

                    {/* Hotmart Button */}
                    <div className="mb-8">
                        <a
                            href={hotmartUrl}
                            className="hotmart-fb hotmart__button-checkout group relative block w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold text-xl py-5 px-8 rounded-2xl shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all transform hover:-translate-y-0.5 text-center overflow-hidden"
                            style={{ border: 'none', textDecoration: 'none' }}
                        >
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

                            <span className="relative z-10 flex items-center justify-center gap-3">
                                <Sparkles size={22} />
                                <span>DESCARGAR MI GUÍA AHORA</span>
                            </span>
                        </a>
                    </div>

                    {/* Trust Badges */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <div className="flex flex-col items-center gap-2 text-center">
                            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                                <Lock size={20} />
                            </div>
                            <span className="text-xs font-medium text-slate-600">Pago Seguro</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 text-center">
                            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                                <ShieldCheck size={20} />
                            </div>
                            <span className="text-xs font-medium text-slate-600">Garantía 7 días</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 text-center">
                            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                                <CreditCard size={20} />
                            </div>
                            <span className="text-xs font-medium text-slate-600">Tarjetas/PayPal</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 text-center">
                            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                                <Banknote size={20} />
                            </div>
                            <span className="text-xs font-medium text-slate-600">Efectivo</span>
                        </div>
                    </div>

                    {/* Payment Methods */}
                    <div className="pt-6 border-t border-slate-100">
                        <p className="text-xs text-slate-500 text-center mb-4">Aceptamos todos los métodos de pago:</p>
                        <PaymentMethods theme="light" />
                    </div>
                </motion.div>

                {/* Hotmart Badge */}
                <div className="text-center mt-6">
                    <div className="inline-flex items-center gap-2 text-slate-400 text-sm">
                        <span>Procesado por</span>
                        <span className="font-bold text-slate-500">HOTMART</span>
                        <span className="text-xs bg-slate-100 px-2 py-0.5 rounded">Seguro</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HotmartWidget;

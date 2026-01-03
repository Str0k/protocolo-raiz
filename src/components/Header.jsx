import React from 'react';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800/50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                            <span className="text-white font-bold text-lg">R</span>
                        </div>
                        <div className="hidden sm:block">
                            <p className="font-bold text-white text-sm">Protocolo de Raíz</p>
                            <p className="text-xs text-slate-400">Desinflamación intestinal</p>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <a
                        href="#checkout"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm py-2.5 px-5 rounded-lg transition-colors"
                        onClick={() => {
                            if (window.fbq) window.fbq('track', 'InitiateCheckout');
                        }}
                    >
                        Obtener Guía
                    </a>

                </div>
            </div>
        </header>
    );
};

export default Header;

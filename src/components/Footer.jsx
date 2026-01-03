import React from 'react';
import { Heart, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 bg-slate-900 border-t border-slate-800">
            <div className="container mx-auto px-4 max-w-4xl">

                <div className="text-center">
                    {/* Brand */}
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                            <span className="text-white font-bold">R</span>
                        </div>
                        <span className="font-bold text-white">Protocolo de Raíz</span>
                    </div>

                    {/* Tagline */}
                    <p className="text-slate-400 text-sm mb-6 flex items-center justify-center gap-2">
                        Hecho con <Heart size={14} className="text-red-400" /> para mujeres que quieren sentirse bien
                    </p>

                    {/* Links */}
                    <div className="flex items-center justify-center gap-6 text-sm text-slate-500 mb-6">
                        <a href="mailto:soporte@sanatucuerpo.com" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
                            <Mail size={14} />
                            Soporte
                        </a>
                        <span className="text-slate-700">|</span>
                        <span>Garantía 7 días</span>
                        <span className="text-slate-700">|</span>
                        <span>Pago seguro</span>
                    </div>

                    {/* Copyright */}
                    <p className="text-xs text-slate-600">
                        © {new Date().getFullYear()} Protocolo de Raíz. Todos los derechos reservados.
                    </p>
                    <p className="text-xs text-slate-600 mt-1">
                        Este producto no pretende diagnosticar, tratar, curar o prevenir ninguna enfermedad.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;

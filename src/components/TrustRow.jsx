import React from 'react';
import { Lock, ShieldCheck, CreditCard } from 'lucide-react';

const TrustRow = ({ className = "" }) => {
    return (
        <div className={`flex flex-col gap-2 mt-3 ${className}`}>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] md:text-xs text-slate-500 font-medium opacity-90">
                <span className="flex items-center gap-1">
                    <Lock size={12} className="text-green-600" />
                    Pago 100% Seguro (SSL Encrypted)
                </span>
                <span className="flex items-center gap-1">
                    <ShieldCheck size={12} className="text-blue-600" />
                    Garantía de Privacidad
                </span>
            </div>

            <div className="flex items-center gap-2 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
                {/* Simple visual representation of cards using text/icons for now to keep it lightweight */}
                <div className="flex items-center gap-1 bg-white border border-slate-200 px-1.5 py-0.5 rounded text-[10px] font-bold text-slate-700">
                    <span className="text-blue-800">Visa</span>
                </div>
                <div className="flex items-center gap-1 bg-white border border-slate-200 px-1.5 py-0.5 rounded text-[10px] font-bold text-slate-700">
                    <span className="text-red-600">Master</span><span className="text-orange-500">card</span>
                </div>
                <div className="flex items-center gap-1 bg-white border border-slate-200 px-1.5 py-0.5 rounded text-[10px] font-bold text-slate-700">
                    <span className="text-blue-700 italic">PayPal</span>
                </div>
            </div>
        </div>
    );
};

export default TrustRow;

import React from 'react';
import { Users, Clock } from 'lucide-react';

const LimitedAvailability = () => {
    // Logic for "spots left" - keeps it realistic but static for now, or use date math
    // Example: 50 spots total. 38 taken.
    const totalSpots = 50;
    const takenSpots = 38;
    const spotsLeft = totalSpots - takenSpots;
    const percentage = (takenSpots / totalSpots) * 100;

    // Calculate next month text
    const date = new Date();
    const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    const monthName = nextMonth.toLocaleString('es-ES', { month: 'long' });
    const nextOpeningText = `1 de ${monthName} de ${nextMonth.getFullYear()}`;

    return (
        <section className="py-12 bg-amber-50 border-y border-amber-100">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <div className="inline-flex items-center gap-2 text-amber-600 bg-amber-100/50 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase mb-6">
                    <Clock size={16} />
                    Disponibilidad Limitada Este Mes
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                    Solo abro 50 cupos mensuales
                </h3>

                <p className="text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Para mantener la calidad del soporte en el grupo privado y responder tus dudas personalmente, limito el acceso.
                    Una vez alcanzado el límite, el protocolo se cierra hasta el próximo mes.
                </p>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100 max-w-lg mx-auto">
                    <div className="flex justify-between items-end mb-2">
                        <span className="text-sm font-bold text-slate-500">Cupos ocupados</span>
                        <span className="text-sm font-bold text-amber-600">{takenSpots}/{totalSpots}</span>
                    </div>

                    <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden mb-4">
                        <div
                            className="bg-amber-500 h-full rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${percentage}%` }}
                        ></div>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                        <span>Próxima apertura programada:</span>
                        <span className="font-bold text-slate-600 capitalize">{nextOpeningText}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LimitedAvailability;

import React from 'react';

const ObjectionCrusher = () => {
    const objections = [
        {
            icon: "🍽️",
            question: "¿Pasaré hambre?",
            answer: "NO. Comes cada 3-4 horas."
        },
        {
            icon: "💰",
            question: "¿Es caro?",
            answer: "$17 USD / $375 MXN = 2 cafés Starbucks."
        },
        {
            icon: "⚡",
            question: "¿Funciona rápido?",
            answer: "Resultados visibles en 48 horas."
        }
    ];

    return (
        <div className="max-w-4xl mx-auto mb-16 px-4">
            <div className="grid md:grid-cols-3 gap-6">
                {objections.map((obj, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl p-6 shadow-lg border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl"
                    >
                        <div className="text-4xl mb-3 text-center">{obj.icon}</div>
                        <h4 className="font-bold text-gray-900 text-center mb-2 text-base">
                            {obj.question}
                        </h4>
                        <p className="text-emerald-600 font-semibold text-center text-sm">
                            {obj.answer}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ObjectionCrusher;

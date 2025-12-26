import React from 'react';

const StickyMobileCTA = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-emerald-500 to-emerald-600 p-4 shadow-2xl z-50 md:hidden">
            <div className="flex items-center justify-between max-w-md mx-auto">
                <div>
                    <p className="text-white text-xs font-bold">Solo quedan 12 cupos</p>
                    <p className="text-white text-lg font-bold">$17 USD</p>
                </div>
                <a
                    href="#checkout"
                    className="bg-white text-emerald-600 px-6 py-3 rounded-xl font-bold text-sm"
                >
                    COMPRAR →
                </a>
            </div>
        </div>
    );
};

export default StickyMobileCTA;

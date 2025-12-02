import React from 'react';
import { MessageCircle } from 'lucide-react';

const InlineWhatsAppButton = ({ text = "¿Tienes dudas? Escríbenos por WhatsApp", className = "" }) => {
    return (
        <div className={`flex justify-center ${className}`}>
            <a
                href="https://wa.me/18165006446"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-50 text-green-700 hover:bg-green-100 border border-green-200 px-6 py-3 rounded-full font-semibold transition-colors duration-300 group"
            >
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                {text}
            </a>
        </div>
    );
};

export default InlineWhatsAppButton;

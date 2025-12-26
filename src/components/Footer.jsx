import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-background text-slate-500 py-12 border-t border-slate-200">
            <div className="container mx-auto px-4 text-center">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2 text-center md:text-left">
                        <img src="/logo.jpg" alt="Protocolo de Raíz" loading="lazy" className="h-16 mb-6 mix-blend-multiply mx-auto md:mx-0" />
                        <p className="text-slate-500 max-w-sm mx-auto md:mx-0">
                            Un enfoque científico y natural para sanar tu digestión desde la raíz, sin dietas restrictivas ni suplementos innecesarios.
                        </p>
                    </div>
                    {/* Additional footer columns can go here */}
                </div>

                <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
                    <a href="#" className="hover:text-primary transition-colors">Aviso Legal</a>
                    <a href="#" className="hover:text-primary transition-colors">Términos y Condiciones</a>
                    <a
                        href="https://wa.me/18165006446?text=Hola!%20%F0%9F%91%8B%20Quiero%20comenzar%20el%20Protocolo%20de%20Ra%C3%ADz%20y%20tengo%20algunas%20dudas.%20%C2%BFPodr%C3%ADan%20ayudarme%3F%20%F0%9F%99%8F"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors font-bold text-[#25D366]"
                    >
                        ¿Aún tienes preguntas? Escríbenos
                    </a>
                </div>

                <p className="text-xs">
                    Copyright © 2025 Protocolo de Raíz. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

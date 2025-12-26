import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedTitle from './AnimatedTitle';
import TrustRow from './TrustRow';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return (
    <section className="relative pt-32 pb-12 md:pt-48 md:pb-32 px-4 overflow-hidden">
      {/* Background Elements - Hidden on mobile */}
      {!isMobile && (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]"></div>
        </div>
      )}

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-4 leading-tight">
              ¿Tu Pantalón No Cierra Después de las Fiestas?
            </h1>

            <h2 className="text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-6">
              No Es Grasa. Es Inflamación Química. Y Puedes Revertirla en 7 Días.
            </h2>

            <p className="text-lg md:text-xl text-slate-600 mb-8 font-medium max-w-2xl mx-auto">
              El protocolo científico que desinflama tu abdomen sin dietas restrictivas, hambre ni rebote
            </p>

            <ul className="text-left max-w-lg mx-auto mb-8 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Reduce entre 3-7 cm de cintura en la primera semana</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Elimina la hinchazón, gases y pesadez digestiva</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Sin contar calorías, sin pasar hambre, sin efecto rebote</span>
              </li>
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <button
                onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary hover:bg-primary/90 text-white text-xl md:text-2xl font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 w-full md:w-auto"
              >
                DESINFLAMA TU ABDOMEN HOY - $17 USD
              </button>

              <p className="text-xs md:text-sm text-slate-500 mt-3 flex items-center justify-center gap-2">
                <span>🔒 Pago 100% seguro</span>
                <span className="hidden md:inline">·</span>
                <span>✓ Acceso inmediato</span>
                <span className="hidden md:inline">·</span>
                <span>⚡ Garantía de 7 días</span>
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;


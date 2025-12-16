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
    <section className="relative pt-20 pb-12 md:pt-48 md:pb-32 px-4 overflow-hidden">
      {/* Background Elements - Hidden on mobile */}
      {!isMobile && (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]"></div>
        </div>
      )}

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-12 md:items-center">
          {/* TEXT FIRST ON MOBILE */}
          <div className="text-center md:text-left order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-block px-3 py-1 rounded-full bg-red-50 border border-red-200 mb-4"
            >
              <p className="text-[10px] md:text-sm font-bold tracking-wide text-red-600 uppercase">
                ⚠️ No es grasa, es inflamación
              </p>
            </motion.div>

            <div className="mb-5">
              {isMobile ? (
                // Simplified title for mobile - no animation overhead
                <h1 className="text-3xl font-bold text-text leading-tight mb-3">
                  No engordaste 5 kilos en diciembre.
                </h1>
              ) : (
                <AnimatedTitle
                  text="No engordaste 5 kilos en diciembre."
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight mb-2"
                />
              )}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: isMobile ? 0.2 : 0.8, duration: 0.4 }}
              >
                <span className="block text-3xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-6">
                  Estás INFLAMADO.
                </span>

                <div className="mb-5">
                  <a href="https://pay.hotmart.com/C103224627H?checkoutMode=2" className="custom-btn hotmart-fb text-lg md:text-2xl">
                    <span>QUIERO DESINFLAMARME YA</span>
                  </a>
                </div>

                <TrustRow />
              </motion.div>

              <div className="flex items-center gap-2 text-xs text-slate-500 mt-3 justify-center md:justify-start flex-wrap">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={12} className="text-primary" /> Descarga inmediata
                </span>
                <span className="text-slate-400">•</span>
                <span>Garantía 7 días</span>
                <span className="text-slate-400">•</span>
                <span>Pago Seguro</span>
              </div>
            </div>
          </div>

          {/* IMAGE SECOND ON MOBILE - SMALLER */}
          <div className="order-2 flex justify-center mt-8 md:mt-0">
            <motion.div
              initial={isMobile ? { opacity: 0 } : { opacity: 0, rotateY: -20, x: 50 }}
              animate={isMobile ? { opacity: 1 } : { opacity: 1, rotateY: 0, x: 0 }}
              transition={isMobile ? { duration: 0.4, delay: 0.3 } : { duration: 1, type: "spring" }}
              className="relative w-full max-w-[280px] md:max-w-md"
            >
              {!isMobile && <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-3xl transform rotate-3 scale-105 blur-2xl"></div>}
              <img
                src="/hero-image.png"
                alt="El Protocolo de Raíz - Desinflama tu abdomen"
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl border border-slate-200"
                fetchpriority="high"
              />

              {/* Floating Badge - Desktop Only */}
              {!isMobile && (
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -bottom-6 -right-6 bg-surface border border-slate-200 p-4 rounded-xl shadow-xl z-20"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-green-500/20 p-2 rounded-full">
                      <ShieldCheck className="text-green-600" size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Resultados</p>
                      <p className="text-sm font-bold text-white">100% Garantizado</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

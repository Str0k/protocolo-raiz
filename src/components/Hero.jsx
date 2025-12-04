import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedTitle from './AnimatedTitle';
import CountdownTimer from './CountdownTimer';
import TrustRow from './TrustRow';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6"
            >
              <p className="text-xs md:text-sm font-bold tracking-widest text-primary uppercase">
                ⚠️ Atención: No es grasa, es inflamación
              </p>
            </motion.div>

            <div className="mb-6">
              <AnimatedTitle
                text="No engordaste 5 kilos en diciembre."
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight mb-2"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <span className="block text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-8">
                  Estás INFLAMADO.
                </span>

                <div className="mb-6">
                  <a href="https://pay.hotmart.com/C103224627H?checkoutMode=2" className="hotmart-fb inline-block bg-gradient-to-r from-primary to-secondary text-white font-bold text-xl md:text-2xl px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                    QUIERO DESINFLAMARME YA
                  </a>
                </div>

                <TrustRow />
              </motion.div>

              <div className="flex items-center gap-3 text-xs md:text-sm text-slate-500 mt-2 justify-center md:justify-start">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={14} className="text-primary" /> Descarga digital inmediata
                </span>
                <span className="text-slate-400">•</span>
                <span>Garantía de 7 días</span>
                <span className="text-slate-400">•</span>
                <span>Pago Seguro</span>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center perspective-1000">
            <motion.div
              initial={{ opacity: 0, rotateY: -20, x: 50 }}
              animate={{ opacity: 1, rotateY: 0, x: 0 }}
              transition={{ duration: 1, type: "spring" }}
              className="relative w-full max-w-md"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-3xl transform rotate-3 scale-105 blur-2xl"></div>
              <img
                src="/hero-image.png"
                alt="El Protocolo de Raíz - Desinflama tu abdomen"
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl border border-slate-200 backdrop-blur-sm"
              />

              {/* Floating Badge */}
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

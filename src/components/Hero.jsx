import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Shield, MessageCircle, FileText, Clock, AlertTriangle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-8 pb-16 flex flex-col overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-emerald-900">

      {/* URGENCY BANNER - New Year 2026 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full bg-gradient-to-r from-red-600 via-red-500 to-orange-500 py-3 px-4 text-center relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-white/10"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <p className="text-white font-bold text-sm md:text-base relative z-10">
          🚨 <span className="underline">ENERO 2026</span> — ¿Cuántos años llevas prometiendo "este año sí bajo de peso"?
          <span className="hidden md:inline"> Este es el momento de ACTUAR, no de seguir esperando.</span>
        </p>
      </motion.div>

      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-[20%] right-[5%] w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-[10%] left-[5%] w-80 h-80 bg-red-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex-grow flex items-center">
        <div className="max-w-4xl mx-auto text-center pt-8">

          {/* Product Type Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/50 rounded-full px-4 py-2 mb-6"
          >
            <FileText size={18} className="text-emerald-400" />
            <span className="text-emerald-300 font-semibold text-sm">GUÍA PDF DESCARGABLE — Acceso Inmediato</span>
          </motion.div>

          {/* Psychological Hook - Year Counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <p className="text-red-400 font-bold text-lg md:text-xl mb-2">
              ⚠️ Otro enero más... ¿otro propósito fallido?
            </p>
            <p className="text-slate-400 text-sm md:text-base">
              2023, 2024, 2025... dijiste "bajaré de peso" y nada cambió. <br className="hidden md:block" />
              <strong className="text-white">2026 puede ser diferente, pero SOLO si actúas HOY.</strong>
            </p>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
          >
            Desinfla tu abdomen en{' '}
            <span className="text-emerald-400">7 días</span>
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              con esta Guía PDF paso a paso
            </span>
          </motion.h1>

          {/* Pattern Interrupt - The Real Problem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 mb-8 max-w-2xl mx-auto"
          >
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
              Esa "panza" que no se va <strong className="text-red-400">NO es grasa</strong>.{' '}
              <br className="hidden md:block" />
              Es <strong className="text-emerald-400">inflamación crónica</strong> atrapada en tu intestino.
            </p>
            <p className="text-slate-400 mt-3 text-base">
              Por eso las dietas no funcionan. Por eso el ejercicio no la quita. <br />
              <strong className="text-white">Necesitas atacar la RAÍZ del problema.</strong>
            </p>
          </motion.div>

          {/* What You'll Get - PDF Emphasis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <p className="text-emerald-400 font-bold mb-4 text-lg">📥 LO QUE DESCARGARÁS HOY:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto text-left">
              {[
                "Protocolo de 7 días paso a paso (fácil de seguir)",
                "Lista de alimentos antiinflamatorios mexicanos",
                "Menús diarios listos para copiar",
                "Guía de preparación rápida (menos de 15 min)",
                "Técnicas para eliminar la hinchazón desde el día 1",
                "Bonus: Rutina de desintoxicación matutina"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-emerald-400 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-300 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Urgency Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-8 max-w-xl mx-auto"
          >
            <p className="text-red-300 font-semibold text-sm md:text-base">
              <AlertTriangle size={18} className="inline mr-2" />
              No dejes que 2026 sea otro año de frustración mirándote al espejo.
              <br />
              <span className="text-white">El momento de cambiar es AHORA, no mañana.</span>
            </p>
          </motion.div>

          {/* Social Proof */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="text-sm md:text-base text-slate-400 mb-6 font-medium"
          >
            👩‍👩‍👧 <strong className="text-emerald-400">+1,500 mujeres</strong> en México ya desinflamaron su abdomen con este método
          </motion.p>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-6"
          >
            <a
              href="#checkout"
              className="inline-block bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-lg md:text-xl font-bold py-5 px-8 md:px-12 rounded-full shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 transition-all duration-300 transform hover:scale-105 animate-breathing"
            >
              📥 QUIERO DESCARGAR MI GUÍA PDF AHORA →
            </a>
          </motion.div>

          {/* CTA Subtext */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400 mb-8"
          >
            <span className="flex items-center gap-1">
              <Clock size={14} className="text-emerald-400" />
              Descarga inmediata
            </span>
            <span className="flex items-center gap-1">
              <FileText size={14} className="text-emerald-400" />
              PDF fácil de leer
            </span>
            <span className="flex items-center gap-1">
              <Shield size={14} className="text-emerald-400" />
              Garantía 7 días
            </span>
          </motion.div>

          {/* Final Push */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-xs text-slate-500 max-w-lg mx-auto"
          >
            💡 <em>En 5 minutos tendrás la guía en tu celular. En 7 días verás la diferencia en tu abdomen.
              La única pregunta es: ¿vas a seguir esperando "el lunes perfecto" o empiezas HOY?</em>
          </motion.p>

        </div>
      </div>
    </section>
  );
};

export default Hero;

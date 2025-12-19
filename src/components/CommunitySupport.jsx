import React from 'react';
import { motion } from 'framer-motion';

const CommunitySupport = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-slate-900 to-indigo-950 text-white overflow-hidden relative">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-indigo-500 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-500 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
                    >
                        No hagas esto solo. <span className="text-indigo-400">Únete a la Tribu.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-300"
                    >
                        Al inscribirte hoy, recibes acceso inmediato a nuestra Comunidad Privada de Alumnos.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: 3 Pillars */}
                    <div className="grid gap-6">
                        <FeatureCard
                            icon={<CameraIcon />}
                            title="Comparte tus Victorias"
                            text="Sube fotos de tus platos y de tu cambio físico. Nada motiva más que ver el progreso de los demás."
                            delay={0.2}
                        />
                        <FeatureCard
                            icon={<ChatIcon />}
                            title="Resuelve tus Dudas"
                            text="¿No encuentras un ingrediente? ¿Tienes un evento social? Pregunta en el grupo y obtén respuestas rápidas."
                            delay={0.3}
                        />
                        <FeatureCard
                            icon={<FireIcon />}
                            title="Mantén la Llama"
                            text="Cuando sientas que vas a caer, la comunidad estará ahí para recordarte por qué empezaste."
                            delay={0.4}
                        />
                    </div>

                    {/* Right Column: Mobile Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="relative flex justify-center"
                    >
                        {/* Simple Phone Mockup CSS */}
                        <div className="relative w-[300px] h-[600px] bg-slate-900 border-8 border-slate-800 rounded-[3rem] shadow-2xl overflow-hidden flex flex-col">
                            {/* Notch */}
                            <div className="absolute top-0 inset-x-0 h-6 bg-slate-800 rounded-b-xl w-40 mx-auto z-20"></div>

                            {/* Screen Content */}
                            <div className="flex-1 bg-slate-900 p-4 pt-12 flex flex-col gap-4 overflow-y-auto no-scrollbar relative">
                                {/* Chat Header */}
                                <div className="flex items-center gap-3 pb-4 border-b border-indigo-500/20">
                                    <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-bold">TR</div>
                                    <div>
                                        <div className="font-bold text-sm">Tribu Raíz 🌿</div>
                                        <div className="text-xs text-green-400">● 124 en línea</div>
                                    </div>
                                </div>

                                {/* Messages */}
                                <ChatMessage
                                    avatar="👩"
                                    name="Ana M."
                                    text="¡No puedo creer lo rica que está la pizza keto! 🍕 Aquí mi foto:"
                                    image={true}
                                />
                                <ChatMessage
                                    avatar="👨"
                                    name="Carlos R."
                                    text="¡Brutal Ana! Yo bajé 2kg esta semana 💪"
                                    isRight={true}
                                />
                                <ChatMessage
                                    avatar="👩‍🦰"
                                    name="Sofia"
                                    text="¿Alguien sabe si puedo usar harina de almendras aquí?"
                                />
                                <ChatMessage
                                    avatar="🧑"
                                    name="Coach"
                                    text="Sí Sofia, sin problema. Ajusta un poco el agua."
                                    highlight={true}
                                />
                            </div>

                            {/* Bottom Label inside screen mimicking UI */}
                            <div className="absolute bottom-0 inset-x-0 bg-slate-900/90 backdrop-blur p-4 border-t border-slate-800">
                                <div className="text-center text-xs text-slate-500">Acceso VIP desde tu Celular</div>
                            </div>

                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -right-4 top-1/4 bg-white text-slate-900 px-4 py-2 rounded-full font-bold shadow-lg transform rotate-6 animate-pulse">
                            🔥 ¡Vamos!
                        </div>
                        <div className="absolute -left-4 bottom-1/3 bg-indigo-500 text-white px-4 py-2 rounded-full font-bold shadow-lg transform -rotate-3">
                            ❤️ Me encanta
                        </div>
                    </motion.div>

                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <a href="#reviews" className="inline-flex items-center gap-2 text-indigo-300 hover:text-white transition-colors border-b border-indigo-300 hover:border-white pb-0.5 group">
                        Ver lo que dicen los alumnos
                        <span className="group-hover:translate-y-1 transition-transform">👇</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

const FeatureCard = ({ icon, title, text, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-indigo-500/50 transition-colors"
    >
        <div className="flex items-start gap-4">
            <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400">
                {icon}
            </div>
            <div>
                <h3 className="font-bold text-lg mb-2 text-white">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{text}</p>
            </div>
        </div>
    </motion.div>
);

const ChatMessage = ({ avatar, name, text, image, isRight, highlight }) => (
    <div className={`flex gap-3 ${isRight ? 'flex-row-reverse' : ''} mb-2`}>
        <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-lg flex-shrink-0">
            {avatar}
        </div>
        <div className={`flex flex-col items-start ${isRight ? 'items-end' : ''} max-w-[80%]`}>
            <span className="text-[10px] text-slate-500 mb-1 px-1">{name}</span>
            <div className={`p-3 rounded-2xl text-xs ${highlight ? 'bg-indigo-600 text-white' :
                    isRight ? 'bg-indigo-900/50 text-indigo-100 rounded-tr-none' : 'bg-slate-800 text-slate-300 rounded-tl-none'
                }`}>
                {text}
                {image && (
                    <div className="mt-2 w-full h-24 bg-slate-700 rounded-lg overflow-hidden relative">
                        <div className="absolute inset-0 bg-yellow-500/20 flex items-center justify-center text-4xl">🍕</div>
                    </div>
                )}
            </div>
        </div>
    </div>
)

/* Icons */
const CameraIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" /></svg>
);

const ChatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
);

const FireIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" /></svg>
);

export default CommunitySupport;

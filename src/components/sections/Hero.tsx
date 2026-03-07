import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';
import { TextReveal } from '../ui/TextReveal';
import { useModal } from '../../context/ModalContext';
import { MusicParticles } from '../ui/MusicParticles';

export const Hero = () => {
  const containerRef = useRef(null);
  const { openModal } = useModal();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-black to-black z-0" />
        <MusicParticles />
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80 z-10 pointer-events-none" />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-4 relative z-20 pt-20"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900/80 backdrop-blur-xl border border-white/10 mb-10 shadow-lg shadow-yellow-400/5"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
            </span>
            <span className="text-sm font-bold tracking-widest uppercase text-white/90">Школа вокала PROGOLOS</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight text-white drop-shadow-2xl">
            <span className="block mb-2">
                <TextReveal delay={0.4} stagger={0.05}>
                Научим петь
                </TextReveal>
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 pb-4 whitespace-nowrap">
                <TextReveal delay={0.8} stagger={0.05}>
                с нуля до выступления
                </TextReveal>
            </span>
            <span className="block text-4xl md:text-6xl lg:text-7xl font-bold text-zinc-400">
                <TextReveal delay={1.2} stagger={0.05}>
                за 4 месяца
                </TextReveal>
            </span>
          </h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-black/40 blur-xl rounded-full -z-10" />
            <p className="text-lg md:text-2xl text-zinc-300 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
                Вокал индивидуально для взрослых во Владивостоке. <br className="hidden md:block" />
                Хотите выступить на сцене, красиво петь в караоке или просто наслаждаться пением – научим.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="flex flex-col items-center justify-center gap-6"
          >
            <MagneticButton onClick={openModal} className="bg-yellow-400 text-black hover:bg-yellow-300 px-10 py-5 text-xl font-bold shadow-[0_0_30px_-5px_rgba(250,204,21,0.4)] hover:shadow-[0_0_40px_-5px_rgba(250,204,21,0.6)] transition-all duration-300">
              Записаться на пробный урок <ArrowRight className="ml-2 w-6 h-6" />
            </MagneticButton>
            
            <p className="text-zinc-500 text-sm font-medium tracking-wide">
                Менеджер подберет время и педагога под вашу цель
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-yellow-400/50 to-transparent" />
      </motion.div>
    </section>
  );
};


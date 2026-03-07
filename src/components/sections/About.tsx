import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';
import { TextReveal } from '../ui/TextReveal';
import { useModal } from '../../context/ModalContext';

export const About = () => {
  const { openModal } = useModal();

  return (
    <section id="about" className="py-24 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400 rounded-full blur-[100px] opacity-20" />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-2xl overflow-hidden"
            >
              <img 
                src="https://static.tildacdn.com/tild3164-3737-4939-a435-353661386463/photo.svg" 
                alt="Степан Гапонов" 
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-2xl font-bold text-white">Степан Гапонов</h3>
                <p className="text-yellow-400 font-medium">Основатель</p>
              </div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              <TextReveal>Почему я создал PROGOLOS</TextReveal>
            </h2>
            
            <div className="space-y-6 text-white/80 leading-relaxed">
              <blockquote className="text-xl font-serif italic text-white/90 border-l-4 border-yellow-400 pl-6 py-2 my-8 bg-white/5 rounded-r-xl pr-4">
                “Люди приходят ко мне не за уроками вокала. Они приходят, чтобы исполнить свою детскую мечту, перестать стесняться своего голоса, выйти на сцену без страха. Хотят просто петь и получать удовольствие от этого.
                <br/><br/>
                Я создал Progolos, чтобы вы могли стать человеком, который поет”.
              </blockquote>

              <p className="font-medium text-white">
                Более 9 лет – солист кавер-группы Uragan Show. Автор собственных песен. Среди учеников лауреаты международных конкурсов.
              </p>
            </div>

            <div className="mt-10 flex justify-center">
              <MagneticButton onClick={openModal} className="bg-white text-black hover:bg-yellow-400 hover:text-black transition-colors px-8 py-4 flex items-center justify-center gap-2">
                Записаться на пробный урок <ArrowRight className="w-5 h-5" />
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { motion } from 'motion/react';
import { ArrowRight, Send } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';
import { useModal } from '../../context/ModalContext';

export const FinalCTA = () => {
  const { openModal } = useModal();

  return (
    <section className="py-32 bg-yellow-400 text-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-20 mix-blend-overlay" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-none"
        >
          Готовы раскрыть свой голос?
        </motion.h2>
        
        <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium opacity-80">
          Не дайте своему таланту пропасть. Начните путь к мечте с командой, которая в вас верит.
        </p>

        <div className="flex flex-col md:flex-row items-start justify-center gap-10 md:gap-16">
          <div className="flex flex-col items-center gap-3 w-full md:w-auto">
            <MagneticButton onClick={openModal} className="bg-black text-white hover:bg-zinc-800 px-8 py-4 text-lg shadow-2xl w-full md:w-auto justify-center">
              Записаться на пробный урок <ArrowRight className="ml-2 w-5 h-5" />
            </MagneticButton>
            <p className="text-sm font-medium opacity-70 max-w-[250px] leading-tight">
              Менеджер свяжется, подберет педагога и время.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-3 w-full md:w-auto">
            <MagneticButton 
              onClick={() => window.open('https://t.me/progolos2b?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%BF%D1%80%D0%BE%D0%B1%D0%BD%D0%BE%D0%B5%20%D0%B7%D0%B0%D0%BD%D1%8F%D1%82%D0%B8%D0%B5', '_blank')} 
              className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg w-full md:w-auto justify-center"
            >
              Написать в Telegram <Send className="ml-2 w-5 h-5" />
            </MagneticButton>
            <p className="text-sm font-medium opacity-70 max-w-[250px] leading-tight">
              Ответим на вопросы и запишем на пробный урок.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

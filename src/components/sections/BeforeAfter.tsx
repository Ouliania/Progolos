import { motion } from 'motion/react';
import { Play, ArrowRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { MagneticButton } from '../ui/MagneticButton';
import { TextReveal } from '../ui/TextReveal';
import { useModal } from '../../context/ModalContext';

const videos = [
  {
    id: "a1f16cf269548b673d18e6ef307adf0b",
    p: "0N7cB9OlZwzIH0qPOMtdzw",
    title: "С нуля до отчетного концерта за 4 месяца"
  },
  {
    id: "5d4fa46cac54f9290f34d20b7a99c803",
    p: "C8BcHKR-PMmKn8FJj_gjbQ",
    title: "Результат уже на 3-м занятии"
  },
  {
    id: "cada4d057c536d9baecf0005088b0d05",
    p: "QDs8AnQp2JFOkyZ-SJ6ZPQ",
    title: "Прогресс заметен уже после первого занятия"
  },
  {
    id: "95c303f1b0877c0b05c05883818d770f",
    p: "z2QRWHOyiwCrJd3rUXxdmg",
    title: "С нуля за 2 месяца спели дуэтом на собственной свадьбе"
  }
];

export const BeforeAfter = () => {
  const { openModal } = useModal();

  return (
    <section className="py-24 bg-zinc-950 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <TextReveal>Они тоже начинали с нуля</TextReveal>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl">
            Вот как звучали наши ученики до занятий и как поют после:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {videos.map((video, index) => (
            <div key={index} className="flex flex-col gap-4 group">
                <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 group-hover:border-yellow-400/30 transition-colors">
                    <iframe 
                        src={`https://rutube.ru/play/embed/${video.id}/?p=${video.p}`} 
                        frameBorder="0" 
                        allow="clipboard-write; autoplay" 
                        allowFullScreen 
                        className="absolute inset-0 w-full h-full"
                    />
                </div>
                <h3 className="text-lg font-medium text-white/90 group-hover:text-yellow-400 transition-colors leading-snug">
                    {video.title}
                </h3>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <MagneticButton onClick={openModal} className="bg-white text-black hover:bg-yellow-400 hover:text-black transition-colors px-8 py-4 flex items-center gap-2">
            Записаться на пробный урок <ArrowRight size={20} />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};

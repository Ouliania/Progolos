import { motion } from 'motion/react';
import { ArrowRight, Mic2, Music, Disc, Clock } from 'lucide-react';
import { Card } from '../ui/Card';
import { MagneticButton } from '../ui/MagneticButton';
import { TextReveal } from '../ui/TextReveal';
import { useModal } from '../../context/ModalContext';

const results = [
  {
    icon: <Mic2 size={24} />,
    title: "Выступление на сцене",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        <div className="bg-zinc-800/50 p-5 rounded-2xl border border-white/5 hover:border-yellow-400/20 transition-colors h-full">
            <div className="text-yellow-400 font-bold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-400" />
                Через 1 месяц (или меньше)
            </div>
            <div className="text-sm md:text-base text-zinc-300 leading-relaxed pl-4 border-l border-white/10">
                Вы сможете принять участие в квартирнике, караоке-батле или тематическом вечере для учеников. Каждый месяц мы что-то проводим.
            </div>
        </div>
        <div className="bg-zinc-800/50 p-5 rounded-2xl border border-white/5 hover:border-yellow-400/20 transition-colors h-full">
            <div className="text-yellow-400 font-bold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-400" />
                Через 4 месяца
            </div>
            <div className="text-sm md:text-base text-zinc-300 leading-relaxed pl-4 border-l border-white/10">
                Отчетный концерт. Участвуют около 150 учеников нашей студии, профессиональный свет, звук, видеосъемка. Можете позвать близких, друзей, коллег. Вы почувствуете себя звездой!
            </div>
        </div>
      </div>
    ),
    colSpan: "md:col-span-2"
  },
  {
    icon: <Music size={24} />,
    title: "Будете уверенно петь в караоке",
    content: "Исполняйте любимые песни без стеснения и фальши. Не будете думать \"а вдруг плохо спою\". Просто возьмете микрофон и получите удовольствие."
  },
  {
    icon: <Disc size={24} />,
    title: "Запись собственной песни",
    content: "В студии есть все оборудование для записи. Исполните мечту, подарите близким или выложите в соцсети. Это останется с вами навсегда."
  },
  {
    icon: <Clock size={24} />,
    title: "Время для себя",
    content: "У нас есть ученики, которые ходят по 5–6 лет и ни разу не выходили на сцену. Просто приходят 1–2 раза в неделю, отдыхают, наслаждаются своим голосом. И это абсолютно нормально.",
    colSpan: "md:col-span-2"
  }
];

export const Results = () => {
  const { openModal } = useModal();

  return (
    <section className="py-24 bg-black text-white relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              <TextReveal>Что вас ждет?</TextReveal>
            </h2>
            <p className="text-xl text-white/60 mb-10 font-light leading-relaxed">
              Вы решаете, к чему идти, <br/> а мы – помогаем.
            </p>
            <MagneticButton onClick={openModal} className="bg-white text-black hover:bg-yellow-400 hover:text-black transition-colors px-8 py-4 w-full md:w-auto flex justify-center items-center">
              Записаться на пробный урок <ArrowRight className="ml-2 w-5 h-5" />
            </MagneticButton>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {results.map((item, index) => (
              <Card key={index} delay={index * 0.1} className={`bg-zinc-900/30 border-zinc-800 hover:border-yellow-400/30 p-8 ${item.colSpan || ''}`}>
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-yellow-400 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                <div className="text-zinc-400 leading-relaxed">
                    {typeof item.content === 'string' ? <p>{item.content}</p> : item.content}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

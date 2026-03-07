import { motion } from 'motion/react';
import { MessageCircle, CheckCircle2, User } from 'lucide-react';
import { Card } from '../ui/Card';

const items = [
  {
    q: "У меня нет голоса и таланта.",
    a: "Только 1,5% людей действительно не могут петь. Остальные просто не научились. Петь – это навык, как езда на велосипеде."
  },
  {
    q: "Мне уже 20, 30, 50, не поздно ли?",
    a: "90% наших учеников – взрослые от 25 до 50. И каждый думает, что \"уже поздно\". Но можно научиться петь с нуля в любом возрасте. Главное начать"
  },
  {
    q: "Я уже состоявшийся человек – это как-то несерьезно, идти в вокальную школу.",
    a: "Наоборот, вы достаточно взрослые, чтобы понять, что жизнь одна и только вам решать какой она будет. Это не легкомыслие – это забота о себе."
  },
  {
    q: "Стыдно перед преподавателем.",
    a: "Педагоги здесь для того, чтобы вести вас. Они слышали сотни начинающих голосов и, когда-то сами были начинающими. Ваша задача не впечатлить их, а научиться."
  },
  {
    q: "Стыдно петь, вдруг кто-то услышит.",
    a: "Занятия проходят индивидуально, со звукоизоляцией. Никто не услышит вас, если вы сами этого не захотите. Есть отдельный кабинеты для тех, кто особенно стесняется."
  }
];

export const Suitability = () => {
  return (
    <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
             <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-bold text-yellow-400 uppercase tracking-wide"
          >
            А мне подойдет?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {items.map((item, index) => (
            <Card key={index} delay={index * 0.1} className="flex flex-col h-full bg-zinc-900/20 border-zinc-800 hover:border-yellow-400/30 hover:bg-zinc-900/40 transition-all duration-300 p-8 rounded-3xl group">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800/50 text-yellow-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle size={20} />
                </div>
                <h3 className="text-xl font-bold text-white leading-tight">
                    {item.q}
                </h3>
              </div>
              <div className="mt-auto pt-4 border-t border-white/5">
                <p className="text-zinc-400 leading-relaxed text-base">
                    {item.a}
                </p>
              </div>
            </Card>
          ))}

          {/* 6th Card - Summary */}
          <Card delay={0.5} className="flex flex-col justify-center h-full bg-yellow-400 border-none p-8 rounded-3xl text-black relative overflow-hidden group shadow-lg shadow-yellow-400/10 hover:bg-yellow-400 hover:scale-[1.02] transition-all duration-300">
             <div className="absolute -top-12 -right-12 p-8 opacity-10 group-hover:opacity-20 transition-opacity rotate-12">
                <CheckCircle2 size={200} />
             </div>
             
             <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                    <h3 className="text-2xl font-bold mb-4 leading-tight">
                        Вы не одни!
                    </h3>
                    <p className="text-lg font-medium mb-4 leading-relaxed opacity-90">
                        <span className="font-black">90% наших учеников</span> – взрослые, которые приходят с такими же мыслями.
                    </p>
                </div>
                
                <div>
                    <p className="text-base mb-6 opacity-80 leading-relaxed">
                        Сейчас они выступают на сцене, поют в караоке и кайфуют от своего голоса.
                    </p>
                    <div className="inline-block bg-black/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-black/5 w-full text-center">
                        <p className="font-bold text-base">
                            Они решились и у них получилось.
                        </p>
                    </div>
                </div>
             </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

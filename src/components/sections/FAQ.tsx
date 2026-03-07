import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { TextReveal } from '../ui/TextReveal';

const faqs = [
  { 
    q: "Обязательно выступать на концертах?", 
    a: "Нет. Выступление по желанию. У нас есть ученики, которые ходят по 5–6 лет и ни разу не выступали. Они приходят для себя, для удовольствия." 
  },
  { 
    q: "Через сколько я увижу результат?", 
    a: "Прогресс почувствуете уже после первых занятий. Через месяц сможете выступить на квартирнике или караоке-батле (если захотите). Через 4 месяца на отчетном концерте." 
  },
  { 
    q: "Можно ли менять педагога?", 
    a: "Да, конечно. Мы подбираем педагога под вашу цель и характер. Если что-то не подошло – заменим." 
  },
  { 
    q: "Сколько длится занятие? Как часто нужно ходить?", 
    a: "Занятие длится 50 минут. Этого достаточно, чтобы распеться и отработать песню. Обычно ходят 1–3 раза в неделю, в зависимости от целей и возможностей." 
  },
  { 
    q: "Есть звукоизоляция? Меня будут слышать?", 
    a: "Занятия в отдельных кабинетах со звукоизоляцией. Из коридора слышно немного, но не критично. Если вам важно, чтобы не слышали вообще, то есть отдельный кабинет с полной изоляцией." 
  },
  { 
    q: "Какие занятия выбрать: групповые или индивидуальные?", 
    a: "Если хотите пообщаться, повеселиться, научиться слышать себя в дуэте, развить музыкальный слух – подойдут групповые. Если хотите детально проработать технику для себя, то лучше индивидуальные." 
  },
  { 
    q: "С какого возраста можно заниматься?", 
    a: "С детьми работаем от 5 лет. Со взрослыми любого возраста." 
  },
  { 
    q: "Как до вас добраться?", 
    a: "У нас две студии в центре города: обе в пешей доступности от остановок. До одной буквально 50 метров от автобусной остановки, до второй – 5 минут от автовокзала. Если на машине – есть платные парковки рядом. Да, в центре с парковкой иногда заморочка, но все решаемо. Точные адреса и карты – в контактах внизу страницы." 
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-zinc-950 text-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <TextReveal>Ответы на вопросы</TextReveal>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/10 pb-4">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-4 text-left group"
              >
                <span className="text-xl font-medium group-hover:text-yellow-400 transition-colors pr-8">{faq.q}</span>
                <span className="text-yellow-400 transition-transform duration-300 flex-shrink-0">
                  {openIndex === index ? <Minus /> : <Plus />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-white/60 pb-4 leading-relaxed whitespace-pre-line">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

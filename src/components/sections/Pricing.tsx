import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { MagneticButton } from '../ui/MagneticButton';
import { TextReveal } from '../ui/TextReveal';
import { useModal } from '../../context/ModalContext';

const trialBenefits = [
  "Диагностику голоса. Поймете свой диапазон и с чем будем работать",
  "Подбор репертуара под вашу цель",
  "План развития. Что и как будем делать дальше",
  "Ответы на все вопросы"
];

export const Pricing = () => {
  const { openModal } = useModal();

  return (
    <section id="pricing" className="py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <TextReveal>Стоимость</TextReveal>
          </h2>
        </div>

        <div className="max-w-xl mx-auto">
          <Card className="bg-zinc-900/80 backdrop-blur-xl border-yellow-400/20 hover:border-yellow-400/50 transition-colors p-8 md:p-12 relative overflow-hidden group">
            
            <h3 className="text-2xl font-bold text-white mb-2">Индивидуальные занятия</h3>
            <div className="flex flex-col mb-2">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-bold text-yellow-400">От 1400 ₽</span>
                <span className="text-white/50 text-sm md:text-base">за занятие (50 минут)</span>
              </div>
              <p className="text-white/40 text-xs mt-2 italic">
                *Стоимость зависит от опыта педагога и количества занятий в абонементе.
              </p>
            </div>

            <div className="my-8 border-t border-white/10 pt-8">
              <h4 className="text-lg font-bold mb-4 text-white/90">Что получите на пробном уроке:</h4>
              <ul className="space-y-4">
                {trialBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/80">
                    <div className="w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center text-yellow-400 flex-shrink-0 mt-1">
                      <Check size={12} />
                    </div>
                    <span className="text-sm md:text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <MagneticButton onClick={openModal} className="w-full bg-yellow-400 text-black hover:bg-yellow-300 justify-center py-4 font-bold text-lg">
              Записаться на пробный урок <ArrowRight className="ml-2 w-5 h-5" />
            </MagneticButton>
            
            <p className="text-center text-white/40 text-xs mt-4">
              Менеджер подберет время и педагога под вашу цель.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

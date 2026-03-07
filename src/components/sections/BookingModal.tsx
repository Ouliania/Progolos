import { motion, AnimatePresence } from 'motion/react';
import { X, Check } from 'lucide-react';
import { useState, useEffect, FormEvent } from 'react';
import { MagneticButton } from '../ui/MagneticButton';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [step, setStep] = useState<'form' | 'success'>('form');

  useEffect(() => {
    if (isOpen) {
      setStep('form');
    }
  }, [isOpen]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setStep('success');
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 m-auto w-full max-w-md h-fit bg-zinc-900 border border-white/10 rounded-3xl p-8 z-[70] shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {step === 'form' ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Записаться на пробный урок</h3>
                  <p className="text-white/60 text-sm">Оставьте контакты, менеджер свяжется и подберет удобное время</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-1">Ваше имя</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                      placeholder="Иван"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-1">Телефон</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                      placeholder="+7 (999) 000-00-00"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <MagneticButton className="w-full bg-yellow-400 text-black hover:bg-yellow-300 justify-center">
                    Записаться
                  </MagneticButton>
                  <p className="text-xs text-white/30 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </div>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mx-auto mb-6">
                  <Check size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Заявка отправлена!</h3>
                <p className="text-white/60 mb-8">
                  Спасибо за интерес. Наш менеджер свяжется с вами в ближайшее время.
                </p>
                <MagneticButton onClick={onClose} className="w-full bg-white/10 text-white hover:bg-white/20 justify-center">
                  Закрыть
                </MagneticButton>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card } from '../ui/Card';

export const Contacts = () => {
  return (
    <section id="contacts" className="py-24 bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-8">Контакты</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-yellow-400 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Адреса</h4>
                  <p className="text-white/60">
                    г. Владивосток
                    <br />
                    ул. Светланская, 33
                    <br />
                    ул. Русская, 2б
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-yellow-400 flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Телефон</h4>
                  <p className="text-white/60">+7 (999) 123-45-67</p>
                  <p className="text-white/40 text-sm mt-1">Пн-Вс, 10:00 - 22:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-yellow-400 flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Email</h4>
                  <p className="text-white/60">hello@progolos.ru</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[400px] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 relative group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2916.7!2d131.8917751!3d43.1142712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fb38d82c85f28c9%3A0x9832d2c1574c7723!2sPro%20Golos!5e0!3m2!1sen!2sus!4v1709901234567!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-black/20 pointer-events-none group-hover:bg-transparent transition-colors" />
          </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-white/40 text-sm">
          <p>© 2025 PROGOLOS. Все права защищены.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Публичная оферта</a>
          </div>
        </div>
      </div>
    </section>
  );
};

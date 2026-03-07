import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, MapPin, Send, X, ChevronDown } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';
import { useModal } from '../../context/ModalContext';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [city, setCity] = useState('Владивосток');
  const { openModal } = useModal();

  const toggleCity = () => {
    setCity(prev => prev === 'Владивосток' ? 'Хабаровск' : 'Владивосток');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Отзывы', href: '#reviews' },
    { name: 'Педагоги', href: '#teachers' },
    { name: 'Контакты', href: '#contacts' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-black/50 backdrop-blur-md border-b border-white/10' : 'py-6 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="https://optim.tildacdn.com/tild3564-3663-4737-b030-313438383233/-/resize/410x/-/format/webp/photo.png.webp" 
            alt="Vocal Studio Logo" 
            className="h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-medium text-white/70 hover:text-yellow-400 transition-colors">
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleCity}
            className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            <MapPin size={16} />
            <span>{city}</span>
            <ChevronDown size={14} className="opacity-50" />
          </button>
          <MagneticButton onClick={() => window.open('https://t.me/progolos2b?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%BF%D1%80%D0%BE%D0%B1%D0%BD%D0%BE%D0%B5%20%D0%B7%D0%B0%D0%BD%D1%8F%D1%82%D0%B8%D0%B5', '_blank')} variant="primary" className="!py-2 !px-4 text-sm">
            <Send size={16} />
            <span>Написать в Telegram</span>
          </MagneticButton>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-xl border-b border-white/10 p-4 md:hidden flex flex-col gap-4"
        >
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} className="text-lg font-medium text-white/70 hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>
              {item.name}
            </a>
          ))}
          <div className="flex flex-col gap-4 mt-4 pt-4 border-t border-white/10">
             <button 
               onClick={toggleCity}
               className="flex items-center gap-2 text-sm font-medium text-white/70"
             >
              <MapPin size={16} />
              <span>{city}</span>
              <ChevronDown size={14} />
            </button>
            <button onClick={() => { window.open('https://t.me/progolos2b?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%BF%D1%80%D0%BE%D0%B1%D0%BD%D0%BE%D0%B5%20%D0%B7%D0%B0%D0%BD%D1%8F%D1%82%D0%B8%D0%B5', '_blank'); setIsMenuOpen(false); }} className="w-full bg-yellow-400 text-black py-3 rounded-xl font-bold flex items-center justify-center gap-2">
              <Send size={18} />
              Написать в Telegram
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

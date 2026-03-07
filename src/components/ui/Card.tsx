import { motion } from 'motion/react';
import { ReactNode, FC } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const Card: FC<CardProps> = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, delay }}
      className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};

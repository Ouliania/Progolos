import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
}

export const MagneticButton = ({ children, className = '', onClick, variant = 'primary' }: MagneticButtonProps) => {
  const baseStyles = "relative px-6 py-3 rounded-full font-medium transition-all duration-300 overflow-hidden group shadow-sm hover:shadow-md";
  
  const variants = {
    primary: "bg-accent text-black hover:bg-yellow-300",
    secondary: "bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/10",
    outline: "border border-white/20 text-white hover:bg-white/5",
  };

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
};

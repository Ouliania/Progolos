import { motion } from 'motion/react';
import { TextReveal } from '../ui/TextReveal';

const reviewImages = [
  "https://optim.tildacdn.com/tild3861-3139-4333-b332-313834326339/-/resize/970x/-/format/webp/zmVkIDFv-2c.jpg.webp",
  "https://optim.tildacdn.com/tild3865-3532-4364-a537-616661646166/-/resize/786x/-/format/webp/wIYIeAqiwmM.jpg.webp",
  "https://optim.tildacdn.com/tild6239-6665-4461-a638-303431373038/-/format/webp/rowDfawFVnw.jpg.webp",
  "https://optim.tildacdn.com/tild6435-3738-4264-a265-353337666337/-/format/webp/x_FK8Rcy_Ag.jpg.webp",
  "https://optim.tildacdn.com/tild3730-3931-4262-b161-333337386637/-/format/webp/elJe0Nh8anQ.jpg.webp"
];

export const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <TextReveal>Отзывы наших учеников</TextReveal>
        </h2>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {reviewImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="break-inside-avoid"
            >
              <div className="bg-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-800 hover:border-yellow-400/30 transition-colors">
                <img 
                  src={src} 
                  alt={`Отзыв ${index + 1}`} 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

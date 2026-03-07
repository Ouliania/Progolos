import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const photos = [
  {
    src: "https://optim.tildacdn.com/tild3662-3766-4563-b463-653061616338/-/resize/960x/-/format/webp/-461.jpg.webp",
    alt: "Concert performance",
    className: "md:col-span-2 md:row-span-2 h-[300px] md:h-[600px]"
  },
  {
    src: "https://optim.tildacdn.com/tild3265-6166-4631-b337-373935386166/-/resize/750x/-/format/webp/noroot.png.webp",
    alt: "Student gathering",
    className: "md:col-span-1 md:row-span-2 h-[300px] md:h-[600px]"
  },
  {
    src: "https://optim.tildacdn.com/tild6465-3935-4231-a532-623363333237/-/resize/938x/-/format/webp/JemDXnHLgqs.jpg.webp",
    alt: "Singing emotion",
    className: "md:col-span-1 md:row-span-2 h-[300px] md:h-[600px]"
  }
];

export const PhotoInsert = () => {
  return (
    <section className="py-24 bg-zinc-950 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-2xl">
                Наши ученики на встречах <br/>
                <span className="text-yellow-400">и отчетных концертах</span>
            </h2>
            <a href="#" className="group flex items-center gap-2 text-lg font-medium hover:text-yellow-400 transition-colors">
                Смотреть еще
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {photos.map((photo, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`relative rounded-3xl overflow-hidden group ${photo.className}`}
                >
                    <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

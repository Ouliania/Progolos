import { motion } from 'motion/react';
import { Play } from 'lucide-react';

const videos = [
  {
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop",
    title: "Отчетный концерт 2024",
    duration: "3:45",
    className: "md:col-span-2 md:row-span-2"
  },
  {
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1920&auto=format&fit=crop",
    title: "Квартирник в студии",
    duration: "2:15",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2070&auto=format&fit=crop",
    title: "Выступление на фестивале",
    duration: "4:20",
    className: "md:col-span-1 md:row-span-1"
  }
];

export const EventsVideo = () => {
  return (
    <section className="min-h-screen bg-zinc-950 text-white flex flex-col justify-center py-12 md:py-24">
      <div className="container mx-auto px-4 h-full flex flex-col">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-8 text-center"
        >
          Наши ученики на <span className="text-yellow-400">отчетных концертах</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 flex-grow max-h-[800px]">
          {videos.map((video, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer bg-zinc-900 ${video.className}`}
            >
              <img 
                src={video.image} 
                alt={video.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg group-hover:bg-yellow-400 group-hover:border-yellow-400 transition-colors"
                >
                  <Play className="w-6 h-6 md:w-8 md:h-8 fill-white text-white ml-1 group-hover:fill-black group-hover:text-black transition-colors" />
                </motion.div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-xl md:text-2xl font-bold mb-1">{video.title}</h3>
                <p className="text-white/70 text-sm font-mono">{video.duration}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

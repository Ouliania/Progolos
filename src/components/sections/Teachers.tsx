import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { MagneticButton } from '../ui/MagneticButton';
import { TextReveal } from '../ui/TextReveal';

const teachers = [
  { 
    name: "Полина Богачева", 
    role: "Педагог по эстрадно-джазовому вокалу", 
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    details: [
      "Спела в дуэте с Ириной Дубцовой",
      "Солистка кавер-группы",
      "Гран-Призер международных конкурсов",
      "Педагогическая деятельность с 2021 г."
    ]
  },
  { 
    name: "Михаил Коган", 
    role: "Педагог по рок-вокалу и эстрадному вокалу", 
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop",
    details: [
      "Солист Приморской филармонии",
      "Основатель групп ZabriskiePoint, SИЛА",
      "Профессиональный вокалист 20+ лет",
      "Дипломированный педагог CVT и EVT"
    ]
  },
  { 
    name: "Александр Диянов", 
    role: "Педагог по академическому вокалу", 
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    details: [
      "Солист Мариинского театра (7 лет)",
      "Выпускник Нижегородской консерватории",
      "20 лет эстрадной практики",
      "Преподает с 2013 года"
    ]
  },
  { 
    name: "Татэв Арасханян", 
    role: "Педагог по эстрадно-джазовому вокалу", 
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    details: [
      "Экс-солистка группы «Мечта Айвазовского»",
      "Преподаватель колледжа ДВГИИ",
      "Лауреат международных конкурсов",
      "Педагогическая деятельность с 2021 г."
    ]
  },
  { 
    name: "Павел Хименков", 
    role: "Педагог по эстрадному вокалу", 
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop",
    details: [
      "Солист кавер-группы «Evergreen»",
      "Преподает 10+ лет",
      "Лауреат международных конкурсов"
    ]
  }
];

export const Teachers = () => {
  return (
    <section id="teachers" className="py-24 bg-zinc-950 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            <TextReveal>Наши педагоги</TextReveal>
          </h2>
          <MagneticButton variant="outline" className="hidden md:flex">
            Смотреть всех педагогов <ArrowRight className="ml-2 w-5 h-5" />
          </MagneticButton>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 gap-6 snap-x snap-mandatory scrollbar-hide">
          {teachers.map((teacher, index) => (
            <div key={index} className="min-w-[300px] md:min-w-[350px] snap-center">
              <Card delay={index * 0.1} className="h-full p-0 overflow-hidden group border-0 bg-zinc-900/50 flex flex-col">
                <div className="relative aspect-[3/4] overflow-hidden rounded-t-2xl">
                  <img 
                    src={teacher.img} 
                    alt={teacher.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-yellow-400 transition-colors">{teacher.name}</h3>
                  <p className="text-yellow-400/80 text-sm font-medium mb-4">{teacher.role}</p>
                  
                  <ul className="space-y-2 mt-auto">
                    {teacher.details.map((detail, i) => (
                      <li key={i} className="text-sm text-white/70 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <MagneticButton variant="outline">
            Смотреть всех педагогов
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};

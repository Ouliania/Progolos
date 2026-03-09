import { motion } from 'motion/react';
import { Mic2, Star, GraduationCap, User, Heart } from 'lucide-react';
import { Card } from '../ui/Card';
import { TextReveal } from '../ui/TextReveal';

const goals = [
  {
    icon: <Star size={28} />,
    title: "Хочу на сцену",
    desc: "Подберем педагога со сценическим опытом. Он знает, как справиться с волнением и держаться перед зрителями.",
    color: "from-orange-400 to-pink-500"
  },
  {
    icon: <Mic2 size={28} />,
    title: "Хочу в караоке",
    desc: "Подберем педагога по эстраде. Он научит попадать в ноты, контролировать дыхание и получать удовольствие от процесса.",
    color: "from-blue-400 to-cyan-500"
  },
  {
    icon: <User size={28} />,
    title: "Хочу для себя",
    desc: "Подберем педагога, который поможет раскрепоститься без давления, в вашем темпе.",
    color: "from-green-400 to-emerald-500"
  },
  {
    icon: <GraduationCap size={28} />,
    title: "Хочу поступить",
    desc: "Подберем педагога с академическим образованием – он знает требования приемных комиссий и подготовит вас к экзаменам.",
    color: "from-purple-400 to-violet-500"
  }
];

export const TeacherMatching = () => {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Warm ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 text-yellow-400 mb-6"
            >
                <Heart size={16} className="fill-yellow-400" />
                <span className="text-sm font-bold uppercase tracking-wide">С заботой о вас</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-white">
              Мы подбираем педагога <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500">
                под вашу цель
              </span>
            </h2>
            
            <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
                <p>
                У нас больше 40 педагогов. Все с профильным образованием (ДВИИ, Новосибирская консерватория, Гнесинка). Многие готовят участников к "Голосу", "Синей птице", работают с артистами театров.
                </p>
                <div className="flex items-start gap-4 p-6 bg-zinc-900/50 rounded-2xl border border-white/5 backdrop-blur-sm">
                    <div className="w-1 h-full min-h-[50px] bg-yellow-400 rounded-full" />
                    <p className="text-white font-medium">
                        Мы не даем вам "первого свободного". <br className="hidden md:block"/>Подбираем того, кто вам подходит.
                    </p>
                </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
             <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-transparent rounded-[2rem] transform rotate-3 scale-105 blur-lg opacity-50" />
             <img 
                src="https://optim.tildacdn.com/tild6465-3935-4231-a532-623363333237/-/resize/938x/-/format/webp/JemDXnHLgqs.jpg.webp" 
                alt="Happy student singing" 
                className="relative w-full h-[400px] object-cover rounded-[2rem] shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-500"
             />
             {/* Floating badge */}
             <div className="absolute -bottom-6 -left-6 bg-zinc-900 p-4 rounded-2xl border border-zinc-800 shadow-xl flex items-center gap-3">
                <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-zinc-900 flex items-center justify-center overflow-hidden">
                            <User size={20} className="text-zinc-600" />
                        </div>
                    ))}
                </div>
                <div className="text-sm">
                    <p className="text-white font-bold">40+ педагогов</p>
                    <p className="text-zinc-500 text-xs">Профильное образование</p>
                </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {goals.map((goal, index) => (
            <Card key={index} delay={index * 0.1} className="group hover:-translate-y-2 transition-all duration-300 border-none bg-zinc-900/50 hover:bg-zinc-800 p-8 rounded-3xl h-full">
              <div className="w-14 h-14 rounded-2xl border border-yellow-400/30 flex items-center justify-center text-yellow-400 mb-6">
                {goal.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors">{goal.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                {goal.desc}
              </p>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-zinc-400 leading-relaxed">
                <span className="text-white font-bold">Наши педагоги – практикующие артисты.</span> Многие сами выступают на концертах, поют на мероприятиях, записывают песни. Они живут вокалом и передают вам то, что работает в реальной жизни.
            </p>
        </div>
      </div>
    </section>
  );
};

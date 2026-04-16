import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'Comunicación Estratégica', level: 95, color: 'bg-primary' },
    { name: 'Creatividad y Producción UGC', level: 90, color: 'bg-secondary' },
    { name: 'Relaciones Públicas', level: 75, color: 'bg-primary' },
    { name: 'Edición de Vídeo', level: 70, color: 'bg-white' },
    { name: 'Proactividad', level: 60, color: 'bg-text-gray' },
  ];

  return (
    <section id="habilidades" className="py-24 relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-12 h-1 bg-primary rounded-full" />
          <span className="text-secondary font-bold tracking-widest uppercase text-sm">Skills & Expertise</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tighter">
          Dominio <span className="text-primary italic">Técnico</span> & Humano
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-xl font-bold tracking-tight">{skill.name}</span>
                  <span className="text-sm font-bold text-text-gray">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-glass rounded-full overflow-hidden border border-glass-border">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: index * 0.1 }}
                    className={`h-full ${skill.color} relative`}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-10 border-glass-border relative overflow-hidden group"
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">¿Por qué ComuniCarl's?</h3>
              <p className="text-lg text-text-gray leading-relaxed mb-8">
                Mi diferencial no es solo saber usar las herramientas, sino entender el <span className="text-white font-semibold italic">porqué</span> de cada mensaje. La técnica es el vehículo, pero la estrategia es el mapa.
              </p>
              <ul className="space-y-4">
                {[
                  'Enfoque 100% Social y Humano',
                  'Estrategia de Engagement Probada',
                  'Narrativa Visual que Deja Huella'
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm font-medium text-white/80">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary/20 transition-colors" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

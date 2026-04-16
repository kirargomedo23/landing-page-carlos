import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'ComuniCarl\'s',
      role: 'Creador de Contenido & Estratega',
      period: 'Febrero 2025 - Actualidad',
      desc: 'Desarrollo contenido educativo sobre comunicación estratégica y RRPP. Gestión multiformato con enfoque en conexión y engagement para comunidades digitales.',
      isCurrent: true
    },
    {
      company: 'MYM Comunicaciones',
      role: 'Relacionista Público y Prensa Corporativa',
      period: 'Junio 2023 - Junio 2025',
      desc: 'Gestión de entrevistas, coordinación con medios e influencers. Organización de eventos corporativos y manejo de comunicación en crisis.'
    },
    {
      company: 'Digital Libre Opinión',
      role: 'Redactor de Desarrollo Social',
      period: 'Abril 2022 - Abril 2023',
      desc: 'Elaboración de notas informativas sobre impacto económico y cultural en La Libertad. Rigor informativo con enfoque periodístico.'
    }
  ];

  return (
    <section id="experiencia" className="py-24 relative">
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-secondary font-bold tracking-widest uppercase text-sm mb-4"
          >
            Trayectoria Profesional
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold tracking-tighter"
          >
            De las Notas al <span className="text-primary italic">Impacto.</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative glass p-8 border-glass-border hover:border-primary/30 transition-all group mb-2`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                <div>
                  <div className="flex items-center gap-3 text-primary mb-2">
                    <Briefcase size={20} />
                    <span className="text-xl font-bold uppercase tracking-tight">{exp.company}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 w-fit h-fit">
                  <Calendar size={16} className="text-secondary" />
                  <span className="text-sm font-semibold">{exp.period}</span>
                </div>
              </div>
              <p className="text-lg text-text-gray leading-relaxed max-w-2xl">
                {exp.desc}
              </p>

              {exp.isCurrent && (
                <div className="absolute -top-3 -right-3 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest animate-pulse shadow-lg shadow-primary/50">
                  Actual
                </div>
              )}

            </motion.div>

          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;

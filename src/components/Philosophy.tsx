import { motion } from 'framer-motion';
import { Users, ShieldCheck, Zap } from 'lucide-react';

const Philosophy = () => {
  return (
    <section className="py-24 bg-bg-darker relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6 border-primary/20"
          >
            <Zap size={16} className="text-secondary fill-secondary" />
            <span className="text-xs font-bold uppercase tracking-widest text-white">Mi Filosofía de Impacto</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter"
          >
            Cuando la <span className="text-primary italic">Cercanía</span> <br />
            supera al <span className="underline decoration-secondary/50 underline-offset-4">Tamaño.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-xl text-text-gray leading-relaxed"
          >
            <p>
              En un mundo obsesionado con los grandes números, los <span className="text-white font-semibold italic">nano influencers</span> parecen pasar desapercibidos. Sin embargo, son justamente esas comunidades íntimas las que están logrando conversaciones reales.
            </p>
            <p>
              Ser <span className="text-primary font-bold italic">nano</span> no es una limitación; es una ventaja fina y estratégica cuando sabes cómo, cuándo y para qué usarla.
            </p>
            <p className="border-l-4 border-secondary pl-6 py-2 text-white font-medium italic">
              "Lo más pequeño no es insignificante, es simplemente lo más cercano."
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {[
              { 
                icon: Users, 
                title: 'Conexión Humana', 
                desc: 'Vínculos reales que los perfiles masivos ya no pueden generar.' 
              },
              { 
                icon: ShieldCheck, 
                title: 'Confianza Total', 
                desc: 'Audiencias atentas que valoran la recomendación genuina sobre la publicidad.' 
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass p-8 border-glass-border hover:bg-primary/5 transition-colors group"
              >
                <item.icon size={32} className="text-secondary mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                <p className="text-text-gray">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

       {/* Background decorative glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Philosophy;

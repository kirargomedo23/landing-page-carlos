import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Heart, Sparkles } from 'lucide-react';

const About = () => {
  const values = [
    { icon: Heart, text: 'Autenticidad' },
    { icon: Target, text: 'Humanidad' },
    { icon: Sparkles, text: 'Creatividad funcional' },
    { icon: ShieldCheck, text: 'Compromiso' },
    { icon: Sparkles, text: 'Profesionalismo' },
  ];

  return (
    <section id="sobre-mi" className="relative  overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Theory / ADN */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-1 bg-primary rounded-full" />
              <span className="text-secondary font-bold tracking-widest uppercase text-sm">ADN DE COMUNICARL'S</span>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                  <Target className="text-primary" /> Misión
                </h3>
                <p className="text-lg text-text-gray leading-relaxed">
                  Elevar la comunicación de las marcas a un nivel donde la <span className="text-white font-semibold">autenticidad sea puente</span>, la creatividad sea voz y las personas se sientan realmente escuchadas. Diseño mensajes que no solo informan: transforman, conectan y permanecen.
                </p>
              </div>
              <br />
              <div>
                <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                  <Eye className="text-primary" /> Visión
                </h3>
                <p className="text-lg text-text-gray leading-relaxed">
                  Ser un referente en comunicación humana y contenido con sentido, liderando un estilo donde las historias construyan confianza y las marcas encuentren una forma <span className="text-white font-semibold italic">más sensible y real</span> de conectar con su público.
                </p>
              </div>
            </div>
            <br />
            <div className="grid grid-cols-2 gap-4">
              {values.map((v, i) => (
                <div key={i} className="flex items-center gap-3 p-4 glass rounded-xl border-glass-border hover:border-primary/50 transition-colors">
                  <v.icon size={18} className="text-primary" />
                  <span className="text-sm font-semibold">{v.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image & Values */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="relative glass p-4 ring-1 ring-glass-border overflow-hidden">
              <img
                src="/assets/carlos_bts.jpg"
                alt="Carlos Gil"
                className="w-full h-[400px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-darker/80 to-transparent" />
              <div className="  bottom-10 left-10 right-10">
                <p className="text-2xl font-bold text-white italic">
                  "Comunicar con estilo, frescura y propósito."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

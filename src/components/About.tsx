import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="sobre-mi" className="relative pb-24 lg:pb-32 overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-1 bg-primary rounded-full" />
              <span className="text-secondary font-bold tracking-widest uppercase text-sm">Mi Historia</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Mi Pasión por <span className="text-primary italic">Contar Historias</span>
            </h2>

            <div className="space-y-6 text-xl text-text-gray leading-relaxed">
              <p>
                Como Comunicador Social, mi misión siempre ha sido clara: ser el puente entre las realidades locales y el eco global. Formado con la convicción de que cada voz merece ser escuchada, he dedicado mi carrera a explorar nuevas narrativas digitales.
              </p>
              <p>
                Mi amor por mi pueblo no es solo nostalgia; es mi motor personal. Mi mayor deseo es visibilizar las riquezas, los talentos y las historias del lugar que me vio crecer, convirtiendo lo cotidiano en contenido viral que impacte y conecte corazones.
              </p>
              <p className="font-semibold text-white italic border-l-4 border-primary pl-6 py-2">
                "No solo reporto noticias; capturo la esencia de lo que nos hace únicos."
              </p>
            </div>
          </motion.div>

          {/* BTS Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative z-10 glass p-3 ring-1 ring-glass-border">
              <img
                src="/assets/carlos_bts.jpg"
                alt="Carlos Gil en acción"
                className="w-full h-[500px] object-cover rounded-2xl grayscale-[30%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-4 -right-4 glass p-4 border-primary/20 bg-white/5 backdrop-blur-xl shadow-2xl hidden md:block z-20">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-3xl font-bold text-primary">100%</span>
                  <span className="text-[10px] text-text-gray uppercase tracking-widest font-bold">Autenticidad</span>
                </div>
              </div>
            </div>

            {/* Background elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary opacity-20 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary opacity-10 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

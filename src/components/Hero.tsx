import { motion } from 'framer-motion';
import { Download, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen relative flex items-center overflow-hidden pt-32 pb-20 md:py-40">
      {/* Background with Gradient and Carlos Image */}
      <div className="absolute top-0 right-0 w-full md:w-[50%] h-full z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-bg-darker via-bg-darker/60 to-transparent z-10 md:block hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-darker via-transparent to-transparent z-10 md:hidden" />
        <img
          src="/assets/carlos_hero.png"
          alt="Carlos Gil Hero"
          className="w-full h-full object-cover object-[top_center] opacity-80 md:opacity-100"
        />
        <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-bg-darker to-transparent z-10" />
      </div>

      <div className="container relative z-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full w-fit">
              <span className="w-2 h-2 bg-primary animate-pulse rounded-full" />
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">Disponible para Colaboraciones</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tighter">
              Carlos Gil:<br />
              <span className="text-primary italic">Comunicador Social.</span><br />
              Digital. Narrador.
            </h1>

            <p className="text-xl text-text-gray max-w-lg">
              Amplificando voces, creando conexiones y llevando la esencia de <span className="text-white font-semibold italic underline decoration-primary underline-offset-4">su pueblo</span> al mundo entero. Profesional de la comunicación con impacto viral.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              <a
                href="/assets/CV_Carlos_Gil.pdf"
                download
                className="btn btn-primary bg-primary group"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                Descargar mi CV
              </a>
              <a
                href="https://wa.me/yournumber" // Replace with actual number if provided
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary border-primary/50 group"
              >
                <MessageCircle size={20} className="group-hover:text-primary" />
                Contactar Colaboraciones
              </a>
            </div>
          </motion.div>

          {/* Social Stats/Proof (Optional Premium Touch) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 mt-16 border-l border-glass-border pl-8"
          >
            <div>
              <div className="text-3xl font-bold text-white">+100k</div>
              <div className="text-sm text-text-gray uppercase tracking-widest">Seguidores</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">+1M</div>
              <div className="text-sm text-text-gray uppercase tracking-widest">Reproducciones</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">+5 años</div>
              <div className="text-sm text-text-gray uppercase tracking-widest">Experiencia</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative element */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary opacity-5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Hero;

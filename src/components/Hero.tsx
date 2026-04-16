import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import SocialIcon from './SocialIcon';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen relative flex items-center overflow-hidden pt-32 pb-20 md:py-40 bg-black">
      {/* Background with Gradient and Decorative elements */}
      <div className="absolute top-0 right-0 w-full md:w-[50%] h-full z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-bg-darker via-bg-darker/60 to-transparent z-10 md:block hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-darker via-transparent to-transparent z-10 md:hidden" />
        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-bg-darker to-transparent z-10" />
      </div>

      <div className="container relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full w-fit border-primary/20">
              <span className="w-2 h-2 bg-primary animate-pulse rounded-full" />
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">ComuniCarl's: Comunicación con Propósito</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-bold leading-[1] tracking-tighter">
              Transformo <span className="text-primary italic">Momentos</span><br />
              en Conexiones <span className="underline decoration-primary/50 underline-offset-8">Reales.</span>
            </h1>

            <p className="text-xl md:text-2xl text-text-gray max-w-2xl leading-relaxed">
              Soy <span className="text-white font-bold">Carlos Gil Monzón</span>, Comunicador Social y creador de contenido UGC. Creo que cada experiencia tiene el poder de inspirar si se cuenta con la estrategia correcta.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              <a href="#contacto" className="btn btn-primary group">
                <MessageSquare size={20} className="group-hover:scale-110 transition-transform" />
                Empieza hoy
              </a>
              <div className="flex items-center gap-6 ml-2 border-l border-glass-border pl-6">
                <a href="https://www.instagram.com/comunicarls29" target="_blank" rel="noopener" className="text-text-gray hover:text-primary transition-colors hover:scale-110 transform"><SocialIcon name="instagram" size={24} /></a>
                <a href="https://www.facebook.com/carlosgilmonzon" target="_blank" rel="noopener" className="text-text-gray hover:text-primary transition-colors hover:scale-110 transform"><SocialIcon name="facebook" size={24} /></a>
                <a href="https://www.tiktok.com/@comunicarls" target="_blank" rel="noopener" className="text-text-gray hover:text-primary transition-colors hover:scale-110 transform"><SocialIcon name="tiktok" size={24} /></a>
              </div>
            </div>
          </motion.div>

          {/* Social Proof Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 border-t border-glass-border pt-8"
          >
            {[
              { val: '100%', label: 'Autenticidad' },
              { val: '+3 Años', label: 'Estrategia Digital' },
              { val: 'UGC', label: 'Contenido de Valor', hideMobile: true }
            ].map((stat, i) => (
              <div key={i} className={stat.hideMobile ? 'hidden md:block' : ''}>
                <div className="text-4xl font-bold text-white tracking-tighter">{stat.val}</div>
                <div className="text-xs text-text-gray uppercase tracking-widest font-bold mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background Decorative element */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary opacity-5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-secondary opacity-5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Hero;

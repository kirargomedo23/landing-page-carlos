import { motion } from 'framer-motion';
import { Video, Mic2, Megaphone, Target } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, delay }: { icon: any; title: string; description: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group p-8 rounded-[2rem] glass transition-all duration-500 hover:bg-primary/10 hover:border-primary/50 relative overflow-hidden"
  >
    <div className="mb-6 relative z-10">
      <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
        <Icon size={32} />
      </div>
    </div>
    <div className="relative z-10">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-lg text-text-gray mb-6 leading-relaxed">{description}</p>
    </div>

    {/* Decorative background icon */}
    <div className="absolute -bottom-6 -right-6 text-[8rem] font-bold text-white/5 pointer-events-none group-hover:text-primary/5 transition-colors duration-500">
      <Icon size={90} />
    </div>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      icon: Video,
      title: 'Creación de Contenido Patrocinado',
      description: 'Campañas auténticas que resuenan con mi audiencia a través de Reels, TikToks y videos de larga duración.',
      delay: 0.1,
    },
    {
      icon: Megaphone,
      title: 'Reportajes y Cobertura de Eventos',
      description: 'Narrativa profesional y cobertura en vivo con un estilo dinámico que captura los momentos clave.',
      delay: 0.2,
    },
    {
      icon: Target,
      title: 'Estrategia de Comunicación Digital',
      description: 'Consultoría personalizada para marcas que buscan conectar de forma genuina en el ecosistema digital.',
      delay: 0.3,
    },
    {
      icon: Mic2,
      title: 'Presentación y Moderación',
      description: 'Voz carismática y presencia profesional para tus eventos, paneles y lanzamientos de marca.',
      delay: 0.4,
    },
  ];

  return (
    <section id="servicios" className="py-24 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            ¿Cómo Podemos <span className="text-primary italic">Trabajar Juntos?</span>
          </motion.h2>
          <p className="text-xl text-text-gray max-w-2xl mx-auto">Elevando tu marca a través de la comunicación auténtica y el storytelling digital.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>

      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Services;

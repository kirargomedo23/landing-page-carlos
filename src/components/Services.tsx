import { motion } from 'framer-motion';
import { Smartphone, Presentation, Megaphone, Users, CheckCircle2 } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, items, delay }: { icon: any; title: string; items: string[]; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group p-8 rounded-[2rem] glass transition-all duration-500 hover:bg-primary/10 hover:border-primary/50 relative overflow-hidden h-full border-glass-border"
  >
    <div className="mb-6 relative z-10">
      <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
        <Icon size={32} />
      </div>
    </div>
    <div className="relative z-10">
      <h3 className="text-2xl font-bold mb-6 tracking-tight">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3 text-text-gray group-hover:text-white/90 transition-colors">
            <CheckCircle2 size={18} className="text-primary shrink-0 mt-1" />
            <span className="text-sm font-medium leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>


  </motion.div>
);

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Contenido UGC',
      items: [
        'Testimoniales & Historias del cliente',
        'Unboxing & Experiencias reales',
        'Contenido POV & Reseñas honestas',
        'Formato "Try-on" o "Before/After"'
      ],
      delay: 0.1,
    },
    {
      icon: Megaphone,
      title: 'Eventos & Reels Narrativos',
      items: [
        'Resumen emocional del evento',
        'Storytelling basado en experiencia',
        'Narrativa estética de alto impacto',
        'Entrevistas cortas & testimonios en vivo'
      ],
      delay: 0.2,
    },
    {
      icon: Presentation,
      title: 'Gestión de Comunicación',
      items: [
        'Redacción estratégica & Guiones',
        'Conceptos creativos para campañas',
        'Ideas de campaña 360°',
        'Consultoría de comunicación humana'
      ],
      delay: 0.3,
    },
    {
      icon: Users,
      title: 'Influencer Marketing',
      items: [
        'Publicación en cuenta principal',
        'Stories de alto engagement',
        'Reels dedicados para marcas',
        'Product placement natural'
      ],
      delay: 0.4,
    },
  ];

  return (
    <section id="servicios" className="py-24 relative overflow-hidden bg-black/40">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-secondary font-bold tracking-widest uppercase text-sm mb-4"
          >
            Servicios Premium
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter"
          >
            Donde Empieza la <span className="text-primary italic">Conexión.</span>
          </motion.h2>
          <p className="text-xl text-text-gray max-w-2xl mx-auto italic">Soluciones de comunicación auténtica diseñadas para elevar la presencia de tu marca.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

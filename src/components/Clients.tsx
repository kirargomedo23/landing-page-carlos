import { motion } from 'framer-motion';
import { 
  Globe, Home, Palette, MessageSquare, MapPin, 
  Plane, Compass, Scissors, Utensils, Leaf 
} from 'lucide-react';

interface Brand {
  name: string;
  abbr: string;
  color: string;
  icon: any;
  image?: string;
}

const BrandLogo = ({ brand }: { brand: Brand }) => (
  <div className="flex flex-col items-center gap-4 group">
    <div 
      className="w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:scale-110 shadow-xl border-4 border-glass-border"
      style={{ backgroundColor: brand.color }}
    >
      {brand.image ? (
        <img src={brand.image} alt={brand.name} className="w-full h-full object-cover" />
      ) : (
        <>
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <brand.icon size={40} className={brand.color === '#ffffff' ? 'text-black' : 'text-white'} />
          <span className={`absolute bottom-2 text-[8px] font-bold tracking-widest uppercase ${brand.color === '#ffffff' ? 'text-black/40' : 'text-white/40'}`}>
            {brand.abbr}
          </span>
        </>
      )}
    </div>
    <span className="text-xs md:text-sm font-bold text-text-gray group-hover:text-white uppercase tracking-tighter transition-colors max-w-[120px] text-center">
      {brand.name}
    </span>
  </div>
);

const Clients = () => {
  const clients: Brand[] = [
    { name: 'Lukers', abbr: 'LK', color: '#0088ff', icon: Globe },
    { name: 'Casa Las Bugambilias', abbr: 'LB', color: '#8c3359', icon: Home },
    { name: 'Exhibición Van Gogh Vivo', abbr: 'VG', color: '#fad700', icon: Palette },
    { name: 'MYM Comunicaciones', abbr: 'MM', color: '#ff0055', icon: MessageSquare },
    { name: 'Feria Trujillo ¿Di?', abbr: 'TR', color: '#c41e3a', icon: MapPin },
    { name: 'Escuela Tour', abbr: 'ET', color: '#001f3f', icon: Plane },
    { name: 'Casa Jumbo', abbr: 'CJ', color: '#ffffff', icon: Compass },
    { name: 'GCarpio Barbershop', abbr: 'GC', color: '#1a1a1a', icon: Scissors },
    { name: 'Cabada Restaurant', abbr: 'CR', color: '#2c2c2c', icon: Utensils },
    { name: 'Natura / Avon', abbr: 'NT', color: '#ffc0cb', icon: Leaf },
  ];

  const duplicatedClients = [...clients, ...clients];

  return (
    <section id="clientes" className="py-24 relative overflow-hidden bg-bg-darker/40">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.05)_0%,transparent_50%)] pointer-events-none" />

      <div className="container px-4 mx-auto mb-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 glass rounded-full border-primary/20">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Portfolio de Clientes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
            Impulsando <span className="text-primary italic">Marcas</span> con Propósito
          </h2>
        </motion.div>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Fade overlays */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-bg-darker to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-bg-darker to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-12 md:gap-24 items-center whitespace-nowrap px-12"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          style={{ width: 'fit-content' }}
        >
          {duplicatedClients.map((brand, i) => (
            <BrandLogo key={i} brand={brand} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;

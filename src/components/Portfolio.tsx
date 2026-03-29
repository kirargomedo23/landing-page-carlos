import { motion } from 'framer-motion';
import { Music2, ExternalLink, Play } from 'lucide-react';
// Important for Vite/React: Import local assets to let Vite resolve the URL correctly
import punoImg from '../assets/images/puno.jpg';
import fabricaImg from '../assets/images/fabrica.png';


const PortfolioItem = ({ type, title, views, link, image }: { type: 'tiktok' | 'youtube'; title: string; views: string; link: string; image: string }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="group relative overflow-hidden glass hover:border-primary/50 transition-all duration-500 rounded-3xl h-full shadow-2xl"
  >
    <div className="relative aspect-[9/16] md:aspect-video overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg-darker via-transparent to-transparent opacity-60" />

      {/* Play Icon / Hover Overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-300">
          <Play fill="white" size={32} />
        </div>
      </div>

      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full">
        {type === 'tiktok' ? <Music2 size={14} className="text-secondary" /> : <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-red-500"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>}
        <span className="text-[10px] uppercase font-bold tracking-widest text-white">{type}</span>
      </div>
    </div>

    <div className="p-6">
      <h4 className="text-lg font-bold mb-2 line-clamp-1 group-hover:text-primary transition-colors">{title}</h4>
      <div className="flex items-center justify-between">
        <span className="text-sm text-text-gray font-medium">{views} reproducciones</span>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-white transition-colors"
        >
          <ExternalLink size={20} />
        </a>
      </div>
    </div>
  </motion.div>
);

const Portfolio = () => {
  const tiktokVideos = [
    { title: 'Sausal, Tierra del Eterno Sol', views: '10K+', link: 'https://www.tiktok.com/@comunicarls/video/7543314094368017672', image: 'https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/523950759_732904473040603_483563725428838992_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=sZTNtJtsehQQ7kNvwF-RutC&_nc_oc=AdpOZ85IDbRnkDWSwPvqMTOkpvIJ1B-mifxutRoepusAPPz0X6qtFMfsSe1SYbgu9aI&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=UiulNh6u861kk3ZnONVpRg&_nc_ss=7a32e&oh=00_AfwMcVMj9LQWNbOuV9vmZtHAAWrai0BAEEqQ8ATEBrZibg&oe=69CF08D0' },
    { title: 'Puno', views: '10K+', link: 'https://www.tiktok.com/@comunicarls', image: punoImg },
    { title: 'Machu Picchu', views: '10K+', link: 'https://www.tiktok.com/@comunicarls/video/7513308715336994053', image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];

  const youtubeVideos = [
    { title: 'Sausal: La ex fábrica de azúcar', views: '900+', link: 'https://www.youtube.com/watch?v=_2DusUWqNtQ', image: fabricaImg },
    { title: 'Sausal, Tierra del Eterno Sol', views: '200+', link: 'https://www.youtube.com/watch?v=vQgzcfRX6Ao', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1200' },
  ];

  return (
    <section id="portafolio" className="bg-bg-dark/30 py-24">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-12 h-1 bg-primary rounded-full" />
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Mi Trabajo en Acción</span>
            <span className="w-12 h-1 bg-primary rounded-full" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Periodismo <span className="text-primary italic">Viral</span> y Comunicación de Impacto</h2>
          <p className="text-xl text-text-gray max-w-2xl">Desde reportajes locales hasta tendencias globales. Mira cómo conecto con la audiencia.</p>
        </div>

        {/* TikTok Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <Music2 size={32} className="text-primary" />
            <h3 className="text-2xl font-bold">Reportajes Virales en TikTok</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tiktokVideos.map((video, idx) => (
              <PortfolioItem key={idx} type="tiktok" {...video} />
            ))}
          </div>
        </div>

        {/* YouTube Section */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-red-500"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
            <h3 className="text-2xl font-bold">Análisis y Narrativa en YouTube</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {youtubeVideos.map((video, idx) => (
              <PortfolioItem key={idx} type="youtube" {...video} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

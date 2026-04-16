import { motion } from 'framer-motion';
import SocialIcon from './SocialIcon';

const Socials = () => {
  const socials = [
    {
      name: 'TikTok',
      type: 'tiktok',
      color: '#ff0050',
      link: 'https://www.tiktok.com/@comunicarls',
      handle: '@comunicarls'
    },
    {
      name: 'YouTube',
      type: 'youtube',
      color: '#ff0000',
      link: 'https://www.youtube.com/@carlosgilmonzon29',
      handle: 'Carlos Gil'
    },
    {
      name: 'Instagram',
      type: 'instagram',
      color: '#e4405f',
      link: 'https://www.instagram.com/comunicarls29',
      handle: '@comunicarls29'
    },
    {
      name: 'Facebook',
      type: 'facebook',
      color: '#1877f2',
      link: 'https://www.facebook.com/carlosgilmonzon',
      handle: 'Carlos Gil Monzon'
    },
    {
      name: 'Gmail',
      type: 'email',
      color: '#ea4335',
      link: 'mailto:Gilmoncarlosjose@gmail.com',
      handle: 'Gilmoncarlosjose@gmail.com'
    }
  ];

  return (
    <section id="contacto" className="py-24 bg-bg-darker">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto flex flex-col   text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 italic tracking-tighter text-white">Conectemos</h2>
            <p className="text-xl text-text-gray max-w-md mx-auto leading-relaxed">¿Tienes una propuesta o quieres charlar sobre una colaboración? Estaré encantado de escucharte.</p>
            <br />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, borderColor: social.color }}
                className="group flex items-center gap-6 p-6 glass border-white/10 transition-all rounded-[2rem] text-left"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110"
                  style={{
                    backgroundColor: `${social.color}20`,
                    color: social.color
                  }}
                >
                  <SocialIcon name={social.type as any} size={28} />
                </div>
                <div>
                  <div className="text-sm text-text-gray uppercase tracking-widest font-bold mb-1">{social.name}</div>
                  <div className="text-lg font-bold text-white group-hover:text-primary transition-colors">{social.handle}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Socials;

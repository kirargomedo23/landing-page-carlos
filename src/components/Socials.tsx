import { motion } from 'framer-motion';
import { Music2 } from 'lucide-react';

const Socials = () => {
  const socials = [
    {
      name: 'TikTok',
      icon: (props: any) => <Music2 {...props} />,
      color: '#ff0050',
      link: 'https://www.tiktok.com/@comunicarls',
      handle: '@comunicarls'
    },
    {
      name: 'YouTube',
      icon: ({ size, ...props }: any) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      color: '#ff0000',
      link: 'https://www.youtube.com/@carlosgilmonzon29',
      handle: 'Carlos Gil'
    },
    {
      name: 'Instagram',
      icon: ({ size, ...props }: any) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      color: '#e4405f',
      link: 'https://www.instagram.com/comunicarls29',
      handle: '@comunicarls29'
    },
    {
      name: 'Facebook',
      icon: ({ size, ...props }: any) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
      color: '#1877f2',
      link: 'https://www.facebook.com/carlosgilmonzon',
      handle: 'Carlos Gil Monzon'
    },
  ];

  return (
    <section id="contacto" className="py-24 bg-bg-darker">
      <div className="container">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 italic">Conectemos</h2>
              <p className="text-xl text-text-gray max-w-md">¿Tienes una propuesta o quieres charlar sobre una colaboración? Estaré encantado de escucharte.</p>
            </div>

            <div className="space-y-8">

              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-6 p-6 glass border-white/10 hover:border-primary/50 transition-all rounded-[2rem] w-full"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110"
                    style={{
                      backgroundColor: `${social.color}20`,
                      color: social.color
                    }}
                  >
                    <social.icon size={28} />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-text-gray uppercase tracking-widest font-bold">{social.name}</div>
                    <div className="text-xl font-bold">{social.handle}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Socials;

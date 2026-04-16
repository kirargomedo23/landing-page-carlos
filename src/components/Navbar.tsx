import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SocialIcon from './SocialIcon';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Mí', href: '#sobre-mi' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'py-4 glass rounded-none border-t-0 border-x-0 bg-opacity-70 backdrop-blur-md' : 'py-6 bg-transparent'
      }`}>
      <div className="container flex items-center justify-between h-full">
        <div className="text-2xl font-bold tracking-tighter text-white">
          CARLOS<span className="text-primary italic">GIL</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-primary text-sm tracking-widest uppercase transition-colors">
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4 ml-4 border-l border-glass-border pl-6">
            <a href="https://www.tiktok.com/@comunicarls" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><SocialIcon name="tiktok" size={18} /></a>
            <a href="https://www.instagram.com/comunicarls29" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><SocialIcon name="instagram" size={18} /></a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white p-2 glass" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full glass rounded-none border-x-0 overflow-hidden md:hidden"
          >
            <div className="p-8 flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xl font-bold hover:text-primary uppercase tracking-widest"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-8 pt-6 border-t border-glass-border w-full justify-center">
                <a href="https://www.tiktok.com/@comunicarls" target="_blank" rel="noopener noreferrer"><SocialIcon name="tiktok" size={28} /></a>
                <a href="https://www.instagram.com/comunicarls29" target="_blank" rel="noopener noreferrer"><SocialIcon name="instagram" size={28} /></a>
                <a href="https://www.facebook.com/carlosgilmonzon" target="_blank" rel="noopener noreferrer"><SocialIcon name="facebook" size={28} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

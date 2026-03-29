const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-glass-border glass rounded-none border-x-0 border-b-0 mt-20">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-xl font-bold tracking-tighter">
          CARLOS<span className="text-primary">GIL</span>
        </div>

        <p className="text-text-gray text-sm md:text-base font-medium text-center md:text-left">
          © {currentYear} Carlos Gil. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

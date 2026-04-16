import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Socials from './components/Socials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Philosophy />
        <Services />
        <Portfolio />
        <Clients />
        <Skills />
        <Experience />
        <Socials />
      </main>
      <Footer />
    </div>
  );
}

export default App;

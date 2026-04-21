import { useState, useEffect } from 'react';
import { Scissors, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Kreu', href: '#home' },
    { name: 'Sherbimet', href: '#services' },
    { name: 'Rreth Nesh', href: '#about' },
    { name: 'Galeria', href: '#gallery' },
    { name: 'Kontakti', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Scissors className="text-amber-500 w-8 h-8" />
          <span className="text-2xl font-serif font-bold tracking-wider text-white">BEDDI<span className="text-amber-500">HAIR</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-amber-500 transition-colors uppercase text-sm tracking-widest font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-2 rounded-none font-bold transition-all uppercase text-sm tracking-widest"
          >
            Rezervo Tani
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 absolute top-full left-0 w-full h-screen flex flex-col items-center pt-20 gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-2xl uppercase tracking-widest font-serif"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="bg-amber-500 text-black px-10 py-4 rounded-none font-bold uppercase tracking-widest mt-4"
          >
            Rezervo Tani
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ backgroundImage: 'url("/hero-barber.jpg")' }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-amber-500 uppercase tracking-[0.3em] font-medium mb-4 block">Mireserdhet ne BeddiHair</span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-6 leading-tight">
            KU TRADITA <br /> TAKON <span className="text-amber-500 italic">STILIN</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light tracking-wide">
            Eksperience profesionale ne prerjen e flokeve dhe perkujdesjen e mjekres. Stili juaj eshte pasioni yne.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full md:w-auto bg-amber-500 hover:bg-amber-600 text-black px-10 py-5 text-sm font-bold uppercase tracking-widest transition-all"
            >
              Rezervo Takimin
            </a>
            <a
              href="#services"
              className="w-full md:w-auto border border-white/30 hover:border-amber-500 text-white px-10 py-5 text-sm font-bold uppercase tracking-widest transition-all bg-white/5 backdrop-blur-sm"
            >
              Sherbimet Tona
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-20 bg-gradient-to-b from-amber-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;

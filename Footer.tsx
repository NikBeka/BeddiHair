import { Scissors, Globe, MessageSquare, Camera } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
          <div className="flex items-center gap-2">
            <Scissors className="text-amber-500 w-8 h-8" />
            <span className="text-2xl font-serif font-bold tracking-wider text-white">BEDDI<span className="text-amber-500">HAIR</span></span>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors"><Camera size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors"><MessageSquare size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors"><Globe size={24} /></a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h4 className="text-white font-serif font-bold text-xl mb-6">Mbi BeddiHair</h4>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              Ne jemi nje skuader profesionistesh te dedikuar ndaj artit te berberit. Cdo klient trajtohet me vetepermbajtje dhe kujdes te vecante per te siguruar rezultatin me te mire.
            </p>
          </div>
          <div>
            <h4 className="text-white font-serif font-bold text-xl mb-6">Lidhje te Shpejta</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-500 hover:text-white transition-colors">Kreu</a></li>
              <li><a href="#services" className="text-gray-500 hover:text-white transition-colors">Sherbimet</a></li>
              <li><a href="#about" className="text-gray-500 hover:text-white transition-colors">Rreth Nesh</a></li>
              <li><a href="#gallery" className="text-gray-500 hover:text-white transition-colors">Galeria</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-serif font-bold text-xl mb-6">Sherbimet</h4>
            <ul className="space-y-4">
              <li className="text-gray-500">Prerje Flokesh</li>
              <li className="text-gray-500">Rregullim Mjekre</li>
              <li className="text-gray-500">Rroje Tradicionale</li>
              <li className="text-gray-500">Trajtim Fytyre</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} BeddiHair Barbershop. Te gjitha te drejtat e rezervuara.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

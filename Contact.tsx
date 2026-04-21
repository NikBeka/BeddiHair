import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info */}
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-serif font-bold text-white mb-8">Na Kontaktoni</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-4 text-amber-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Adresa</h4>
                  <p className="text-gray-400">Rruga "Sami Frasheri", Tirane, Shqiperi</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-4 text-amber-500">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Telefon</h4>
                  <p className="text-gray-400">+355 69 00 00 000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-4 text-amber-500">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Orari</h4>
                  <p className="text-gray-400">Hene - Shtune: 09:00 - 20:00</p>
                  <p className="text-gray-400">Djele: Pushim</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-4 text-amber-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email</h4>
                  <p className="text-gray-400">info@beddihair.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 bg-[#111] p-8 md:p-12 border border-white/5"
          >
            <h3 className="text-2xl font-serif font-bold text-white mb-6 uppercase tracking-wider">Rezervo nje sherbim</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Emri Juaj</label>
                <input 
                  type="text" 
                  placeholder="Shkruani emrin..."
                  className="w-full bg-black border border-white/10 p-4 text-white focus:border-amber-500 outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Numri i Telefonit</label>
                <input 
                  type="tel" 
                  placeholder="+355..."
                  className="w-full bg-black border border-white/10 p-4 text-white focus:border-amber-500 outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Sherbimi</label>
                <select className="w-full bg-black border border-white/10 p-4 text-white focus:border-amber-500 outline-none transition-colors appearance-none">
                  <option>Prerje Flokesh</option>
                  <option>Rregullim Mjekre</option>
                  <option>Rroje Tradicionale</option>
                  <option>Trajtim Fytyre</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Data & Ora</label>
                <input 
                  type="datetime-local" 
                  className="w-full bg-black border border-white/10 p-4 text-white focus:border-amber-500 outline-none transition-colors"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Mesazh (Opsionale)</label>
                <textarea 
                  rows={4}
                  placeholder="Nese keni ndonje kerkese specifike..."
                  className="w-full bg-black border border-white/10 p-4 text-white focus:border-amber-500 outline-none transition-colors"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button 
                  type="submit" 
                  className="w-full bg-amber-500 hover:bg-amber-600 text-black py-5 font-bold uppercase tracking-[0.2em] transition-all"
                >
                  Dergo Kerkesen
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

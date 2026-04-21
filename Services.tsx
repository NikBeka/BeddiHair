import { Scissors, Zap, Shield, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Scissors className="w-8 h-8" />,
    title: "Prerje Flokesh",
    price: "15€",
    description: "Prerje klasike ose moderne me keshilla per stilimin."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Rregullim Mjekre",
    price: "10€",
    description: "Konturim i mjekres me brir dhe vajra hidratues."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Rroje Tradicionale",
    price: "12€",
    description: "Rroje me peshqir te nxehte dhe brisk profesional."
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Trajtim Fytyre",
    price: "20€",
    description: "Maske per fytyren dhe masazh relaksues."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-500 uppercase tracking-widest text-sm font-semibold">Cfare ofrojme</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-2">Sherbimet Tona</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 border border-white/5 bg-[#111] hover:border-amber-500/50 transition-all group"
            >
              <div className="text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-amber-500 font-serif text-2xl mb-4">{service.price}</p>
              <p className="text-gray-400 font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

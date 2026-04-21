import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Arben L.",
    comment: "Berberi me i mire ne qytet. Atmosfera eshte fantastike dhe puna eshte gjithmone precize.",
    rating: 5
  },
  {
    name: "Ervin K.",
    comment: "Sherbim shume profesional. Kane nje sy per detajet qe rralle e gjen diku tjeter.",
    rating: 5
  },
  {
    name: "Besmir D.",
    comment: "Rroje tradicionale me peshqir te nxehte ishte nje eksperience mrekullueshme. Rekomandohet 100%.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-16">Cfare thone klientet tane</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111] p-8 border border-white/5"
            >
              <div className="flex justify-center gap-1 mb-4 text-amber-500">
                {[...Array(t.rating)].map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-400 italic mb-6">"{t.comment}"</p>
              <p className="text-white font-bold uppercase tracking-widest text-sm">- {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

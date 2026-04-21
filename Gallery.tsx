import { motion } from 'framer-motion';

const images = [
  { url: '/haircut-1.jpg', title: 'Modern Fade' },
  { url: '/beard-trim.jpg', title: 'Beard Sculpting' },
  { url: '/hero-barber.jpg', title: 'Our Shop' },
  { url: '/barber-tools.jpg', title: 'Precision Tools' },
  { url: '/haircut-1.jpg', title: 'Classic Cut' },
  { url: '/beard-trim.jpg', title: 'Hot Towel Shave' }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-500 uppercase tracking-widest text-sm font-semibold">Puna Jone</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-2">Galeria e Stilit</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden aspect-square cursor-pointer"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-serif font-bold tracking-widest border-b-2 border-amber-500 pb-2">
                  {img.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

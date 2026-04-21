import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10">
              <img 
                src="/barber-tools.jpg" 
                alt="Barber Tools" 
                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 border-8 border-amber-500/20 -z-0 hidden md:block"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-amber-500 uppercase tracking-widest text-sm font-semibold">Historia Jone</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-8">BeddiHair: Aty ku Cilesia eshte Standard</h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Themeluar me nje vision te qarte, BeddiHair nuk eshte thjesht nje sallon prerjeje, por nje destinacion per cdo mashkull qe vlereson veten dhe pamjen e tij.
            </p>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Me nje staf me eksperience shume vjecare dhe produkte te nje cilesie superiore, ne sigurohemi qe cdo vizite te jete nje eksperience relaksuese dhe transformuese. Ne besojme se nje prerje flokesh e mire mund te ndryshoje diten tuaj.
            </p>
            
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
              <div>
                <h4 className="text-amber-500 text-4xl font-serif font-bold mb-2">10+</h4>
                <p className="text-gray-500 uppercase text-xs tracking-widest">Vite Eksperience</p>
              </div>
              <div>
                <h4 className="text-amber-500 text-4xl font-serif font-bold mb-2">5000+</h4>
                <p className="text-gray-500 uppercase text-xs tracking-widest">Kliente te Kenaqur</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

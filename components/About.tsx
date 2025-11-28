import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS, TAGS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-zinc-950 text-white">
      <div className="px-4 md:px-12 max-w-[1920px] mx-auto">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-32">
          
          <div className="w-full md:w-1/3 lg:w-1/4">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="aspect-[3/4] w-full bg-zinc-900 overflow-hidden"
             >
                <img 
                 src="https://picsum.photos/600/800?grayscale" 
                 alt="Portrait" 
                 className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
               />
             </motion.div>
          </div>

          <div className="w-full md:w-2/3 lg:w-3/4 flex flex-col justify-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl lg:text-8xl font-display uppercase font-light leading-none mb-12"
            >
              Ming One <br/>
              <span className="text-zinc-600">Profile</span>
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
               <div className="space-y-6">
                 <h3 className="text-sm uppercase tracking-widest text-zinc-500 border-b border-zinc-800 pb-2">Biography</h3>
                 <p className="text-xl md:text-2xl font-light leading-relaxed text-zinc-200">
                   Senior Visual & UI Designer with over 10 years of experience shaping digital products and brand identities.
                 </p>
                 <p className="text-zinc-400 leading-relaxed">
                   Currently based in Qingyuan. I approach design with a focus on clarity, structure, and emotional impact. My background spans from e-commerce visual systems to complex app interfaces and 3D metaverse assets.
                 </p>
               </div>

               <div className="space-y-12">
                 <div className="space-y-4">
                   <h3 className="text-sm uppercase tracking-widest text-zinc-500 border-b border-zinc-800 pb-2">Capabilities</h3>
                   <div className="flex flex-wrap gap-x-2 gap-y-2">
                      {TAGS.map((tag, idx) => (
                        <span key={idx} className="text-zinc-300 text-lg">
                          {tag}{idx !== TAGS.length -1 && <span className="text-zinc-700 mx-2">/</span>}
                        </span>
                      ))}
                   </div>
                 </div>

                 <div className="space-y-4">
                   <h3 className="text-sm uppercase tracking-widest text-zinc-500 border-b border-zinc-800 pb-2">Software</h3>
                   <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                     {SKILLS.map((skill, idx) => (
                       <span key={idx} className="text-zinc-400 text-sm">{skill}</span>
                     ))}
                   </div>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
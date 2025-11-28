import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-zinc-950 text-white border-t border-white/10">
      <div className="px-4 md:px-12 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
          
          {/* Title Column */}
          <div className="lg:col-span-1">
             <div className="sticky top-32">
                <h2 className="text-5xl md:text-7xl font-display uppercase font-light mb-8">
                  Experience
                </h2>
                <p className="text-zinc-400 text-lg leading-relaxed max-w-xs">
                  A timeline of my professional career, focusing on visual design, UI/UX, and brand strategy across various industries.
                </p>
             </div>
          </div>

          {/* List Column */}
          <div className="lg:col-span-2 space-y-12">
            {EXPERIENCE_DATA.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group border-b border-zinc-800 pb-12 last:border-0 hover:border-neon/30 transition-colors duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6">
                  <h3 className="text-3xl font-display text-white group-hover:text-neon transition-colors duration-300">
                    {item.company}
                  </h3>
                  <span className="text-zinc-500 font-mono text-sm mt-2 md:mt-0">
                    {item.period}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                   <div className="md:col-span-1">
                     <span className="text-sm uppercase tracking-widest text-zinc-400 block mb-1">Role</span>
                     <span className="text-lg font-medium text-white group-hover:text-white/80">{item.role}</span>
                   </div>
                   <div className="md:col-span-3">
                     <ul className="space-y-2">
                        {item.description.map((desc, i) => (
                          <li key={i} className="text-zinc-400 leading-relaxed text-base group-hover:text-zinc-300 transition-colors">
                            {desc}
                          </li>
                        ))}
                     </ul>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
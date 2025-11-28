import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project, ProjectCategory } from '../types';
import ProjectDetail from './ProjectDetail';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const categories = ['All', ...Object.values(ProjectCategory)];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="work" className="py-24 bg-zinc-950 text-white border-t border-white/10">
      <div className="px-4 md:px-12 max-w-[1920px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-16 gap-8">
           <h2 className="text-5xl md:text-7xl font-display uppercase font-light">
             Selected <span className="text-zinc-700">Work</span>
           </h2>
           
           <div className="flex flex-wrap gap-x-8 gap-y-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-sm uppercase tracking-widest transition-all duration-300 ${
                  filter === cat 
                    ? 'text-neon border-b border-neon pb-0.5' 
                    : 'text-zinc-500 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
              >
                {/* Image Container */}
                <div className="w-full aspect-[4/3] bg-zinc-900 overflow-hidden mb-6 relative border border-transparent group-hover:border-neon/50 transition-colors duration-500">
                  <div className="absolute inset-0 bg-neon/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                  />
                </div>
                
                {/* Text Below */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-display uppercase mb-2 group-hover:text-neon transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-zinc-500 text-sm md:text-base max-w-sm">
                      {project.description}
                    </p>
                  </div>
                  <span className="text-xs uppercase tracking-widest text-zinc-500 border border-zinc-800 group-hover:border-neon group-hover:text-neon transition-all duration-300 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
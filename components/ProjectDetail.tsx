import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-zinc-950 overflow-y-auto"
    >
      <div className="relative min-h-screen">
        {/* Sticky Close Header */}
        <div className="sticky top-0 left-0 w-full z-50 flex justify-between items-center p-6 md:p-12 mix-blend-difference text-white">
           <span className="text-sm uppercase tracking-widest hidden md:block text-neon">Project Detail</span>
           <button
            onClick={onClose}
            className="group flex items-center gap-2 text-white hover:text-neon transition-colors"
          >
            <span className="text-sm uppercase tracking-widest group-hover:mr-2 transition-all">Close</span>
            <X size={24} />
          </button>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 pt-12 md:pt-0">
          
          {/* Header */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-24"
          >
            <h1 className="text-5xl md:text-8xl font-display uppercase font-light text-white mb-12">
              {project.title}
            </h1>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-zinc-800 pt-8">
               <div>
                  <span className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Client</span>
                  <span className="block text-white font-medium">{project.client || 'N/A'}</span>
               </div>
               <div>
                  <span className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Role</span>
                  <span className="block text-neon">{project.role || 'Designer'}</span>
               </div>
               <div>
                  <span className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Year</span>
                  <span className="block text-white">{project.date || '2023'}</span>
               </div>
               <div>
                  <span className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Services</span>
                  <span className="block text-white">{project.category}</span>
               </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="space-y-24">
             {/* Hero Image */}
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.2 }}
               className="w-full aspect-video bg-zinc-900 overflow-hidden"
             >
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
             </motion.div>

             {/* Description */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-start-2 md:col-span-2">
                   <p className="text-xl md:text-3xl font-light leading-relaxed text-zinc-200">
                      {project.longDescription || project.description}
                   </p>
                </div>
             </div>

             {/* Gallery Grid */}
             {project.gallery && project.gallery.length > 0 && (
                <div className="grid grid-cols-1 gap-12">
                   {project.gallery.map((img, idx) => (
                      <div key={idx} className="w-full bg-zinc-900 overflow-hidden">
                         <img src={img} alt="" className="w-full h-auto" />
                      </div>
                   ))}
                </div>
             )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
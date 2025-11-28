import React from 'react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="py-24 bg-zinc-950 text-white border-t border-white/10">
      <div className="px-4 md:px-12 max-w-[1920px] mx-auto">
        <div className="flex flex-col items-start space-y-12">
          
          <h2 className="text-[12vw] leading-none font-display font-medium uppercase tracking-tighter">
            Let's Talk
          </h2>

          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
             <div className="space-y-2">
                <p className="text-sm uppercase tracking-widest text-zinc-500">Contact</p>
                <a href={`mailto:${CONTACT_INFO.email}`} className="block text-2xl md:text-4xl font-light hover:underline underline-offset-4 decoration-1">
                  {CONTACT_INFO.email}
                </a>
                <a href={`tel:${CONTACT_INFO.phone}`} className="block text-xl md:text-2xl text-zinc-400 hover:text-white transition-colors">
                  {CONTACT_INFO.phone}
                </a>
             </div>

             <div className="flex flex-col md:items-end">
                <p className="text-zinc-600 text-sm">© {new Date().getFullYear()} Ming One Portfolio</p>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
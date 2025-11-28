import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Mouse position state
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse movement for the spotlight and parallax
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Parallax effects
  // Assuming a standard screen width/height for calculation or just generic ranges
  // Since we don't have window dimensions reactively, we map generic large pixel values
  const moveX = useTransform(smoothX, [0, 1920], [-25, 25]);
  const moveY = useTransform(smoothY, [0, 1080], [-25, 25]);
  
  const moveXReverse = useTransform(smoothX, [0, 1920], [25, -25]);
  const moveYReverse = useTransform(smoothY, [0, 1080], [25, -25]);

  function handleMouseMove({ clientX, clientY, currentTarget }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section 
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-end pb-12 md:pb-24 px-4 md:px-12 overflow-hidden bg-zinc-950 pt-32 group"
    >
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none transition-opacity duration-700 group-hover:opacity-30"
        style={{
          backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Interactive Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${smoothX}px ${smoothY}px,
              rgba(204, 255, 0, 0.08),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-[10%] w-32 h-32 border border-neon/20 rounded-full blur-[80px] animate-pulse pointer-events-none" />

      <div className="max-w-[1920px] mx-auto w-full relative z-10">
        <motion.div
          style={{ y, opacity }}
          className="relative"
        >
          {/* Main Title with Parallax */}
          <div className="relative mb-6 md:mb-12 select-none">
            {/* Ghost/Echo Layer */}
             <motion.h1 
              style={{ x: moveXReverse, y: moveYReverse }}
              className="absolute inset-0 text-[12vw] leading-[0.85] font-display font-medium text-neon/10 tracking-tighter uppercase pointer-events-none blur-[2px]"
              aria-hidden="true"
            >
              <div>Visual</div>
              <div>Designer</div>
            </motion.h1>

            {/* Foreground Layer */}
            <motion.h1 
              style={{ x: moveX, y: moveY }}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative text-[12vw] leading-[0.85] font-display font-medium text-white tracking-tighter uppercase mix-blend-difference"
            >
              <div className="hover:text-neon transition-colors duration-300">Visual</div>
              <div className="text-zinc-600 hover:text-white transition-colors duration-500">Designer</div>
            </motion.h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col md:flex-row md:items-end justify-between border-t border-white/20 pt-6 md:pt-8 gap-8 backdrop-blur-sm"
          >
             <div className="max-w-md">
                <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
                  Portfolio of <span className="text-white font-medium">Ming One</span>. <br/>
                  Specializing in <span className="text-neon drop-shadow-[0_0_8px_rgba(204,255,0,0.5)]">UI/UX</span>, Branding & 3D Visuals.
                </p>
             </div>
             
             <div className="flex flex-col items-end">
                <span className="text-sm uppercase tracking-widest text-neon mb-2 animate-pulse shadow-neon">Based in Qingyuan</span>
                <span className="text-sm uppercase tracking-widest text-zinc-500">Est. 2015</span>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
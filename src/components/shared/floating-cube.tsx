'use client';

import { motion } from 'framer-motion';

export default function FloatingCube() {
  // Cube face styles
  const faceStyle = "absolute inset-0 border-2 border-primary/40 bg-primary/5 backdrop-blur-sm flex items-center justify-center shadow-[0_0_15px_rgba(230,57,70,0.2)]";
  
  return (
    <div className="w-48 h-48 sm:w-64 sm:h-64 relative" style={{ perspective: '1200px' }}>
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ 
            rotateX: [0, 360], 
            rotateY: [0, 720],
            rotateZ: [0, 180]
        }}
        transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: 'linear' 
        }}
      >
        {/* Front */}
        <div className={faceStyle} style={{ transform: 'translateZ(96px) sm:translateZ(128px)' }}>
            <div className="w-4 h-4 bg-primary/50 rounded-full" />
        </div>
        {/* Back */}
        <div className={faceStyle} style={{ transform: 'rotateY(180deg) translateZ(96px) sm:translateZ(128px)' }}>
             <div className="w-4 h-4 bg-primary/50 rounded-full" />
        </div>
        {/* Right */}
        <div className={faceStyle} style={{ transform: 'rotateY(90deg) translateZ(96px) sm:translateZ(128px)' }}>
             <div className="w-4 h-4 bg-primary/50 rounded-full" />
        </div>
        {/* Left */}
        <div className={faceStyle} style={{ transform: 'rotateY(-90deg) translateZ(96px) sm:translateZ(128px)' }}>
             <div className="w-4 h-4 bg-primary/50 rounded-full" />
        </div>
        {/* Top */}
        <div className={faceStyle} style={{ transform: 'rotateX(90deg) translateZ(96px) sm:translateZ(128px)' }}>
             <div className="w-4 h-4 bg-primary/50 rounded-full" />
        </div>
        {/* Bottom */}
        <div className={faceStyle} style={{ transform: 'rotateX(-90deg) translateZ(96px) sm:translateZ(128px)' }}>
             <div className="w-4 h-4 bg-primary/50 rounded-full" />
        </div>
        
        {/* Inner Core */}
        <div className="absolute top-1/2 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 bg-primary/20 blur-md rounded-full animate-pulse" style={{ transform: 'translateZ(0)' }} />
      </motion.div>
    </div>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoPlaceholderProps {
  title?: string;
  className?: string;
}

const VideoPlaceholder: React.FC<VideoPlaceholderProps> = ({ 
  title = 'Video Demo',
  className = '' 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className={`aspect-video w-full bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center overflow-hidden relative cursor-pointer ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <AnimatePresence>
          {!isHovered ? (
            <motion.div
              key="play"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 border-2 border-white/40">
                <svg 
                  className="w-10 h-10 ml-1" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-lg font-semibold">{title}</p>
              <p className="text-sm text-white/80 mt-1">Click to play demo</p>
            </motion.div>
          ) : (
            <motion.div
              key="hover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center mb-4 border-2 border-white/60">
                <svg 
                  className="w-10 h-10 ml-1" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-lg font-bold">{title}</p>
              <p className="text-sm text-white/90 mt-1">Video coming soon</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default VideoPlaceholder;

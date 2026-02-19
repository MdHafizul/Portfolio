import React from 'react';
import { motion } from 'framer-motion';

interface ImagePlaceholderProps {
  aspect?: 'video' | 'square' | 'wide' | 'portrait';
  label?: string;
  className?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ 
  aspect = 'wide', 
  label = 'Image Placeholder',
  className = '' 
}) => {
  const aspectRatios = {
    video: 'aspect-video',
    square: 'aspect-square',
    wide: 'aspect-[21/9]',
    portrait: 'aspect-[3/4]'
  };

  return (
    <motion.div 
      className={`${aspectRatios[aspect]} w-full bg-gradient-to-br from-primary/20 to-primary-light/30 rounded-lg flex items-center justify-center overflow-hidden border border-primary/20 ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center p-6">
        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
          <svg 
            className="w-8 h-8 text-primary" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
            />
          </svg>
        </div>
        <p className="text-sm font-medium text-primary">{label}</p>
      </div>
    </motion.div>
  );
};

export default ImagePlaceholder;

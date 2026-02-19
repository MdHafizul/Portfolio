import React from 'react';
import { motion } from 'framer-motion';
import { textReveal, fadeIn, slideUp } from '../animations/variants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-mesh">
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 animated-gradient opacity-40" />
      
      {/* Soft Overlay Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #006d77 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            variants={fadeIn}
            className="inline-flex items-center px-4 py-2 bg-accent/10 backdrop-blur-sm rounded-full border border-accent"
          >
            <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />
            <span className="text-sm font-medium text-primary">Available for Freelance</span>
          </motion.div>

          {/* Main Headline */}
          <div className="space-y-4">
            <motion.h1
              variants={textReveal}
              custom={1}
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight text-primary"
            >
              System Developer
              <br />
              <span className="text-accent">Backend Engineer</span>
            </motion.h1>
            
            <motion.p
              variants={textReveal}
              custom={2}
              className="text-xl md:text-2xl text-primary/80 max-w-3xl mx-auto leading-relaxed"
            >
              Building <span className="font-bold text-primary">reliable business systems</span> with high-performance analytics, 
              scalable architecture, and enterprise-grade engineering.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            variants={slideUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <motion.a
              href="#projects"
              className="px-8 py-4 bg-primary text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:bg-accent transition-all text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-transparent border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={fadeIn}
            className="pt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="flex flex-col items-center"
            >
              <span className="text-sm text-primary/70 mb-2">Scroll to explore</span>
              <svg
                className="w-6 h-6 text-primary/70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeIn}
            className="flex items-center justify-center gap-6 pt-8"
          >
            <motion.a
              href="https://github.com/MdHafizul"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/70 hover:text-accent transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </motion.a>
            <motion.a
              href="mailto:hafizulrahman011@gmail.com"
              className="text-primary/70 hover:text-accent transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

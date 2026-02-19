import React from 'react';
import { motion } from 'framer-motion';
import { slideUp, fadeIn, staggerContainer, staggerItem } from '../animations/variants';

const About: React.FC = () => {
  const highlights = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      label: 'Performance'
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      label: 'Reliability'
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      label: 'Scalability'
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      label: 'Business Logic'
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={fadeIn} className="text-center space-y-4">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full">
              ABOUT ME
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary">
              System Developer & Backend Engineer
            </h2>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <motion.div variants={slideUp} className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                I'm a system developer and backend engineer with hands-on experience building{' '}
                <span className="font-bold text-primary">high-performance analytics platforms</span>,{' '}
                <span className="font-bold text-primary">business-critical internal systems</span>, and{' '}
                <span className="font-bold text-primary">automation tools</span> that drive real business outcomes.
              </p>

              <p>
                My most notable project is the <span className="font-bold text-primary">Debt Aging Management System</span> for an 
                enterprise environment internal financial analytics platform designed to provide visibility into overdue accounts. 
                The system processes <span className="font-bold">near-million-row datasets</span>, supports{' '}
                <span className="font-bold">sub-second queries</span>, and delivers management-ready dashboards for data-driven 
                decision-making.
              </p>

              <p>
                My approach to development centers on{' '}
                <span className="font-bold text-accent">performance optimization</span>,{' '}
                <span className="font-bold text-accent">reliability</span>,{' '}
                <span className="font-bold text-accent">scalability</span>, and{' '}
                <span className="font-bold text-accent">precise business logic modeling</span>because great software isn't 
                just about code, it's about solving real problems for real businesses.
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-2 gap-6"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 bg-gradient-to-br from-primary/5 to-primary-light/10 rounded-2xl border border-primary/10 cursor-default"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary">{item.label}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

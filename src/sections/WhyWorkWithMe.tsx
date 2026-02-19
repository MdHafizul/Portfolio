import React from 'react';
import { motion } from 'framer-motion';
import { benefits } from '../data/portfolio';
import { fadeIn, staggerContainer, staggerItem } from '../animations/variants';

const WhyWorkWithMe: React.FC = () => {
  return (
    <section className="section-padding bg-primary-lighter">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Section Header */}
          <motion.div variants={fadeIn} className="text-center space-y-4 mb-16">
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full">
              WHY CHOOSE ME
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-primary">
              Why Work With Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Engineering excellence meets business value
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl border border-primary/10 shadow-sm hover:shadow-lg transition-all"
              >
                {/* Checkmark Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                  className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4"
                >
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-primary mb-2">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;

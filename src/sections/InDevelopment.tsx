import React from 'react';
import { motion } from 'framer-motion';
import { inDevelopment, demoProjects } from '../data/portfolio';
import { fadeIn, staggerContainer, staggerItem } from '../animations/variants';
import VideoPlaceholder from '../components/VideoPlaceholder';

const InDevelopment: React.FC = () => {
  return (
    <section className="section-padding bg-primary-lighter">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* In Development Header */}
          <motion.div variants={fadeIn} className="text-center space-y-4 mb-16">
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full">
              WORK IN PROGRESS
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-primary">
              In Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Current development initiatives building the next generation of solutions
            </p>
          </motion.div>

          {/* In Development Projects */}
          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 mb-20"
          >
            {inDevelopment.map((project) => (
              <motion.div
                key={project.id}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100"
              >
                {/* Status Badge */}
                <div className="flex items-center gap-3 mb-6">
                  <motion.span
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 bg-accent rounded-full"
                  />
                  <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full">
                    In Development
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-bold text-primary uppercase tracking-wide">
                    Planned Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-2 text-gray-600"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Business Value */}
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-sm text-gray-700">
                    <span className="font-bold text-primary">Business Value: </span>
                    {project.value}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-mono rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Demo Video Projects Header */}
          <motion.div variants={fadeIn} className="text-center space-y-4 mb-12">
            <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full">
              VIDEO DEMOS
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-primary">
              Demo Projects
            </h2>
          </motion.div>

          {/* Demo Video Projects */}
          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {demoProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-gray-100"
              >
                {/* Video */}
                <div className="aspect-video w-full rounded-lg overflow-hidden border border-primary/20 shadow-lg">
                  {project.id === 'northace' ? (
                    <video 
                      controls 
                      className="w-full h-full object-cover"
                    >
                      <source src="/NorthAceAdventure.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : project.id === 'zulchamp' ? (
                    <video 
                      controls 
                      className="w-full h-full object-cover"
                    >
                      <source src="/Zulbikechamp full.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <VideoPlaceholder title={project.title} />
                  )}
                </div>

                {/* Content */}
                <div className="mt-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">
                      {project.title}
                    </h3>
                    <p className="text-lg text-primary/70 font-semibold">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-mono rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default InDevelopment;

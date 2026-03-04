import React from 'react';
import { motion } from 'framer-motion';
import { demoProjects } from '../data/portfolio';
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

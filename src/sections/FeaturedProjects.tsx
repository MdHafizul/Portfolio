import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolio';
import { fadeIn, staggerContainer, staggerItem, cardHover } from '../animations/variants';
import ImagePlaceholder from '../components/ImagePlaceholder';
import AnimatedCounter from '../components/AnimatedCounter';

const FeaturedProjects: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<{[key: string]: number}>({
    'cmez-crpm': 0
  });

  const cmezImages = [
    { src: '/CMEZ.jpeg', label: 'Main Dashboard' },
    { src: '/Aging Dashboard.jpeg', label: 'Aging Dashboard' },
    { src: '/AGING_GRAPH.jpeg', label: 'Analytics Graph' }
  ];

  const handleImageChange = (projectId: string, index: number) => {
    setActiveImageIndex(prev => ({ ...prev, [projectId]: index }));
  };
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Section Header */}
          <motion.div variants={fadeIn} className="text-center space-y-4 mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full">
              FEATURED WORK
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-primary">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world systems delivering measurable business impact
            </p>
          </motion.div>

          {/* Projects */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={staggerItem}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Project Image/Visual */}
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  variants={cardHover}
                  className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}
                >
                  {project.id === 'cmez-crpm' ? (
                    <div className="relative">
                      <div className="aspect-video w-full rounded-lg overflow-hidden border border-primary/20 shadow-lg">
                        <img 
                          src={cmezImages[activeImageIndex['cmez-crpm'] || 0].src}
                          alt={`${project.title} - ${cmezImages[activeImageIndex['cmez-crpm'] || 0].label}`}
                          className="w-full h-full object-cover transition-opacity duration-300"
                        />
                      </div>
                      {/* Image Navigation Dots */}
                      <div className="flex justify-center gap-2 mt-4">
                        {cmezImages.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleImageChange('cmez-crpm', idx)}
                            className={`group relative px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                              (activeImageIndex['cmez-crpm'] || 0) === idx
                                ? 'bg-primary text-white'
                                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                            }`}
                          >
                            {img.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : project.id === 'ceritha' ? (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block aspect-video w-full rounded-lg overflow-hidden border border-primary/20 shadow-lg cursor-pointer group relative"
                    >
                      <img 
                        src="/Ceritha.png" 
                        alt={`${project.title} Dashboard`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Click to view overlay */}
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-3 shadow-lg">
                          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                      </div>
                    </a>
                  ) : project.id === 'react-landing' ? (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block aspect-video w-full rounded-lg overflow-hidden border border-primary/20 shadow-lg cursor-pointer group relative"
                    >
                      <img 
                        src="/DEMO.jpeg" 
                        alt={`${project.title} Dashboard`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Click to view overlay */}
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-3 shadow-lg">
                          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <ImagePlaceholder
                      aspect="video"
                      label={`${project.title} Dashboard`}
                    />
                  )}
                </motion.div>

                {/* Project Details */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {/* Status Badge */}
                  <div className="flex items-center gap-3">
                    <span className={`px-4 py-1.5 text-sm font-semibold rounded-full ${
                      project.status === 'Production' 
                        ? 'bg-green-100 text-green-700'
                        : project.status === 'Live'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-purple-100 text-purple-700'
                    }`}>
                      {project.status}
                    </span>
                    <span className="text-sm text-gray-500">{project.category}</span>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black text-primary mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xl text-primary/70 font-semibold">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics (if available) */}
                  {project.metrics && (
                    <div className="grid grid-cols-2 gap-4">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                          <div className="text-2xl font-black text-primary">
                            {metric.value.includes('K') || metric.value.includes('M') ? (
                              <AnimatedCounter 
                                end={parseInt(metric.value)} 
                                suffix={metric.value.replace(/[0-9]/g, '')}
                              />
                            ) : (
                              metric.value
                            )}
                          </div>
                          <div className="text-sm text-gray-600 font-medium">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Features */}
                  <div className="space-y-3">
                    {project.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <svg
                          className="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-mono rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link (if available) */}
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Live Site
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

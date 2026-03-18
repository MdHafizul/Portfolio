import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { demoProjects, inDevelopment } from '../data/portfolio';
import { fadeIn, staggerContainer, staggerItem } from '../animations/variants';
import ImagePlaceholder from '../components/ImagePlaceholder';
import VideoPlaceholder from '../components/VideoPlaceholder';

interface DemoSite {
  name: string;
  url: string;
  image?: string;
}

interface DemoProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  imageHint?: string;
  sites: DemoSite[];
  tech: string[];
}

interface VideoDemoProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  status: string;
  video?: string;
  tech: string[];
}

const InDevelopment: React.FC = () => {
  const [activeSiteIndex, setActiveSiteIndex] = useState<Record<string, number>>(() =>
    demoProjects.reduce((acc, project) => ({ ...acc, [project.id]: 0 }), {})
  );
  const [brokenImages, setBrokenImages] = useState<Record<string, boolean>>({});

  const videoProjects = inDevelopment as VideoDemoProject[];

  const handleSiteSelect = (projectId: string, index: number) => {
    setActiveSiteIndex((prev) => ({ ...prev, [projectId]: index }));
  };

  const handleImageError = (imagePath?: string) => {
    if (!imagePath) return;
    setBrokenImages((prev) => ({ ...prev, [imagePath]: true }));
  };

  const getPreviewImage = (project: DemoProject) => {
    const index = activeSiteIndex[project.id] ?? 0;
    return project.sites[index]?.image || project.image;
  };

  return (
    <section className="section-padding bg-primary-lighter">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Demo Projects Header */}
          <motion.div variants={fadeIn} className="text-center space-y-4 mb-12">
            <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full">
              LIVE DEMOS
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-primary">
              Demo Projects by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each category contains demo website options. You can switch between links and open the one you want to review.
            </p>
          </motion.div>

          {/* Video Demos */}
          {videoProjects.length > 0 && (
            <motion.div variants={staggerContainer} className="mb-14">
              <motion.div variants={fadeIn} className="text-center space-y-3 mb-8">
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                  VIDEO DEMOS
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-primary">
                  Project Walkthrough Videos
                </h3>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {videoProjects.map((project) => (
                  <motion.article
                    key={project.id}
                    variants={staggerItem}
                    whileHover={{ y: -6 }}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-gray-100"
                  >
                    <div className="aspect-video w-full rounded-lg overflow-hidden border border-primary/20 shadow-lg bg-primary/5">
                      {project.video ? (
                        <video
                          controls
                          preload="metadata"
                          className="w-full h-full object-cover"
                        >
                          <source src={project.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <VideoPlaceholder title={project.title} />
                      )}
                    </div>

                    <div className="mt-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-700">
                          {project.status}
                        </span>
                        <span className="text-xs text-gray-500 uppercase tracking-wide">{project.subtitle}</span>
                      </div>

                      <h4 className="text-2xl font-bold text-primary">{project.title}</h4>
                      <p className="text-gray-700 leading-relaxed">{project.description}</p>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.tech.map((tech) => (
                          <span key={`${project.id}-${tech}`} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-mono rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}

          <motion.div variants={fadeIn} className="text-center space-y-3 mb-8">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
              WEBSITE DEMOS
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-primary">
               Multiple Demo Sites
            </h3>
          </motion.div>

          {/* Demo Category Projects */}
          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {demoProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-gray-100"
              >
                {/* Category Image */}
                {(() => {
                  const previewImage = getPreviewImage(project);
                  const isBroken = previewImage ? brokenImages[previewImage] : false;

                  return (
                <div className="aspect-video w-full rounded-lg overflow-hidden border border-primary/20 shadow-lg">
                  {previewImage && !isBroken ? (
                    <img
                      src={previewImage}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(previewImage)}
                    />
                  ) : (
                    <ImagePlaceholder
                      aspect="video"
                      label={project.image || `${project.title} image placeholder`}
                    />
                  )}
                </div>
                  );
                })()}

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

                  {/* Clickable Demo Site Selector */}
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-primary/80 uppercase tracking-wide">
                      Choose Demo Site
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.sites.map((site, idx) => {
                        const isActive = (activeSiteIndex[project.id] ?? 0) === idx;
                        return (
                          <a
                            key={site.url}
                            href={site.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => handleSiteSelect(project.id, idx)}
                            className={`px-3 py-1.5 text-sm font-medium rounded-full border transition-colors ${
                              isActive
                                ? 'bg-primary text-white border-primary'
                                : 'bg-white text-gray-700 border-gray-300 hover:border-primary/40'
                            }`}
                          >
                            {site.name}
                          </a>
                        );
                      })}
                    </div>
                  </div>

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

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../animations/hooks';
import { staggerContainer, slideUp } from '../animations/variants';
import quotationInfo from '../data/quotation';

const Quotation: React.FC = () => {
  const scrollReveal = useScrollReveal();
  const [forceVisible, setForceVisible] = useState(false);

  // Fallback to ensure content is visible on iOS or if animations fail
  useEffect(() => {
    const timer = setTimeout(() => {
      setForceVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="quotation" className="py-12 md:py-20 bg-white">
      <motion.div
        {...scrollReveal}
        animate={forceVisible ? 'visible' : undefined}
        variants={staggerContainer}
        className="container mx-auto px-4 md:px-6 max-w-7xl"
      >
        {/* Header */}
        <motion.div variants={slideUp} className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-3 md:mb-4">
            {quotationInfo.introduction.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-2">
            {quotationInfo.introduction.subtitle}
          </p>
          <p className="text-sm md:text-base text-gray-500 max-w-3xl mx-auto">
            {quotationInfo.introduction.description}
          </p>
        </motion.div>

        {/* Service Packages */}
        <motion.div variants={slideUp} className="mb-12 md:mb-24">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block px-3 md:px-4 py-1.5 bg-primary/10 text-primary text-xs md:text-sm font-bold rounded-full mb-3 md:mb-4">
              PRICING PACKAGES
            </span>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-dark mb-3 md:mb-4">
              Choose Your Package
            </h3>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Professional web development services designed for businesses of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">{quotationInfo.servicePackages.map((pkg, pkgIndex) => (
              <motion.div
                key={pkg.id}
                variants={slideUp}
                className={`relative rounded-2xl overflow-hidden ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-primary via-primary to-primary-dark border-2 border-primary shadow-2xl md:transform md:scale-105'
                    : 'bg-white border-2 border-gray-200 shadow-lg'
                } hover:shadow-2xl transition-all duration-300`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-accent text-white px-4 md:px-6 py-1.5 md:py-2 rounded-bl-2xl font-bold text-xs md:text-sm shadow-lg">
                    ⭐ MOST POPULAR
                  </div>
                )}

                {/* Package Header */}
                <div className={`p-6 md:p-8 ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl ${
                      pkg.popular ? 'bg-white/20' : 'bg-primary/10'
                    } flex items-center justify-center flex-shrink-0`}>
                      {pkgIndex === 0 ? (
                        <svg className={`w-5 h-5 md:w-6 md:h-6 ${pkg.popular ? 'text-white' : 'text-primary'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      ) : (
                        <svg className={`w-5 h-5 md:w-6 md:h-6 ${pkg.popular ? 'text-white' : 'text-primary'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold leading-tight">
                        {pkg.id === 'landing-page' ? 'Package A' : 'Package B'}
                      </h4>
                      <p className={`text-xs md:text-sm ${pkg.popular ? 'text-white/80' : 'text-gray-600'}`}>
                        {pkg.id === 'landing-page' ? 'Landing Page' : 'Custom Web App'}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4 md:mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl md:text-4xl lg:text-5xl font-black">
                        {pkg.id === 'landing-page' ? 'RM 800' : 'RM 2,000+'}
                      </span>
                      <span className={`text-sm md:text-base lg:text-lg ${pkg.popular ? 'text-white/70' : 'text-gray-500'}`}>
                        {pkg.id === 'landing-page' ? 'one-time' : 'starting'}
                      </span>
                    </div>
                    {pkg.id === 'landing-page' && (
                      <p className={`text-xs md:text-sm mt-2 ${pkg.popular ? 'text-white/80' : 'text-gray-600'}`}>
                        + RM 500 for urgent 24-hour delivery
                      </p>
                    )}
                  </div>

                  <p className={`text-sm md:text-base leading-relaxed ${pkg.popular ? 'text-white/90' : 'text-gray-600'}`}>
                    {pkg.description}
                  </p>
                </div>

                {/* Package Content */}
                <div className={`p-6 md:p-8 pt-0 ${pkg.popular ? 'text-white' : ''}`}>
                  {/* Suitable For */}
                  {pkg.suitableFor && (
                    <div className="mb-4 md:mb-6 p-3 md:p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                      <p className="text-xs md:text-sm font-bold mb-1 md:mb-2">Perfect for:</p>
                      <p className="text-xs md:text-sm opacity-90">{pkg.suitableFor}</p>
                    </div>
                  )}

                  {/* What's Included */}
                  <div className="mb-4 md:mb-6">
                    <h5 className="text-base md:text-lg font-bold mb-3 md:mb-4 flex items-center gap-2">
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      What's Included
                    </h5>
                    <ul className="space-y-2 md:space-y-3">
                      {pkg.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 md:gap-3">
                          <svg className={`w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0 ${pkg.popular ? 'text-white' : 'text-primary'}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className={`text-xs md:text-sm ${pkg.popular ? 'text-white/90' : 'text-gray-700'}`}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing Factors for Web App */}
                  {pkg.pricingFactors && (
                    <div className="mb-4 md:mb-6 p-3 md:p-4 rounded-xl bg-white/10">
                      <p className="text-xs md:text-sm font-bold mb-2 md:mb-3">Final price determined by:</p>
                      <ul className="space-y-1.5 md:space-y-2">
                        {pkg.pricingFactors.map((factor, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs md:text-sm opacity-90">
                            <span className="mt-0.5 md:mt-1">→</span>
                            <span>{factor}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Timeline & Support Info */}
                  <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                    <div className={`p-3 md:p-4 rounded-xl ${pkg.popular ? 'bg-white/10' : 'bg-gray-50'}`}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs md:text-sm font-bold">⏱️ Delivery Time</span>
                        <span className="text-xs md:text-sm font-bold">{pkg.timeline}</span>
                      </div>
                      {pkg.timelineNote && (
                        <p className={`text-xs mt-1 ${pkg.popular ? 'opacity-80' : 'text-gray-600'}`}>
                          {pkg.timelineNote}
                        </p>
                      )}
                    </div>

                    <div className={`p-3 md:p-4 rounded-xl ${pkg.popular ? 'bg-white/10' : 'bg-accent/5'}`}>
                      <p className="text-xs md:text-sm font-bold mb-2">
                        🛠️ Monthly Support: {pkg.supportFee}
                      </p>
                      <ul className="space-y-1">
                        {pkg.supportIncludes.map((item, idx) => (
                          <li key={idx} className={`text-xs flex items-center gap-2 ${pkg.popular ? 'opacity-80' : 'text-gray-700'}`}>
                            <span>✓</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Payment Structure */}
                  <div className={`p-3 md:p-4 rounded-xl ${pkg.popular ? 'bg-white/10' : 'bg-gray-50'} mb-4 md:mb-6`}>
                    <p className="text-xs md:text-sm font-bold mb-2 md:mb-3">💳 Payment Terms</p>
                    <div className="space-y-1.5 md:space-y-2">
                      {pkg.paymentStructure.map((payment, idx) => (
                        <div key={idx} className="flex items-center justify-between text-xs md:text-sm">
                          <span className={pkg.popular ? 'opacity-90' : 'text-gray-700'}>
                            {payment.stage}
                          </span>
                          <span className="font-bold">{payment.percentage}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Examples */}
                  {pkg.examples && (
                    <div className={`text-xs md:text-sm ${pkg.popular ? 'opacity-80' : 'text-gray-600'} mb-4`}>
                      <span className="font-semibold">Use cases: </span>
                      {pkg.examples.join(' · ')}
                    </div>
                  )}

                  {/* CTA Button */}
                  <a
                    href="#contact"
                    className={`block w-full text-center py-3 md:py-4 px-4 md:px-6 rounded-xl text-sm md:text-base font-bold transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-white text-primary hover:bg-gray-100 shadow-lg'
                        : 'bg-primary text-white hover:bg-primary-dark'
                    }`}
                  >
                    Get Started →
                  </a>

                  {/* Note */}
                  {pkg.note && (
                    <p className={`text-xs mt-3 md:mt-4 italic ${pkg.popular ? 'opacity-70' : 'text-gray-500'}`}>
                      * {pkg.note}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-8 md:mt-12 max-w-4xl mx-auto px-4">
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6 md:p-8 border border-primary/20">
              <div className="text-center">
                <h4 className="text-lg md:text-xl font-bold text-primary-dark mb-2 md:mb-3">
                  💡 Not Sure Which Package to Choose?
                </h4>
                <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                  Every project is unique. Let's discuss your specific needs and create a custom proposal tailored to your goals.
                </p>
                <a
                  href="#contact"
                  className="inline-block bg-primary text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full text-sm md:text-base font-bold hover:bg-primary-dark transition-colors"
                >
                  Schedule a Free Consultation
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hosting & Domain */}
        <motion.div variants={slideUp} className="mb-12 md:mb-20">
          <div className="max-w-4xl mx-auto bg-primary-lighter rounded-xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-primary-dark mb-3 md:mb-4">
              {quotationInfo.hostingAndDomain.title}
            </h3>
            <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">{quotationInfo.hostingAndDomain.description}</p>
            <ul className="space-y-1.5 md:space-y-2">
              {quotationInfo.hostingAndDomain.options.map((option, idx) => (
                <li key={idx} className="flex items-start">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm md:text-base text-gray-700">{option}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Timeline Overview */}
        <motion.div variants={slideUp} className="mb-12 md:mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6 md:mb-8 text-center">
            {quotationInfo.timeline.title}
          </h3>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
              {quotationInfo.timeline.packages.map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 md:p-6 border-2 border-gray-200">
                  <h4 className="text-base md:text-lg font-bold text-primary-dark mb-1 md:mb-2">{item.name}</h4>
                  <p className="text-xl md:text-2xl font-bold text-accent mb-1 md:mb-2">{item.duration}</p>
                  {item.note && <p className="text-xs md:text-sm text-gray-600">{item.note}</p>}
                  {item.urgentOption && (
                    <p className="text-xs md:text-sm text-primary font-semibold mt-1 md:mt-2">{item.urgentOption}</p>
                )}
                </div>
              ))}
            </div>
            <p className="text-center text-xs md:text-sm text-gray-600 bg-gray-50 rounded-lg p-3 md:p-4">
              {quotationInfo.timeline.startCondition}
            </p>
          </div>
        </motion.div>

        {/* Payment Terms */}
        <motion.div variants={slideUp} className="mb-12 md:mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6 md:mb-8 text-center">
            Payment Terms
          </h3>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
              {/* Landing Page Payment */}
              <div className="bg-primary-lighter rounded-xl p-4 md:p-6">
                <h4 className="text-lg md:text-xl font-bold text-primary-dark mb-3 md:mb-4">
                  {quotationInfo.paymentTerms.landingPage.name}
                </h4>
                <div className="space-y-2 md:space-y-3">
                  {quotationInfo.paymentTerms.landingPage.structure.map((payment, idx) => (
                    <div key={idx} className="flex items-center bg-white rounded-lg p-3 md:p-4">
                      <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm md:text-lg mr-3 md:mr-4">
                        {payment.percentage}
                      </div>
                      <div>
                        <h5 className="font-bold text-primary-dark text-sm">{payment.stage}</h5>
                        <p className="text-xs text-gray-600">{payment.when}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Web App Payment */}
              <div className="bg-primary-lighter rounded-xl p-4 md:p-6">
                <h4 className="text-lg md:text-xl font-bold text-primary-dark mb-3 md:mb-4">
                  {quotationInfo.paymentTerms.webApp.name}
                </h4>
                <div className="space-y-2 md:space-y-3">
                  {quotationInfo.paymentTerms.webApp.structure.map((payment, idx) => (
                    <div key={idx} className="flex items-center bg-white rounded-lg p-3 md:p-4">
                      <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm md:text-lg mr-3 md:mr-4">
                        {payment.percentage}
                      </div>
                      <div>
                        <h5 className="font-bold text-primary-dark text-sm">{payment.stage}</h5>
                        <p className="text-xs text-gray-600">{payment.when}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white rounded-lg p-4 md:p-6 border-2 border-gray-200">
              <h4 className="text-sm md:text-base font-bold text-primary-dark mb-2 md:mb-3 text-center">
                Payment Methods
              </h4>
              <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                {quotationInfo.paymentTerms.methods.map((method, idx) => (
                  <div key={idx} className="flex items-center text-gray-700 bg-gray-50 px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-primary mr-1.5 md:mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Important Notes */}
        <motion.div variants={slideUp} className="mb-12 md:mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6 md:mb-8 text-center">
            Important Notes
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {quotationInfo.importantNotes.map((note, idx) => (
              <div key={idx} className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-4 md:p-6 border border-primary/20">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-sm md:text-base font-bold text-primary-dark mb-1 md:mb-2 text-center">{note.title}</h4>
                <p className="text-xs md:text-sm text-gray-600 text-center">{note.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* What's Included */}
        <motion.div variants={slideUp} className="mb-12 md:mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6 md:mb-8 text-center">
            What's Included in Every Project
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {quotationInfo.whatIncluded.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-4 md:p-6 border-2 border-gray-200 hover:border-primary transition-colors"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm md:text-base font-semibold text-primary-dark text-center">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={slideUp}
          className="text-center bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-6 md:p-10 lg:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-sm md:text-base text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto">
            Get a detailed quotation tailored to your specific requirements. Let's
            discuss your project and create a custom proposal.
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary hover:bg-accent-dark text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-full text-sm md:text-base transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Request a Custom Quote
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Quotation;


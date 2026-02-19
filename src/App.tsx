import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import FeaturedProjects from './sections/FeaturedProjects';
import InDevelopment from './sections/InDevelopment';
import Services from './sections/Services';
import WhyWorkWithMe from './sections/WhyWorkWithMe';
import Testimonials from './sections/Testimonials';
import Quotation from './sections/Quotation';
import CTA from './sections/CTA';
import Footer from './sections/Footer';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary-lighter">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <FeaturedProjects />
        <InDevelopment />
        <Services />
        <WhyWorkWithMe />
        <Testimonials />
        <Quotation />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;

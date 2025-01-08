import React from 'react';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ClientsSection from '../components/home/ClientsSection';
import OffersSection from '../components/home/OffersSection';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <OffersSection />
      <TestimonialsSection />
      <ClientsSection />
    </div>
  );
};

export default Home;
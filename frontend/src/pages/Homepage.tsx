// pages/Homepage.tsx
import React from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { ServiceCategory } from '../components/ServiceCategory';
import { ContactForm } from '../components/ContactForm';
import { Footer } from '../components/Footer';
import { serviceCategories } from '../data/services';

export const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <HeroSection />

      {/* Services Section */}
      <section id="services" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Professional detailing services tailored to your needs</p>
          </div>
          
          {serviceCategories.map((category) => (
            <ServiceCategory key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactForm />
      </section>

      <Footer />
    </div>
  );
};
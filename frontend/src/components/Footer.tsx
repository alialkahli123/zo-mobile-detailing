// components/Footer.tsx
import React from 'react';
import { Droplets } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Droplets className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-xl font-bold">Elite Mobile Detailing</h3>
            </div>
            <p className="text-gray-400">Professional mobile car detailing services that come to you.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>(555) 123-4567</p>
              <p>info@mobiledetailing.com</p>
              <p>Service area: 25 mile radius</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Elite Mobile Detailing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// components/ServiceTile.tsx
import React from 'react';
import { CheckCircle } from 'lucide-react';
import type { Service } from '../types';

interface ServiceTileProps {
  service: Service;
}

export const ServiceTile: React.FC<ServiceTileProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
        <span className="text-2xl font-bold text-blue-600">{service.cost}</span>
      </div>
      <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
      <div className="space-y-2">
        {service.features.map((feature, index) => (
          <div key={index} className="flex items-center text-sm text-gray-700">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
        Book This Service
      </button>
    </div>
  );
};
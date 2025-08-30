import React from 'react';
import type { ServiceCategory as ServiceCategoryType } from '../types';
import { ServiceTile } from './ServiceTile';

interface ServiceCategoryProps {
  category: ServiceCategoryType;
}

export const ServiceCategory: React.FC<ServiceCategoryProps> = ({ category }) => {
  return (
    <div className="mb-12">
      <div className="flex items-center mb-8">
        <div className="p-3 bg-blue-100 rounded-lg mr-4">
          {category.icon}
        </div>
        <h2 className="text-3xl font-bold text-gray-900">{category.name}</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.services.map((service) => (
          <ServiceTile key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};
import { Car, Shield, Sparkles } from 'lucide-react';
import type { ServiceCategory } from '../types';

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'exterior',
    name: 'Exterior Services',
    icon: <Car className="w-6 h-6" />,
    services: [
      {
        id: 'basic-wash',
        title: 'Basic Wash',
        description: 'Complete exterior wash with premium soap and microfiber towels',
        cost: '$25-35',
        features: ['Hand wash', 'Wheel cleaning', 'Tire shine', 'Quick dry']
      },
      {
        id: 'full-detail',
        title: 'Full Exterior Detail',
        description: 'Comprehensive exterior detailing with clay bar and wax protection',
        cost: '$75-120',
        features: ['Hand wash', 'Clay bar treatment', 'Paint correction', 'Wax application', 'Tire & rim detail']
      },
      {
        id: 'paint-correction',
        title: 'Paint Correction',
        description: 'Professional paint correction to remove swirls and scratches',
        cost: '$150-300',
        features: ['Multi-stage polishing', 'Scratch removal', 'Swirl correction', 'Paint enhancement']
      }
    ]
  },
  {
    id: 'interior',
    name: 'Interior Services',
    icon: <Sparkles className="w-6 h-6" />,
    services: [
      {
        id: 'interior-clean',
        title: 'Interior Cleaning',
        description: 'Thorough interior cleaning and sanitization',
        cost: '$40-60',
        features: ['Vacuum seats & carpets', 'Dashboard cleaning', 'Door panel wipe', 'Window cleaning']
      },
      {
        id: 'interior-detail',
        title: 'Full Interior Detail',
        description: 'Complete interior restoration and protection',
        cost: '$80-140',
        features: ['Deep vacuum', 'Steam cleaning', 'Leather conditioning', 'Fabric protection', 'Air freshener']
      },
      {
        id: 'upholstery',
        title: 'Upholstery Cleaning',
        description: 'Specialized cleaning for fabric and leather seats',
        cost: '$60-100',
        features: ['Stain removal', 'Steam cleaning', 'Leather conditioning', 'Fabric protection']
      }
    ]
  },
  {
    id: 'protection',
    name: 'Protection Services',
    icon: <Shield className="w-6 h-6" />,
    services: [
      {
        id: 'ceramic-coating',
        title: 'Ceramic Coating',
        description: 'Long-lasting paint protection with hydrophobic properties',
        cost: '$300-800',
        features: ['2-5 year protection', 'Hydrophobic coating', 'UV protection', 'Enhanced gloss']
      },
      {
        id: 'paint-protection',
        title: 'Paint Protection Film',
        description: 'Clear film protection against chips and scratches',
        cost: '$500-1200',
        features: ['Self-healing film', 'Chip protection', 'Scratch resistance', '10+ year warranty']
      }
    ]
  }
];
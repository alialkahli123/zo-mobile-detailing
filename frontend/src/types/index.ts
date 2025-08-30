export interface Service {
    id: string;
    title: string;
    description: string;
    cost: string;
    features: string[];
  }
  
  export interface ServiceCategory {
    id: string;
    name: string;
    icon: React.ReactNode;
    services: Service[];
  }
  
  export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
  }
  
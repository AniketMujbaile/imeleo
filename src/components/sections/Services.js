import React from 'react';
import { Laptop, Smartphone, UserCog, Package, Cloud, Database } from 'lucide-react';

const ServiceCard = ({ Icon, title, description }) => (
  <div className="bg-white rounded-lg border-2 border-blue-800 p-6 flex flex-col items-center text-center h-full w-11/12 max-w-sm min-h-[350px]">
     <div className="mb-4 p-4 rounded-full border-2 border-blue-800 flex items-center justify-center">
      <Icon size={48} className="text-blue-800" />
    </div>
    <h3 className="text-xl font-semibold text-blue-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-xl">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      Icon: Laptop,
      title: "Web App Development",
      description: "Building cutting-edge, high-performing web apps tailored to suit your business"
    },
    {
      Icon: Smartphone,
      title: "App Development",
      description: "Crafting exceptional mobile experiences that transform how businesses engage with the users on the go"
    },
    {
      Icon: UserCog,
      title: "IT Consulting",
      description: "Strategic IT consulting services designed to help businesses navigate the ever-evolving technology landscape"
    },
    {
      Icon: Package,
      title: "Customer Software Development",
      description: "Enterprise-grade, bespoke solutions that perfectly align with your business needs and goals."
    },
    {
      Icon: Cloud,
      title: "Cloud Services",
      description: "Empower businesses to unlock the full potential of cloud computing ensuring flexibility, scalability, and security"
    },
    {
      Icon: Database,
      title: "Data Engineering",
      description: "Robust data pipelines, ensuring the seamless collection, storage, and management of your data, no matter the scale."
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


 
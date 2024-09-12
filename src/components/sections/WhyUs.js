import React from 'react';
import { Mountain, Lightbulb, Target, Flag, Zap, BarChart } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center border-2 border-blue-800 min-h-[300px]">
    <div className="bg-blue-100 p-3 rounded-full mb-4">
      <Icon className="text-blue-800 w-6 h-6" />
    </div>
    <h3 className="text-2xl font-semibold text-blue-800 mb-2">{title}</h3>
    <p className="text-lg text-gray-600">{description}</p>
  </div>
);

const WhyUs = () => {
  const features = [
    {
      icon: Mountain,
      title: "Technical Expertise",
      description: "Team of highly skilled developers, designers, and system architects, working with the latest technologies and best practices"
    },
    {
      icon: Lightbulb,
      title: "Business Centric Approach",
      description: "Putting business first, providing tailored IT solutions based on the unique needs of each business"
    },
    {
      icon: Target,
      title: "Process And Quality Assurance",
      description: "Implementing thorough testing and quality checks to deliver high-performing and secure IT solutions."
    },
    {
      icon: Flag,
      title: "Support",
      description: "Offering timely support and quick resolution of issues to minimize downtime and disruptions."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Continuously adopting and integrating new technologies to stay competitive and offer clients cutting-edge solutions."
    },
    {
      icon: BarChart,
      title: "Scalability",
      description: "Providing scalable IT infrastructure and services that grow as the client's business grows."
    }
  ];

  return (
    <section id="why-us" className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

 
import React from 'react';
import { Anchor } from 'lucide-react';

const FeatureItem = ({ title, description }) => (
  <div className="flex items-center space-x-4 mt-4">
    <div className="bg-blue-800 rounded-full p-2">
      <Anchor className="text-white" size={24} />
    </div>
    <div>
      <h4 className="font-semibold text-gray-800">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
          <div className="lg:w-1/2">
            <img 
              src="https://img.freepik.com/premium-photo/ai-image_590832-214.jpg" 
              alt="Team working together" 
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-blue-800 text-2xl font-semibold mb-2">About Imeleo</h2>
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              We Are Increasing <span className="text-blue-800">Business</span> Success With <span className="text-blue-800">Technology</span>
            </h3>
            <p className="text-gray-600 mb-6">
              At Imeleo, we use technology to help businesses grow, work smarter, and get better results. Our goal is to make it easier for companies to succeed in today's digital world.
            </p>
            <FeatureItem 
              title="Problem Solving" 
              description="Aliquam erat volutpat Nullam imperdiet"
            />
            <FeatureItem 
              title="Mission & Vision" 
              description="Aliquam erat volutpat Nullam imperdiet"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
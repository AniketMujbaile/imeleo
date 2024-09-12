import React from 'react';
import { Facebook, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold mb-2">Imeleo</h2>
            <p className="text-sm mb-4">Business Software Solutions And Services</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              {['About', 'Services', 'Solutions', 'Why Us', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {['Web App Dev', 'Mobile App Dev', 'IT Consulting', 'Custom Software', 'Cloud Services', 'Data Engineering'].map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {['Content Management', 'Employee Management', 'Vehicle Management', 'Lead Management', 'Inventory Management', 'Hospital Management'].map((solution) => (
                <li key={solution}>{solution}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2023 Imeleo Consulting. All rights reserved.</p>
          </div>
          <div className="flex space-x-4 items-center">
            <a href="mailto:info@imeleo.com" className="hover:underline">info@imeleo.com</a>
            <img src="/api/placeholder/24/16" alt="Indian national flag" className="ml-2" />
            <div className="flex space-x-4">
              <Facebook size={24} className="cursor-pointer hover:text-gray-300" />
              <Linkedin size={24} className="cursor-pointer hover:text-gray-300" />
              <Instagram size={24} className="cursor-pointer hover:text-gray-300" />
              <Youtube size={24} className="cursor-pointer hover:text-gray-300" />
              <Twitter size={24} className="cursor-pointer hover:text-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

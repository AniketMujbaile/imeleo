import React from 'react';
import { Facebook, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h2 className="text-4xl font-bold mb-2">Imeleo</h2>
            <p className="text-xl">Business Software Solutions And Services</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-2">Links</h3>
            <ul className="space-y-1 text-sm">
              {['About', 'Services', 'Solutions', 'Why Us', 'Contact Us'].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-2">Services</h3>
            <ul className="space-y-1 text-sm">
              {['Web App Dev', 'Mobile App Dev', 'IT Consulting', 'Custom Software', 'Cloud Services', 'Data Engineering'].map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-2">Solutions</h3>
            <ul className="space-y-1 text-sm">
              {['Content Management', 'Employee Management', 'Vehicle Management', 'Lead Management', 'Inventory Management', 'Hospital Management'].map((solution) => (
                <li key={solution}>{solution}</li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-2">
              <Facebook size={20} />
              <Linkedin size={20} />
              <Instagram size={20} />
              <Youtube size={20} />
              <Twitter size={20} />
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="my-6 border-white/20" />

        {/* Copyright and Contact */}
        <div className="flex justify-between items-center text-sm">
          <p>© 2023 Imeleo Consulting. All rights reserved.</p>
          <div className="flex items-center space-x-2">
            <span>info@imeleo.com</span>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_India.png/2560px-Flag_of_India.png" alt="Flag" className="w-6 h-4" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



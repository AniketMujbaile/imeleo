import React from 'react';
import { Phone, Mail } from 'lucide-react';
import Image from 'next/image';

const ContactUs = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">Contact Us</h2>
        <div className="bg-blue-800 rounded-3xl overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <Image 
                src="/images/image.png" 
                alt="Smiling man with laptop" 
                width={640} 
                height={480} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h3 className="text-4xl font-bold text-white mb-4">
                We help you to grow your business faster & easier.
              </h3>
              <p className="text-white mb-6">
                Partner with us to simplify the path to your success. We&rsquo;ll make reaching your
                business goals faster and easier than ever.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-white">
                  <Phone className="mr-2" />
                  <span>+91-8873-33-8873</span>
                </div>
                <div className="flex items-center text-white">
                  <Mail className="mr-2" />
                  <a href="mailto:contact@imeleo.com" className="underline">
                    contact@imeleo.com
                  </a>
                </div>
              </div>
              <button className="bg-white text-blue-800 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

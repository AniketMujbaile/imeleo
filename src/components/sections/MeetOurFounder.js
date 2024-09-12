import React from "react";
import { Linkedin } from "lucide-react";

const MeetOurFounder = () => {
  return (
    <section id="blog" className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
          <div className="lg:w-2/3">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="text-blue-800 mr-2">✦</span>
              Meet Our&nbsp;<span className="text-blue-800">Founder</span>
            </h2>
            <div className="text-2xl space-y-4">
              <p className="text-gray-600">
                With decades of industry experience,{" "}
                <span className="font-semibold">Mayank</span> is a highly
                skilled software developer, solution architect and technology
                entrepreneur. He specializes in building modular and scalable
                cross platform software solutions.
              </p>
              <p className="text-gray-600">
                Over the past, he has worked with numerous business, helping
                them overcome complex business challenges by building innovative
                technology solutions.
              </p>
              <p className="text-gray-600">
                Admired by clients, developers and designers alike, his
                entrepreneurial vision drives{" "}
                <span className="font-semibold">Imeleo</span>,
                empowering businesses with cutting-edge technology solutions,
                thus fueling growth and innovation.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3">
            <div className="bg-blue-100 rounded-3xl p-6">
              <img
                src="https://www.imeleo.com/_next/image?url=%2Fimages%2Ffounder.png&w=1080&q=75"
                alt="Mayank Mahajan"
                className="w-full rounded-2xl mb-4"
              />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-blue-800">
                    Mayank Mahajan
                  </h3>
                  <p className="text-gray-600">Founder, Imeleo</p>
                </div>
                <a
                  href="https://www.linkedin.com/in/mynkmhjn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-800 hover:text-blue-800"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurFounder;

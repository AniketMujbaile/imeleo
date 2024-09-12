import React from 'react';

const SolutionCard = ({ image, title, description }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-blue-800 flex flex-col p-8 h-full">
    <div className="mb-4 flex-shrink-0">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded" />
    </div>
    <div className="flex-grow flex flex-col justify-center">
      <h3 className="text-xl font-semibold text-blue-800 mb-2 text-center">{title}</h3>
      <p className="text-sm text-gray-600 text-center">{description}</p>
    </div>
  </div>
);

const Solutions = () => {
  const solutions = [
    {
      image: "https://www.2008php.com/2024_smallimg/2024-09-08/20240908223113.jpg",
      title: "Content Management",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun."
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIgfR4qhW_vpvNQiXPybjuyEH3apqkzbMUN9raxCSyTeTTa5mqZqDMAlT7ow1rieKRzxg&usqp=CAU",
      title: "Employee Management",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun."
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDrnTprr_zgE8NEgB5KT00S5XFjTCP7--OFyt5mV9tsEzbcmNrRVg5_9O9OGTsa8fZK0I&usqp=CAU",
      title: "Vehicle Management",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun."
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJOAgiJz3aSncLvSpqtfbUxfyc6QjGVnmhDQWGTCio8mSSzt21mTW-IXhTJr9EXHZ8y4&usqp=CAU",
      title: "Lead Management",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun."
    },
    {
      image: "https://i.postimg.cc/wTbrNV6H/Logistics-Manager.jpg",
      title: "Inventory Management",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun."
    },
    {
      image: "https://www.iehrdcouncil.com/images/hahr.jpg",
      title: "Hospital Management",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun."
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">Solutions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="flex justify-center">
              <div className="w-80 h-96">
                <SolutionCard {...solution} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;

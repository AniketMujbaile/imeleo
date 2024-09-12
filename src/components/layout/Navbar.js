 'use client';
import React, { useState } from 'react';
import { scrollToSection } from '../../utils/scrollToSection';
import { Menu, X, Search } from 'lucide-react'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-800 text-white p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className="text-3xl md:text-4xl font-bold"
          onClick={(e) => scrollToSection(e, 'hero')}
        >
          Imeleo
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-center space-x-8 flex-grow">
          <a
            href="#solutions"
            className="hover:text-gray-300"
            onClick={(e) => scrollToSection(e, 'solutions')}
          >
            Solutions
          </a>
          <a
            href="#services"
            className="hover:text-gray-300"
            onClick={(e) => scrollToSection(e, 'services')}
          >
            Services
          </a>
          <a
            href="#about"
            className="hover:text-gray-300"
            onClick={(e) => scrollToSection(e, 'about')}
          >
            About Us
          </a>
          <a
            href="#why-us"
            className="hover:text-gray-300"
            onClick={(e) => scrollToSection(e, 'why-us')}
          >
            Why Us
          </a>
          <a
            href="#blog"
            className="hover:text-gray-300"
            onClick={(e) => scrollToSection(e, 'blog')}
          >
            Blog
          </a>
        </div>

        {/* Search Box for Desktop (full screen view) */}
        <div className="hidden md:flex items-center relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-white text-black px-4 py-2 rounded-full pr-10"
          />
          <Search className="w-5 h-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2" />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-800 text-white p-4 absolute top-16 left-0 w-full z-10 shadow-md">
          {/* Search box in mobile menu */}
          <div className="flex items-center justify-center mb-4 relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-white text-black px-4 py-2 rounded-full w-full pr-10"
            />
            <Search className="w-5 h-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2" />
          </div>

          {/* Links for mobile */}
          <a
            href="#solutions"
            className="block py-2 hover:text-gray-300"
            onClick={(e) => {
              scrollToSection(e, 'solutions');
              setIsMenuOpen(false);
            }}
          >
            Solutions
          </a>
          <a
            href="#services"
            className="block py-2 hover:text-gray-300"
            onClick={(e) => {
              scrollToSection(e, 'services');
              setIsMenuOpen(false);
            }}
          >
            Services
          </a>
          <a
            href="#about"
            className="block py-2 hover:text-gray-300"
            onClick={(e) => {
              scrollToSection(e, 'about');
              setIsMenuOpen(false);
            }}
          >
            About Us
          </a>
          <a
            href="#why-us"
            className="block py-2 hover:text-gray-300"
            onClick={(e) => {
              scrollToSection(e, 'why-us');
              setIsMenuOpen(false);
            }}
          >
            Why Us
          </a>
          <a
            href="#blog"
            className="block py-2 hover:text-gray-300"
            onClick={(e) => {
              scrollToSection(e, 'blog');
              setIsMenuOpen(false);
            }}
          >
            Blog
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;



// 'use client';
// import React from 'react';
// import { scrollToSection } from '../../utils/scrollToSection';

// const Navbar = () => {
//   return (
//     <nav className="bg-blue-800 text-white p-4 fixed w-full z-10">
//       <div className="container mx-auto flex justify-between items-center">
//         <a href="#" className="text-4xl font-bold" onClick={(e) => scrollToSection(e, 'hero')}>
//           Imeleo
//         </a>
//         <div className="space-x-12">
//           <a href="#solutions" className="hover:text-gray-300" onClick={(e) => scrollToSection(e, 'solutions')}>Solutions</a>
//           <a href="#services" className="hover:text-gray-300" onClick={(e) => scrollToSection(e, 'services')}>Services</a>
//           <a href="#about" className="hover:text-gray-300" onClick={(e) => scrollToSection(e, 'about')}>About Us</a>
//           <a href="#why-us" className="hover:text-gray-300" onClick={(e) => scrollToSection(e, 'why-us')}>Why Us</a>
//           <a href="#blog" className="hover:text-gray-300" onClick={(e) => scrollToSection(e, 'blog')}>Blog</a>
//         </div>
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Search"
//             className="bg-white text-black px-4 py-2 rounded-full"
//           />
//           <svg
//             className="w-5 h-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2"
//             fill="none"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
//           </svg>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
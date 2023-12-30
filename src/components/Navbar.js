
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* Website Logo */}
              <a href="/" className="flex items-center py-4 px-2">
                <span className="font-bold text-2xl text-indigo-600">My Food App</span>
              </a>
            </div>
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/" className="py-4 px-2 text-indigo-600 font-semibold hover:text-indigo-500 transition duration-300">Home</Link>
              <Link to="/cart" className="py-4 px-2 text-indigo-600 font-semibold hover:text-indigo-500 transition duration-300">Cart</Link>
              <Link to="/contact" className="py-4 px-2 text-indigo-600 font-semibold hover:text-indigo-500 transition duration-300">Contact Us</Link>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="outline-none mobile-menu-button">
              <svg
                className=" w-6 h-6 text-gray-500 hover:text-indigo-500 "
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* mobile menue */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <Link to="/" className="block py-2 px-4 text-sm hover:bg-indigo-500 hover:text-white transition duration-300">Home</Link>
        <Link to="/cart" className="block py-2 px-4 text-sm hover:bg-indigo-500 hover:text-white transition duration-300">Cart</Link>
        <Link to="/contact" className="block py-2 px-4 text-sm hover:bg-indigo-500 hover:text-white transition duration-300">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;

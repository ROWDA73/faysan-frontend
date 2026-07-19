import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png'; // Hubi in magaca logo-gaagu uu sidan yahay

const Navbar = () => {
  return (
    <nav className="w-full bg-white py-4 px-6 md:px-20 flex items-center justify-between border-b border-gray-100">
      {/* LOGO */}
      <div className="w-32">
        <img src={logo} alt="Faysan Collection" />
      </div>

      {/* MENU LINKS */}
      <div className="hidden md:flex space-x-8 font-medium text-gray-800">
        <Link to="/" className="hover:text-[#800000]">HOME</Link>
        <Link to="/shop" className="hover:text-[#800000]">SHOP</Link>
        <Link to="/collections" className="hover:text-[#800000]">COLLECTIONS</Link>
        <Link to="/about" className="hover:text-[#800000]">ABOUT US</Link>
        <Link to="/contact" className="hover:text-[#800000]">CONTACT</Link>
      </div>

      {/* ICONS */}
      <div className="flex space-x-6 text-gray-600">
        <button>🔍</button>
        <button>🤍</button>
        <button className="relative">
          🛒 <span className="absolute -top-2 -right-2 bg-gray-200 text-xs rounded-full px-1">0</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
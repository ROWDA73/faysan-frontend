import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div className="space-y-4">
          <h2 className="text-2xl font-serif text-[#C5A059]">FAYSAN</h2>
          <p className="text-gray-400 text-sm">
            Luxury, elegance, and timeless quality for your everyday style.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-bold mb-4 text-[#C5A059]">SHOP</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>Perfumes</li>
            <li>Fashion</li>
            <li>Cosmetics</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-bold mb-4 text-[#C5A059]">SUPPORT</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>Contact Us</li>
            <li>Shipping Policy</li>
            <li>Returns</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-bold mb-4 text-[#C5A059]">FOLLOW US</h3>
          <div className="flex space-x-4 text-gray-400">
            {/* Halkan waxaad ku dari kartaa icon-yada */}
            <span>Instagram</span>
            <span>Facebook</span>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-xs">
        &copy; 2026 Faysan Collection. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
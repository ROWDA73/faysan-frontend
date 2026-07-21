import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#5A121A] text-white border-t border-[#E5A912]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
        <div className="space-y-4">
          <h3 className="font-serif font-bold text-xl tracking-wide text-white">FAYSAN COLLECTION</h3>
          <p className="text-xs text-gray-300 font-light leading-relaxed">
            Experience timeless elegance with our exclusive range of luxury perfumes, artisanal fragrances, and refined lifestyle collections.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-[#E5A912]">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-[#E5A912] transition">Home</Link></li>
            <li><Link to="/shop" className="hover:text-[#E5A912] transition">Shop Catalog</Link></li>
            <li><Link to="/about" className="hover:text-[#E5A912] transition">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-[#E5A912] transition">Contact Us</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-[#E5A912]">Categories</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><span className="hover:text-[#E5A912] transition cursor-pointer">Oud Collection</span></li>
            <li><span className="hover:text-[#E5A912] transition cursor-pointer">Women Fragrances</span></li>
            <li><span className="hover:text-[#E5A912] transition cursor-pointer">Men Fragrances</span></li>
            <li><span className="hover:text-[#E5A912] transition cursor-pointer">Unisex Scents</span></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-[#E5A912]">Boutique</h4>
          <p className="text-sm text-gray-300 font-light">
            Maka Al-Mukarama Road<br />
            Mogadishu, Somalia
          </p>
          <p className="text-xs text-[#E5A912] font-semibold">+252 61X XXX XXX</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400">
        <p>&copy; {new Date().getFullYear()} Faysan Collection. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">Crafted for Luxury & Elegance</p>
      </div>
    </footer>
  );
}

export default Footer;
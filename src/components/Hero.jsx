import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative w-full bg-[#0b0b0b] text-[#F9F6F0] overflow-hidden border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-20 lg:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text and CTA */}
        <div className="space-y-6">
          <span className="text-[#D4AF37] uppercase tracking-widest text-sm font-semibold">
            Luxury. Elegance. Timeless.
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif leading-tight">
            Discover Luxury <br />
            <span className="text-[#D4AF37] italic">in Every Scent</span>
          </h1>
          <p className="text-[#F9F6F0]/80 text-base max-w-md">
            Premium fragrances crafted for elegance and timeless style. Explore our exclusive collections designed for those who appreciate true luxury.
          </p>
          <div className="pt-4">
            <Link
              to="/shop"
              className="inline-block bg-[#D4AF37] text-[#0b0b0b] font-semibold px-8 py-3 uppercase tracking-wider hover:bg-[#F3E5AB] transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Right Side: Luxury Showcase Box */}
        <div className="relative flex justify-center">
          <div className="w-full max-w-md h-96 bg-[#141414] border border-[#D4AF37]/30 rounded-lg p-6 shadow-2xl flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-transparent to-transparent opacity-60"></div>
            <div className="text-center z-10 space-y-3">
              <span className="text-[#D4AF37] font-serif text-3xl tracking-widest">FAYSAN COLLECTION</span>
              <p className="text-xs text-[#F9F6F0]/60 tracking-widest uppercase">Exclusive Signature</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
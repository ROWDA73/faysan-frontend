import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="w-full bg-[#FAF8F5] text-[#5A121A] min-h-screen font-sans pb-24 overflow-x-hidden">
      {/* Header Banner */}
      <div className="w-full bg-[#5A121A] text-white py-16 px-6 text-center space-y-3 border-b border-[#E5A912]/40">
        <p className="uppercase tracking-[6px] text-[#E5A912] text-xs font-extrabold">
          OUR HERITAGE
        </p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold">ABOUT FAYSAN COLLECTION</h1>
        <p className="text-sm text-gray-300 max-w-lg mx-auto font-light">
          Crafting timeless elegance, luxury fragrances, and exquisite style since day one.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-16 space-y-16">
        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-[#E5A912]">
              THE ESSENCE OF LUXURY
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight text-[#5A121A]">
              Where Elegance Meets Unmatched Quality
            </h2>
            <p className="text-[#555555] text-sm md:text-base font-semibold leading-relaxed">
              Faysan Collection was born out of a passion for refined aesthetics. We specialize in bringing together world-class luxury perfumes, sophisticated fashion, and premium cosmetics designed for those who appreciate true artistry.
            </p>
            <p className="text-[#555555] text-sm md:text-base font-semibold leading-relaxed">
              Every product in our collection is handpicked to ensure it meets the highest standards of elegance, quality, and timeless appeal.
            </p>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl border border-[#E5A912]/30 bg-[#F4EFEA]">
            <img 
              src="/background.png" 
              alt="Faysan Collection Store" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">
          <div className="bg-white p-8 rounded-xl border border-[#E5A912]/30 text-center space-y-3 shadow-sm">
            <span className="text-3xl">✨</span>
            <h3 className="font-serif font-bold text-lg text-[#5A121A]">Uncompromising Quality</h3>
            <p className="text-xs text-gray-600 font-semibold leading-relaxed">We source and curate only the finest materials and authentic fragrances for our clients.</p>
          </div>
          <div className="bg-white p-8 rounded-xl border border-[#E5A912]/30 text-center space-y-3 shadow-sm">
            <span className="text-3xl">💎</span>
            <h3 className="font-serif font-bold text-lg text-[#5A121A]">Timeless Style</h3>
            <p className="text-xs text-gray-600 font-semibold leading-relaxed">Our fashion and cosmetic lines embody modern sophistication combined with classic grace.</p>
          </div>
          <div className="bg-white p-8 rounded-xl border border-[#E5A912]/30 text-center space-y-3 shadow-sm">
            <span className="text-3xl">🤝</span>
            <h3 className="font-serif font-bold text-lg text-[#5A121A]">Dedicated Service</h3>
            <p className="text-xs text-gray-600 font-semibold leading-relaxed">Your satisfaction is our priority, supported by 24/7 customer care and seamless shopping.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
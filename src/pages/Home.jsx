import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const categories = [
    {
      id: 1,
      name: "PERFUMES",
      description: "Luxury fragrances that define you.",
      image: "/9pm1.jpeg",
      link: "/shop",
    },
    {
      id: 2,
      name: "FASHION",
      description: "Elegant styles for every occasion.",
      image: "cabayah2.jpeg",
      link: "/shop",
    },
    {
      id: 3,
      name: "COSMETICS",
      description: "Premium beauty for timeless glow.",
      image: "cosmatics.jpeg",
      link: "/shop",
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Qamar",
      category: "PERFUMES",
      price: "$20.00",
      image: "Qamar.jpeg",
      link: "/shop",
    },
    {
      id: 2,
      name: "HAYAATI",
      category: "PERFUMES",
      price: "$10.00",
      image: "Xayaati.jpeg",
      link: "/shop",
    },
    {
      id: 3,
      name: "Blue Elegance",
      category: "FASHION",
      price: "$15.00",
      image: "cabayah4.jpeg",
      link: "/shop",
    },
    {
      id: 4,
      name: "Cosmetic Set",
      category: "COSMETICS",
      price: "$65.00",
      image: "cosmatics.jpeg",
      link: "/shop",
    },
  ];

  const testimonials = [
    {
      id: 1,
      rating: "★★★★★",
      quote: "Faysan Collection offers the absolute best oud and fragrances in Mogadishu. The scent lasts all day, and the luxury packaging is top-notch!",
      name: "Hodan Ahmed",
      role: "Verified Customer",
    },
    {
      id: 2,
      rating: "★★★★★",
      quote: "Amazing customer service and fast delivery right to the door. The cosmetics and perfumes are 100% original. Highly recommended!",
      name: "Mohamed Abdi",
      role: "Verified Customer",
    },
    {
      id: 3,
      rating: "★★★★★",
      quote: "The quality of the fashion and fragrance collection is unmatched. Every time I wear Faysan scents, people ask me what I'm wearing!",
      name: "Amina Yusuf",
      role: "Verified Customer",
    },
  ];

  return (
    <div className="w-full bg-[#FAF8F5] text-[#5A121A] min-h-screen font-sans overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative w-full h-[85vh] min-h-[550px] flex items-center justify-center px-6 overflow-hidden border-b border-[#E5A912]/30 text-center">
        <img
          src="/background.png"
          alt="Luxury Perfume"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 w-full max-w-3xl bg-[#FAF8F5]/95 p-8 md:p-12 rounded-2xl shadow-xl border border-[#E5A912]/40 space-y-6 mx-4">
          <p className="uppercase tracking-[6px] text-[#E5A912] text-xs md:text-sm font-extrabold">
            LUXURY. ELEGANCE. TIMELESS.
          </p>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold leading-tight text-[#5A121A]">
            FAYSAN
            <br />
            <span className="italic text-[#E5A912] font-normal">COLLECTION</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#333333] max-w-xl mx-auto leading-relaxed font-normal">
            Discover the finest perfumes, elegant fashion, and premium cosmetics crafted for those who appreciate true luxury.
          </p>

          <div className="pt-2 flex justify-center">
            <Link
              to="/shop"
              className="bg-[#E5A912] text-white px-8 py-3.5 uppercase tracking-[0.2em] font-extrabold text-xs hover:bg-[#c9920e] transition duration-300 shadow-lg inline-block rounded"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      </section>

      {/* SHOP BY CATEGORY */}
      <section className="w-full px-6 md:px-16 py-24 bg-[#FAF8F5]">
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-widest text-[#5A121A] inline-block pb-3 border-b-2 border-[#E5A912]">
            SHOP BY CATEGORY
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 max-w-7xl mx-auto">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-xl overflow-hidden border border-[#E5A912]/30 hover:border-[#E5A912] transition duration-500 shadow-lg group flex flex-col justify-between"
            >
              <div className="relative overflow-hidden h-72 bg-[#F4EFEA]">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-8 text-center space-y-4">
                <h3 className="text-2xl font-serif font-bold tracking-wider text-[#5A121A]">
                  {category.name}
                </h3>
                <p className="text-gray-800 text-sm font-semibold leading-relaxed">
                  {category.description}
                </p>
                <div className="pt-2">
                  <Link
                    to={category.link}
                    className="inline-flex items-center text-[#E5A912] font-bold text-xs uppercase tracking-[0.2em] hover:text-[#5A121A] transition-colors"
                  >
                    SHOP NOW <span className="ml-2 text-base">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FEATURED BEST-SELLERS */}
        <div className="w-full mb-24 max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-2">
            <p className="uppercase tracking-[4px] text-[#E5A912] text-xs font-extrabold">
              CURATED SELECTION
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-wider text-[#5A121A]">
              FEATURED BEST-SELLERS
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden border border-[#E5A912]/30 hover:border-[#E5A912] transition duration-500 shadow-sm flex flex-col justify-between group"
              >
                <div className="relative overflow-hidden h-64 bg-[#F4EFEA]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#FAF8F5]/90 text-[#5A121A] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded border border-[#E5A912]/30">
                    {product.category}
                  </span>
                </div>

                <div className="p-6 space-y-3 text-center">
                  <h4 className="font-serif font-bold text-lg text-[#5A121A]">
                    {product.name}
                  </h4>
                  <p className="text-[#E5A912] font-bold text-sm tracking-wider">
                    {product.price}
                  </p>
                  <div className="pt-2">
                    <Link
                      to={product.link}
                      className="w-full block bg-[#5A121A] text-white text-center py-2.5 uppercase tracking-widest text-xs font-bold rounded hover:bg-[#E5A912] transition duration-300"
                    >
                      VIEW DETAILS
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BRAND HERITAGE / STORY SECTION */}
        <div className="w-full mb-24 max-w-7xl mx-auto bg-white rounded-2xl border border-[#E5A912]/30 overflow-hidden shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-8 md:p-16 space-y-6">
              <p className="uppercase tracking-[4px] text-[#E5A912] text-xs font-extrabold">
                OUR HERITAGE
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A121A] leading-tight">
                Crafted for the <span className="italic text-[#E5A912]">Discerning</span> Few
              </h2>
              <p className="text-gray-700 font-normal leading-relaxed text-sm md:text-base">
                At Faysan Collection, we believe true luxury is found in the details. From rare, long-lasting oud extracts to finely tailored fashion and premier cosmetics, every product is hand-selected to celebrate timeless elegance and individual identity.
              </p>
              <div className="pt-4">
                <Link
                  to="/shop"
                  className="inline-block border border-[#5A121A] text-[#5A121A] px-8 py-3 uppercase tracking-[0.2em] font-extrabold text-xs hover:bg-[#5A121A] hover:text-white transition duration-300 rounded"
                >
                  DISCOVER MORE
                </Link>
              </div>
            </div>
            <div className="h-80 lg:h-full min-h-[350px] relative">
              <img
                src="/background.png"
                alt="Faysan Collection Heritage"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* TESTIMONIALS SECTION */}
        <div className="w-full mb-24 max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-2">
            <p className="uppercase tracking-[4px] text-[#E5A912] text-xs font-extrabold">
              CLIENT EXPERIENCES
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-wider text-[#5A121A]">
              WHAT OUR LOYALTY SAYS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 rounded-2xl border border-[#E5A912]/30 shadow-sm space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="text-[#E5A912] text-lg">{testimonial.rating}</div>
                  <p className="text-gray-800 text-sm font-semibold italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E5A912]/20">
                  <h4 className="font-serif font-bold text-sm text-[#5A121A]">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 SERVICES CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-[#E5A912]/30 text-center max-w-7xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#E5A912]/20 space-y-2">
            <span className="text-3xl">🚚</span>
            <h5 className="font-serif font-bold text-sm tracking-wider text-[#5A121A]">FREE SHIPPING</h5>
            <p className="text-xs text-gray-700 font-medium">On all orders over $100</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#E5A912]/20 space-y-2">
            <span className="text-3xl">🔒</span>
            <h5 className="font-serif font-bold text-sm tracking-wider text-[#5A121A]">SECURE PAYMENT</h5>
            <p className="text-xs text-gray-700 font-medium">100% Secure Payment</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#E5A912]/20 space-y-2">
            <span className="text-3xl">⭐</span>
            <h5 className="font-serif font-bold text-sm tracking-wider text-[#5A121A]">PREMIUM QUALITY</h5>
            <p className="text-xs text-gray-700 font-medium">100% Original Products</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#E5A912]/20 space-y-2">
            <span className="text-3xl">🎧</span>
            <h5 className="font-serif font-bold text-sm tracking-wider text-[#5A121A]">24/7 SUPPORT</h5>
            <p className="text-xs text-gray-700 font-medium">Dedicated Support</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
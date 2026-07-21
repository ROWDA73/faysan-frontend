import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const productsData = [
  { id: 1, name: 'Qamar', category: 'PERFUMES', price: 20.00, rating: 4.9, image: '/Qamar.jpeg', description: 'A majestic blend of pure Cambodian oud and warm amber spices.' },
  { id: 2, name: 'HAYAATI', category: 'PERFUMES', price: 10.00, rating: 4.8, image: '/Xayaati.jpeg', description: 'An elegant floral symphony wrapped in soft white musk.' },
  { id: 3, name: 'Blue Elegance', category: 'FASHION', price: 15.00, rating: 5.0, image: '/cabayah4.jpeg', description: 'Rich amber notes combined with golden vanilla and smoky woods.' },
  { id: 4, name: 'Cosmetic Set', category: 'COSMETICS', price: 65.00, rating: 4.7, image: '/cosmatics.jpeg', description: 'Fresh night-blooming jasmine infused with sweet citrus accords.' },
  { id: 5, name: 'Royal Oud Intense', category: 'PERFUMES', price: 120.00, rating: 4.9, image: '/9pm1.jpeg', description: 'A powerful masculine fragrance with leather, cedarwood, and spice.' },
  { id: 6, name: 'Golden Silk Abaya', category: 'FASHION', price: 150.00, rating: 5.0, image: '/cabayah2.jpeg', description: 'Our signature luxury creation featuring rare floral oils and aged oud.' }
];

function Shop() {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('default');

  const categories = ['All', 'PERFUMES', 'FASHION', 'COSMETICS'];

  // Filter by category and live search query
  const filteredProducts = productsData.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'price-low') return a.price - b.price;
    if (sortOption === 'price-high') return b.price - a.price;
    if (sortOption === 'rating') return b.rating - a.rating;
    return 0; // default
  });

  return (
    <div className="w-full bg-[#FAF8F5] text-[#5A121A] min-h-screen font-sans pb-24 overflow-x-hidden">
      {/* Header Banner */}
      <div className="w-full bg-[#5A121A] text-white py-16 px-6 text-center space-y-3 border-b border-[#E5A912]/40">
        <p className="uppercase tracking-[6px] text-[#E5A912] text-xs font-extrabold">
          LUXURY CATALOG
        </p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold">EXPLORE OUR COLLECTION</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 space-y-8">
        {/* Search & Sort Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-[#E5A912]/30 shadow-sm">
          {/* Live Search Input */}
          <div className="w-full md:w-96 relative">
            <input
              type="text"
              placeholder="Search perfumes, abayas, cosmetics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#FAF8F5] border border-[#E5A912]/40 rounded-xl px-4 py-2.5 text-sm text-[#5A121A] focus:outline-none focus:border-[#5A121A] placeholder-gray-400"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="w-full md:w-auto flex items-center gap-3">
            <span className="text-xs uppercase font-extrabold text-[#5A121A] tracking-wider whitespace-nowrap">Sort By:</span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="w-full md:w-auto bg-[#FAF8F5] border border-[#E5A912]/40 rounded-xl px-4 py-2.5 text-sm text-[#5A121A] focus:outline-none focus:border-[#5A121A] font-semibold"
            >
              <option value="default">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition ${
                selectedCategory === cat
                  ? 'bg-[#5A121A] text-white shadow'
                  : 'bg-white text-[#5A121A] border border-[#E5A912]/30 hover:border-[#5A121A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid or Empty State */}
        {sortedProducts.length === 0 ? (
          <div className="text-center py-20 space-y-4">
            <p className="text-2xl font-serif text-[#5A121A]">No luxury items found</p>
            <p className="text-sm text-gray-600">Try adjusting your search query or switching categories.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-2xl border border-[#E5A912]/30 overflow-hidden shadow-sm hover:shadow-lg transition duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative overflow-hidden h-72 bg-[#F4EFEA]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    {/* Wishlist Heart Toggle Button */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleWishlist(product);
                      }}
                      className="absolute top-3 right-3 bg-white/90 p-2 rounded-full shadow border border-[#E5A912]/30 hover:scale-110 transition text-red-600"
                      title="Save to Wishlist"
                    >
                      {isInWishlist(product.id) ? '❤️' : '🤍'}
                    </button>

                    <span className="absolute top-3 left-3 bg-[#FAF8F5]/90 text-[#5A121A] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded border border-[#E5A912]/30">
                      {product.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-[#E5A912] font-bold">⭐ {product.rating}</span>
                      <span className="font-bold text-[#5A121A] text-base">${product.price.toFixed(2)}</span>
                    </div>
                    
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-serif font-bold text-xl text-[#5A121A] hover:text-[#E5A912] transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    
                    <p className="text-sm text-gray-700 font-normal leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center gap-3">
                  <Link
                    to={`/product/${product.id}`}
                    className="flex-1 text-center bg-[#FAF8F5] border border-[#5A121A] text-[#5A121A] py-3 rounded-xl text-xs font-extrabold uppercase tracking-widest hover:bg-[#5A121A] hover:text-white transition"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-[#E5A912] text-white px-4 py-3 rounded-xl text-xs font-extrabold uppercase tracking-widest hover:bg-[#c9920e] transition shadow"
                  >
                    + Bag
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Shop;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

function Shop() {
  const { addToCart }  = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('default');

  const categories = ['All', 'PERFUMES', 'FASHION', 'COSMETICS'];

  // Soo jiidashada xogta badeecadaha ee Backend API-ga (Spring Boot / Node.js)
  useEffect(() => {
    fetch('http://localhost:8080/api/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Lama soo dejin karo xogta badeecadaha');
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Filter by category and live search query
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || 
      product.category?.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = product.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'price-low') return a.price - b.price;
    if (sortOption === 'price-high') return b.price - a.price;
    if (sortOption === 'rating') return (b.rating || 0) - (a.rating || 0);
    return 0; // default
  });

  if (loading) {
    return (
      <div className="w-full bg-[#FAF8F5] text-[#5A121A] min-h-screen flex items-center justify-center font-sans">
        <p className="text-xl font-serif animate-pulse">Fadlan sug, FAYSAN COLLECTION waa la soo dejinayaa...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full bg-[#FAF8F5] text-[#5A121A] min-h-screen flex flex-col items-center justify-center font-sans space-y-4">
        <p className="text-xl font-serif text-red-700">Khalad ayaa dhacay: {error}</p>
        <p className="text-sm text-gray-600">Hubi in server-kaaga uu ka shaqaynayo port 8080.</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#FAF8F5] text-[#5A121A] min-h-screen font-sans pb-24 overflow-x-hidden">
      {/* Header Banner */}
      <div className="w-full bg-[#5A121A] text-white py-16 px-6 text-center space-y-3 border-b border-[#E5A912]/40">
        <p className="uppercase tracking-[6px] text-[#E5A912] text-xs font-extrabold">
          FAYSAN COLLECTION CATALOG
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
            <p className="text-sm text-gray-600">Try adjusting your search query or adding products via API.</p>
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
                      src={product.imageUrl || '/Qamar.jpeg'}
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
                      {product.category || 'PERFUMES'}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-[#E5A912] font-bold">⭐ {product.rating || 4.9}</span>
                      <span className="font-bold text-[#5A121A] text-base">${Number(product.price).toFixed(2)}</span>
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
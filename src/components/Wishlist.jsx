import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

function Wishlist() {
  const { wishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (wishlist.length === 0) {
    return (
      <div className="w-full min-h-[70vh] bg-[#FAF8F5] text-[#5A121A] flex flex-col items-center justify-center text-center p-8 space-y-6 font-sans">
        <span className="text-6xl">❤️</span>
        <h2 className="text-3xl font-serif font-bold">Your Wishlist is Empty</h2>
        <p className="text-sm text-gray-700 font-semibold max-w-md">
          You haven't saved any luxury items to your wishlist yet. Explore our catalog and tap the heart icon on items you love!
        </p>
        <Link
          to="/shop"
          className="bg-[#E5A912] text-white px-8 py-3.5 uppercase tracking-[0.2em] font-extrabold text-xs rounded shadow hover:bg-[#c9920e] transition inline-block"
        >
          Explore Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#FAF8F5] text-[#5A121A] min-h-screen font-sans pb-24">
      {/* Header Banner */}
      <div className="w-full bg-[#5A121A] text-white py-16 px-6 text-center space-y-3 border-b border-[#E5A912]/40">
        <p className="uppercase tracking-[6px] text-[#E5A912] text-xs font-extrabold">
          SAVED FAVORITES
        </p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold">MY WISHLIST ({wishlist.length})</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlist.map((product) => (
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
                  <button
                    onClick={() => toggleWishlist(product)}
                    className="absolute top-3 right-3 bg-white/90 text-red-600 p-2 rounded-full shadow border border-[#E5A912]/30 hover:scale-110 transition"
                    title="Remove from Wishlist"
                  >
                    ❤️
                  </button>
                  <span className="absolute top-3 left-3 bg-[#FAF8F5]/90 text-[#5A121A] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded border border-[#E5A912]/30">
                    {product.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-[#E5A912] font-bold">⭐ {product.rating || '5.0'}</span>
                    <span className="font-bold text-[#5A121A] text-base">${product.price.toFixed(2)}</span>
                  </div>
                  
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-serif font-bold text-xl text-[#5A121A] hover:text-[#E5A912] transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  
                  <p className="text-sm text-gray-700 font-normal leading-relaxed line-clamp-2">
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
                  onClick={() => {
                    addToCart(product);
                    toggleWishlist(product); // Optional: remove from wishlist once moved to cart
                  }}
                  className="bg-[#E5A912] text-white px-4 py-3 rounded-xl text-xs font-extrabold uppercase tracking-widest hover:bg-[#c9920e] transition shadow"
                >
                  Move to Bag
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Logo.png';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

function Navbar() {
  const location = useLocation();
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const isAdminRoute = location.pathname.startsWith('/admin');

  if (isAdminRoute) return null; // Hide main navbar on admin pages

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E5A912]/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Logo - Preserved Exactly */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Faysan Collection" className="h-10 w-auto object-contain" />
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg text-[#5A121A] tracking-wide">FAYSAN</span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#E5A912] font-extrabold -mt-1">Collection</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#5A121A]">
          <Link to="/" className="hover:text-[#E5A912] transition">Home</Link>
          <Link to="/shop" className="hover:text-[#E5A912] transition">Shop</Link>
          <Link to="/about" className="hover:text-[#E5A912] transition">About Us</Link>
          <Link to="/contact" className="hover:text-[#E5A912] transition">Contact</Link>
          <Link to="/admin" className="text-xs uppercase bg-[#5A121A] text-[#E5A912] px-3 py-1.5 rounded-lg tracking-widest font-extrabold hover:bg-[#430d13] transition">
            Admin
          </Link>
        </div>

        {/* Right Actions (Wishlist, Bag, & Checkout) */}
        <div className="flex items-center gap-4">
          {/* Wishlist Link */}
          <Link 
            to="/wishlist" 
            className="relative bg-white border border-[#E5A912]/40 p-2.5 rounded-full text-[#5A121A] hover:border-[#5A121A] transition shadow-sm flex items-center justify-center"
            title="Wishlist"
          >
            ❤️
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#5A121A] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {wishlist.length}
              </span>
            )}
          </Link>

          {/* Bag / Cart Link */}
          <Link 
            to="/cart" 
            className="bg-[#5A121A] text-white px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-widest hover:bg-[#430d13] transition shadow flex items-center gap-2"
          >
            <span>Bag</span>
            <span className="bg-[#E5A912] text-[#5A121A] px-2 py-0.5 rounded-full text-[10px] font-bold">
              {totalItems}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
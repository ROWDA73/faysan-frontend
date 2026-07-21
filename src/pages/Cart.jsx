import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="w-full min-h-[70vh] bg-[#FAF8F5] text-[#5A121A] flex flex-col items-center justify-center text-center p-8 space-y-6 font-sans">
        <span className="text-6xl">🛍️</span>
        <h2 className="text-3xl font-serif font-bold">Your Bag is Empty</h2>
        <p className="text-sm text-gray-700 font-semibold max-w-md">
          Your shopping bag is currently empty. Explore our luxury catalog and find your favorite signature scents and apparel.
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
          YOUR SHOPPING BAG
        </p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold">REVIEW YOUR ITEMS</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items List */}
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl border border-[#E5A912]/30 p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6"
            >
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-xl border border-[#E5A912]/30 bg-[#FAF8F5]"
                  onError={(e) => {
                    e.target.src = '/Logo.png';
                  }}
                />
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#E5A912]">
                    {item.category}
                  </span>
                  <h3 className="font-serif font-bold text-xl text-[#5A121A]">
                    {item.name}
                  </h3>
                  <p className="text-sm font-bold text-[#5A121A]">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-6">
                <div className="flex items-center border border-[#E5A912]/40 rounded-xl overflow-hidden bg-[#FAF8F5]">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-3 py-1.5 text-sm font-bold text-[#5A121A] hover:bg-[#E5A912] hover:text-white transition"
                  >
                    -
                  </button>
                  <span className="px-4 py-1.5 text-sm font-bold text-[#5A121A]">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1.5 text-sm font-bold text-[#5A121A] hover:bg-[#E5A912] hover:text-white transition"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-50 text-red-600 border border-red-200 px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-widest hover:bg-red-600 hover:text-white transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary Sidebar */}
        <div className="bg-white rounded-2xl border border-[#E5A912]/30 p-8 shadow-sm h-fit space-y-6">
          <h3 className="font-serif font-bold text-2xl text-[#5A121A] border-b border-gray-100 pb-4">
            Order Summary
          </h3>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-gray-700">
              <span>Subtotal</span>
              <span className="font-bold text-[#5A121A]">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Shipping</span>
              <span className="font-bold text-green-600">FREE</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-[#5A121A] pt-4 border-t border-gray-100">
              <span>Total</span>
              <span className="text-[#E5A912]">${total.toFixed(2)}</span>
            </div>
          </div>

          <Link
            to="/checkout"
            className="w-full text-center block bg-[#E5A912] text-white py-4 rounded-xl text-xs font-extrabold uppercase tracking-widest hover:bg-[#c9920e] transition shadow"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
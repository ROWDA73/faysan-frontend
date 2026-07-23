import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { createOrder } from '../services/orderService'; // <-- Adeegga cusub ee aan dhisnay

function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: 'Mogadishu',
    paymentMethod: 'EVC Plus'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 5.00;
  const total = subtotal + (cart.length > 0 ? shipping : 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert('Your bag is empty!');
      navigate('/shop');
      return;
    }

    setIsSubmitting(true);

    try {
      // Diyaarinta xogta loo dirayo Spring Boot Backend
      const orderPayload = {
        customerName: formData.fullName,
        email: formData.phone + "@faysan.so", // ama ku dar email input haddii aad rabto
        address: `${formData.address}, ${formData.city} (Payment: ${formData.paymentMethod})`,
        totalAmount: total,
        items: cart.map(item => ({
          productName: item.name,
          price: item.price,
          quantity: item.quantity
        }))
      };

      // U diridda backend-ka
      const savedOrder = await createOrder(orderPayload);
      const orderId = 'FSN-' + (savedOrder.id || Math.floor(100000 + Math.random() * 900000));
      
      // Nadiifi gaariga iibsashada
      if (clearCart) clearCart();

      // U gudbi bogga guusha (Order Success screen)
      navigate('/order-success', {
        state: {
          orderId,
          items: cart,
          total,
          shippingInfo: formData
        }
      });
    } catch (error) {
      console.error("Cillad ayaa ka dhacay gudbinta dalabka:", error);
      alert("Waan ka xunnahay, dalabkaaga lama diri karin. Fadlan hubi in backend-kaagu shaqaynayo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="w-full min-h-[70vh] bg-[#FAF8F5] text-[#5A121A] flex flex-col items-center justify-center text-center p-8 space-y-6 font-sans">
        <span className="text-6xl">🛍️</span>
        <h2 className="text-3xl font-serif font-bold">Your Bag is Empty</h2>
        <p className="text-sm text-gray-700 font-semibold max-w-md">
          Add luxury perfumes, abayas, or cosmetics to your bag before proceeding to checkout.
        </p>
        <button
          onClick={() => navigate('/shop')}
          className="bg-[#E5A912] text-white px-8 py-3.5 uppercase tracking-[0.2em] font-extrabold text-xs rounded shadow hover:bg-[#c9920e] transition"
        >
          Explore Shop
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#FAF8F5] text-[#5A121A] min-h-screen font-sans py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Checkout Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl border border-[#E5A912]/30 shadow-sm space-y-6">
          <h2 className="text-2xl font-serif font-bold text-[#5A121A] border-b border-gray-100 pb-4">
            Shipping & Payment Details
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-xs uppercase font-extrabold text-[#5A121A] mb-2 tracking-wider">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Fatima Omar"
                className="w-full bg-[#FAF8F5] border border-[#E5A912]/40 rounded-xl px-4 py-3 text-sm text-[#5A121A] focus:outline-none focus:border-[#5A121A]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase font-extrabold text-[#5A121A] mb-2 tracking-wider">
                Phone Number (Mobile Money)
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +252 61XXXXXXX"
                className="w-full bg-[#FAF8F5] border border-[#E5A912]/40 rounded-xl px-4 py-3 text-sm text-[#5A121A] focus:outline-none focus:border-[#5A121A]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase font-extrabold text-[#5A121A] mb-2 tracking-wider">
                Delivery Address / Neighborhood
              </label>
              <input
                type="text"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                placeholder="e.g. Maka Al-Mukarama, Hodan"
                className="w-full bg-[#FAF8F5] border border-[#E5A912]/40 rounded-xl px-4 py-3 text-sm text-[#5A121A] focus:outline-none focus:border-[#5A121A]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase font-extrabold text-[#5A121A] mb-2 tracking-wider">
                Payment Method
              </label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full bg-[#FAF8F5] border border-[#E5A912]/40 rounded-xl px-4 py-3 text-sm text-[#5A121A] focus:outline-none focus:border-[#5A121A] font-semibold"
              >
                <option value="EVC Plus">EVC Plus (Hormuud)</option>
                <option value="Zaad">ZAAD Service (Telesom)</option>
                <option value="Sahal">Sahal (Golis)</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#5A121A] text-white py-4 rounded-xl text-xs font-extrabold uppercase tracking-widest hover:bg-[#430d13] transition shadow mt-6 disabled:opacity-50"
          >
            {isSubmitting ? 'Processing Order...' : `Complete Order ($${total.toFixed(2)})`}
          </button>
        </form>

        {/* Order Summary Sidebar */}
        <div className="bg-white p-8 rounded-3xl border border-[#E5A912]/30 shadow-sm space-y-6 h-fit">
          <h2 className="text-2xl font-serif font-bold text-[#5A121A] border-b border-gray-100 pb-4">
            Order Summary
          </h2>
          
          <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between gap-4 border-b border-gray-100 pb-4">
                <div className="flex items-center gap-3">
                  <img src={item.imageUrl || item.image} alt={item.name} className="w-14 h-14 object-cover rounded-xl border border-[#E5A912]/30" />
                  <div>
                    <h4 className="font-serif font-bold text-[#5A121A] text-sm">{item.name}</h4>
                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                  </div>
                </div>
                <span className="font-bold text-[#5A121A] text-sm">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="space-y-2 pt-4 border-t border-gray-100 text-sm">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping (Mogadishu)</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-[#5A121A] pt-2 border-t border-gray-200">
              <span>Total</span>
              <span className="text-[#E5A912]">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Checkout;
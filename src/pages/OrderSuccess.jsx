import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function OrderSuccess() {
  const location = useLocation();
  // Get order data passed from checkout state, or fallback to defaults
  const orderData = location.state || {
    orderId: 'FSN-' + Math.floor(100000 + Math.random() * 900000),
    items: [],
    total: 0,
    shippingInfo: { fullName: 'Valued Customer', phone: '', address: 'Mogadishu, Somalia' }
  };

  return (
    <div className="w-full bg-[#FAF8F5] text-[#5A121A] min-h-screen font-sans py-16 px-6">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-[#E5A912]/40 shadow-xl overflow-hidden p-8 md:p-12 space-y-8">
        
        {/* Success Icon & Header */}
        <div className="text-center space-y-3">
          <div className="w-20 h-20 bg-[#5A121A] text-[#E5A912] rounded-full flex items-center justify-center text-3xl mx-auto shadow-md border-2 border-[#E5A912]">
            ✓
          </div>
          <p className="uppercase tracking-[4px] text-[#E5A912] text-xs font-extrabold">
            ORDER PLACED SUCCESSFULLY
          </p>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#5A121A]">
            Thank You For Your Order!
          </h1>
          <p className="text-sm text-gray-600 max-w-md mx-auto">
            Your luxury order has been received and is being prepared with care. We will contact you shortly via phone or WhatsApp to coordinate delivery.
          </p>
        </div>

        {/* Order Reference Box */}
        <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#E5A912]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase font-extrabold text-gray-500 tracking-wider">Order Reference</p>
            <p className="font-mono font-bold text-lg text-[#5A121A]">{orderData.orderId}</p>
          </div>
          <div className="text-right sm:text-right">
            <p className="text-xs uppercase font-extrabold text-gray-500 tracking-wider">Estimated Delivery</p>
            <p className="font-semibold text-sm text-[#5A121A]">24 - 48 Hours</p>
          </div>
        </div>

        {/* Shipping & Payment Summary */}
        <div className="space-y-4 border-t border-b border-gray-100 py-6">
          <h3 className="font-serif font-bold text-lg text-[#5A121A]">Delivery Details</h3>
          <div className="text-sm space-y-1.5 text-gray-700">
            <p><span className="font-bold text-[#5A121A]">Name:</span> {orderData.shippingInfo.fullName}</p>
            <p><span className="font-bold text-[#5A121A]">Phone:</span> {orderData.shippingInfo.phone || 'Provided via mobile money'}</p>
            <p><span className="font-bold text-[#5A121A]">Address:</span> {orderData.shippingInfo.address}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link
            to="/shop"
            className="flex-1 text-center bg-[#5A121A] text-white py-4 rounded-xl text-xs font-extrabold uppercase tracking-widest hover:bg-[#430d13] transition shadow"
          >
            Continue Shopping
          </Link>
          <Link
            to="/"
            className="flex-1 text-center bg-[#FAF8F5] border border-[#5A121A] text-[#5A121A] py-4 rounded-xl text-xs font-extrabold uppercase tracking-widest hover:bg-[#5A121A] hover:text-white transition"
          >
            Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}

export default OrderSuccess;
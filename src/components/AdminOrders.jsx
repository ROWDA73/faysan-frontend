import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/orders')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Lama soo dejin karo xogta dalabaadka');
        }
        return res.json();
      })
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching orders:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-full bg-[#FAF8F5] text-[#5A121A] min-h-screen flex items-center justify-center font-sans">
        <p className="text-xl font-serif animate-pulse">Fadlan sug, dalabaadka waa la soo dejinayaa...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full bg-[#FAF8F5] text-[#5A121A] min-h-screen flex flex-col items-center justify-center font-sans space-y-4">
        <p className="text-xl font-serif text-red-700">Khalad ayaa dhacay: {error}</p>
        <p className="text-sm text-gray-600">Hubi in backend server-ku shaqaynayo.</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#FAF8F5] text-[#5A121A] min-h-screen font-sans pb-24 overflow-x-hidden">
      <div className="w-full bg-[#5A121A] text-white py-12 px-6 text-center space-y-2 border-b border-[#E5A912]/40">
        <p className="uppercase tracking-[6px] text-[#E5A912] text-xs font-extrabold">
          FAYSAN COLLECTION ADMIN
        </p>
        <h1 className="text-3xl md:text-4xl font-serif font-bold">CUSTOMER ORDERS MANAGEMENT</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 space-y-8">
        <Link
          to="/shop"
          className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#5A121A] hover:text-[#E5A912] transition"
        >
          ← Back to Shop
        </Link>

        {orders.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-[#E5A912]/30 shadow-sm space-y-3">
            <p className="text-2xl font-serif text-[#5A121A]">No orders placed yet</p>
            <p className="text-sm text-gray-600">Dalabaadka cusub ee macaamiisha halkan ayay ka soo muuqan doonaan.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div 
                key={order.id}
                className="bg-white p-6 md:p-8 rounded-3xl border border-[#E5A912]/30 shadow-sm space-y-6"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#E5A912]/20 pb-4 gap-4">
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-widest font-extrabold text-[#E5A912]">
                      Order ID: #{order.id}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-[#5A121A]">
                      {order.customerName}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="px-3.5 py-1.5 bg-yellow-50 text-yellow-800 text-xs font-bold uppercase rounded-full border border-yellow-200">
                      {order.status || 'PENDING'}
                    </span>
                    <span className="text-xl font-serif font-bold text-[#5A121A]">
                      ${order.totalPrice?.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-[#FAF8F5] p-4 rounded-2xl border border-[#E5A912]/20">
                  <div className="space-y-1">
                    <p><strong className="text-[#5A121A]">Email:</strong> {order.email}</p>
                    <p><strong className="text-[#5A121A]">Phone:</strong> {order.phone}</p>
                  </div>
                  <div className="space-y-1">
                    <p><strong className="text-[#5A121A]">Delivery Address:</strong> {order.address}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-xs uppercase font-extrabold tracking-wider text-[#5A121A]">
                    Ordered Items:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {order.items?.map((item) => (
                      <div 
                        key={item.id}
                        className="bg-[#FAF8F5] p-4 rounded-xl border border-[#E5A912]/30 flex justify-between items-center text-sm"
                      >
                        <div>
                          <p className="font-bold text-[#5A121A]">{item.productName}</p>
                          <p className="text-xs text-gray-500">Quantity: {item.quantity}</p>
                        </div>
                        <span className="font-bold text-[#5A121A]">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminOrders;
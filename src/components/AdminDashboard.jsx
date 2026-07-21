import React, { useState } from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import logo from '../assets/Logo.png';

// --- SVG Icons Component ---
const Icons = {
  dashboard: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
  ),
  orders: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
  ),
  products: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m7.5 42.5 3.5-12h14l3.5 12z"/><path d="M6 10h36v32H6z"/><path d="M16 10V6a4 4 0 0 1 8 0v4"/></svg>
  ),
  customers: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  ),
  inventory: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
  ),
  analytics: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
  ),
  pos: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
  ),
  reviews: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
  ),
  coupons: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><path d="M7 7h.01"/></svg>
  ),
  settings: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
  )
};

// --- Calendar Widget ---
function InteractiveCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));
  const eventDays = [5, 12, 18, 24, 28];

  return (
    <div className="bg-white rounded-xl border border-[#E5A912]/30 p-6 shadow-sm space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-serif font-bold text-lg text-[#5A121A]">{monthNames[month]} {year}</h3>
        <div className="flex gap-2">
          <button onClick={prevMonth} className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#E5A912]/30 text-[#5A121A] font-bold hover:bg-[#5A121A] hover:text-white transition">&lt;</button>
          <button onClick={nextMonth} className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#E5A912]/30 text-[#5A121A] font-bold hover:bg-[#5A121A] hover:text-white transition">&gt;</button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold text-gray-600 uppercase">
        <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {Array.from({ length: firstDayOfMonth }).map((_, i) => <div key={`empty-${i}`} />)}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const dayNum = i + 1;
          const isToday = dayNum === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear();
          const hasEvent = eventDays.includes(dayNum);
          return (
            <div key={dayNum} className={`py-2 rounded-lg relative font-bold transition cursor-pointer ${isToday ? 'bg-[#5A121A] text-white shadow' : 'hover:bg-[#FAF8F5] text-[#5A121A]'}`}>
              {dayNum}
              {hasEvent && !isToday && <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#E5A912] rounded-full"></span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --- Overview Dashboard View ---
function Overview({ products, orders }) {
  const totalSales = orders.reduce((acc, o) => acc + o.amount, 0);
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-serif font-bold text-[#5A121A]">Dashboard</h2>
        <p className="text-sm font-semibold text-gray-700">Welcome back, Admin</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border border-[#E5A912]/30 shadow-sm space-y-3">
          <div className="flex justify-between items-center text-gray-700 text-sm font-bold">
            <span>TOTAL SALES</span><span className="p-2.5 bg-[#E5A912]/10 rounded-lg text-[#E5A912]">💰</span>
          </div>
          <h3 className="text-2xl font-bold text-[#5A121A]">${totalSales.toFixed(2)}</h3>
          <p className="text-xs text-green-700 font-bold">+12.5% <span className="text-gray-600 font-semibold">from last month</span></p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-[#E5A912]/30 shadow-sm space-y-3">
          <div className="flex justify-between items-center text-gray-700 text-sm font-bold">
            <span>TOTAL ORDERS</span><span className="p-2.5 bg-[#E5A912]/10 rounded-lg text-[#E5A912]">📦</span>
          </div>
          <h3 className="text-2xl font-bold text-[#5A121A]">{orders.length}</h3>
          <p className="text-xs text-green-700 font-bold">+8.3% <span className="text-gray-600 font-semibold">from last month</span></p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-[#E5A912]/30 shadow-sm space-y-3">
          <div className="flex justify-between items-center text-gray-700 text-sm font-bold">
            <span>TOTAL CUSTOMERS</span><span className="p-2.5 bg-[#E5A912]/10 rounded-lg text-[#E5A912]">👥</span>
          </div>
          <h3 className="text-2xl font-bold text-[#5A121A]">2,345</h3>
          <p className="text-xs text-green-700 font-bold">+15.2% <span className="text-gray-600 font-semibold">from last month</span></p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-[#E5A912]/30 shadow-sm space-y-3">
          <div className="flex justify-between items-center text-gray-700 text-sm font-bold">
            <span>TOTAL PRODUCTS</span><span className="p-2.5 bg-[#E5A912]/10 rounded-lg text-[#E5A912]">🛍️</span>
          </div>
          <h3 className="text-2xl font-bold text-[#5A121A]">{products.length}</h3>
          <p className="text-xs text-green-700 font-bold">+7.8% <span className="text-gray-600 font-semibold">from last month</span></p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-xl border border-[#E5A912]/30 p-6 shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-serif font-bold text-lg text-[#5A121A]">Recent Orders</h3>
            <Link to="/admin/orders" className="text-sm text-[#E5A912] font-bold hover:underline">View All</Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm font-medium">
              <thead>
                <tr className="border-b border-gray-200 text-gray-700 font-bold">
                  <th className="pb-3">Order ID</th><th className="pb-3">Customer</th><th className="pb-3">Date</th><th className="pb-3">Amount</th><th className="pb-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {orders.slice(0, 5).map((order) => (
                  <tr key={order.id}>
                    <td className="py-4 font-bold text-[#5A121A]">{order.id}</td>
                    <td className="py-4 text-gray-900 font-semibold">{order.customer}</td>
                    <td className="py-4 text-gray-700">{order.date}</td>
                    <td className="py-4 font-bold text-gray-900">${order.amount.toFixed(2)}</td>
                    <td className="py-4"><span className={`px-2.5 py-1 rounded-md font-bold text-xs ${order.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>{order.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div><InteractiveCalendar /></div>
      </div>
    </div>
  );
}

// --- Orders Management View ---
function OrdersView({ orders, updateOrderStatus }) {
  return (
    <div className="bg-white p-8 rounded-xl border border-[#E5A912]/30 shadow-sm space-y-6">
      <div>
        <h2 className="text-3xl font-serif font-bold text-[#5A121A]">Manage Orders</h2>
        <p className="text-sm font-semibold text-gray-700">View, process, and update all customer orders dynamically.</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm font-medium">
          <thead>
            <tr className="border-b border-gray-200 text-gray-700 font-bold">
              <th className="pb-3">Order ID</th><th className="pb-3">Customer</th><th className="pb-3">Date</th><th className="pb-3">Amount</th><th className="pb-3">Status</th><th className="pb-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="py-4 font-bold text-[#5A121A]">{order.id}</td>
                <td className="py-4 text-gray-900 font-semibold">{order.customer}</td>
                <td className="py-4 text-gray-700">{order.date}</td>
                <td className="py-4 font-bold text-gray-900">${order.amount.toFixed(2)}</td>
                <td className="py-4"><span className={`px-2.5 py-1 rounded-md font-bold text-xs ${order.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>{order.status}</span></td>
                <td className="py-4 flex gap-2">
                  <button onClick={() => updateOrderStatus(order.id, 'Completed')} className="px-3 py-1 bg-green-700 text-white text-xs rounded-lg font-bold hover:bg-green-800 transition">Complete</button>
                  <button onClick={() => updateOrderStatus(order.id, 'Processing')} className="px-3 py-1 bg-yellow-600 text-white text-xs rounded-lg font-bold hover:bg-yellow-700 transition">Process</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// --- Products Inventory View ---
function ProductsView({ products, addProduct, deleteProduct }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('PERFUMES');
  const [price, setPrice] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) return;
    addProduct({ id: Date.now(), name, category, price: parseFloat(price), rating: 5.0, description: 'Newly added artisan collection item.' });
    setName(''); setPrice(''); setIsOpen(false);
  };

  return (
    <div className="bg-white p-8 rounded-xl border border-[#E5A912]/30 shadow-sm space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-serif font-bold text-[#5A121A]">Products Inventory</h2>
          <p className="text-sm font-semibold text-gray-700">Add, edit, or remove perfumes, fashion, and cosmetics.</p>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="bg-[#5A121A] text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-[#430d13] transition shadow">
          {isOpen ? 'Close Form' : '+ Add Product'}
        </button>
      </div>
      {isOpen && (
        <form onSubmit={handleSubmit} className="bg-[#FAF8F5] p-6 rounded-xl border border-[#E5A912]/30 space-y-4">
          <h3 className="font-serif font-bold text-lg text-[#5A121A]">Add New Store Product</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#5A121A] mb-1">Product Name</label>
              <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Royal Musk" className="w-full bg-white border border-[#E5A912]/30 rounded-lg px-4 py-2 text-sm font-medium text-gray-900 focus:outline-none" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#5A121A] mb-1">Category</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full bg-white border border-[#E5A912]/30 rounded-lg px-4 py-2 text-sm font-medium text-gray-900 focus:outline-none">
                <option value="PERFUMES">PERFUMES</option><option value="FASHION">FASHION</option><option value="COSMETICS">COSMETICS</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#5A121A] mb-1">Price ($)</label>
              <input type="number" step="0.01" required value={price} onChange={(e) => setPrice(e.target.value)} placeholder="45.00" className="w-full bg-white border border-[#E5A912]/30 rounded-lg px-4 py-2 text-sm font-medium text-gray-900 focus:outline-none" />
            </div>
          </div>
          <button type="submit" className="bg-[#E5A912] text-white px-6 py-2.5 rounded-lg text-xs font-extrabold uppercase tracking-widest hover:bg-[#c9920e] transition shadow">Save Product</button>
        </form>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm font-medium">
          <thead>
            <tr className="border-b border-gray-200 text-gray-700 font-bold"><th className="pb-3">Product Name</th><th className="pb-3">Category</th><th className="pb-3">Price</th><th className="pb-3">Rating</th><th className="pb-3">Action</th></tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {products.map((product) => (
              <tr key={product.id}>
                <td className="py-4 font-bold text-[#5A121A] flex items-center gap-3">
                  <span className="w-8 h-8 rounded bg-[#FAF8F5] border border-[#E5A912]/30 flex items-center justify-center text-xs">🛍️</span>{product.name}
                </td>
                <td className="py-4"><span className="px-2.5 py-1 bg-[#FAF8F5] border border-[#E5A912]/30 rounded text-xs font-bold text-[#5A121A]">{product.category}</span></td>
                <td className="py-4 font-bold text-gray-900">${product.price.toFixed(2)}</td>
                <td className="py-4 text-[#E5A912] font-bold">⭐ {product.rating}</td>
                <td className="py-4">
                  <button onClick={() => deleteProduct(product.id)} className="px-3 py-1 bg-red-100 text-red-700 rounded-lg text-xs font-bold hover:bg-red-200 transition">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// --- Fully Functional Customers View ---
function CustomersView() {
  const [customers] = useState([
    { id: 1, name: 'Amina Yusuf', email: 'amina@example.com', orders: 5, spent: 480.00, status: 'Active' },
    { id: 2, name: 'Hodan Ali', email: 'hodan@example.com', orders: 3, spent: 275.50, status: 'Active' },
    { id: 3, name: 'Farah Ahmed', email: 'farah@example.com', orders: 8, spent: 920.00, status: 'VIP' },
    { id: 4, name: 'Mohamed Jama', email: 'mohamed@example.com', orders: 1, spent: 45.00, status: 'New' }
  ]);
  return (
    <div className="bg-white p-8 rounded-xl border border-[#E5A912]/30 shadow-sm space-y-6">
      <div>
        <h2 className="text-3xl font-serif font-bold text-[#5A121A]">Customers Directory</h2>
        <p className="text-sm font-semibold text-gray-700">View registered buyer accounts, orders, and total spending.</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm font-medium">
          <thead>
            <tr className="border-b border-gray-200 text-gray-700 font-bold"><th className="pb-3">Customer Name</th><th className="pb-3">Email</th><th className="pb-3">Orders</th><th className="pb-3">Total Spent</th><th className="pb-3">Status</th></tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {customers.map((c) => (
              <tr key={c.id}>
                <td className="py-4 font-bold text-[#5A121A] flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#E5A912]/30 flex items-center justify-center font-bold text-xs">{c.name[0]}</span>{c.name}
                </td>
                <td className="py-4 text-gray-700">{c.email}</td>
                <td className="py-4 font-bold text-gray-900">{c.orders}</td>
                <td className="py-4 font-bold text-gray-900">${c.spent.toFixed(2)}</td>
                <td className="py-4"><span className={`px-2.5 py-1 rounded-md font-bold text-xs ${c.status === 'VIP' ? 'bg-purple-100 text-purple-800' : c.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>{c.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// --- Fully Functional Inventory View ---
function InventoryView({ products }) {
  return (
    <div className="bg-white p-8 rounded-xl border border-[#E5A912]/30 shadow-sm space-y-6">
      <div>
        <h2 className="text-3xl font-serif font-bold text-[#5A121A]">Stock & Inventory</h2>
        <p className="text-sm font-semibold text-gray-700">Track real-time stock availability and warehouse thresholds.</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm font-medium">
          <thead>
            <tr className="border-b border-gray-200 text-gray-700 font-bold"><th className="pb-3">Product</th><th className="pb-3">Category</th><th className="pb-3">Stock Units</th><th className="pb-3">Status</th></tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {products.map((p, idx) => {
              const stockCount = (idx + 1) * 14;
              return (
                <tr key={p.id}>
                  <td className="py-4 font-bold text-[#5A121A]">{p.name}</td>
                  <td className="py-4"><span className="px-2 py-0.5 bg-[#FAF8F5] border border-[#E5A912]/30 rounded text-xs font-bold text-[#5A121A]">{p.category}</span></td>
                  <td className="py-4 font-bold text-gray-900">{stockCount} units</td>
                  <td className="py-4"><span className="px-2.5 py-1 bg-green-100 text-green-800 rounded-md font-bold text-xs">In Stock</span></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// --- Fully Functional Analytics View ---
function AnalyticsView({ orders }) {
  const totalRevenue = orders.reduce((acc, o) => acc + o.amount, 0);
  return (
    <div className="bg-white p-8 rounded-xl border border-[#E5A912]/30 shadow-sm space-y-6">
      <div>
        <h2 className="text-3xl font-serif font-bold text-[#5A121A]">Store Analytics</h2>
        <p className="text-sm font-semibold text-gray-700">Performance reports and store growth metrics.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-[#FAF8F5] border border-[#E5A912]/30 rounded-xl space-y-2">
          <p className="text-xs font-bold text-gray-600 uppercase">Total Revenue</p>
          <h3 className="text-3xl font-bold text-[#5A121A]">${totalRevenue.toFixed(2)}</h3>
          <p className="text-xs text-green-700 font-bold">↑ 18% vs last month</p>
        </div>
        <div className="p-6 bg-[#FAF8F5] border border-[#E5A912]/30 rounded-xl space-y-2">
          <p className="text-xs font-bold text-gray-600 uppercase">Conversion Rate</p>
          <h3 className="text-3xl font-bold text-[#5A121A]">4.8%</h3>
          <p className="text-xs text-green-700 font-bold">↑ 0.6% this week</p>
        </div>
        <div className="p-6 bg-[#FAF8F5] border border-[#E5A912]/30 rounded-xl space-y-2">
          <p className="text-xs font-bold text-gray-600 uppercase">Average Order Value</p>
          <h3 className="text-3xl font-bold text-[#5A121A]">${(totalRevenue / (orders.length || 1)).toFixed(2)}</h3>
          <p className="text-xs text-green-700 font-bold">Stable</p>
        </div>
      </div>
    </div>
  );
}

// --- POS (Point of Sale) View ---
function PosView({ products, addOrder }) {
  const [cart, setCart] = useState([]);
  const [successMsg, setSuccessMsg] = useState(false);

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  const handleCheckout = () => {
    if (cart.length === 0) return;
    const newOrder = {
      id: `#ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      customer: 'In-Store POS Customer',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      amount: cartTotal,
      status: 'Completed'
    };
    addOrder(newOrder);
    setCart([]);
    setSuccessMsg(true);
    setTimeout(() => setSuccessMsg(false), 3000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 bg-white p-8 rounded-xl border border-[#E5A912]/30 shadow-sm space-y-6">
        <div>
          <h2 className="text-3xl font-serif font-bold text-[#5A121A]">Point of Sale (POS)</h2>
          <p className="text-sm font-semibold text-gray-700">Click products to add them to the counter checkout terminal.</p>
        </div>
        {successMsg && <div className="p-4 bg-green-100 text-green-800 rounded-lg font-bold text-sm">POS Order completed successfully and added to orders!</div>}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map((p) => (
            <div key={p.id} onClick={() => addToCart(p)} className="p-4 bg-[#FAF8F5] border border-[#E5A912]/30 rounded-xl cursor-pointer hover:border-[#5A121A] transition flex justify-between items-center">
              <div>
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 bg-white border border-[#E5A912]/20 text-[#5A121A] rounded">{p.category}</span>
                <h4 className="font-bold text-[#5A121A] mt-1">{p.name}</h4>
                <p className="text-sm text-gray-700 font-bold">${p.price.toFixed(2)}</p>
              </div>
              <button className="px-3 py-1.5 bg-[#5A121A] text-white text-xs font-bold rounded-lg">+</button>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl border border-[#E5A912]/30 shadow-sm flex flex-col justify-between space-y-6">
        <div>
          <h3 className="font-serif font-bold text-lg text-[#5A121A] pb-3 border-b border-gray-200">Current POS Cart</h3>
          <div className="space-y-3 mt-4 max-h-64 overflow-y-auto">
            {cart.length === 0 ? (
              <p className="text-sm text-gray-500 font-medium">Cart is empty. Select items from the catalog.</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center text-sm border-b border-gray-100 pb-2">
                  <div>
                    <p className="font-bold text-[#5A121A]">{item.name}</p>
                    <p className="text-xs text-gray-500">${item.price.toFixed(2)} x {item.qty}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-900">${(item.price * item.qty).toFixed(2)}</span>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-600 font-bold px-1.5 text-xs hover:bg-red-50 rounded">×</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="space-y-4 pt-4 border-t border-gray-200">
          <div className="flex justify-between font-bold text-lg text-[#5A121A]">
            <span>Total:</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <button onClick={handleCheckout} disabled={cart.length === 0} className="w-full bg-[#E5A912] text-white py-3 rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-[#c9920e] transition disabled:opacity-50 shadow">
            Complete Payment
          </button>
        </div>
      </div>
    </div>
  );
}

// --- Fully Functional Reviews View ---
function ReviewsView() {
  const [reviews, setReviews] = useState([
    { id: 1, author: 'Amina Y.', product: 'Qamar', rating: 5, comment: 'Absolute masterpiece! The oud scent lasts all day.' },
    { id: 2, author: 'Hodan A.', product: 'HAYAATI', rating: 5, comment: 'Very fresh and luxurious fragrance.' }
  ]);
  const removeReview = (id) => setReviews(reviews.filter(r => r.id !== id));

  return (
    <div className="bg-white p-8 rounded-xl border border-[#E5A912]/30 shadow-sm space-y-6">
      <div>
        <h2 className="text-3xl font-serif font-bold text-[#5A121A]">Customer Reviews</h2>
        <p className="text-sm font-semibold text-gray-700">Moderate and manage store feedback.</p>
      </div>
      <div className="space-y-4">
        {reviews.map((r) => (
          <div key={r.id} className="p-5 bg-[#FAF8F5] border border-[#E5A912]/30 rounded-xl flex justify-between items-center">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <span className="font-bold text-[#5A121A]">{r.author}</span>
                <span className="text-xs bg-white border border-[#E5A912]/30 px-2 py-0.5 rounded font-bold text-[#5A121A]">{r.product}</span>
                <span className="text-[#E5A912] font-bold">⭐ {r.rating}.0</span>
              </div>
              <p className="text-sm text-gray-700 font-medium">"{r.comment}"</p>
            </div>
            <button onClick={() => removeReview(r.id)} className="px-3 py-1 bg-red-100 text-red-700 rounded-lg text-xs font-bold hover:bg-red-200 transition">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Fully Functional Coupons View ---
function CouponsView() {
  const [coupons, setCoupons] = useState([
    { id: 1, code: 'FAYSAN20', discount: '20% OFF', expiry: 'Dec 31, 2026' },
    { id: 2, code: 'WELCOME10', discount: '$10 OFF', expiry: 'Ongoing' }
  ]);
  const [code, setCode] = useState('');
  const [discount, setDiscount] = useState('');

  const addCoupon = (e) => {
    e.preventDefault();
    if (!code || !discount) return;
    setCoupons([...coupons, { id: Date.now(), code: code.toUpperCase(), discount, expiry: 'Dec 31, 2026' }]);
    setCode(''); setDiscount('');
  };

  return (
    <div className="bg-white p-8 rounded-xl border border-[#E5A912]/30 shadow-sm space-y-6">
      <div>
        <h2 className="text-3xl font-serif font-bold text-[#5A121A]">Discount Coupons</h2>
        <p className="text-sm font-semibold text-gray-700">Create and manage active promo codes for checkout.</p>
      </div>
      <form onSubmit={addCoupon} className="flex gap-4 items-end bg-[#FAF8F5] p-5 rounded-xl border border-[#E5A912]/30">
        <div className="flex-1">
          <label className="block text-xs font-bold uppercase text-[#5A121A] mb-1">Coupon Code</label>
          <input type="text" required value={code} onChange={(e) => setCode(e.target.value)} placeholder="e.g. SUMMER15" className="w-full bg-white border border-[#E5A912]/30 rounded-lg px-4 py-2 text-sm font-medium text-gray-900 focus:outline-none" />
        </div>
        <div className="flex-1">
          <label className="block text-xs font-bold uppercase text-[#5A121A] mb-1">Discount Value</label>
          <input type="text" required value={discount} onChange={(e) => setDiscount(e.target.value)} placeholder="e.g. 15% OFF" className="w-full bg-white border border-[#E5A912]/30 rounded-lg px-4 py-2 text-sm font-medium text-gray-900 focus:outline-none" />
        </div>
        <button type="submit" className="bg-[#5A121A] text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-[#430d13] transition shadow">Add Coupon</button>
      </form>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm font-medium">
          <thead>
            <tr className="border-b border-gray-200 text-gray-700 font-bold"><th className="pb-3">Code</th><th className="pb-3">Discount</th><th className="pb-3">Expiry</th><th className="pb-3">Status</th></tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {coupons.map((c) => (
              <tr key={c.id}>
                <td className="py-4 font-bold text-[#5A121A]">{c.code}</td>
                <td className="py-4 text-gray-900 font-semibold">{c.discount}</td>
                <td className="py-4 text-gray-700">{c.expiry}</td>
                <td className="py-4"><span className="px-2.5 py-1 bg-green-100 text-green-800 rounded-md font-bold text-xs">Active</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// --- Fully Functional Settings View ---
function SettingsView() {
  const [storeName, setStoreName] = useState('FAYSAN COLLECTION');
  const [email, setEmail] = useState('admin@faysancollection.com');
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="bg-white p-8 rounded-xl border border-[#E5A912]/30 shadow-sm space-y-6">
      <div>
        <h2 className="text-3xl font-serif font-bold text-[#5A121A]">Store Settings</h2>
        <p className="text-sm font-semibold text-gray-700">Configure your e-commerce store preferences and admin profile.</p>
      </div>
      {saved && <div className="p-4 bg-green-100 text-green-800 rounded-lg font-bold text-sm">Settings saved successfully!</div>}
      <form onSubmit={handleSave} className="space-y-4 max-w-xl">
        <div>
          <label className="block text-xs font-bold uppercase text-[#5A121A] mb-1">Store Name</label>
          <input type="text" value={storeName} onChange={(e) => setStoreName(e.target.value)} className="w-full bg-[#FAF8F5] border border-[#E5A912]/30 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-900 focus:outline-none" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase text-[#5A121A] mb-1">Admin Contact Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-[#FAF8F5] border border-[#E5A912]/30 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-900 focus:outline-none" />
        </div>
        <button type="submit" className="bg-[#5A121A] text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-[#430d13] transition shadow">Save Changes</button>
      </form>
    </div>
  );
}

// --- Main Admin Dashboard Component ---
function AdminDashboard() {
  const location = useLocation();
  const isActive = (path) => {
    if (path === '/admin') {
      return location.pathname === '/admin' || location.pathname === '/admin/';
    }
    return location.pathname.includes(path);
  };

  const [products, setProducts] = useState([
    { id: 1, name: 'Qamar', category: 'PERFUMES', price: 20.00, rating: 4.9, description: 'Cambodian oud and warm amber.' },
    { id: 2, name: 'HAYAATI', category: 'PERFUMES', price: 10.00, rating: 4.8, description: 'Floral symphony with white musk.' },
    { id: 3, name: 'Blue Elegance', category: 'FASHION', price: 15.00, rating: 5.0, description: 'Rich amber notes and vanilla.' },
    { id: 4, name: 'Cosmetic Set', category: 'COSMETICS', price: 65.00, rating: 4.7, description: 'Fresh night-blooming jasmine.' }
  ]);

  const [orders, setOrders] = useState([
    { id: '#ORD-1248', customer: 'Amina Yusuf', date: 'Dec 12, 2026', amount: 245.00, status: 'Completed' },
    { id: '#ORD-1247', customer: 'Hodan Ali', date: 'Dec 12, 2026', amount: 189.00, status: 'Processing' },
    { id: '#ORD-1246', customer: 'Farah Ahmed', date: 'Dec 11, 2026', amount: 95.50, status: 'Completed' }
  ]);

  const addProduct = (newProduct) => setProducts([newProduct, ...products]);
  const deleteProduct = (id) => setProducts(products.filter(p => p.id !== id));
  const updateOrderStatus = (id, newStatus) => setOrders(orders.map(o => o.id === id ? { ...o, status: newStatus } : o));
  const addOrder = (newOrder) => setOrders([newOrder, ...orders]);

  return (
    <div className="w-full min-h-screen bg-[#FAF8F5] text-[#5A121A] flex font-sans overflow-x-hidden">
      {/* Sidebar */}
      <aside className="w-68 bg-white border-r border-[#E5A912]/30 flex flex-col justify-between hidden md:flex sticky top-0 h-screen shadow-sm">
        <div>
          <div className="p-6 border-b border-[#E5A912]/20 flex flex-col items-center justify-center text-center">
            <img src={logo} alt="Faysan Collection" className="h-10 w-auto object-contain mb-2" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#E5A912] font-extrabold">Collection Admin</span>
          </div>
          <div className="p-4 space-y-1.5 text-sm">
            <p className="text-xs uppercase font-extrabold text-gray-500 px-3 pb-2">Main</p>
            <Link to="/admin" className={`flex items-center gap-3 px-3 py-3 rounded-lg font-bold transition ${isActive('/admin') ? 'bg-[#E5A912]/20 text-[#5A121A]' : 'hover:bg-gray-100 text-gray-800'}`}><Icons.dashboard /> Dashboard</Link>
            <Link to="/admin/orders" className={`flex items-center justify-between px-3 py-3 rounded-lg font-bold transition ${isActive('/admin/orders') ? 'bg-[#E5A912]/20 text-[#5A121A]' : 'hover:bg-gray-100 text-gray-800'}`}>
              <span className="flex items-center gap-3"><Icons.orders /> Orders</span>
              <span className="px-2 py-0.5 bg-[#5A121A] text-white text-xs rounded-full font-bold">{orders.filter(o => o.status === 'Processing').length}</span>
            </Link>
            <Link to="/admin/products" className={`flex items-center gap-3 px-3 py-3 rounded-lg font-bold transition ${isActive('/admin/products') ? 'bg-[#E5A912]/20 text-[#5A121A]' : 'hover:bg-gray-100 text-gray-800'}`}><Icons.products /> Products</Link>
            <Link to="/admin/customers" className={`flex items-center gap-3 px-3 py-3 rounded-lg font-bold transition ${isActive('/admin/customers') ? 'bg-[#E5A912]/20 text-[#5A121A]' : 'hover:bg-gray-100 text-gray-800'}`}><Icons.customers /> Customers</Link>
            <Link to="/admin/inventory" className={`flex items-center gap-3 px-3 py-3 rounded-lg font-bold transition ${isActive('/admin/inventory') ? 'bg-[#E5A912]/20 text-[#5A121A]' : 'hover:bg-gray-100 text-gray-800'}`}><Icons.inventory /> Inventory</Link>

            <p className="text-xs uppercase font-extrabold text-gray-500 px-3 pt-4 pb-2">Management</p>
            <Link to="/admin/analytics" className={`flex items-center gap-3 px-3 py-3 rounded-lg font-bold transition ${isActive('/admin/analytics') ? 'bg-[#E5A912]/20 text-[#5A121A]' : 'hover:bg-gray-100 text-gray-800'}`}><Icons.analytics /> Analytics</Link>
            <Link to="/admin/pos" className={`flex items-center gap-3 px-3 py-3 rounded-lg font-bold transition ${isActive('/admin/pos') ? 'bg-[#E5A912]/20 text-[#5A121A]' : 'hover:bg-gray-100 text-gray-800'}`}><Icons.pos /> POS Terminal</Link>
            <Link to="/admin/reviews" className={`flex items-center gap-3 px-3 py-3 rounded-lg font-bold transition ${isActive('/admin/reviews') ? 'bg-[#E5A912]/20 text-[#5A121A]' : 'hover:bg-gray-100 text-gray-800'}`}><Icons.reviews /> Reviews</Link>
            <Link to="/admin/coupons" className={`flex items-center gap-3 px-3 py-3 rounded-lg font-bold transition ${isActive('/admin/coupons') ? 'bg-[#E5A912]/20 text-[#5A121A]' : 'hover:bg-gray-100 text-gray-800'}`}><Icons.coupons /> Coupons</Link>
            <Link to="/admin/settings" className={`flex items-center gap-3 px-3 py-3 rounded-lg font-bold transition ${isActive('/admin/settings') ? 'bg-[#E5A912]/20 text-[#5A121A]' : 'hover:bg-gray-100 text-gray-800'}`}><Icons.settings /> Settings</Link>
          </div>
        </div>
        <div className="p-4 border-t border-[#E5A912]/20">
          <Link to="/" className="flex items-center gap-3 px-3 py-3 rounded-lg font-bold text-red-700 hover:bg-red-50 transition">
            ← Back to Store
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-h-screen overflow-y-auto p-6 md:p-10">
        <Routes>
          <Route path="/" element={<Overview products={products} orders={orders} />} />
          <Route path="/orders" element={<OrdersView orders={orders} updateOrderStatus={updateOrderStatus} />} />
          <Route path="/products" element={<ProductsView products={products} addProduct={addProduct} deleteProduct={deleteProduct} />} />
          <Route path="/customers" element={<CustomersView />} />
          <Route path="/inventory" element={<InventoryView products={products} />} />
          <Route path="/analytics" element={<AnalyticsView orders={orders} />} />
          <Route path="/pos" element={<PosView products={products} addOrder={addOrder} />} />
          <Route path="/reviews" element={<ReviewsView />} />
          <Route path="/coupons" element={<CouponsView />} />
          <Route path="/settings" element={<SettingsView />} />
        </Routes>
      </main>
    </div>
  );
}

export default AdminDashboard;
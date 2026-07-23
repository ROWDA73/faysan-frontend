import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AdminAddProduct() {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    price: '',
    rating: 5.0,
    stock: 10,
    description: '',
    imageUrl: ''
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    fetch('http://localhost:8080/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...product,
        price: parseFloat(product.price),
        rating: parseFloat(product.rating),
        stock: parseInt(product.stock)
      })
    })
      .then((res) => {
        if (!res.ok) throw new Error('Lama kaydin karo badeecadda');
        return res.json();
      })
      .then(() => {
        setSuccess(true);
        setProduct({ name: '', category: '', price: '', rating: 5.0, stock: 10, description: '', imageUrl: '' });
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="w-full bg-[#FAF8F5] text-[#5A121A] min-h-screen font-sans pb-24">
      <div className="w-full bg-[#5A121A] text-white py-12 px-6 text-center space-y-2 border-b border-[#E5A912]/40">
        <p className="uppercase tracking-[6px] text-[#E5A912] text-xs font-extrabold">FAYSAN COLLECTION</p>
        <h1 className="text-3xl font-serif font-bold">ADD NEW PRODUCT</h1>
      </div>

      <div className="max-w-2xl mx-auto px-6 pt-12">
        <Link to="/shop" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#5A121A] hover:text-[#E5A912] mb-8">
          ← Back to Shop
        </Link>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl border border-[#E5A912]/30 shadow-sm space-y-6">
          {success && <div className="p-4 bg-green-50 text-green-800 rounded-xl text-sm font-semibold text-center">Badeecadda si guul leh ayaa loo daray!</div>}
          {error && <div className="p-4 bg-red-50 text-red-800 rounded-xl text-sm font-semibold text-center">{error}</div>}

          <div className="space-y-2">
            <label className="block text-xs uppercase font-extrabold tracking-wider">Product Name</label>
            <input type="text" name="name" required value={product.name} onChange={handleChange} className="w-full bg-[#FAF8F5] border border-[#E5A912]/40 rounded-xl px-4 py-3 text-sm focus:outline-none" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-xs uppercase font-extrabold tracking-wider">Category</label>
              <input type="text" name="category" required value={product.category} onChange={handleChange} className="w-full bg-[#FAF8F5] border border-[#E5A912]/40 rounded-xl px-4 py-3 text-sm focus:outline-none" />
            </div>
            <div className="space-y-2">
              <label className="block text-xs uppercase font-extrabold tracking-wider">Price ($)</label>
              <input type="number" step="0.01" name="price" required value={product.price} onChange={handleChange} className="w-full bg-[#FAF8F5] border border-[#E5A912]/40 rounded-xl px-4 py-3 text-sm focus:outline-none" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-xs uppercase font-extrabold tracking-wider">Image URL</label>
            <input type="text" name="imageUrl" value={product.imageUrl} onChange={handleChange} placeholder="/Qamar.jpeg ama URL" className="w-full bg-[#FAF8F5] border border-[#E5A912]/40 rounded-xl px-4 py-3 text-sm focus:outline-none" />
          </div>

          <div className="space-y-2">
            <label className="block text-xs uppercase font-extrabold tracking-wider">Description</label>
            <textarea name="description" rows="3" value={product.description} onChange={handleChange} className="w-full bg-[#FAF8F5] border border-[#E5A912]/40 rounded-xl px-4 py-3 text-sm focus:outline-none" />
          </div>

          <button type="submit" className="w-full bg-[#E5A912] text-white py-4 rounded-xl text-sm font-extrabold uppercase tracking-widest hover:bg-[#c9920e] transition shadow-md">
            Save Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminAddProduct;
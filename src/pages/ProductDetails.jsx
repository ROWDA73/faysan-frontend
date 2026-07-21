import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

// Liiska saxda ah ee badeecadahaaga (Waa inuu la mid yahay kan Shop.jsx)
const productsData = [
  { id: 1, name: 'Qamar', category: 'PERFUMES', price: 20.00, rating: 4.9, image: '/Qamar.jpeg', description: 'A majestic blend of pure Cambodian oud and warm amber spices.', topNotes: 'Bergamot, Saffron', heartNotes: 'Cambodian Oud, Rose', baseNotes: 'Amber, Musk' },
  { id: 2, name: 'HAYAATI', category: 'PERFUMES', price: 10.00, rating: 4.8, image: '/Xayaati.jpeg', description: 'An elegant floral symphony wrapped in soft white musk.', topNotes: 'Pink Pepper, Mandarin', heartNotes: 'Jasmine, Tuberose', baseNotes: 'White Musk, Vanilla' },
  { id: 3, name: 'Blue Elegance', category: 'FASHION', price: 15.00, rating: 5.0, image: '/cabayah4.jpeg', description: 'Rich amber notes combined with golden vanilla and smoky woods.', topNotes: 'Cardamom, Lavender', heartNotes: 'Cedarwood, Patchouli', baseNotes: 'Amber, Vanilla' },
  { id: 4, name: 'Cosmetic Set', category: 'COSMETICS', price: 65.00, rating: 4.7, image: '/cosmatics.jpeg', description: 'Fresh night-blooming jasmine infused with sweet citrus accords.', topNotes: 'Citrus, Green Apple', heartNotes: 'Jasmine, Peony', baseNotes: 'Soft Woods' },
  { id: 5, name: 'Royal Oud Intense', category: 'PERFUMES', price: 120.00, rating: 4.9, image: '/9pm1.jpeg', description: 'A powerful masculine fragrance with leather, cedarwood, and spice.', topNotes: 'Spices, Cinnamon', heartNotes: 'Leather, Tobacco', baseNotes: 'Oud, Cedar' },
  { id: 6, name: 'Golden Silk Abaya', category: 'FASHION', price: 150.00, rating: 5.0, image: '/cabayah2.jpeg', description: 'Our signature luxury creation featuring rare floral oils and aged oud.', topNotes: 'Fruity Accords', heartNotes: 'Damask Rose', baseNotes: 'Aged Oud, Amber' }
];

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  // Raadi badeecada saxda ah adigoo isticmaalaya ID-ga URL-ka ku jira
  const product = productsData.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="w-full min-h-[70vh] bg-[#FAF8F5] text-[#5A121A] flex flex-col items-center justify-center text-center p-8 space-y-6">
        <h2 className="text-3xl font-serif font-bold">Product Not Found</h2>
        <p className="text-sm text-gray-700 font-semibold max-w-md">
          Badeecadan lama helin ama waa la tirtiray.
        </p>
        <Link
          to="/shop"
          className="bg-[#5A121A] text-white px-8 py-3.5 uppercase tracking-[0.2em] font-extrabold text-xs rounded shadow hover:bg-[#430d13] transition inline-block"
        >
          Ku noqo dukaanka
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="w-full bg-[#FAF8F5] text-[#5A121A] min-h-screen font-sans pb-24">
      {/* Navigation Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Link to="/shop" className="text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-[#5A121A] transition">
          ← Back to Shop
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Product Image */}
        <div className="bg-white p-6 rounded-2xl border border-[#E5A912]/30 shadow-sm flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-[450px] object-cover rounded-xl border border-gray-100 bg-[#FAF8F5]"
          />
        </div>

        {/* Product Information */}
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#E5A912]">
                {product.category}
              </span>
              <span className="text-sm font-bold text-[#E5A912] bg-white px-3 py-1 rounded-full border border-[#E5A912]/30 shadow-sm">
                ⭐ {product.rating}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#5A121A] mt-2">
              {product.name}
            </h1>
            <p className="text-2xl font-bold text-[#5A121A] mt-2">
              ${product.price.toFixed(2)}
            </p>
          </div>

          <p className="text-sm text-gray-700 leading-relaxed font-semibold">
            {product.description}
          </p>

          {/* Fragrance Profile Specs */}
          {product.topNotes && (
            <div className="bg-white p-5 rounded-xl border border-[#E5A912]/20 space-y-2 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#5A121A]">Fragrance Profile</h4>
              <p className="text-xs text-gray-700"><strong>Top Notes:</strong> {product.topNotes}</p>
              <p className="text-xs text-gray-700"><strong>Heart Notes:</strong> {product.heartNotes}</p>
              <p className="text-xs text-gray-700"><strong>Base Notes:</strong> {product.baseNotes}</p>
            </div>
          )}

          {/* Quantity and Add to Cart */}
          <div className="space-y-4 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-700">Quantity</span>
              <div className="flex items-center border border-[#E5A912]/40 rounded-lg bg-white">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-sm font-bold text-[#5A121A] hover:bg-gray-100 transition rounded-l-lg"
                >
                  -
                </button>
                <span className="px-4 text-sm font-bold text-[#5A121A]">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-sm font-bold text-[#5A121A] hover:bg-gray-100 transition rounded-r-lg"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className={`w-full py-4 uppercase tracking-[0.2em] font-extrabold text-xs rounded shadow-lg transition duration-300 ${added ? 'bg-green-700 text-white' : 'bg-[#E5A912] text-white hover:bg-[#c9920e]'}`}
            >
              {added ? '✓ Added to Cart!' : `Add to Cart - $${(product.price * quantity).toFixed(2)}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
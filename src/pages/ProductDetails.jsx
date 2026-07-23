import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Soo jiidashada hal badeecad oo gaar ah adoo isticmaalaya ID-ga uu URL-ku keenayo
  useEffect(() => {
    fetch(`http://localhost:8080/api/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Lama heli karo faahfaahinta badeecaddan');
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching product details:', err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="w-full bg-[#FAF8F5] text-[#5A121A] min-h-screen flex items-center justify-center font-sans">
        <p className="text-xl font-serif animate-pulse">Fadlan sug, faahfaahinta badeecadda waa la soo dejinayaa...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="w-full bg-[#FAF8F5] text-[#5A121A] min-h-screen flex flex-col items-center justify-center font-sans space-y-4">
        <h2 className="text-3xl font-serif font-bold">Product Not Found</h2>
        <p className="text-sm text-gray-600">{error || 'Badeecadda aad raadineyso lama helin ama waa la tirtiray.'}</p>
        <Link
          to="/shop"
          className="bg-[#5A121A] text-white px-6 py-3 rounded-xl text-xs font-extrabold uppercase tracking-widest hover:bg-[#E5A912] transition"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="w-full bg-[#FAF8F5] text-[#5A121A] min-h-screen font-sans pb-24 overflow-x-hidden">
      {/* Header Banner */}
      <div className="w-full bg-[#5A121A] text-white py-12 px-6 text-center space-y-2 border-b border-[#E5A912]/40">
        <p className="uppercase tracking-[6px] text-[#E5A912] text-xs font-extrabold">
          FAYSAN COLLECTION
        </p>
        <h1 className="text-3xl md:text-4xl font-serif font-bold">PRODUCT DETAILS</h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-12">
        <Link
          to="/shop"
          className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#5A121A] hover:text-[#E5A912] mb-8 transition"
        >
          ← Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-3xl border border-[#E5A912]/30 shadow-sm">
          {/* Product Image */}
          <div className="relative overflow-hidden h-[450px] md:h-[520px] rounded-2xl bg-[#F4EFEA] border border-[#E5A912]/20">
            <img
              src={product.imageUrl || '/Qamar.jpeg'}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => toggleWishlist(product)}
              className="absolute top-4 right-4 bg-white/90 p-3 rounded-full shadow border border-[#E5A912]/30 hover:scale-110 transition text-red-600"
              title="Save to Wishlist"
            >
              {isInWishlist(product.id) ? '❤️' : '🤍'}
            </button>
            <span className="absolute top-4 left-4 bg-[#FAF8F5]/90 text-[#5A121A] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded border border-[#E5A912]/30">
              {product.category || 'PERFUMES'}
            </span>
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[#E5A912] font-bold text-sm">⭐ {product.rating || 4.9} Rating</span>
                <span className="text-2xl font-serif font-bold text-[#5A121A]">${Number(product.price).toFixed(2)}</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A121A]">
                {product.name}
              </h2>

              <p className="text-gray-700 leading-relaxed text-base">
                {product.description}
              </p>

              <div className="border-t border-[#E5A912]/20 pt-4 space-y-2 text-sm text-gray-600">
                <p><strong className="text-[#5A121A]">Stock:</strong> {product.stock !== undefined ? product.stock : '10'} units available</p>
                <p><strong className="text-[#5A121A]">Category:</strong> {product.category || 'PERFUMES'}</p>
              </div>
            </div>

            <div className="space-y-6 pt-6 border-t border-[#E5A912]/20">
              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="text-xs uppercase font-extrabold tracking-wider text-[#5A121A]">Quantity:</span>
                <div className="flex items-center border border-[#E5A912]/40 rounded-xl overflow-hidden bg-[#FAF8F5]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-[#5A121A] hover:bg-[#E5A912] hover:text-white transition font-bold"
                  >
                    -
                  </button>
                  <span className="px-6 py-2 text-sm font-bold text-[#5A121A]">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-[#5A121A] hover:bg-[#E5A912] hover:text-white transition font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Bag Button */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-[#E5A912] text-white py-4 rounded-xl text-sm font-extrabold uppercase tracking-widest hover:bg-[#c9920e] transition shadow-md"
              >
                Add {quantity} to Bag - ${(product.price * quantity).toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
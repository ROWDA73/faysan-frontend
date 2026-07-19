import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <div className="p-10 text-center">Badeecaddan lama helin!</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-10">
      <div className="mb-8">
        <Link to="/products" className="text-sm text-[#C5A059] hover:underline">
          ← Back to products
        </Link>
      </div>

      <div className="grid gap-10 md:grid-cols-2 items-start">
        <div>
          <img src={product.image} alt={product.name} className="w-full rounded-3xl shadow-xl" />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{product.name}</h1>
          <p className="text-3xl font-semibold text-[#C5A059] mb-6">${product.price}</p>
          <p className="text-gray-700 dark:text-gray-300 mb-8">{product.description}</p>

          <button
            onClick={() => addToCart(product)}
            className="bg-[#C5A059] text-white px-8 py-3 rounded-full hover:bg-[#b19149] transition"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

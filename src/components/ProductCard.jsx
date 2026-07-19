import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-3xl overflow-hidden shadow-sm transition hover:shadow-lg bg-white dark:bg-[#1a1a1a]">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
      </Link>

      <div className="p-5">
        <Link to={`/product/${product.id}`} className="block mb-3">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {product.name}
          </h2>
        </Link>

        <p className="text-gray-500 mb-4 dark:text-gray-400">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            ${product.price}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="px-4 py-2 rounded-full bg-[#C5A059] text-sm text-white hover:bg-[#b19149] transition"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

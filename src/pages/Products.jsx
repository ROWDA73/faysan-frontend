import React from 'react';
import { products } from '../data';
import ProductCard from '../components/ProductCard';

const Products = () => {
  return (
    <div className="container mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Faysan Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;

import React from 'react';
import { products } from '../data'; // Waxaan soo dhoofinay xogtii
import ProductCard from '../components/ProductCard'; // Hubi in file-kani jiro

const Products = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Faysan Collection</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Halkan ayaan kaga dhex abuurnay loop xogta */}
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
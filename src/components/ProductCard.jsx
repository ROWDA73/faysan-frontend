import React from 'react';
// 1. Hubi in path-ku uu sax yahay (haddii data.js ay ku jirto src/data.js)
import { products } from '../data'; 
// 2. Hubi in ProductCard uu ku jiro components/ProductCard
import ProductCard from '../components/ProductCard'; 

const Products = () => {
  return (
    <div className="container mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Faysan Collection</h1>
      
      {/* 3. Halkan waa meesha "magic-gu" ka dhacayo */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <ProductCard 
            key={item.id} 
            product={item} 
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
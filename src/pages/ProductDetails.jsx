import React from 'react';
import { useParams } from 'react-router-dom';

// Waxaad halkan soo dhoofinaysaa liiska badeecadahaaga (tusaale: import products from '../data/products')
// Haddii aadan meel kale ku haysan, waxaad samayn kartaa array fudud halkan:
const products = [
  { id: "1", name: "Oud Supreme", price: 120, description: "Ud tayo sare leh oo soo jiidasho leh.", image: "/path-to-image.jpg" },
  { id: "2", name: "Silk Evening Gown", price: 180, description: "Dharka fiidkii oo aad u qurux badan.", image: "/path-to-image.jpg" },
  // ... iwm
];

const ProductDetails = () => {
  const { id } = useParams(); // Waxaan ka helaynaa ID-ga URL-ka

  // Waxaan raadinaynaa badeecadda uu ID-geedu la mid yahay kan URL-ka
  const product = products.find((p) => p.id === id);

  // Haddii aan badeecad la helin
  if (!product) {
    return <div className="p-10 text-center">Badeecaddan lama helin!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-10 flex flex-col md:flex-row gap-10">
      {/* Sawirka Badeecadda */}
      <div className="md:w-1/2">
        <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-lg" />
      </div>

      {/* Faahfaahinta */}
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <p className="text-2xl text-gray-700 mb-6">${product.price}</p>
        <p className="text-gray-600 mb-6">{product.description}</p>
        
        <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
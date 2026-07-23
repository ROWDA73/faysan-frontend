import { useState, useEffect } from 'react';
import axios from 'axios';

// Xogta tusaalaha ah haddii server-ku shaqayn waayo (Fallback)
const fallbackProducts = [
  {
    id: 1,
    name: "Afnan 9 PM Luxury Perfume",
    category: "PERFUMES",
    price: 45.00,
    rating: 4.9,
    description: "Luxury fragrance that defines elegance and confidence.",
    imageUrl: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Royal Blue Designer Abaya",
    category: "FASHION",
    price: 120.00,
    rating: 4.8,
    description: "Elegant styles handcrafted for every special occasion.",
    imageUrl: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Centella Glow Skincare Set",
    category: "COSMETICS",
    price: 65.00,
    rating: 5.0,
    description: "Premium beauty essentials for a timeless, natural glow.",
    imageUrl: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"
  }
];

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/products')
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setProducts(response.data);
        } else {
          setProducts(fallbackProducts);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.warn('Backend ma shaqeynayo, waxaa la isticmaalayaa xogta tusaalaha ah.');
        setError(err);
        setProducts(fallbackProducts);
        setLoading(false);
      });
  }, []);

  return { products, loading, error };
};
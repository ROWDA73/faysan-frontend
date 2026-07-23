import React, { createContext, useState } from 'react';

export const ShopContext = createContext();

// Liiska alaabta raaxada leh ee Faysan Collection
const fallbackProducts = [
  {
    id: 1,
    name: "Afnan 9 PM Luxury Perfume",
    category: "Perfumes",
    price: 45.00,
    description: "Luxury fragrance that defines elegance and confidence.",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Royal Blue Designer Abaya",
    category: "Fashion",
    price: 120.00,
    description: "Elegant styles handcrafted for every special occasion.",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Centella Glow Skincare Set",
    category: "Cosmetics",
    price: 65.00,
    description: "Premium beauty essentials for a timeless, natural glow.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Oud Wood Intensive Fragrance",
    category: "Perfumes",
    price: 85.00,
    description: "Deep, rich oriental notes for an unforgettable presence.",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    name: "Golden Embroidered Maxi Dress",
    category: "Fashion",
    price: 145.00,
    description: "Sophisticated modern fashion with a touch of royal luxury.",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Rose Gold Luxury Serum",
    category: "Cosmetics",
    price: 50.00,
    description: "Revitalizing face serum designed for radiant skin.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80"
  }
];

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState(fallbackProducts);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <ShopContext.Provider value={{ products, cart, addToCart, removeFromCart, loading }}>
      {children}
    </ShopContext.Provider>
  );
};
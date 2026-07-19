// src/context/CartContext.jsx
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Shaqadan waxay alaabta ku dartaa Cart-ka
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    alert(`${product.name} ayaa lagu daray Cart-ka!`);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
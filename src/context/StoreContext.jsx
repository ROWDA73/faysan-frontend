import React, { createContext, useState, useContext } from 'react';

const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [products, setProducts] = useState([
    { id: 1, name: 'Qamar', category: 'PERFUMES', price: 20.00, rating: 4.9, description: 'Cambodian oud and warm amber.' },
    { id: 2, name: 'HAYAATI', category: 'PERFUMES', price: 10.00, rating: 4.8, description: 'Floral symphony with white musk.' },
    { id: 3, name: 'Blue Elegance', category: 'FASHION', price: 15.00, rating: 5.0, description: 'Rich amber notes and vanilla.' },
    { id: 4, name: 'Cosmetic Set', category: 'COSMETICS', price: 65.00, rating: 4.7, description: 'Fresh night-blooming jasmine.' }
  ]);

  const [orders, setOrders] = useState([
    { id: '#ORD-1248', customer: 'Amina Yusuf', date: 'Dec 12, 2026', amount: 245.00, status: 'Completed' },
    { id: '#ORD-1247', customer: 'Hodan Ali', date: 'Dec 12, 2026', amount: 189.00, status: 'Processing' },
    { id: '#ORD-1246', customer: 'Farah Ahmed', date: 'Dec 11, 2026', amount: 95.50, status: 'Completed' }
  ]);

  const addProduct = (newProduct) => {
    setProducts((prev) => [newProduct, ...prev]);
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter(p => p.id !== id));
  };

  const updateOrderStatus = (id, newStatus) => {
    setOrders((prev) => prev.map(o => o.id === id ? { ...o, status: newStatus } : o));
  };

  const addOrder = (newOrder) => {
    setOrders((prev) => [newOrder, ...prev]);
  };

  return (
    <StoreContext.Provider value={{ products, orders, addProduct, deleteProduct, updateOrderStatus, addOrder }}>
      {children}
    </StoreContext.Provider>
  );
}

export const useStore = () => useContext(StoreContext);
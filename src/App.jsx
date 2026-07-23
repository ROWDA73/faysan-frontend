import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { StoreProvider } from './context/StoreContext';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wishlist from './components/Wishlist';
import AdminDashboard from './components/AdminDashboard';
import AdminOrders from './components/AdminOrders';
import Auth from './components/Auth';

import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <StoreProvider>
      <CartProvider>
        <WishlistProvider>
          <Router>
            <Routes>
              {/* Admin Dashboard Route */}
              <Route path="/admin/*" element={<AdminDashboard />} />
              <Route path="/admin/orders" element={<AdminOrders />} />
              
              {/* Auth Route */}
              <Route path="/auth" element={<Auth />} />

              {/* Main Storefront Routes */}
              <Route path="/*" element={
                <div className="flex flex-col min-h-screen bg-[#FAF8F5]">
                  <Navbar />
                  <main className="flex-grow">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/shop" element={<Shop />} />
                      <Route path="/product/:id" element={<ProductDetails />} />
                      <Route path="/cart" element={<Cart />} />
                      <Route path="/checkout" element={<Checkout />} />
                      <Route path="/order-success" element={<OrderSuccess />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/contact" element={<Contact />} />
                    </Routes>
                  </main>
                  <Wishlist />
                  <Footer />
                </div>
              } />
            </Routes>
          </Router>
        </WishlistProvider>
      </CartProvider>
    </StoreProvider>
  );
}

export default App;
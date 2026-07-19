import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Waxaan soo dhoofinay CartProvider-ka aan samaynay
import { CartProvider } from './context/CartContext'; 

// Import-yada kale
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    // Halkan ayaan ku duubnay (wrap) Router-ka gudaha CartProvider
    <CartProvider>
      <Router>
        {/* Layout-kan wuxuu Footer-ka ku qasbayaa inuu mar walba xagga hoose joogo */}
        <div className="flex flex-col min-h-screen">
          <Navbar />
          
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              {/* Route-kan waa kan uu ku shaqaynayo ProductDetails */}
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
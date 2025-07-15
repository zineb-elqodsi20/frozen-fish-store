import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaFish } from 'react-icons/fa';

import MarcineFishNavbar from './components/MarcineFishNavbar';
import ImageSlider from './components/ImageSlider';
import ProductCards from './components/ProductSection';
import AboutUs from './components/AboutUs';
import ProductsPage from './components/ProductsPage';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Testimonials from './components/Testimonials';
import CartSidebar from './components/CartSidebar';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/Register';
import ToastNotification from './components/ToastNotification';

function getCartFromStorage() {
  try {
    return JSON.parse(localStorage.getItem('cart')) || [];
  } catch {
    return [];
  }
}

function saveCartToStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showCartSidebar, setShowCartSidebar] = useState(false);
  const [toast, setToast] = useState(null);
  const [cartProducts, setCartProducts] = useState(getCartFromStorage());

  const updateCart = useCallback(() => {
    const cart = getCartFromStorage();
    setCartProducts(cart);
    setCartCount(cart.reduce((sum, item) => sum + item.qty, 0));
  }, []);

  useEffect(() => {
    updateCart();
  }, [updateCart]);

  const addToCart = (product) => {
    let cart = getCartFromStorage();
    const idx = cart.findIndex(item => item.id === product.id);
    if (idx > -1) {
      cart[idx].qty += 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }
    saveCartToStorage(cart);
    updateCart();
    setToast({ 
      message: `${product.name} added to cart!`, 
      icon: 'check',
      fish: true
    });
    setTimeout(() => setToast(null), 1800);
  };

  const removeFromCart = (id) => {
    let cart = getCartFromStorage();
    cart = cart.filter(item => item.id !== id);
    saveCartToStorage(cart);
    updateCart();
  };

  const addToWishlist = () => setWishlistCount(w => w + 1);
  
  // Définition des fonctions pour gérer les modales
  const openLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const openRegister = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const closeModals = () => { 
    setShowLogin(false); 
    setShowRegister(false);
  };

  const openCartSidebar = () => setShowCartSidebar(true);
  const closeCartSidebar = () => setShowCartSidebar(false);
  const cartTotal = cartProducts.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <Router>
      <div className="App beach-theme">
        {toast && <ToastNotification toast={toast} />}

        <MarcineFishNavbar 
          cartCount={cartCount}
          wishlistCount={wishlistCount}
          onLoginClick={openLogin}
          onRegisterClick={openRegister}
          onCartClick={openCartSidebar}
        />

        <main className="relative">
          {/* Animated fish decorations */}
          <div className="fixed top-20 left-10 z-0 opacity-30 animate-float">
            <FaFish className="text-blue-400 text-4xl rotate-45" />
          </div>
          <div className="fixed bottom-40 right-20 z-0 opacity-40 animate-float delay-1000">
            <FaFish className="text-sand-500 text-5xl -rotate-15" />
          </div>
          <div className="fixed top-1/3 right-1/4 z-0 opacity-25 animate-float delay-1500">
            <FaFish className="text-teal-300 text-3xl rotate-12" />
          </div>

          <Routes>
            <Route path="/" element={
              <>
                <ImageSlider />
                <ProductCards addToCart={addToCart} addToWishlist={addToWishlist} />
                <Testimonials />
              </>
            } />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/products" element={<ProductsPage addToCart={addToCart} />} />
          </Routes>
        </main>

        <Footer />
        <Chatbot />

        <CartSidebar 
          isOpen={showCartSidebar}
          onClose={closeCartSidebar}
          cartProducts={cartProducts}
          cartTotal={cartTotal}
          removeFromCart={removeFromCart}
        />

        {showLogin && (
          <LoginModal 
            onClose={closeModals}
            onSwitchToRegister={openRegister}
          />
        )}

        {showRegister && (
          <RegisterModal 
            onClose={closeModals}
            onSwitchToLogin={openLogin}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
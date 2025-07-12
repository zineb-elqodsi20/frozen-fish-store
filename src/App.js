import logo from './logo.svg';
import './App.css';
import MarcineFishNavbar from './components/navbar';
import ImageSlider from "./components/ImageSlider";
import ProductCards from './components/ProductSection';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import ProductsPage from './components/ProductsPage';
import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FiCheckCircle, FiTrash2 } from 'react-icons/fi';

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

  // Sync cart count and products with localStorage
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
    setToast({ message: `${product.name} added to cart!`, icon: <FiCheckCircle className="text-green-500 text-2xl mr-2" /> });
    setTimeout(() => setToast(null), 1800);
  };

  const removeFromCart = (id) => {
    let cart = getCartFromStorage();
    cart = cart.filter(item => item.id !== id);
    saveCartToStorage(cart);
    updateCart();
  };

  const addToWishlist = () => setWishlistCount(w => w + 1);

  const openLogin = () => setShowLogin(true);
  const openRegister = () => setShowRegister(true);
  const closeModals = () => { setShowLogin(false); setShowRegister(false); };

  const openCartSidebar = () => setShowCartSidebar(true);
  const closeCartSidebar = () => setShowCartSidebar(false);

  // Calculate total
  const cartTotal = cartProducts.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <Router>
      <div className="App">
        {/* Toast */}
        {toast && (
          <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-green-50 text-green-900 px-6 py-3 rounded-lg shadow-lg z-50 flex items-center animate-fadeInScale border border-green-200">
            {toast.icon}
            <span className="font-semibold">{toast.message}</span>
          </div>
        )}
        <MarcineFishNavbar 
          cartCount={cartCount}
          wishlistCount={wishlistCount}
          onSignIn={openLogin}
          onCartClick={openCartSidebar}
        />
        <main>
          <Routes>
            <Route path="/" element={<><ImageSlider /><ProductCards addToCart={() => {}} addToWishlist={addToWishlist} /></>} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/products" element={<ProductsPage addToCart={addToCart} />} />
          </Routes>
        </main>
        <Footer />
        {/* Cart Sidebar */}
        {showCartSidebar && (
          <>
            <div className="fixed inset-0 bg-black/20 z-50" onClick={closeCartSidebar}></div>
            <aside className="fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 flex flex-col animate-fadeInScale rounded-l-2xl border-l-2 border-blue-100">
              <div className="flex items-center justify-between p-5 border-b bg-blue-50 rounded-t-2xl">
                <h2 className="text-2xl font-bold text-blue-800">My Cart</h2>
                <button onClick={closeCartSidebar} className="text-3xl text-gray-400 hover:text-blue-600">&times;</button>
              </div>
              <div className="flex-1 overflow-y-auto p-5">
                {cartProducts.length === 0 ? (
                  <div className="text-gray-500 text-center mt-8">Your cart is empty.</div>
                ) : (
                  cartProducts.map(item => (
                    <div key={item.id} className="flex items-center justify-between mb-6 border-b pb-3">
                      <div>
                        <div className="font-semibold text-blue-900 text-lg">{item.name}</div>
                        <div className="text-sm text-gray-500">Qty: {item.qty}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="font-bold text-blue-700 text-lg">£{item.price}</div>
                        <button onClick={() => removeFromCart(item.id)} className="p-2 rounded-full hover:bg-red-100 transition-colors" title="Remove">
                          <FiTrash2 className="text-red-500 text-xl" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
              {/* Cart Total and Checkout */}
              <div className="p-5 border-t bg-blue-50 rounded-b-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold text-blue-900 text-lg">Total:</span>
                  <span className="font-bold text-blue-700 text-xl">£{cartTotal.toFixed(2)}</span>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold text-lg shadow transition-colors">Checkout</button>
              </div>
            </aside>
          </>
        )}
        {/* Login Modal */}
        {showLogin && (
          <div className="fixed inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300">
            <div className="bg-white p-8 rounded-2xl shadow-2xl border border-blue-100 w-full max-w-sm relative animate-fadeInScale">
              <button className="absolute top-2 right-2 text-gray-400 hover:text-blue-600 text-2xl transition-colors" onClick={closeModals} aria-label="Close">&times;</button>
              <h2 className="text-2xl font-bold mb-4 text-blue-700">Sign In</h2>
              <input className="w-full mb-3 p-2 border rounded focus:ring-2 focus:ring-blue-200" placeholder="Email" />
              <input className="w-full mb-3 p-2 border rounded focus:ring-2 focus:ring-blue-200" placeholder="Password" type="password" />
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold shadow mb-2 transition-colors">Sign In</button>
              <p className="text-sm text-center">Don't have an account? <button className="text-blue-600 underline" onClick={() => { setShowLogin(false); setShowRegister(true); }}>Register</button></p>
            </div>
          </div>
        )}
        {/* Register Modal */}
        {showRegister && (
          <div className="fixed inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300">
            <div className="bg-white p-8 rounded-2xl shadow-2xl border border-blue-100 w-full max-w-sm relative animate-fadeInScale">
              <button className="absolute top-2 right-2 text-gray-400 hover:text-blue-600 text-2xl transition-colors" onClick={closeModals} aria-label="Close">&times;</button>
              <h2 className="text-2xl font-bold mb-4 text-blue-700">Register</h2>
              <input className="w-full mb-3 p-2 border rounded focus:ring-2 focus:ring-blue-200" placeholder="Email" />
              <input className="w-full mb-3 p-2 border rounded focus:ring-2 focus:ring-blue-200" placeholder="Password" type="password" />
              <input className="w-full mb-3 p-2 border rounded focus:ring-2 focus:ring-blue-200" placeholder="Confirm Password" type="password" />
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold shadow mb-2 transition-colors">Register</button>
              <p className="text-sm text-center">Already have an account? <button className="text-blue-600 underline" onClick={() => { setShowRegister(false); setShowLogin(true); }}>Sign In</button></p>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;

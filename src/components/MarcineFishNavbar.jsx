import React from 'react';
import { FiSearch, FiUser, FiShoppingCart, FiHeart } from 'react-icons/fi';

const MarcineFishNavbar = ({
  cartCount = 0,
  wishlistCount = 0,
  onLoginClick = () => console.warn('onLoginClick not provided'),
  onRegisterClick = () => console.warn('onRegisterClick not provided'),
  onCartClick = () => console.warn('onCartClick not provided'),
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-sky-600 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center h-16">
            <img 
              src="/logoMarcine2.png"
              alt="Marcine Fish Market" 
              className="h-full w-auto object-contain"
            />
          </div>

          {/* Search bar */}
          <div className="hidden md:flex items-center bg-white rounded-full px-4 py-2 shadow-sm w-1/3 mx-4">
            <input
              type="text"
              placeholder="Search Seafood, Recipes..."
              className="w-full outline-none text-sm text-gray-700"
            />
            <FiSearch className="text-sky-600 ml-2" />
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={onLoginClick} 
              className="flex items-center text-white hover:text-sky-100 text-sm"
            >
              <FiUser className="mr-1" />
              <span>Sign In</span>
            </button>
            <button 
              onClick={onRegisterClick} 
              className="text-white hover:text-sky-100 text-sm border border-white px-3 py-1 rounded-full"
            >
              Register
            </button>
            <button className="text-white hover:text-sky-100 relative">
              <FiHeart className="text-xl" />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-sky-600 text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {wishlistCount}
                </span>
              )}
            </button>
            <button 
              className="text-white hover:text-sky-100 relative" 
              onClick={onCartClick}
            >
              <FiShoppingCart className="text-xl" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-sky-600 text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Main navigation */}
        <nav className="hidden md:flex justify-between items-center py-3 border-t border-sky-500">
          <div className="flex space-x-8 text-sm">
            <a href="/" className="text-white hover:text-sky-100 font-medium flex items-center">
              HOME
            </a>
            <a href="/products" className="text-white hover:text-sky-100 font-medium flex items-center">
              PRODUCTS
            </a>
            <a href="/about" className="text-white hover:text-sky-100 font-medium flex items-center">
              ABOUT US
            </a>
            <a href="/contact" className="text-white hover:text-sky-100 font-medium flex items-center">
              CONTACT
            </a>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-sky-700 py-4 px-4 shadow-lg">
          <div className="flex items-center bg-sky-500 rounded-full px-4 py-2 mb-4">
            <input
              type="text"
              placeholder="Search Seafood, Recipes..."
              className="w-full outline-none text-sm bg-transparent text-white placeholder-sky-200"
            />
            <FiSearch className="text-white ml-2" />
          </div>

          <div className="flex flex-col space-y-4 pt-4">
            <a href="/" className="text-white hover:text-sky-100 font-medium">HOME</a>
            <a href="/products" className="text-white hover:text-sky-100 font-medium">PRODUCTS</a>
            <a href="/about" className="text-white hover:text-sky-100 font-medium">ABOUT US</a>
            <a href="/contact" className="text-white hover:text-sky-100 font-medium">CONTACT</a>
          </div>

          <div className="flex justify-between pt-6">
            <button 
              onClick={onLoginClick} 
              className="text-white hover:text-sky-100 font-medium flex items-center"
            >
              <FiUser className="mr-2" /> Sign In
            </button>
            <button 
              onClick={onRegisterClick} 
              className="text-white hover:text-sky-100 font-medium flex items-center"
            >
              Register
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default MarcineFishNavbar;
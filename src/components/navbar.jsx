import React from 'react';
import { FiSearch, FiUser, FiShoppingCart, FiChevronDown, FiHeart } from 'react-icons/fi';

const MarcineFishNavbar = ({ cartCount, wishlistCount, onSignIn, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-sky-100 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center h-16">
            <img 
              src="/logoMarcine2.png"
              alt="Marcine Fish Market" 
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="hidden md:flex items-center bg-white rounded-full px-4 py-2 shadow-sm w-1/3 mx-4">
            <input
              type="text"
              placeholder="Search Seafood, Recipes..."
              className="w-full outline-none text-sm text-gray-700"
            />
            <FiSearch className="text-blue-600 ml-2" />
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <button className="flex items-center text-blue-800 hover:text-blue-600 text-sm" onClick={onSignIn}>
              <FiUser className="mr-1" />
              <span>Sign In</span>
            </button>
            <button className="text-blue-800 hover:text-red-500 relative">
              <FiHeart className="text-xl" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {wishlistCount}
              </span>
            </button>
            <button className="text-blue-800 hover:text-blue-600 relative" onClick={onCartClick}>
              <FiShoppingCart className="text-xl" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            </button>
          </div>
          <button
            className="md:hidden text-blue-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <nav className="hidden md:flex justify-between items-center py-2 border-t border-blue-200">
          <div className="flex space-x-6 text-sm">
            <a href="/" className="text-blue-800 hover:text-blue-600 font-medium flex items-center">
              HOME
            </a>
            <a href="/products" className="text-blue-800 hover:text-blue-600 font-medium flex items-center">
              PRODUCTS
            </a>
            <a href="/about" className="text-blue-800 hover:text-blue-600 font-medium flex items-center">
              ABOUT US
            </a>
          </div>
        </nav>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 mb-4">
            <input
              type="text"
              placeholder="Search Seafood, Recipes..."
              className="w-full outline-none text-sm bg-transparent"
            />
            <FiSearch className="text-blue-600 ml-2" />
          </div>
          <div className="flex justify-between pt-6">
            <button onClick={onSignIn} className="text-blue-800 hover:text-blue-600 font-medium flex items-center">
              <FiUser className="mr-2" /> Sign In
            </button>
            <div className="flex space-x-6">
              <span className="text-blue-800 hover:text-red-500 font-medium flex items-center">
                <FiHeart className="mr-2" /> {wishlistCount}
              </span>
              <span className="text-blue-800 hover:text-blue-600 font-medium flex items-center">
                <FiShoppingCart className="mr-2" /> {cartCount}
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default MarcineFishNavbar;
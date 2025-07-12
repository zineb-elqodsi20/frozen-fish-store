import { useState, useEffect } from 'react';
import { FiSearch, FiUser, FiShoppingCart, FiChevronDown, FiHeart } from 'react-icons/fi';

const MarcineFishNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  // Fonction pour simuler l'ajout à la wishlist (à remplacer par votre logique réelle)
  const addToWishlist = () => {
    setWishlistCount(prev => prev + 1);
  };

  // Fonction pour simuler l'ajout au panier (à remplacer par votre logique réelle)
  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <header className="bg-sky-100 shadow-md">
      <div className="container mx-auto px-4">
        {/* Barre de navigation principale */}
        <div className="flex justify-between items-center py-3">
          
          {/* Logo */}
          <div className="flex items-center h-16">
            <img 
              src="/logoMarcine2.png"
              alt="Marcine Fish Market" 
              className="h-full w-auto object-contain"
            />
          </div>

          {/* Barre de recherche (desktop) */}
          <div className="hidden md:flex items-center bg-white rounded-full px-4 py-2 shadow-sm w-1/3 mx-4">
            <input
              type="text"
              placeholder="Search Seafood, Recipes..."
              className="w-full outline-none text-sm text-gray-700"
            />
            <FiSearch className="text-blue-600 ml-2" />
          </div>

          {/* Actions utilisateur (desktop) */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="flex items-center text-blue-800 hover:text-blue-600 text-sm">
              <FiUser className="mr-1" />
              <span>Sign In</span>
            </button>
            
            {/* Bouton Wishlist */}
            <button 
              className="text-blue-800 hover:text-red-500 relative"
              onClick={addToWishlist}
            >
              <FiHeart className="text-xl" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {wishlistCount}
              </span>
            </button>
            
            {/* Bouton Panier */}
            <button 
              className="text-blue-800 hover:text-blue-600 relative"
              onClick={addToCart}
            >
              <FiShoppingCart className="text-xl" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            </button>
          </div>

          {/* Bouton menu mobile */}
          <button
            className="md:hidden text-blue-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Navigation secondaire (desktop) */}
        <nav className="hidden md:flex justify-between items-center py-2 border-t border-blue-200">
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-blue-800 hover:text-blue-600 font-medium flex items-center">
              SHOP ALL SEAFOOD <FiChevronDown className="ml-1" />
            </a>
            <a href="#" className="text-blue-800 hover:text-blue-600 font-medium flex items-center">
              ABOUT US <FiChevronDown className="ml-1" />
            </a>
            <a href="#" className="text-blue-800 hover:text-blue-600 font-medium flex items-center">
              RESOURCES <FiChevronDown className="ml-1" />
            </a>
            <a href="#" className="text-blue-800 hover:text-blue-600 font-medium">
              OFFERS
            </a>
            <a href="#" className="text-blue-800 hover:text-blue-600 font-medium">
              GIFTS
            </a>
            <a href="#" className="text-blue-800 hover:text-blue-600 font-medium">
              RECIPES
            </a>
            <a href="#" className="text-blue-800 hover:text-blue-600 font-medium">
              SUBSCRIBE & SAVE
            </a>
            <a href="#" className="text-blue-800 hover:text-blue-600 font-medium">
              MY FISHLIST
            </a>
            <a href="#" className="text-blue-800 hover:text-blue-600 font-medium">
              REWARDS
            </a>
            <a href="#" className="text-blue-800 hover:text-blue-600 font-medium">
              Shipping
            </a>
          </div>
        </nav>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          {/* Barre de recherche mobile */}
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 mb-4">
            <input
              type="text"
              placeholder="Search Seafood, Recipes..."
              className="w-full outline-none text-sm bg-transparent"
            />
            <FiSearch className="text-blue-600 ml-2" />
          </div>

          {/* Navigation mobile */}
          <nav className="flex flex-col space-y-3">
            <a href="#" className="text-blue-800 hover:text-blue-600 font-medium flex items-center justify-between">
              SHOP ALL SEAFOOD <FiChevronDown />
            </a>
            <a href="#" className="text-blue-800 hover:text-blue-600 font-medium flex items-center justify-between">
              ABOUT US <FiChevronDown />
            </a>
            <a href="#" className="text-blue-800 hover:text-blue-600 font-medium flex items-center justify-between">
              RESOURCES <FiChevronDown />
            </a>
            <a href="#" className="text-blue-800 hover:text-blue-600 font-medium">
              OFFERS
            </a>
            <a href="#" className="text-blue-800 hover:text-blue-600 font-medium">
              GIFTS
            </a>
            <a href="#" className="text-blue-800 hover:text-blue-600 font-medium">
              RECIPES
            </a>
            <a href="#" className="text-blue-800 hover:text-blue-600 font-medium">
              SUBSCRIBE & SAVE
            </a>
            <a href="#" className="text-blue-800 hover:text-blue-600 font-medium">
              MY FISHLIST
            </a>
            <a href="#" className="text-blue-800 hover:text-blue-600 font-medium">
              REWARDS
            </a>
            <a href="#" className="text-blue-800 hover:text-blue-600 font-medium">
              Shipping
            </a>
          </nav>

          {/* Actions utilisateur mobile */}
          <div className="flex justify-between pt-6">
            <a href="#" className="text-blue-800 hover:text-blue-600 font-medium flex items-center">
              <FiUser className="mr-2" /> Sign In
            </a>
            <div className="flex space-x-6">
              <a href="#" className="text-blue-800 hover:text-red-500 font-medium flex items-center">
                <FiHeart className="mr-2" /> {wishlistCount}
              </a>
              <a href="#" className="text-blue-800 hover:text-blue-600 font-medium flex items-center">
                <FiShoppingCart className="mr-2" /> {cartCount}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default MarcineFishNavbar;
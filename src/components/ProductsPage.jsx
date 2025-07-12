import React, { useState } from 'react';
import { FiShoppingCart, FiHeart, FiEye } from 'react-icons/fi';

const FISH_TYPES = [
  'Salmon', 'Tuna', 'Seabass', 'Lobster', 'Anchovies', 'Shrimp', 'Cod', 'Sardine'
];

const PRODUCTS = [
  { id: 1, name: 'Fresh Salmon', price: 25, type: 'Salmon', originalPrice: 30 },
  { id: 2, name: 'Atlantic Tuna', price: 30, type: 'Tuna', originalPrice: 35 },
  { id: 3, name: 'Seabass Fillet', price: 18, type: 'Seabass', originalPrice: 22 },
  { id: 4, name: 'Lobster Tail', price: 45, type: 'Lobster', originalPrice: 50 },
  { id: 5, name: 'Large Anchovies', price: 12, type: 'Anchovies', originalPrice: 15 },
  { id: 6, name: 'Jumbo Shrimp', price: 28, type: 'Shrimp', originalPrice: 32 },
  { id: 7, name: 'Cod Steak', price: 22, type: 'Cod', originalPrice: 26 },
  { id: 8, name: 'Moroccan Sardine', price: 10, type: 'Sardine', originalPrice: 12 },
];

const ProductsPage = ({ addToCart }) => {
  const [search, setSearch] = useState('');
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [price, setPrice] = useState([0, 50]);

  const handleTypeChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const handlePriceChange = (e, idx) => {
    const val = Number(e.target.value);
    setPrice(idx === 0 ? [val, price[1]] : [price[0], val]);
  };

  const filtered = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (selectedTypes.length === 0 || selectedTypes.includes(p.type)) &&
    p.price >= price[0] && p.price <= price[1]
  );

  return (
    <div className="min-h-screen bg-blue-50 flex relative">
      {/* Sidebar */}
      <aside className="w-72 bg-white shadow-lg rounded-r-2xl p-6 flex flex-col gap-8 sticky top-8 h-fit mt-8 ml-4 animate-fadeInLeft">
        <div>
          <h2 className="text-lg font-bold mb-2 text-blue-800">Search</h2>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-200"
          />
        </div>
        <div>
          <h2 className="text-lg font-bold mb-2 text-blue-800">Fish Type</h2>
          <div className="flex flex-col gap-1">
            {FISH_TYPES.map(type => (
              <label key={type} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(type)}
                  onChange={() => handleTypeChange(type)}
                  className="accent-blue-600"
                />
                <span>{type}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-2 text-blue-800">Price Range</h2>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={0}
              max={price[1]}
              value={price[0]}
              onChange={e => handlePriceChange(e, 0)}
              className="w-16 p-1 border rounded"
            />
            <span>-</span>
            <input
              type="number"
              min={price[0]}
              max={100}
              value={price[1]}
              onChange={e => handlePriceChange(e, 1)}
              className="w-16 p-1 border rounded"
            />
          </div>
        </div>
      </aside>
      {/* Products Grid */}
      <section className="flex-1 p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 animate-fadeInScale">
        {filtered.length === 0 ? (
          <div className="col-span-full text-center text-gray-500 text-xl mt-16">No products found.</div>
        ) : (
          filtered.map(product => (
            <div 
              key={product.id} 
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group relative"
            >
              {/* Wishlist and Quick View */}
              <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <button className="bg-white p-2 rounded-full shadow-md hover:bg-blue-50">
                  <FiHeart className="text-gray-600 hover:text-red-500" />
                </button>
                <button className="bg-white p-2 rounded-full shadow-md hover:bg-blue-50">
                  <FiEye className="text-gray-600 hover:text-blue-600" />
                </button>
              </div>
              {/* Product Image Placeholder */}
              <div className="h-48 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                <span className="text-gray-400">Product Image</span>
              </div>
              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-1">Sale Price</p>
                <div className="mb-3">
                  <span className="text-red-600 font-bold text-xl">£{product.price}</span>
                  <span className="text-gray-400 text-sm line-through ml-2">£{product.originalPrice}</span>
                </div>
                {/* Add to Basket Button */}
                <div className="flex items-center w-full mt-4 select-none">
                  {/* Left ribbon tail */}
                  <svg width="18" height="48" viewBox="0 0 18 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="18,0 0,24 18,48" fill="#0071CE" />
                  </svg>
                  <div
                    className="flex-1 h-12 bg-[#0071CE] flex items-center justify-between transition-colors duration-300 font-semibold uppercase text-sm px-6 shadow-lg cursor-pointer hover:bg-blue-700"
                    style={{ minHeight: '48px' }}
                    onClick={() => addToCart(product)}
                  >
                    <span className="text-white tracking-wide">ADD TO BASKET</span>
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-[#0071CE] ml-2">
                      <FiShoppingCart className="text-[#0071CE] text-xl" strokeWidth={2} />
                    </span>
                  </div>
                  {/* Right ribbon tail */}
                  <svg width="18" height="48" viewBox="0 0 18 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="0,0 18,24 0,48" fill="#0071CE" />
                  </svg>
                </div>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default ProductsPage; 
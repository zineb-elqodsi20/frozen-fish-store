import { FiShoppingCart, FiHeart, FiEye } from 'react-icons/fi';
import { useState } from 'react';

const ProductCards = ({ addToCart, addToWishlist }) => {
  const [likedProducts, setLikedProducts] = useState([]);

  const toggleLike = (productId) => {
    if (likedProducts.includes(productId)) {
      setLikedProducts(likedProducts.filter(id => id !== productId));
    } else {
      setLikedProducts([...likedProducts, productId]);
    }
    if (addToWishlist) {
      addToWishlist(productId);
    }
  };

  const products = [
    {
      id: 1,
      title: "Platinum Cook Up Pack",
      salePrice: "£75.00",
      originalPrice: "£88.88",
      tag: "Sale",
    },
    {
      id: 2,
      title: "Seabass Fillets (Wild)...",
      salePrice: "£12.71",
      originalPrice: "£14.95",
      tag: "Sale",
    },
    {
      id: 3,
      title: "Lobster Tail 230-280g Each",
      salePrice: "£28.80",
      originalPrice: "£32.00",
      tag: "Sale",
    },
    {
      id: 4,
      title: "Anchovies Large 1kg",
      salePrice: "£10.95",
      originalPrice: "£12.00",
      tag: "Sale",
    }
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-gray-600 italic mb-2">Products of high quality</p>
          <h2 className="text-3xl font-bold text-blue-800">Our Featured Products</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            const isLiked = likedProducts.includes(product.id);
            return (
              <div 
                key={product.id} 
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group relative"
              >
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-green-500 text-white text-xs font-bold flex items-center justify-center w-10 h-10 rounded-full">
                    {product.tag}
                  </span>
                </div>
             
                <div className={`absolute top-3 right-3 flex flex-col space-y-2 ${isLiked ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-300 z-10`}>
                  <button 
                    className="bg-white p-2 rounded-full shadow-md hover:bg-blue-50" 
                    onClick={() => toggleLike(product.id)}
                  >
                    <FiHeart 
                      className={`${isLiked ? 'text-red-500 fill-current' : 'text-gray-600'} hover:text-red-500`} 
                    />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-blue-50">
                    <FiEye className="text-gray-600 hover:text-blue-600" />
                  </button>
                </div>
                
                <div className="h-48 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                  <span className="text-gray-400">Product Image</span>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.title}</h3>
                  <p className="text-sm text-gray-500 mb-1">Special Offre</p>
                  <div className="mb-3">
                    <span className="text-red-600 font-bold text-xl">{product.salePrice}</span>
                    <span className="text-gray-400 text-sm line-through ml-2">{product.originalPrice}</span>
                  </div>
                  
                  <div className="flex items-center w-full mt-4 select-none">
                    <svg width="18" height="48" viewBox="0 0 18 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="18,0 0,24 18,48" fill="#0071CE" />
                    </svg>
                    <div className="flex-1 h-12 bg-[#0071CE] flex items-center justify-between transition-colors duration-300 font-semibold uppercase text-sm px-6 shadow-lg" style={{ minHeight: '48px' }}>
                      <span className="text-white tracking-wide">ADD TO BASKET</span>
                      <button onClick={() => addToCart(product)} className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-[#0071CE] ml-2 focus:outline-none">
                        <FiShoppingCart className="text-[#0071CE] text-xl" strokeWidth={2} />
                      </button>
                    </div>
                    <svg width="18" height="48" viewBox="0 0 18 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="0,0 18,24 0,48" fill="#0071CE" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <a 
            href="/products" 
            className="inline-block border-b border-blue-600 text-blue-600 hover:text-blue-800 pb-1"
          >
            View All Products
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
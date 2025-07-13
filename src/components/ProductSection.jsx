import { FiShoppingCart, FiHeart, FiEye, FiX } from 'react-icons/fi';
import { useState } from 'react';

const ProductCards = ({ addToCart, addToWishlist }) => {
  const [likedProducts, setLikedProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

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

  const openDetailsModal = (product) => {
    setSelectedProduct(product);
    setShowDetailsModal(true);
  };

  const closeDetailsModal = () => {
    setShowDetailsModal(false);
    setSelectedProduct(null);
  };

  const products = [
    {
      id: 1,
      title: "Platinum Cook Up Pack",
      salePrice: "£75.00",
      originalPrice: "£88.88",
      tag: "Sale",
      description: "Premium quality cook up pack with the finest ingredients for gourmet cooking. Includes rare spices and herbs.",
      details: [
        "Includes 10 different premium ingredients",
        "Enough for 5 full meals",
        "Vacuum sealed for freshness",
        "Sourced from sustainable farms"
      ]
    },
    {
      id: 2,
      title: "Seabass Fillets (Wild)...",
      salePrice: "£12.71",
      originalPrice: "£14.95",
      tag: "Sale",
      description: "Wild-caught seabass fillets, perfectly portioned and skin-on for optimal flavor.",
      details: [
        "Wild-caught from Atlantic waters",
        "Skin-on for better cooking",
        "Individually vacuum packed",
        "Perfect for grilling or baking"
      ]
    },
    {
      id: 3,
      title: "Lobster Tail 230-280g Each",
      salePrice: "£28.80",
      originalPrice: "£32.00",
      tag: "Sale",
      description: "Premium cold-water lobster tails, known for their sweet and tender meat.",
      details: [
        "230-280g per tail",
        "Cold-water variety",
        "Flash frozen at peak freshness",
        "Easy to prepare"
      ]
    },
    {
      id: 4,
      title: "Anchovies Large 1kg",
      salePrice: "£10.95",
      originalPrice: "£12.00",
      tag: "Sale",
      description: "Large, high-quality anchovies perfect for pizzas, salads and gourmet recipes.",
      details: [
        "1kg bulk pack",
        "Sustainably sourced",
        "Packed in olive oil",
        "Rich in omega-3"
      ]
    }
  ];

  return (
    <div className="bg-white py-12 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-gray-600 italic mb-2">Products of high quality</p>
      <div className="group cursor-default">
        <h2 className="text-4xl font-bold text-sky-600 relative inline-block">
          Frozen Fish, Seafood Delivered To Your Door
          <span className="absolute bottom-0 left-0 h-0.5 bg-sky-400 w-0 group-hover:w-full transition-all duration-500"></span>
        </h2>
      </div>
<div className="group cursor-default inline-block">
  <h2 className="text-4xl font-bold text-green-500 relative">
    5% Discount Off Your First Frozen Fish Order
    <span className="absolute bottom-0 left-0 h-0.5 bg-green-400 w-0 group-hover:w-full transition-all duration-500"></span>
  </h2>
</div>
     <p className="text-gray-600 italic mb-2">Quick access to our products
              </p>
        <div className="text-center mb-12">
  <div className="relative inline-block pb-2 mb-4">
    <p className="text-gray-600 font-light italic text-lg">
      Marcine Fish Special Offers
    </p>
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-green-500 rounded-full"></div>
  </div>
  
</div>
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
                  <button 
                    className="bg-white p-2 rounded-full shadow-md hover:bg-blue-50"
                    onClick={() => openDetailsModal(product)}
                  >
                    <FiEye className="text-gray-600 hover:text-blue-600" />
                  </button>
                </div>
                
                <div className="h-48 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                  <span className="text-gray-400">Product Image</span>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.title}</h3>
                  <p className="text-sm text-gray-500 mb-1">Special Offer</p>
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

        {/* Product Details Modal - Version avec arrière-plan visible */}
        {showDetailsModal && selectedProduct && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Fond semi-transparent très léger */}
            <div 
              className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-sm" 
              onClick={closeDetailsModal}
            ></div>
            
            {/* Contenu de la modal */}
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl relative z-10 m-4">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-800">{selectedProduct.title}</h3>
                  <button 
                    onClick={closeDetailsModal}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <FiX className="text-2xl" />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400">Product Image</span>
                  </div>

                  <div>
                    <div className="flex items-center mb-4">
                      <span className="text-red-600 font-bold text-xl mr-3">{selectedProduct.salePrice}</span>
                      <span className="text-gray-400 text-sm line-through">{selectedProduct.originalPrice}</span>
                    </div>

                    <p className="text-gray-700 mb-4">{selectedProduct.description}</p>

                    <ul className="mb-6 space-y-2">
                      {selectedProduct.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center w-full select-none">
                      <svg width="18" height="48" viewBox="0 0 18 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="18,0 0,24 18,48" fill="#0071CE" />
                      </svg>
                      <div className="flex-1 h-12 bg-[#0071CE] flex items-center justify-between transition-colors duration-300 font-semibold uppercase text-sm px-6 shadow-lg" style={{ minHeight: '48px' }}>
                        <span className="text-white tracking-wide">ADD TO BASKET</span>
                        <button 
                          onClick={() => {
                            addToCart(selectedProduct);
                            closeDetailsModal();
                          }} 
                          className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-[#0071CE] ml-2 focus:outline-none"
                        >
                          <FiShoppingCart className="text-[#0071CE] text-xl" strokeWidth={2} />
                        </button>
                      </div>
                      <svg width="18" height="48" viewBox="0 0 18 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="0,0 18,24 0,48" fill="#0071CE" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCards;
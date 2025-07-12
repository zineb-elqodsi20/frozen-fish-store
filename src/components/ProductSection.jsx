import { FiShoppingCart, FiHeart, FiEye } from 'react-icons/fi';

const ProductCards = () => {
  const products = [
    {
      id: 1,
      title: "Platinum Cook Up Pack",
      salePrice: "£75.00",
      originalPrice: "£88.88",
      tag: "Sale",
      offer: "Special Offer"
    },
    {
      id: 2,
      title: "Seabass Fillets (Wild)...",
      salePrice: "£12.71",
      originalPrice: "£14.95",
      tag: "Sale",
      offer: "Special Offer"
    },
    {
      id: 3,
      title: "Lobster Tail 230-280g Each",
      salePrice: "£28.80",
      originalPrice: "£32.00",
      tag: "Sale",
      offer: "Special Offer"
    },
    {
      id: 4,
      title: "Anchovies Large 1kg",
      salePrice: "£10.95",
      originalPrice: "£12.00",
      tag: "Sale",
      offer: "Special Offer"
    }
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Featured Products Title */}
        <div className="text-center mb-10">
          <p className="text-gray-600 italic mb-2">Products of high quality</p>
          <h2 className="text-3xl font-bold text-blue-800">Our Featured Products</h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group relative"
            >
              {/* Double Badges comme sur l'image */}
              <div className="absolute top-3 left-3 flex flex-col space-y-1 z-10">
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.tag}
                </span>
                <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.offer}
                </span>
              </div>
              
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
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.title}</h3>
                
                {/* Sale Price Label */}
                <p className="text-sm text-gray-500 mb-1">Sale Price</p>
                
                {/* Price */}
                <div className="mb-3">
                  <span className="text-red-600 font-bold text-xl">{product.salePrice}</span>
                  <span className="text-gray-400 text-sm line-through ml-2">{product.originalPrice}</span>
                </div>
                
                {/* Add to Basket Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md flex items-center justify-center transition-colors duration-300 font-medium">
                  <FiShoppingCart className="mr-2" />
                  ADD TO BASKET
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Link */}
        <div className="text-center mt-10">
          <a 
            href="https://frozenfish.direct/frozen-crab/lobster-tail-230-250g-sech/" 
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
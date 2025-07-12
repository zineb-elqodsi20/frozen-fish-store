import React, { useState, useEffect } from "react";

const images = [
  "/images/poisson1.jpg",
  "/images/poisson2.jpg",
  "/images/poisson3.jpg",
  "/images/poisson4.jpg",
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full" style={{ height: "80vh" }}>
      {/* Slides */}
      <div className="relative w-full h-full overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            
            {/* Overlay text */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-2xl">
                <p className="text-lg md:text-xl mb-2 italic">
                  Products of high quality...
                </p>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  Fresh Seafood Selection
                </h2>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors duration-300">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators only */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white w-6" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
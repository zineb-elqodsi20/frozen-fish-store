import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Fatima Zahra",
      content: "The shrimp I ordered were extremely fresh. We prepared them Moroccan-style and they were delicious! Thank you for your excellent service.",
    },
    {
      id: 2,
      name: "Youssef Benhaddou",
      content: "The frozen fish is exceptional quality. I particularly recommend the sardines - their flavor is amazing.",
    },
    {
      id: 3,
      name: "Amina Bouziane",
      content: "Fast and professional service. The salmon I received was well packaged and very tasty.",
    },
    {
      id: 4,
      name: "Mohamed Rhamani",
      content: "Quick delivery and fresh products as promised. I'll be a regular customer.",
    },
    {
      id: 5,
      name: "Nour El Houda",
      content: "Thank you for the quality and attention to detail. The fish arrived in perfect condition.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
       
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
            <span className="relative z-10">Customer Testimonials</span>
            <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-100 z-0 opacity-80" style={{ transform: 'skewX(-15deg)' }}></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear what our valued customers say about our premium seafood products
          </p>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-500 ease-in-out 
                ${activeIndex === index ? 
                  "ring-2 ring-blue-500 shadow-xl transform -translate-y-2" : 
                  "opacity-90 hover:shadow-md"}`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex((prev) => prev)}
            >
            
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-600 rounded-t-2xl"></div>
              
              
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-100 to-blue-50 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-blue-600">Verified Customer</p>
                </div>
              </div>
              
           
              <div className="relative">
                <svg className="absolute -top-6 -left-6 w-12 h-12 text-blue-50 opacity-70" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-gray-700 text-lg leading-relaxed relative z-10">"{testimonial.content}"</p>
              </div>
              
              
              <div className="mt-6 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

      
        <div className="flex justify-center mt-12 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'bg-blue-600 w-6' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
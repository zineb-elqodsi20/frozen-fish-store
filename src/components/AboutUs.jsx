import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 flex flex-col items-center">
      <div className="max-w-5xl w-full mb-12 animate-fadeInScale">
        <h1 className="text-4xl font-bold text-blue-800 mb-4 text-center">About Us</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">Welcome to Marcine Fish Market! We are passionate about delivering the freshest seafood directly to your door. Our team sources only the highest quality products and is dedicated to customer satisfaction. Based in Casablanca, we bring the ocean's best to your table.</p>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center mt-8">
          <div className="flex-1 animate-fadeInLeft">
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Our Mission</h2>
            <p className="text-gray-600 mb-4">To provide premium seafood with exceptional service, ensuring every customer enjoys the taste of the sea at its freshest.</p>
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Fresh, high-quality seafood</li>
              <li>Fast and reliable delivery</li>
              <li>Passionate, knowledgeable team</li>
              <li>Based in Casablanca, serving all Morocco</li>
            </ul>
          </div>
        </div>
        <div className="w-full flex justify-center mt-12 animate-fadeInScale">
          <iframe
            title="El Oulfa, Casablanca Map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-7.668,33.537,-7.610,33.573&amp;layer=mapnik"
            className="rounded-lg shadow-lg border-2 border-blue-200 w-full h-[400px] md:h-[500px]"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutUs; 
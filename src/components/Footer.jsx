import React from 'react';
import { FiInstagram, FiFacebook, FiTwitter, FiMail } from 'react-icons/fi';

const Footer = () => (
  <footer className="bg-blue-900 text-white py-10 mt-16">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="mb-6 md:mb-0 text-center md:text-left">
        <h2 className="text-2xl font-bold mb-2">Marcine Fish Market</h2>
        <p className="text-blue-100 mb-2">Fresh seafood delivered to your door from Casablanca.</p>
        <p className="text-blue-200 text-sm">&copy; {new Date().getFullYear()} Marcine Fish Market. All rights reserved.</p>
      </div>
      <div className="flex flex-col items-center mb-6 md:mb-0">
        <h3 className="font-semibold mb-2">Quick Links</h3>
        <ul className="space-y-1">
          <li><a href="/" className="hover:underline text-blue-100">Home</a></li>
          <li><a href="/about" className="hover:underline text-blue-100">About Us</a></li>
        </ul>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="font-semibold mb-2">Follow Us</h3>
        <div className="flex space-x-4 text-2xl">
          <a href="#" className="hover:text-blue-300"><FiInstagram /></a>
          <a href="#" className="hover:text-blue-300"><FiFacebook /></a>
          <a href="#" className="hover:text-blue-300"><FiTwitter /></a>
          <a href="mailto:info@marcinefish.com" className="hover:text-blue-300"><FiMail /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 
import React from 'react';
import { FiInstagram, FiFacebook, FiTwitter, FiMail, FiPhone } from 'react-icons/fi';

const Footer = () => (
  <footer className="bg-sky-600 text-white pt-12 pb-6">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Logo et description */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center mb-4">
            <img 
              src="/logoMarcine2.png"
              alt="Marcine Fish Market" 
              className="h-12 w-auto object-contain"
            />
            <span className="ml-2 text-xl font-bold">MARCINE FISH</span>
          </div>
          <p className="text-sky-100 text-center md:text-left mb-4">
            Premium quality seafood delivered fresh from Casablanca to your doorstep.
          </p>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-sky-300 transition-colors"><FiInstagram /></a>
            <a href="#" className="hover:text-sky-300 transition-colors"><FiFacebook /></a>
            <a href="#" className="hover:text-sky-300 transition-colors"><FiTwitter /></a>
          </div>
        </div>

        {/* Liens rapides */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4 border-b border-sky-400 pb-2 w-full text-center md:text-left">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-sky-300 transition-colors">Home</a></li>
            <li><a href="/products" className="hover:text-sky-300 transition-colors">Products</a></li>
            <li><a href="/about" className="hover:text-sky-300 transition-colors">About Us</a></li>
            <li><a href="/contact" className="hover:text-sky-300 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4 border-b border-sky-400 pb-2 w-full text-center md:text-left">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <FiMail className="mr-2 text-sky-300" />
              <span>info@marcinefish.com</span>
            </li>
            <li className="flex items-center">
              <FiPhone className="mr-2 text-sky-300" />
              <span>+212 6XX-XXXXXX</span>
            </li>
          </ul>
        </div>

    
      </div>

      <div className="border-t border-sky-500 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sky-200 text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Marcine Fish Market. All rights reserved.
        </p>
        
      </div>
    </div>
  </footer>
);

export default Footer;
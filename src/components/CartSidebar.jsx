import { useState } from 'react';
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { FaFish } from 'react-icons/fa';

export default function LoginModal({ isOpen, onClose, onRegisterClick }) {
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden border-2 border-blue-200 animate-fadeInScale">
        <div className="bg-gradient-to-r from-blue-500 to-teal-400 p-6 text-white relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 opacity-20">
            <FaFish className="text-white text-6xl animate-spin-slow" />
          </div>
          <h2 className="text-2xl font-bold flex items-center gap-2 relative z-10">
            <FiUser className="inline" /> Welcome Back!
          </h2>
          <p className="text-blue-100 relative z-10">Sign in to access your account</p>
        </div>
        
        <div className="p-6">
          <div className="mb-4">
            <label className="block text-blue-800 mb-2 font-medium">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="text-blue-400" />
              </div>
              <input 
                type="email" 
                className="w-full pl-10 pr-3 py-2 border-2 border-blue-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-blue-50"
                placeholder="your@email.com"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-blue-800 mb-2 font-medium">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiLock className="text-blue-400" />
              </div>
              <input 
                type={showPassword ? "text" : "password"} 
                className="w-full pl-10 pr-10 py-2 border-2 border-blue-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-blue-50"
                placeholder="••••••••"
              />
              <button 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FiEyeOff className="text-blue-400" /> : <FiEye className="text-blue-400" />}
              </button>
            </div>
            <div className="flex justify-end mt-2">
              <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
            </div>
          </div>
          
          <button className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white py-3 rounded-lg font-semibold shadow-md mb-4 transition-all transform hover:scale-[1.01] flex items-center justify-center">
            <FaFish className="mr-2" /> Sign In
          </button>
          
          <div className="text-center text-blue-800 mb-4 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-blue-200"></div>
            </div>
            <div className="relative inline-flex items-center justify-center px-4 bg-white">
              <span className="text-sm bg-white px-2">Or continue with</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-4 mb-6">
            <button className="p-2 border-2 border-blue-100 rounded-lg hover:bg-blue-50 transition-colors">
              <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-6 h-6" />
            </button>
            <button className="p-2 border-2 border-blue-100 rounded-lg hover:bg-blue-50 transition-colors">
              <img src="https://www.svgrepo.com/show/448234/facebook.svg" alt="Facebook" className="w-6 h-6" />
            </button>
          </div>
          
          <p className="text-center text-blue-800">
            Don't have an account?{' '}
            <button 
              onClick={onRegisterClick} 
              className="text-blue-600 font-medium hover:underline"
            >
              Register
            </button>
          </p>
        </div>
        
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-white hover:text-blue-100 transition-colors z-10"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
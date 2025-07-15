import React from 'react';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { FaFish } from 'react-icons/fa';

const SignInModal = ({ onClose, onSwitchToRegister }) => {
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden border-2 border-blue-200 animate-fadeInScale relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-white z-10">
          &times;
        </button>

        <div className="bg-gradient-to-r from-blue-500 to-teal-400 p-6 text-white">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <FiUser /> Welcome Back!
          </h2>
          <p>Sign in to access your account</p>
        </div>

        <div className="p-6">
          <form>
            <div className="mb-4">
              <label className="text-blue-800 mb-2 block">Email</label>
              <input type="email" required className="input" />
            </div>
            <div className="mb-4">
              <label className="text-blue-800 mb-2 block">Password</label>
              <input type="password" required className="input" />
            </div>
            <button type="submit" className="btn-primary w-full">Sign In</button>
          </form>
          <p className="text-center mt-4">
            Don’t have an account?{' '}
            <button onClick={onSwitchToRegister} className="text-blue-600 hover:underline">Register</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;

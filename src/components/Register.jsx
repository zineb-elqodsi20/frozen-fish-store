import React, { useState } from 'react';
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff, FiCheckCircle } from 'react-icons/fi';

const RegisterModal = ({ onClose, onSwitchToLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target.elements;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
      password_confirmation: form.password_confirmation.value, // ✅ CORRECT FIELD NAME
    };

    try {
      const res = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || 'Registration failed');

      setEmail(formData.email);
      setStep(2);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm overflow-hidden border-2 border-blue-200 animate-fadeInScale relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-black text-xl font-bold z-10">
          &times;
        </button>

        {step === 1 ? (
          <>
            <div className="bg-gradient-to-r from-blue-500 to-teal-400 p-6 text-white">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <FiUser /> Create Account
              </h2>
              <p>Join us for the best seafood experience</p>
            </div>
            <form className="p-6" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="text-blue-800 mb-2 block">Full Name</label>
                <input name="name" type="text" required className="input w-full px-4 py-2 border rounded" />
              </div>
              <div className="mb-4">
                <label className="text-blue-800 mb-2 block">Email</label>
                <input name="email" type="email" required className="input w-full px-4 py-2 border rounded" />
              </div>
              <div className="mb-4">
                <label className="text-blue-800 mb-2 block">Password</label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    className="input w-full px-4 py-2 border rounded pr-10"
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-2">
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <label className="text-blue-800 mb-2 block">Confirm Password</label>
                <div className="relative">
                  <input
                    name="password_confirmation" // ✅ ce nom doit correspondre à Laravel
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    className="input w-full px-4 py-2 border rounded pr-10"
                  />
                  <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-2 top-2">
                    {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>
              <button type="submit" className="btn-primary w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                Register
              </button>
              <p className="text-center mt-4">
                Already have an account?{' '}
                <button onClick={onSwitchToLogin} className="text-blue-600 hover:underline">Sign In</button>
              </p>
            </form>
          </>
        ) : (
          <div className="p-6 text-center">
            <FiCheckCircle className="text-green-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Check your inbox!</h3>
            <p>Confirmation email sent to <strong>{email}</strong></p>
            <button onClick={onClose} className="btn-primary mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              Got it!
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterModal;

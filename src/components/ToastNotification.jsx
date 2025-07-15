import { FiCheckCircle } from 'react-icons/fi';
import { FaFish } from 'react-icons/fa';

export default function ToastNotification({ toast }) {
  if (!toast) return null;

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center animate-fadeInScale border-2 border-blue-200 bg-opacity-90 backdrop-blur-sm">
      {toast.icon === 'check' && <FiCheckCircle className="text-green-500 text-2xl mr-2" />}
      <span className="font-semibold text-blue-800">{toast.message}</span>
      {toast.fish && (
        <div className="ml-3 relative">
          <FaFish className="text-blue-400 animate-swim" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
        </div>
      )}
    </div>
  );
}
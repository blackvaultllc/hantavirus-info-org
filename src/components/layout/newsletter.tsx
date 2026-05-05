import { Mail } from 'lucide-react';

export function Newsletter() {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
      <div className="flex items-center space-x-3 mb-4">
        <Mail className="w-6 h-6 text-blue-600" />
        <h3 className="font-semibold text-gray-900">Stay Informed</h3>
      </div>
      <p className="text-sm text-gray-700 mb-4">
        Get the latest updates on Hantavirus prevention and safety tips delivered to your inbox.
      </p>
      <form className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Subscribe
        </button>
      </form>
      <p className="text-xs text-gray-500 mt-3">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
}

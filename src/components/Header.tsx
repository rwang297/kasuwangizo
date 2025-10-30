import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">📱</span>
          </div>
          <span className="text-xl font-bold text-gray-900">msmeHub</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-6 py-2 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

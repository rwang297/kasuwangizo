import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-b from-green-50 to-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">📱</span>
          </div>
          <span className="text-2xl font-bold text-gray-900">msmeHub</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            Login
          </Link>
          <Link href="/signup" className="px-6 py-2 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

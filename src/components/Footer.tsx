import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">📱</span>
              </div>
              <span className="text-xl font-bold">msmeHub</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering African MSMEs with digital tools, training, and market access for sustainable business growth.
            </p>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/marketplace" className="text-gray-400 hover:text-white transition">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="/training" className="text-gray-400 hover:text-white transition">
                  Training
                </Link>
              </li>
              <li>
                <Link href="/stakeholders" className="text-gray-400 hover:text-white transition">
                  Stakeholders
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-white transition">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/help-center" className="text-gray-400 hover:text-white transition">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="font-bold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <Link
                href="https://facebook.com/msmehub"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                f
              </Link>
              <Link
                href="https://twitter.com/msmehub"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                𝕏
              </Link>
              <Link
                href="https://linkedin.com/company/msmehub"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                in
              </Link>
              <Link
                href="https://instagram.com/msmehub"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                📷
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 MSME Hub. All rights reserved. | Powered by ReadBy
            </p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

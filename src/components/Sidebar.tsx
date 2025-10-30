'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    {
      icon: '📊',
      label: 'Dashboard',
      href: '/dashboard',
      active: true,
    },
    {
      icon: '📦',
      label: 'Products & Inventory',
      href: '/dashboard/products',
      active: false,
    },
    {
      icon: '📋',
      label: 'Orders Management',
      href: '/dashboard/orders',
      active: false,
    },
    {
      icon: '💰',
      label: 'Wallet & Finance',
      href: '/dashboard/wallet',
      active: false,
    },
    {
      icon: '👥',
      label: 'Customers',
      href: '/dashboard/customers',
      active: false,
    },
    {
      icon: '🔔',
      label: 'Notifications',
      href: '/dashboard/notifications',
      active: false,
    },
    {
      icon: '🏢',
      label: 'Business Profile',
      href: '/dashboard/profile',
      active: false,
    },
    {
      icon: '⚙️',
      label: 'Settings',
      href: '/dashboard/settings',
      active: false,
    },
  ];

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white border border-gray-200 rounded-lg"
        aria-label="Toggle sidebar"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen bg-white border-r border-gray-200 flex flex-col transition-all duration-300 z-40 ${
          isOpen ? 'w-64' : 'w-0 lg:w-64'
        } overflow-hidden lg:overflow-visible`}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              G
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900">Gizo</div>
              <div className="text-xs text-gray-500">Business Hub</div>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                item.active
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium text-sm">{item.label}</span>
              {item.active && (
                <span className="ml-auto">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* User Profile Section */}
        <div className="border-t border-gray-200 p-6">
          <Link
            href="/dashboard/profile"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white font-bold">
              JD
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900">John Doe</div>
              <div className="text-xs text-gray-500">Business Owner</div>
            </div>
          </Link>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

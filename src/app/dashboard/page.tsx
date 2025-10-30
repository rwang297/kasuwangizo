'use client';

import { useState } from 'react';

export default function DashboardPage() {
  const [timeRange] = useState('7d');

  const metrics = [
    {
      icon: '💰',
      label: 'Total Revenue',
      value: '$24,580',
      change: '+12.3% vs last month',
      changeType: 'positive',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-600',
    },
    {
      icon: '📦',
      label: 'Total Orders',
      value: '1,247',
      change: '+8.2% vs last month',
      changeType: 'positive',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-600',
    },
    {
      icon: '✨',
      label: 'Active Products',
      value: '156',
      change: '-2.1% vs last month',
      changeType: 'negative',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-600',
    },
    {
      icon: '👥',
      label: 'New Customers',
      value: '89',
      change: '+13.3% vs last month',
      changeType: 'positive',
      bgColor: 'bg-orange-50',
      iconBg: 'bg-orange-600',
    },
  ];

  const topProducts = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      image: 'https://images.unsplash.com/photo-1592286927505-1def25115558?w=100&h=100&fit=crop',
      sales: '45 sales',
      price: '$53,955',
    },
    {
      id: 2,
      name: 'MacBook Air M2',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=100&h=100&fit=crop',
      sales: '23 sales',
      price: '$29,877',
    },
    {
      id: 3,
      name: 'AirPods Pro',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop',
      sales: '67 sales',
      price: '$16,683',
    },
    {
      id: 4,
      name: 'iPad Pro 12.9"',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3af4abd8?w=100&h=100&fit=crop',
      sales: '18 sales',
      price: '$19,782',
    },
  ];

  const recentOrders = [
    {
      id: '#1234',
      customer: 'Sarah Johnson',
      product: 'iPhone 15 Pro',
      amount: '$1,199',
      status: 'completed',
      time: '2 min ago',
    },
    {
      id: '#1235',
      customer: 'Michael Chen',
      product: 'MacBook Air M2',
      amount: '$1,299',
      status: 'processing',
      time: '13 min ago',
    },
    {
      id: '#1236',
      customer: 'Emma Wilson',
      product: 'AirPods Pro',
      amount: '$249',
      status: 'pending',
      time: '1 hour ago',
    },
    {
      id: '#1237',
      customer: 'David Brown',
      product: 'iPad Pro 12.9"',
      amount: '$1,099',
      status: 'completed',
      time: '2 hours ago',
    },
    {
      id: '#1238',
      customer: 'Lisa Garcia',
      product: 'Apple Watch Ultra',
      amount: '$799',
      status: 'processing',
      time: '3 hours ago',
    },
  ];

  const actions = [
    {
      icon: '📦',
      title: 'Add New Product',
      description: 'Expand your inventory with new products',
      button: 'Add Product',
      color: 'purple',
    },
    {
      icon: '📢',
      title: 'Create Campaign',
      description: 'Boost sales with marketing campaigns',
      button: 'Start Campaign',
      color: 'green',
    },
    {
      icon: '📊',
      title: 'View Analytics',
      description: 'Deep dive into your business metrics',
      button: 'View Reports',
      color: 'orange',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getActionColor = (color: string) => {
    switch (color) {
      case 'purple':
        return 'from-purple-600 to-pink-600';
      case 'green':
        return 'from-green-600 to-emerald-600';
      case 'orange':
        return 'from-orange-600 to-red-600';
      default:
        return 'from-blue-600 to-cyan-600';
    }
  };

  return (
    <div className="p-6 lg:p-8 w-full">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-600 mt-1">
            Welcome back! Here's what's happening with your business today.
          </p>
        </div>
        <div className="flex gap-3 w-full lg:w-auto">
          <input
            type="text"
            placeholder="Search products, orders, cust..."
            className="flex-1 lg:w-72 px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            + Add Product
          </button>
          <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50">
            🔔
          </button>
          <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50">
            ⚙️
          </button>
          <button className="w-10 h-10 bg-blue-600 text-white rounded-full font-bold flex items-center justify-center">
            JD
          </button>
        </div>
      </div>

      {/* Business Performance */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Business Performance</h2>
          <div className="flex gap-2">
            {['24h', '7d', '30d', '90d'].map((range) => (
              <button
                key={range}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition ${
                  timeRange === range
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`${metric.bgColor} rounded-xl p-6 border border-gray-200`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-gray-600 text-sm mb-1">{metric.label}</p>
                  <h3 className="text-3xl font-bold text-gray-900">
                    {metric.value}
                  </h3>
                </div>
                <div
                  className={`${metric.iconBg} w-12 h-12 rounded-full flex items-center justify-center text-white text-xl`}
                >
                  {metric.icon}
                </div>
              </div>
              <p
                className={`text-sm font-medium ${
                  metric.changeType === 'positive'
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}
              >
                {metric.changeType === 'positive' ? '↑' : '↓'} {metric.change}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Revenue Trend and Top Products */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Revenue Trend */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-900">Revenue Trend</h3>
            <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50">
              ⬇️ Export
            </button>
          </div>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center">
              <div className="text-4xl mb-2">📊</div>
              <p className="text-gray-600 text-sm">Revenue chart visualization</p>
              <p className="text-gray-400 text-xs mt-1">
                Interactive charts coming soon
              </p>
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-900">Top Products</h3>
            <a href="#" className="text-blue-600 text-sm font-medium hover:underline">
              View All
            </a>
          </div>
          <div className="space-y-4">
            {topProducts.map((product) => (
              <div
                key={product.id}
                className="flex items-start gap-3 pb-4 border-b border-gray-200 last:border-b-0 last:pb-0"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-gray-900 truncate">
                    {product.name}
                  </p>
                  <p className="text-xs text-gray-600">{product.sales}</p>
                </div>
                <p className="text-sm font-bold text-gray-900 whitespace-nowrap">
                  {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <section className="mb-8 bg-white rounded-xl p-6 border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-gray-900">Recent Orders</h3>
          <a href="#" className="text-blue-600 text-sm font-medium hover:underline">
            View All Orders
          </a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Order ID
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Customer
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Product
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Amount
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Status
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Time
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition"
                >
                  <td className="py-4 px-4">
                    <a
                      href="#"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      {order.id}
                    </a>
                  </td>
                  <td className="py-4 px-4 text-gray-900">{order.customer}</td>
                  <td className="py-4 px-4 text-gray-900">{order.product}</td>
                  <td className="py-4 px-4 font-semibold text-gray-900">
                    {order.amount}
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{order.time}</td>
                  <td className="py-4 px-4">
                    <button className="p-2 hover:bg-gray-200 rounded">👁️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Action Cards */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {actions.map((action, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">{action.icon}</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                {action.title}
              </h4>
              <p className="text-sm text-gray-600 mb-4">{action.description}</p>
              <button
                className={`w-full py-3 bg-gradient-to-r ${getActionColor(
                  action.color
                )} text-white rounded-lg font-semibold hover:shadow-lg transition`}
              >
                {action.button}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

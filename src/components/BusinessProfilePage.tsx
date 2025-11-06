"use client";

import React, { useState } from "react";
import { FaPhone, FaWhatsapp, FaEnvelope, FaFacebook, FaInstagram, FaStar } from "react-icons/fa";

export default function BusinessProfilePage() {
  const [activeCategory, setActiveCategory] = useState("All Products");

  const businessInfo = {
    name: "Amara's Fashion Hub",
    description: "Fashion & Accessories",
    details:
      "We specialize in premium African fashion, traditional wear, and modern accessories. Our mission is to celebrate African culture through beautiful, high-quality clothing that makes you feel confident and stylish.",
    location: "Lagos, Nigeria",
    rating: 4.9,
    reviews: 124,
    status: "Open until 18:00",
    verified: true,
  };

  const categories = ["All Products", "Dresses", "Accessories", "Men's Wear", "Jumpsuits"];

  const products = [
    {
      id: 1,
      name: "Premium Ankara Dress Collection",
      category: "Dresses",
      price: 25000,
      originalPrice: 45000,
      discount: 29,
      image: "https://images.unsplash.com/photo-1595777707802-91d177c547e1?w=400&h=400&fit=crop",
      description: "Elegant ankara dress perfect for special occasions. Made with premium quality...",
      inStock: true,
      status: "In Stock",
    },
    {
      id: 2,
      name: "Traditional Headwrap Set",
      category: "Accessories",
      price: 8500,
      originalPrice: null,
      discount: 0,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
      description: "Beautiful traditional headwrap set with matching accessories. Perfect for...",
      inStock: true,
      status: "In Stock",
    },
    {
      id: 3,
      name: "Men's Agbada Outfit",
      category: "Men's Wear",
      price: 45000,
      originalPrice: 85000,
      discount: 35,
      image: "https://images.unsplash.com/photo-1591047990979-bd3e37faf0c8?w=400&h=400&fit=crop",
      description: "Luxurious men's agbada with intricate embroidery. Perfect for weddings and...",
      inStock: true,
      status: "In Stock",
    },
    {
      id: 4,
      name: "Ankara Handbag Collection",
      category: "Accessories",
      price: 12000,
      originalPrice: null,
      discount: 0,
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
      description: "Stylish ankara handbag that complements any outfit. Durable and...",
      inStock: false,
      status: "Out of Stock",
    },
    {
      id: 5,
      name: "Kente Scarf Premium",
      category: "Accessories",
      price: 15000,
      originalPrice: null,
      discount: 0,
      image: "https://images.unsplash.com/photo-1534077519008-16efcce9a752?w=400&h=400&fit=crop",
      description: "Authentic kente scarf with gold threads. A symbol of African heritage and...",
      inStock: true,
      status: "In Stock",
    },
    {
      id: 6,
      name: "Modern Ankara Jumpsuit",
      category: "Jumpsuits",
      price: 28000,
      originalPrice: null,
      discount: 0,
      image: "https://images.unsplash.com/photo-1578932750294-708c1d1dd425?w=400&h=400&fit=crop",
      description: "Contemporary ankara jumpsuit that combines traditional patterns with...",
      inStock: true,
      status: "In Stock",
    },
  ];

  const businessHours = [
    { day: "Monday", time: "09:00 - 18:00" },
    { day: "Tuesday", time: "09:00 - 18:00" },
    { day: "Wednesday", time: "09:00 - 18:00" },
    { day: "Thursday", time: "09:00 - 18:00" },
    { day: "Friday", time: "09:00 - 18:00" },
    { day: "Saturday", time: "10:00 - 16:00" },
    { day: "Sunday", time: "12:00 - 16:00" },
  ];

  const filteredProducts =
    activeCategory === "All Products"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative h-64 bg-gradient-to-r from-gray-400 to-gray-500 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1595777707802-91d177c547e1?w=1200&h=500&fit=crop"
          alt="Business Header"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="absolute inset-0 flex items-end p-6">
          <div className="flex gap-4 items-end">
            <div className="w-24 h-24 bg-white rounded-lg overflow-hidden flex items-center justify-center border-4 border-green-500 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1595777707802-91d177c547e1?w=150&h=150&fit=crop"
                alt="Amara's Fashion Hub"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-white mb-2">
              <div className="flex items-center gap-2">
                <h1 className="text-4xl font-bold">{businessInfo.name}</h1>
                {businessInfo.verified && (
                  <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                    Verified
                  </span>
                )}
              </div>
              <p className="text-gray-200 font-medium">{businessInfo.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <p className="text-gray-700 text-sm leading-relaxed mb-4 max-w-3xl">
            {businessInfo.details}
          </p>

          <div className="flex flex-wrap items-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-400" size={16} />
              <span className="font-semibold text-gray-900">{businessInfo.rating}</span>
              <span className="text-gray-600 text-sm">({businessInfo.reviews} reviews)</span>
            </div>
            <span className="text-sm text-gray-600">📍 {businessInfo.location}</span>
            <span className="text-sm text-gray-600">🕐 {businessInfo.status}</span>
          </div>

          <div className="flex flex-wrap gap-3 mb-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
              <FaPhone size={14} />
              Call
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
              <FaWhatsapp size={14} />
              WhatsApp
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
              <FaEnvelope size={14} />
              Email
            </button>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FaFacebook size={18} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-pink-600 transition-colors"
            >
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Products</h2>

          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                  activeCategory === cat
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-gray-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-64 bg-gray-200 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.discount > 0 && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      -{product.discount}%
                    </div>
                  )}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <span className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <p className="text-sm text-teal-600 font-medium mb-1">{product.category}</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl font-bold text-gray-900">
                      ₦{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ₦{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        product.inStock
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {product.status}
                    </span>
                  </div>

                  <button
                    disabled={!product.inStock}
                    className={`w-full py-2 rounded-lg font-medium transition-colors text-sm ${
                      product.inStock
                        ? "bg-teal-600 text-white hover:bg-teal-700"
                        : "bg-gray-300 text-gray-600 cursor-not-allowed"
                    }`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <FaWhatsapp size={14} />
                      Order via WhatsApp
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Hours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessHours.map((hour) => (
              <div key={hour.day} className="flex justify-between items-center pb-4 border-b border-gray-200 last:border-b-0">
                <span className="font-semibold text-gray-900">{hour.day}</span>
                <span className="text-gray-600 text-sm">{hour.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 text-white rounded-lg p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-2xl">🏪</span>
            <span className="text-2xl font-bold">MSME Hub</span>
          </div>
          <p className="text-gray-300 text-sm">This business is powered by MSME Hub - Africa's premier marketplace for small businesses</p>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import SeoManagement from "./components/SeoManagement";
import ArticleManagement from "./components/ArticleManagement";
import TestimonialManagement from "./components/TestimonialManagement";
import PortfolioManagement from "./components/PortfolioManagement";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState<"seo" | "articles" | "testimonials" | "portfolio">("articles");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check (in production, use proper authentication)
    if (password === "admin123") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Password salah!");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold mb-2">Admin Panel</h1>
              <p className="text-gray-600 text-sm">Central Solusi Bisnis</p>
            </div>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Masukkan password"
                />
              </div>
              {error && (
                <div className="mb-4 bg-red-50 border border-red-200 text-red-800 px-4 py-2 rounded-lg text-sm">
                  {error}
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Login
              </button>
              <p className="mt-4 text-sm text-gray-600 text-center">
                Demo password: admin123
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Admin Panel</h1>
              <p className="text-gray-600">Kelola konten website Anda</p>
            </div>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Logout
            </button>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-lg shadow-md mb-6">
            <div className="flex border-b overflow-x-auto">
              <button
                onClick={() => setActiveTab("articles")}
                className={`px-6 py-4 font-semibold transition-colors whitespace-nowrap ${
                  activeTab === "articles"
                    ? "border-b-2 border-primary-600 text-primary-600"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Artikel
              </button>
              <button
                onClick={() => setActiveTab("testimonials")}
                className={`px-6 py-4 font-semibold transition-colors whitespace-nowrap ${
                  activeTab === "testimonials"
                    ? "border-b-2 border-primary-600 text-primary-600"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Testimoni
              </button>
              <button
                onClick={() => setActiveTab("portfolio")}
                className={`px-6 py-4 font-semibold transition-colors whitespace-nowrap ${
                  activeTab === "portfolio"
                    ? "border-b-2 border-primary-600 text-primary-600"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Portfolio Klien
              </button>
              <button
                onClick={() => setActiveTab("seo")}
                className={`px-6 py-4 font-semibold transition-colors whitespace-nowrap ${
                  activeTab === "seo"
                    ? "border-b-2 border-primary-600 text-primary-600"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                SEO
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-lg shadow-md p-6">
            {activeTab === "articles" && <ArticleManagement />}
            {activeTab === "testimonials" && <TestimonialManagement />}
            {activeTab === "portfolio" && <PortfolioManagement />}
            {activeTab === "seo" && <SeoManagement />}
          </div>
        </div>
      </div>
    </div>
  );
}

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
    // Simple password check using environment variable
    const correctPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "defaultAdminPass2024";
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setError("");
      localStorage.setItem("adminAuth", "true");
    } else {
      setError("Password salah!");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
    localStorage.removeItem("adminAuth");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100 py-12 px-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="inline-block p-4 bg-primary-100 rounded-full mb-4">
                <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold mb-2 text-gray-800">Admin Panel</h1>
              <p className="text-gray-600">Centra Solusi Bisnis</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Masukkan password admin"
                  required
                />
              </div>
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm flex items-start">
                  <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span>{error}</span>
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
              >
                Login ke Admin Panel
              </button>
            </form>
          </div>
          <p className="text-center text-sm text-gray-600 mt-6">
            © 2025 Centra Solusi Bisnis. All rights reserved.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-1">Admin Panel</h1>
                <p className="text-gray-600">Kelola konten website Centra Solusi Bisnis</p>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-red-600 text-white px-6 py-2.5 rounded-lg hover:bg-red-700 transition-colors shadow-sm hover:shadow"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="text-sm text-blue-800 font-semibold mb-1">Mode Demo - Tanpa Database</p>
                <p className="text-xs text-blue-700">Data disimpan sementara di browser (localStorage).</p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-xl shadow-md mb-6 overflow-hidden">
            <div className="flex border-b overflow-x-auto">
              <button
                onClick={() => setActiveTab("articles")}
                className={`px-6 py-4 font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                  activeTab === "articles"
                    ? "border-b-2 border-primary-600 text-primary-600 bg-primary-50"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Artikel Blog
              </button>
              <button
                onClick={() => setActiveTab("testimonials")}
                className={`px-6 py-4 font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                  activeTab === "testimonials"
                    ? "border-b-2 border-primary-600 text-primary-600 bg-primary-50"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Testimoni Klien
              </button>
              <button
                onClick={() => setActiveTab("portfolio")}
                className={`px-6 py-4 font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                  activeTab === "portfolio"
                    ? "border-b-2 border-primary-600 text-primary-600 bg-primary-50"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Portfolio Klien
              </button>
              <button
                onClick={() => setActiveTab("seo")}
                className={`px-6 py-4 font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                  activeTab === "seo"
                    ? "border-b-2 border-primary-600 text-primary-600 bg-primary-50"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                SEO Settings
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-xl shadow-md p-6">
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

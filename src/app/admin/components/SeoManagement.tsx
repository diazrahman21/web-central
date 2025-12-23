"use client";

import { useState } from "react";

interface PageMeta {
  title: string;
  description: string;
  keywords: string;
}

interface SeoData {
  home: PageMeta;
  about: PageMeta;
  services: PageMeta;
  contact: PageMeta;
  blog: PageMeta;
}

export default function SeoManagement() {
  const [saveMessage, setSaveMessage] = useState("");

  const [seoData, setSeoData] = useState<SeoData>({
    home: {
      title: "Central Solusi Bisnis - Solusi Bisnis Terpadu",
      description: "Central Solusi Bisnis menyediakan solusi bisnis terpadu untuk membantu mengembangkan usaha Anda",
      keywords: "solusi bisnis, konsultan bisnis, pengembangan bisnis, central solusi bisnis"
    },
    about: {
      title: "Tentang Kami - Centra Solusi Bisnis",
      description: "Kenali lebih dekat Centra Solusi Bisnis, mitra terpercaya untuk solusi bisnis terpadu",
      keywords: "tentang kami, profil perusahaan, visi misi, centra solusi bisnis"
    },
    services: {
      title: "Layanan Kami - Central Solusi Bisnis",
      description: "Berbagai layanan bisnis profesional untuk membantu mengembangkan perusahaan Anda",
      keywords: "layanan bisnis, konsultasi, manajemen, pelatihan, transformasi digital"
    },
    contact: {
      title: "Hubungi Kami - Centra Solusi Bisnis",
      description: "Hubungi Centra Solusi Bisnis untuk konsultasi bisnis dan informasi lebih lanjut",
      keywords: "kontak, hubungi kami, alamat, telepon, email"
    },
    blog: {
      title: "Blog & Artikel - Centra Solusi Bisnis",
      description: "Artikel dan tips bisnis terbaru dari Centra Solusi Bisnis",
      keywords: "blog, artikel bisnis, tips bisnis, berita bisnis"
    }
  });

  const handleChange = (page: keyof SeoData, field: keyof PageMeta, value: string) => {
    setSeoData(prev => ({
      ...prev,
      [page]: {
        ...prev[page],
        [field]: value
      }
    }));
  };

  const handleSave = () => {
    // In production, save to database or API
    setSaveMessage("SEO data berhasil disimpan!");
    setTimeout(() => {
      setSaveMessage("");
    }, 3000);
  };

  const getPageLabel = (page: string) => {
    const labels: { [key: string]: string } = {
      home: "Beranda",
      about: "Tentang Kami",
      services: "Layanan",
      contact: "Kontak",
      blog: "Blog"
    };
    return labels[page] || page;
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Manajemen SEO</h2>
        <p className="text-gray-600">Kelola metadata SEO untuk setiap halaman</p>
      </div>

      {saveMessage && (
        <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
          {saveMessage}
        </div>
      )}

      <div className="space-y-6">
        {Object.entries(seoData).map(([page, data]) => (
          <div key={page} className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-primary-700">
              {getPageLabel(page)}
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Meta Title
                </label>
                <input
                  type="text"
                  value={data.title}
                  onChange={(e) => handleChange(page as keyof SeoData, 'title', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Page title"
                />
                <p className={`text-xs mt-1 ${
                  data.title.length >= 50 && data.title.length <= 60 
                    ? 'text-green-600' 
                    : 'text-gray-500'
                }`}>
                  Karakter: {data.title.length} (Optimal: 50-60)
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Meta Description
                </label>
                <textarea
                  value={data.description}
                  onChange={(e) => handleChange(page as keyof SeoData, 'description', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  placeholder="Page description"
                />
                <p className={`text-xs mt-1 ${
                  data.description.length >= 150 && data.description.length <= 160 
                    ? 'text-green-600' 
                    : 'text-gray-500'
                }`}>
                  Karakter: {data.description.length} (Optimal: 150-160)
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Meta Keywords
                </label>
                <input
                  type="text"
                  value={data.keywords}
                  onChange={(e) => handleChange(page as keyof SeoData, 'keywords', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="keyword1, keyword2, keyword3"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Pisahkan dengan koma
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={handleSave}
          className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
        >
          Simpan Semua Perubahan
        </button>
      </div>

      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-bold mb-2 text-blue-800">Tips SEO:</h3>
        <ul className="list-disc list-inside text-blue-800 space-y-1 text-sm">
          <li>Meta title optimal: 50-60 karakter</li>
          <li>Meta description optimal: 150-160 karakter</li>
          <li>Gunakan keywords yang relevan dengan konten</li>
          <li>Hindari keyword stuffing</li>
          <li>Buat deskripsi yang menarik dan informatif</li>
          <li>Pastikan setiap halaman memiliki meta tag yang unik</li>
        </ul>
      </div>
    </div>
  );
}

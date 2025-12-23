"use client";

import { useState } from "react";

interface Portfolio {
  id: number;
  clientName: string;
  industry: string;
  projectTitle: string;
  description: string;
  year: string;
  services: string[];
  published: boolean;
}

export default function PortfolioManagement() {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([
    {
      id: 1,
      clientName: "PT Teknologi Maju",
      industry: "Technology",
      projectTitle: "Implementasi ERP System",
      description: "Implementasi sistem ERP untuk meningkatkan efisiensi operasional dan integrasi data antar departemen.",
      year: "2024",
      services: ["Konsultasi Bisnis", "Transformasi Digital"],
      published: true
    },
    {
      id: 2,
      clientName: "CV Retail Sejahtera",
      industry: "Retail",
      projectTitle: "Optimasi Manajemen Keuangan",
      description: "Program optimalisasi manajemen keuangan dan pelatihan tim finance untuk pengelolaan cashflow yang lebih baik.",
      year: "2024",
      services: ["Manajemen Keuangan", "Pelatihan SDM"],
      published: true
    }
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [currentPortfolio, setCurrentPortfolio] = useState<Portfolio | null>(null);
  const [saveMessage, setSaveMessage] = useState("");

  const [formData, setFormData] = useState({
    clientName: "",
    industry: "",
    projectTitle: "",
    description: "",
    year: new Date().getFullYear().toString(),
    services: [] as string[],
    published: true
  });

  const availableServices = [
    "Konsultasi Bisnis",
    "Manajemen Keuangan",
    "Pelatihan SDM",
    "Transformasi Digital",
    "Manajemen Proyek",
    "Business Intelligence"
  ];

  const handleEdit = (portfolio: Portfolio) => {
    setCurrentPortfolio(portfolio);
    setFormData({
      clientName: portfolio.clientName,
      industry: portfolio.industry,
      projectTitle: portfolio.projectTitle,
      description: portfolio.description,
      year: portfolio.year,
      services: portfolio.services,
      published: portfolio.published
    });
    setIsEditing(true);
  };

  const handleDelete = (id: number) => {
    if (confirm("Yakin ingin menghapus portfolio ini?")) {
      setPortfolios(portfolios.filter(p => p.id !== id));
      setSaveMessage("Portfolio berhasil dihapus!");
      setTimeout(() => setSaveMessage(""), 3000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentPortfolio) {
      setPortfolios(portfolios.map(p => 
        p.id === currentPortfolio.id 
          ? { ...formData, id: currentPortfolio.id }
          : p
      ));
      setSaveMessage("Portfolio berhasil diupdate!");
    } else {
      const newPortfolio: Portfolio = {
        ...formData,
        id: Math.max(0, ...portfolios.map(p => p.id)) + 1
      };
      setPortfolios([newPortfolio, ...portfolios]);
      setSaveMessage("Portfolio berhasil ditambahkan!");
    }

    setFormData({
      clientName: "",
      industry: "",
      projectTitle: "",
      description: "",
      year: new Date().getFullYear().toString(),
      services: [],
      published: true
    });
    setIsEditing(false);
    setCurrentPortfolio(null);
    setTimeout(() => setSaveMessage(""), 3000);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setCurrentPortfolio(null);
    setFormData({
      clientName: "",
      industry: "",
      projectTitle: "",
      description: "",
      year: new Date().getFullYear().toString(),
      services: [],
      published: true
    });
  };

  const toggleService = (service: string) => {
    if (formData.services.includes(service)) {
      setFormData({
        ...formData,
        services: formData.services.filter(s => s !== service)
      });
    } else {
      setFormData({
        ...formData,
        services: [...formData.services, service]
      });
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manajemen Portfolio Klien</h2>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
          >
            + Tambah Portfolio
          </button>
        )}
      </div>

      {saveMessage && (
        <div className="mb-4 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
          {saveMessage}
        </div>
      )}

      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nama Klien *
              </label>
              <input
                type="text"
                value={formData.clientName}
                onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Industri *
              </label>
              <input
                type="text"
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Judul Proyek *
            </label>
            <input
              type="text"
              value={formData.projectTitle}
              onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Deskripsi Proyek *
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tahun
            </label>
            <input
              type="text"
              value={formData.year}
              onChange={(e) => setFormData({ ...formData, year: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="2024"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Layanan yang Digunakan *
            </label>
            <div className="grid md:grid-cols-2 gap-2">
              {availableServices.map((service) => (
                <label key={service} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.services.includes(service)}
                    onChange={() => toggleService(service)}
                    className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                  />
                  <span className="text-sm text-gray-700">{service}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="published"
              checked={formData.published}
              onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
              className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
            />
            <label htmlFor="published" className="ml-2 text-sm text-gray-700">
              Tampilkan di website
            </label>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              {currentPortfolio ? "Update Portfolio" : "Simpan Portfolio"}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Batal
            </button>
          </div>
        </form>
      ) : (
        <div className="space-y-4">
          {portfolios.map((portfolio) => (
            <div key={portfolio.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold">{portfolio.clientName}</h3>
                    {!portfolio.published && (
                      <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">Hidden</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    {portfolio.industry} • {portfolio.year}
                  </p>
                  <h4 className="font-semibold text-primary-700 mb-2">{portfolio.projectTitle}</h4>
                  <p className="text-gray-700 mb-3">{portfolio.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {portfolio.services.map((service, idx) => (
                      <span key={idx} className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => handleEdit(portfolio)}
                    className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(portfolio.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition-colors"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          ))}

          {portfolios.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              Belum ada portfolio. Klik &quot;Tambah Portfolio&quot; untuk menambahkan portfolio baru.
            </div>
          )}
        </div>
      )}
    </div>
  );
}

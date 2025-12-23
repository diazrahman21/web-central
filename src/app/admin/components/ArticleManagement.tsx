"use client";

import { useState } from "react";

interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  date: string;
  published: boolean;
}

export default function ArticleManagement() {
  const [articles, setArticles] = useState<Article[]>([
    {
      id: 1,
      title: "Panduan Lengkap Mendirikan LSP: Syarat, Proses, dan Tips Sukses",
      slug: "panduan-lengkap-mendirikan-lsp",
      excerpt: "Pelajari langkah-langkah lengkap untuk mendirikan Lembaga Sertifikasi Profesi (LSP) sesuai regulasi BNSP. Dari persiapan dokumen hingga approval.",
      content: "Konten lengkap artikel tentang LSP...",
      author: "Tim CSB",
      category: "Pendampingan Institusi",
      date: "2025-12-20",
      published: true
    },
    {
      id: 2,
      title: "Tips Mengelola Keuangan UMKM: Pembukuan Sederhana yang Efektif",
      slug: "tips-mengelola-keuangan-umkm",
      excerpt: "Pembukuan yang rapi adalah kunci kesuksesan UMKM. Pelajari cara sederhana mengelola keuangan bisnis Anda dengan benar.",
      content: "Konten lengkap artikel tentang pembukuan UMKM...",
      author: "Tim CSB",
      category: "Keuangan & Akuntansi",
      date: "2025-12-18",
      published: true
    },
    {
      id: 3,
      title: "Cara Membuka Program Studi Baru di Perguruan Tinggi",
      slug: "cara-membuka-program-studi-baru",
      excerpt: "Panduan praktis untuk membuka program studi baru di universitas. Mulai dari penyusunan kurikulum hingga persetujuan Kemendikbud.",
      content: "Konten lengkap artikel tentang pembukaan prodi...",
      author: "Tim CSB",
      category: "Pendampingan Institusi",
      date: "2025-12-15",
      published: true
    }
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [currentArticle, setCurrentArticle] = useState<Article | null>(null);
  const [saveMessage, setSaveMessage] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    author: "Admin",
    category: "",
    date: new Date().toISOString().split('T')[0],
    published: true
  });

  const handleEdit = (article: Article) => {
    setCurrentArticle(article);
    setFormData({
      title: article.title,
      slug: article.slug,
      excerpt: article.excerpt,
      content: article.content,
      author: article.author,
      category: article.category,
      date: article.date,
      published: article.published
    });
    setIsEditing(true);
  };

  const handleDelete = (id: number) => {
    if (confirm("Yakin ingin menghapus artikel ini?")) {
      setArticles(articles.filter(a => a.id !== id));
      setSaveMessage("Artikel berhasil dihapus!");
      setTimeout(() => setSaveMessage(""), 3000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentArticle) {
      // Update existing article
      setArticles(articles.map(a => 
        a.id === currentArticle.id 
          ? { ...formData, id: currentArticle.id }
          : a
      ));
      setSaveMessage("Artikel berhasil diupdate!");
    } else {
      // Create new article
      const newArticle: Article = {
        ...formData,
        id: Math.max(0, ...articles.map(a => a.id)) + 1
      };
      setArticles([newArticle, ...articles]);
      setSaveMessage("Artikel berhasil ditambahkan!");
    }

    // Reset form
    setFormData({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      author: "Admin",
      category: "",
      date: new Date().toISOString().split('T')[0],
      published: true
    });
    setIsEditing(false);
    setCurrentArticle(null);
    setTimeout(() => setSaveMessage(""), 3000);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setCurrentArticle(null);
    setFormData({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      author: "Admin",
      category: "",
      date: new Date().toISOString().split('T')[0],
      published: true
    });
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manajemen Artikel</h2>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
          >
            + Tambah Artikel
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
                Judul Artikel *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => {
                  setFormData({ ...formData, title: e.target.value });
                  if (!currentArticle) {
                    setFormData(prev => ({ ...prev, slug: generateSlug(e.target.value) }));
                  }
                }}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Slug (URL)
              </label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ringkasan *
            </label>
            <textarea
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              required
              rows={2}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Konten Artikel *
            </label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              required
              rows={8}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Penulis
              </label>
              <input
                type="text"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Kategori
              </label>
              <input
                type="text"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tanggal
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
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
              Publikasikan artikel
            </label>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              {currentArticle ? "Update Artikel" : "Simpan Artikel"}
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
          {articles.map((article) => (
            <div key={article.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold">{article.title}</h3>
                    {!article.published && (
                      <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">Draft</span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{article.excerpt}</p>
                  <div className="flex gap-4 text-xs text-gray-500">
                    <span>{article.date}</span>
                    <span>{article.author}</span>
                    <span>{article.category}</span>
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => handleEdit(article)}
                    className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(article.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition-colors"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          ))}

          {articles.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              Belum ada artikel. Klik &quot;Tambah Artikel&quot; untuk membuat artikel baru.
            </div>
          )}
        </div>
      )}
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog & Artikel - Central Solusi Bisnis",
  description: "Artikel dan tips bisnis terbaru dari Central Solusi Bisnis untuk membantu mengembangkan bisnis Anda",
  keywords: "blog bisnis, artikel bisnis, tips bisnis, berita bisnis, central solusi bisnis",
};

// Demo articles data (in production, fetch from database/API)
const articles = [
  {
    id: 1,
    title: "Tips Meningkatkan Efisiensi Bisnis di Era Digital",
    slug: "tips-meningkatkan-efisiensi-bisnis",
    excerpt: "Pelajari strategi efektif untuk meningkatkan efisiensi bisnis Anda menggunakan teknologi digital terkini.",
    author: "Admin",
    category: "Bisnis Digital",
    date: "2025-12-20",
    readTime: "5 min"
  },
  {
    id: 2,
    title: "Pentingnya Manajemen Keuangan yang Baik",
    slug: "pentingnya-manajemen-keuangan",
    excerpt: "Manajemen keuangan yang baik adalah kunci kesuksesan bisnis jangka panjang. Pelajari praktik terbaik dalam mengelola keuangan perusahaan.",
    author: "Admin",
    category: "Keuangan",
    date: "2025-12-18",
    readTime: "7 min"
  },
  {
    id: 3,
    title: "Strategi Pelatihan SDM yang Efektif",
    slug: "strategi-pelatihan-sdm-efektif",
    excerpt: "Bagaimana merancang program pelatihan SDM yang efektif untuk meningkatkan kompetensi tim Anda.",
    author: "Admin",
    category: "SDM",
    date: "2025-12-15",
    readTime: "6 min"
  },
  {
    id: 4,
    title: "Transformasi Digital: Langkah Awal untuk Bisnis Tradisional",
    slug: "transformasi-digital-langkah-awal",
    excerpt: "Panduan praktis memulai transformasi digital untuk bisnis tradisional yang ingin beradaptasi dengan era modern.",
    author: "Admin",
    category: "Transformasi Digital",
    date: "2025-12-12",
    readTime: "8 min"
  },
  {
    id: 5,
    title: "Cara Mengoptimalkan Cashflow Perusahaan",
    slug: "mengoptimalkan-cashflow-perusahaan",
    excerpt: "Tips dan trik untuk mengoptimalkan arus kas perusahaan agar bisnis tetap sehat dan berkembang.",
    author: "Admin",
    category: "Keuangan",
    date: "2025-12-10",
    readTime: "6 min"
  },
  {
    id: 6,
    title: "Membangun Budaya Kerja yang Produktif",
    slug: "membangun-budaya-kerja-produktif",
    excerpt: "Strategi membangun budaya kerja yang positif dan produktif untuk meningkatkan performa tim.",
    author: "Admin",
    category: "SDM",
    date: "2025-12-08",
    readTime: "5 min"
  }
];

const categories = ["Semua", "Bisnis Digital", "Keuangan", "SDM", "Transformasi Digital"];

export default function BlogPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Blog & Artikel</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dapatkan insight, tips, dan berita terbaru seputar bisnis dan manajemen
            </p>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full transition-colors ${
                  category === "Semua"
                    ? "bg-primary-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-xs">
                      {article.readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 hover:text-primary-600 transition-colors">
                    <Link href={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span>{article.author}</span>
                    <span>{new Date(article.date).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}</span>
                  </div>
                  
                  <Link
                    href={`/blog/${article.slug}`}
                    className="text-primary-600 font-semibold hover:underline"
                  >
                    Baca Selengkapnya →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              Muat Lebih Banyak
            </button>
          </div>

          {/* Newsletter Section */}
          <div className="mt-16 bg-primary-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Berlangganan Newsletter</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Dapatkan artikel terbaru dan tips bisnis langsung ke email Anda
            </p>
            <form className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Email Anda"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Berlangganan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

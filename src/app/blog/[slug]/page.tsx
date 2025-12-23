import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

// Demo articles data (in production, fetch from database/API)
const articles = [
  {
    id: 1,
    title: "Tips Meningkatkan Efisiensi Bisnis di Era Digital",
    slug: "tips-meningkatkan-efisiensi-bisnis",
    excerpt: "Pelajari strategi efektif untuk meningkatkan efisiensi bisnis Anda menggunakan teknologi digital terkini.",
    content: `
      <h2>Pentingnya Efisiensi Bisnis</h2>
      <p>Di era digital saat ini, efisiensi bisnis menjadi kunci utama untuk tetap kompetitif. Perusahaan yang mampu mengoptimalkan operasional mereka akan memiliki keunggulan signifikan dibanding kompetitor.</p>
      
      <h2>Strategi Meningkatkan Efisiensi</h2>
      <h3>1. Otomasi Proses Bisnis</h3>
      <p>Implementasikan sistem otomasi untuk tugas-tugas repetitif. Ini akan menghemat waktu dan mengurangi kesalahan manusia.</p>
      
      <h3>2. Gunakan Cloud Technology</h3>
      <p>Cloud computing memungkinkan akses data dari mana saja, meningkatkan kolaborasi tim, dan mengurangi biaya infrastruktur IT.</p>
      
      <h3>3. Analisis Data untuk Keputusan</h3>
      <p>Manfaatkan data analytics untuk membuat keputusan bisnis yang lebih tepat dan terukur.</p>
      
      <h2>Implementasi Praktis</h2>
      <p>Mulailah dengan mengidentifikasi proses yang paling memakan waktu dalam operasional Anda. Lalu, cari solusi teknologi yang tepat untuk mengoptimalkannya.</p>
      
      <h2>Kesimpulan</h2>
      <p>Meningkatkan efisiensi bisnis memerlukan komitmen dan investasi, namun hasilnya akan sangat berharga untuk pertumbuhan jangka panjang perusahaan Anda.</p>
    `,
    author: "Admin",
    category: "Bisnis Digital",
    date: "2025-12-20",
    readTime: "5 min"
  },
  {
    id: 2,
    title: "Pentingnya Manajemen Keuangan yang Baik",
    slug: "pentingnya-manajemen-keuangan",
    excerpt: "Manajemen keuangan yang baik adalah kunci kesuksesan bisnis jangka panjang.",
    content: `
      <h2>Mengapa Manajemen Keuangan Penting?</h2>
      <p>Manajemen keuangan yang baik adalah pondasi kesuksesan bisnis. Tanpa pengelolaan keuangan yang tepat, bahkan bisnis dengan potensi besar bisa mengalami kegagalan.</p>
      
      <h2>Prinsip Dasar Manajemen Keuangan</h2>
      <h3>1. Pemisahan Keuangan Pribadi dan Bisnis</h3>
      <p>Selalu pisahkan keuangan pribadi dari keuangan bisnis untuk transparansi yang lebih baik.</p>
      
      <h3>2. Budgeting yang Realistis</h3>
      <p>Buat budget yang realistis dan patuhi dengan disiplin.</p>
      
      <h3>3. Monitoring Cashflow</h3>
      <p>Monitor arus kas secara rutin untuk menghindari masalah likuiditas.</p>
      
      <h2>Tools yang Dapat Membantu</h2>
      <p>Gunakan software akuntansi modern untuk memudahkan pencatatan dan pelaporan keuangan.</p>
      
      <h2>Kesimpulan</h2>
      <p>Investasi waktu dalam manajemen keuangan yang baik akan memberikan return yang signifikan untuk kesehatan dan pertumbuhan bisnis Anda.</p>
    `,
    author: "Admin",
    category: "Keuangan",
    date: "2025-12-18",
    readTime: "7 min"
  }
];

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articles.find(a => a.slug === params.slug);
  
  if (!article) {
    return {
      title: "Artikel Tidak Ditemukan"
    };
  }

  return {
    title: `${article.title} - Centra Solusi Bisnis`,
    description: article.excerpt,
    keywords: `${article.category}, artikel bisnis, ${article.title.toLowerCase()}`
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find(a => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary-600">Beranda</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-primary-600">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{article.title}</span>
          </nav>

          {/* Article Header */}
          <article>
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary-100 text-primary-700 text-sm px-3 py-1 rounded-full">
                  {article.category}
                </span>
                <span className="text-gray-500 text-sm">{article.readTime}</span>
              </div>
              
              <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
              
              <div className="flex items-center gap-6 text-gray-600">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {article.author}
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {new Date(article.date).toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </span>
              </div>
            </header>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Share Buttons */}
            <div className="border-t border-gray-200 pt-8 mb-12">
              <h3 className="text-lg font-semibold mb-4">Bagikan Artikel Ini:</h3>
              <div className="flex gap-3">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Facebook
                </button>
                <button className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors">
                  Twitter
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  WhatsApp
                </button>
                <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                  LinkedIn
                </button>
              </div>
            </div>

            {/* Related Articles */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Artikel Terkait</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {articles.filter(a => a.id !== article.id).slice(0, 2).map((related) => (
                  <Link
                    key={related.id}
                    href={`/blog/${related.slug}`}
                    className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <span className="text-xs text-primary-600 font-semibold">{related.category}</span>
                    <h4 className="font-bold mt-2 mb-2 hover:text-primary-600">{related.title}</h4>
                    <p className="text-sm text-gray-600 line-clamp-2">{related.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12 bg-primary-600 text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Butuh Bantuan untuk Bisnis Anda?</h3>
              <p className="mb-6">
                Konsultasikan kebutuhan bisnis Anda dengan tim ahli kami
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Hubungi Kami
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

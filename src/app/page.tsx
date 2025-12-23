import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Solusi Bisnis Terpadu untuk Kesuksesan Anda
            </h1>
            <p className="text-xl mb-8">
              Kami membantu perusahaan mencapai potensi maksimal melalui konsultasi bisnis, 
              manajemen keuangan, dan strategi pertumbuhan yang terukur.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Konsultasi Gratis
              </a>
              <a
                href="#services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                Lihat Layanan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Tentang Kami</h2>
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold mb-4">Profil Perusahaan</h3>
                <p className="text-gray-700 mb-4">
                  Central Solusi Bisnis adalah perusahaan konsultan bisnis yang berdedikasi untuk membantu perusahaan 
                  mencapai potensi maksimal mereka. Dengan pengalaman bertahun-tahun dalam industri, kami telah 
                  membantu ratusan klien mencapai tujuan bisnis mereka.
                </p>
                <p className="text-gray-700">
                  Kami percaya bahwa setiap bisnis memiliki tantangan unik, dan solusi yang efektif memerlukan 
                  pendekatan yang disesuaikan.
                </p>
              </div>
              <div>
                <div className="bg-primary-50 p-6 rounded-lg mb-4">
                  <h3 className="text-xl font-bold mb-2 text-primary-800">Visi</h3>
                  <p className="text-gray-700">
                    Menjadi mitra konsultan bisnis terdepan yang dipercaya dalam memberikan solusi inovatif 
                    dan berkelanjutan untuk pertumbuhan bisnis di Indonesia.
                  </p>
                </div>
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2 text-primary-800">Misi</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Memberikan solusi bisnis yang tepat dan terukur</li>
                    <li>Mengembangkan strategi bisnis yang inovatif</li>
                    <li>Membangun kemitraan jangka panjang dengan klien</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Layanan Kami</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Solusi bisnis komprehensif yang dirancang khusus untuk kebutuhan perusahaan Anda
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-primary-700">Konsultasi Bisnis</h3>
                <p className="text-gray-700 mb-6">
                  Strategi bisnis yang komprehensif untuk meningkatkan efisiensi dan profitabilitas perusahaan Anda.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Business model development</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Market analysis</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Growth strategy planning</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-primary-700">Manajemen Keuangan</h3>
                <p className="text-gray-700 mb-6">
                  Optimalisasi pengelolaan keuangan perusahaan untuk mencapai stabilitas finansial jangka panjang.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Financial planning</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Cash flow management</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Investment analysis</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-primary-700">Pelatihan SDM</h3>
                <p className="text-gray-700 mb-6">
                  Program pelatihan komprehensif untuk mengembangkan kompetensi karyawan dan meningkatkan produktivitas.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Leadership training</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Technical skills development</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Soft skills development</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-primary-700">Transformasi Digital</h3>
                <p className="text-gray-700 mb-6">
                  Implementasi teknologi modern untuk meningkatkan efisiensi operasional dan daya saing bisnis.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Digital strategy development</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Implementasi sistem ERP</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">E-commerce solutions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-primary-700">Manajemen Proyek</h3>
                <p className="text-gray-700 mb-6">
                  Layanan manajemen proyek profesional untuk memastikan proyek berjalan sesuai jadwal, anggaran, dan kualitas yang diharapkan.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Project planning dan scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Resource management</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Risk management</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-primary-700">Business Intelligence</h3>
                <p className="text-gray-700 mb-6">
                  Solusi business intelligence untuk membantu perusahaan membuat keputusan berdasarkan data dan insight yang akurat.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Data analytics</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Dashboard dan reporting</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Predictive analytics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Testimoni Klien</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <div className="text-yellow-500 mb-4 font-semibold">Rating: 5/5</div>
                <p className="text-gray-700 mb-4 italic">
                  &quot;Central Solusi Bisnis sangat membantu kami dalam meningkatkan efisiensi operasional perusahaan. Tim yang profesional dan solusi yang tepat sasaran.&quot;
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold">Budi Santoso</p>
                  <p className="text-sm text-gray-600">CEO - PT Maju Jaya</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <div className="text-yellow-500 mb-4 font-semibold">Rating: 5/5</div>
                <p className="text-gray-700 mb-4 italic">
                  &quot;Pelayanan yang luar biasa! Konsultasi keuangan yang diberikan sangat membantu kami dalam mengelola cashflow perusahaan.&quot;
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold">Sarah Wijaya</p>
                  <p className="text-sm text-gray-600">Direktur Keuangan - CV Berkah Sejahtera</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Portfolio Klien</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">PT Teknologi Maju</h3>
                  <p className="text-sm text-gray-600">Technology • 2024</p>
                </div>
                <h4 className="font-semibold text-primary-700 mb-2">Implementasi ERP System</h4>
                <p className="text-gray-700 mb-4">
                  Implementasi sistem ERP untuk meningkatkan efisiensi operasional dan integrasi data antar departemen.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded">Konsultasi Bisnis</span>
                  <span className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded">Transformasi Digital</span>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">CV Retail Sejahtera</h3>
                  <p className="text-sm text-gray-600">Retail • 2024</p>
                </div>
                <h4 className="font-semibold text-primary-700 mb-2">Optimasi Manajemen Keuangan</h4>
                <p className="text-gray-700 mb-4">
                  Program optimalisasi manajemen keuangan dan pelatihan tim finance untuk pengelolaan cashflow yang lebih baik.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded">Manajemen Keuangan</span>
                  <span className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded">Pelatihan SDM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Hubungi Kami</h2>
              <p className="text-xl text-gray-600">
                Siap membantu mengembangkan bisnis Anda. Hubungi kami untuk konsultasi gratis!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Kirim Pesan</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="nama@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="+62 xxx xxxx xxxx"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Pesan
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Ceritakan kebutuhan bisnis Anda..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                  >
                    Kirim Pesan
                  </button>
                </form>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="flex items-center mb-4">
                    <svg className="w-6 h-6 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <h3 className="font-bold text-lg">Telepon</h3>
                  </div>
                  <p className="text-gray-700">+62 21 1234 5678</p>
                  <p className="text-gray-700">+62 812 3456 7890</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="flex items-center mb-4">
                    <svg className="w-6 h-6 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <h3 className="font-bold text-lg">Email</h3>
                  </div>
                  <p className="text-gray-700">info@centralsolusi.com</p>
                  <p className="text-gray-700">konsultasi@centralsolusi.com</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="flex items-center mb-4">
                    <svg className="w-6 h-6 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <h3 className="font-bold text-lg">Alamat</h3>
                  </div>
                  <p className="text-gray-700">Jl. Sudirman No. 123</p>
                  <p className="text-gray-700">Jakarta Pusat, 10220</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Siap Mengembangkan Bisnis Anda?
          </h2>
          <p className="text-xl mb-8">
            Konsultasikan kebutuhan bisnis Anda dengan tim ahli kami sekarang!
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Hubungi Kami
          </a>
        </div>
      </section>
    </div>
  );
}

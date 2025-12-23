import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="home" className="relative py-20 min-h-[600px] flex items-center">
        {/* Background Image - Replace this URL with your image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-800/80"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6">
              Pendampingan Resmi & Terpercaya untuk Pendirian LSP, LPK, dan Prodi Baru
            </h1>
            <p className="text-xl mb-8">
            Lebih Cepat Legal. Lebih Siap Operasional. Lebih Pasti Disetujui.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="https://wa.me/6281234567890?text=Halo%20Central%20Solusi%20Bisnis%2C%20saya%20ingin%20konsultasi%20mengenai%20layanan%20pendampingan%20LSP%2FLPK%2FProdi%20dan%20jasa%20akuntansi."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
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
                 Centra Solusi Bisnis (CSB) adalah perusahaan startup yang bergerak di bidang pendampingan pendirian Lembaga Sertifikasi Profesi (LSP),
                 Lembaga Pelatihan Kerja (LPK), serta pembukaan program studi baru untuk universitas dan institusi pendidikan tinggi.
                </p>
                <p className="text-gray-700">
                 Kami menggabungkan keahlian regulasi, akademik, dan manajemen operasional 
                 untuk memastikan setiap klien siap secara dokumen, sistem, dan implementasi lapangan.

                </p>
              </div>
              <div>
                <div className="bg-primary-50 p-6 rounded-lg mb-4">
                  <h3 className="text-xl font-bold mb-2 text-primary-800">Visi</h3>
                  <p className="text-gray-700">
                  Menjadi mitra strategis terpercaya dalam pengembangan lembaga sertifikasi dan pendidikan nasional.
                  </p>
                </div>
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2 text-primary-800">Misi</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Menyediakan pendampingan profesional dan terukur</li>
                    <li>Meningkatkan kualitas SDM melalui sertifikasi dan pendidikan</li>
                    <li>Mendukung percepatan legalitas lembaga pendidikan</li>
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
                Layanan profesional Central Solusi Bisnis sesuai KBLI 69201, 69202, dan 70209
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Usaha Jasa Akuntansi & Konsultasi */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-primary-700">Usaha Jasa Akuntansi & Konsultasi</h3>
                  <p className="text-sm text-gray-500 mb-4">Berbasis KBLI 69201, 69202, dan 70209</p>
                  <div className="bg-primary-50 p-4 rounded-lg mb-4">
                    <h4 className="font-bold text-primary-800 mb-2">Deskripsi Produk</h4>
                    <p className="text-gray-700 text-sm">
                      Layanan akuntansi, perpajakan, dan konsultasi manajemen untuk UMKM, perusahaan, dan institusi agar tertib administrasi, patuh regulasi, dan siap berkembang.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">Spesifikasi Layanan</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Jasa Pembukuan</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Jasa Kompilasi Laporan Keuangan</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Jasa Manajemen</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Jasa Akuntansi Manajemen</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Jasa Konsultasi Manajemen</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Jasa Perpajakan</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Jasa Prosedur yang Disepakati atas Informasi Keuangan</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Jasa Teknologi Informasi (pendukung sistem keuangan)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Usaha Jasa Pendampingan Institusi */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-primary-700">Usaha Jasa Pendampingan Institusi</h3>
                  <p className="text-sm text-gray-500 mb-4">Fokus pada pengembangan lembaga dan pendidikan</p>
                  <div className="bg-primary-50 p-4 rounded-lg mb-4">
                    <h4 className="font-bold text-primary-800 mb-2">Deskripsi Produk</h4>
                    <p className="text-gray-700 text-sm">
                      Pendampingan strategis dan teknis bagi lembaga dan institusi pendidikan agar memenuhi regulasi, siap operasional, dan berkelanjutan.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">Spesifikasi Layanan</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Pembuatan Lembaga Sertifikasi Profesi (LSP)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Pembuatan Lembaga Pelatihan Kerja (LPK)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Pembuatan & Pembukaan Program Studi Baru</span>
                    </li>
                  </ul>
                </div>
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
                  &quot;Pendampingan CSB dalam pendirian LSP kami sangat profesional. Semua dokumen dan sistem tersusun rapi, sehingga proses approval BNSP berjalan lancar. Terima kasih CSB!&quot;
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold">Dr. Ahmad Fauzi</p>
                  <p className="text-sm text-gray-600">Direktur - LSP Industri Manufaktur</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <div className="text-yellow-500 mb-4 font-semibold">Rating: 5/5</div>
                <p className="text-gray-700 mb-4 italic">
                  &quot;Layanan akuntansi dan konsultasi perpajakan CSB sangat membantu UMKM kami. Laporan keuangan tertib, pajak terkendali, dan kami jadi lebih fokus pada pengembangan bisnis.&quot;
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold">Siti Nurhaliza</p>
                  <p className="text-sm text-gray-600">Owner - CV Digital Kreatif</p>
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
                  <h3 className="text-xl font-bold mb-2">Universitas Bina Nusantara</h3>
                  <p className="text-sm text-gray-600">Pendidikan • 2024</p>
                </div>
                <h4 className="font-semibold text-primary-700 mb-2">Pembukaan Program Studi S1 Akuntansi Digital</h4>
                <p className="text-gray-700 mb-4">
                  Pendampingan lengkap dari penyusunan dokumen, kurikulum, hingga proses persetujuan Kemendikbud. Program studi berhasil dibuka dengan 150 mahasiswa angkatan pertama.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded">Pendampingan Prodi Baru</span>
                  <span className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded">Konsultasi Akademik</span>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">CV Mitra Mandiri</h3>
                  <p className="text-sm text-gray-600">UMKM • 2024</p>
                </div>
                <h4 className="font-semibold text-primary-700 mb-2">Pengelolaan Keuangan & Perpajakan Terintegrasi</h4>
                <p className="text-gray-700 mb-4">
                  Implementasi sistem pembukuan, penyusunan laporan keuangan bulanan, dan konsultasi perpajakan. Perusahaan berhasil meningkatkan efisiensi 40% dan patuh pajak.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded">Jasa Pembukuan</span>
                  <span className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded">Konsultasi Perpajakan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog/Articles Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Artikel & Tips</h2>
              <p className="text-xl text-gray-600">
                Informasi terkini seputar LSP, LPK, Program Studi, dan pengelolaan keuangan bisnis
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Article 1 */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded">Pendampingan Institusi</span>
                    <span>•</span>
                    <span>20 Des 2025</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Panduan Lengkap Mendirikan LSP</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Pelajari langkah-langkah lengkap untuk mendirikan Lembaga Sertifikasi Profesi (LSP) sesuai regulasi BNSP.
                  </p>
                  <a href="/blog/panduan-lengkap-mendirikan-lsp" className="text-primary-600 font-semibold text-sm hover:underline">
                    Baca Selengkapnya →
                  </a>
                </div>
              </div>

              {/* Article 2 */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded">Keuangan & Akuntansi</span>
                    <span>•</span>
                    <span>18 Des 2025</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Tips Mengelola Keuangan UMKM</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Pembukuan yang rapi adalah kunci kesuksesan UMKM. Pelajari cara sederhana mengelola keuangan bisnis Anda.
                  </p>
                  <a href="/blog/tips-mengelola-keuangan-umkm" className="text-primary-600 font-semibold text-sm hover:underline">
                    Baca Selengkapnya →
                  </a>
                </div>
              </div>

              {/* Article 3 */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">Pendampingan Institusi</span>
                    <span>•</span>
                    <span>15 Des 2025</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Cara Membuka Program Studi Baru</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Panduan praktis membuka program studi baru. Mulai dari penyusunan kurikulum hingga persetujuan Kemendikbud.
                  </p>
                  <a href="/blog/cara-membuka-program-studi-baru" className="text-primary-600 font-semibold text-sm hover:underline">
                    Baca Selengkapnya →
                  </a>
                </div>
              </div>
            </div>

            {/* CTA to Blog */}
            <div className="text-center mt-12">
              <a
                href="/blog"
                className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Lihat Semua Artikel
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Hubungi Kami</h2>
              <p className="text-xl text-gray-600">
                Siap mendampingi pendirian LSP, LPK, Program Studi, atau kebutuhan akuntansi bisnis Anda. Konsultasi gratis!
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

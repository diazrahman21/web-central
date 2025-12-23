import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Solusi Bisnis Terpadu untuk Kesuksesan Anda
            </h1>
            <p className="text-xl mb-8">
              Central Solusi Bisnis hadir sebagai mitra strategis dalam mengembangkan dan meningkatkan performa bisnis Anda
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Hubungi Kami
              </Link>
              <Link
                href="/services"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                Lihat Layanan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Mengapa Memilih Kami?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Profesional</h3>
              <p className="text-gray-600">
                Tim ahli dengan pengalaman bertahun-tahun dalam memberikan solusi bisnis yang tepat
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Efisien</h3>
              <p className="text-gray-600">
                Solusi yang dirancang untuk meningkatkan efisiensi operasional bisnis Anda
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Terpercaya</h3>
              <p className="text-gray-600">
                Dipercaya oleh berbagai perusahaan untuk membantu mencapai target bisnis mereka
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Layanan Kami</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-3">Konsultasi Bisnis</h3>
              <p className="text-gray-600 mb-4">
                Mendampingi pengembangan strategi bisnis yang tepat untuk pertumbuhan perusahaan Anda
              </p>
              <Link href="/services" className="text-primary-600 font-semibold hover:underline">
                Pelajari Lebih Lanjut →
              </Link>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-3">Manajemen Keuangan</h3>
              <p className="text-gray-600 mb-4">
                Optimalisasi pengelolaan keuangan dan perencanaan finansial perusahaan
              </p>
              <Link href="/services" className="text-primary-600 font-semibold hover:underline">
                Pelajari Lebih Lanjut →
              </Link>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-3">Pelatihan SDM</h3>
              <p className="text-gray-600 mb-4">
                Program pelatihan untuk meningkatkan kompetensi dan produktivitas tim Anda
              </p>
              <Link href="/services" className="text-primary-600 font-semibold hover:underline">
                Pelajari Lebih Lanjut →
              </Link>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-3">Transformasi Digital</h3>
              <p className="text-gray-600 mb-4">
                Implementasi teknologi untuk memodernisasi proses bisnis Anda
              </p>
              <Link href="/services" className="text-primary-600 font-semibold hover:underline">
                Pelajari Lebih Lanjut →
              </Link>
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
            Hubungi kami untuk konsultasi gratis dan temukan solusi terbaik untuk bisnis Anda
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Konsultasi Gratis
          </Link>
        </div>
      </section>
    </div>
  );
}

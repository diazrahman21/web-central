import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami - Centra Solusi Bisnis",
  description: "Kenali lebih dekat Centra Solusi Bisnis, mitra terpercaya untuk solusi bisnis terpadu",
};

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Tentang Kami</h1>
          
          <div className="prose max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Profil Perusahaan</h2>
              <p className="text-gray-700 mb-4">
                Central Solusi Bisnis adalah perusahaan konsultan bisnis yang berdedikasi untuk membantu perusahaan 
                mencapai potensi maksimal mereka. Dengan pengalaman bertahun-tahun dalam industri, kami telah 
                membantu ratusan klien mencapai tujuan bisnis mereka.
              </p>
              <p className="text-gray-700 mb-4">
                Kami percaya bahwa setiap bisnis memiliki tantangan unik, dan solusi yang efektif memerlukan 
                pendekatan yang disesuaikan. Tim ahli kami bekerja sama dengan klien untuk memahami kebutuhan 
                spesifik mereka dan mengembangkan strategi yang tepat.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Visi & Misi</h2>
              <div className="bg-primary-50 p-6 rounded-lg mb-4">
                <h3 className="text-xl font-bold mb-2 text-primary-800">Visi</h3>
                <p className="text-gray-700">
                  Menjadi mitra konsultan bisnis terdepan yang dipercaya dalam memberikan solusi inovatif 
                  dan berkelanjutan untuk pertumbuhan bisnis di Indonesia.
                </p>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-primary-800">Misi</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Memberikan solusi bisnis yang tepat dan terukur untuk setiap klien</li>
                  <li>Mengembangkan strategi bisnis yang inovatif dan berkelanjutan</li>
                  <li>Membangun kemitraan jangka panjang dengan klien</li>
                  <li>Meningkatkan kompetensi SDM melalui program pelatihan berkualitas</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Nilai-Nilai Kami</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Integritas</h3>
                  <p className="text-gray-700">
                    Kami berkomitmen untuk selalu jujur dan transparan dalam setiap layanan yang kami berikan.
                  </p>
                </div>
                <div className="border border-gray-200 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Profesionalisme</h3>
                  <p className="text-gray-700">
                    Tim ahli kami selalu memberikan layanan terbaik dengan standar profesional tertinggi.
                  </p>
                </div>
                <div className="border border-gray-200 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Inovasi</h3>
                  <p className="text-gray-700">
                    Kami terus berinovasi untuk memberikan solusi terkini yang sesuai dengan perkembangan zaman.
                  </p>
                </div>
                <div className="border border-gray-200 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Kemitraan</h3>
                  <p className="text-gray-700">
                    Kami membangun hubungan jangka panjang berdasarkan kepercayaan dan hasil yang terukur.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Tim Ahli Kami</h2>
              <p className="text-gray-700 mb-4">
                Tim Central Solusi Bisnis terdiri dari para profesional berpengalaman di berbagai bidang, 
                termasuk manajemen bisnis, keuangan, pemasaran, dan teknologi informasi. Dengan keahlian 
                yang beragam, kami dapat memberikan solusi komprehensif untuk berbagai tantangan bisnis.
              </p>
              <p className="text-gray-700">
                Setiap anggota tim kami memiliki sertifikasi profesional dan pengalaman praktis dalam 
                membantu perusahaan mencapai target mereka. Kami percaya pada pembelajaran berkelanjutan 
                dan selalu mengikuti perkembangan terbaru dalam dunia bisnis.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

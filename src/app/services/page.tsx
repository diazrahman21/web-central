import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan Kami - Central Solusi Bisnis",
  description: "Berbagai layanan bisnis profesional untuk membantu mengembangkan perusahaan Anda",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Konsultasi Bisnis",
      description: "Kami menyediakan konsultasi bisnis menyeluruh untuk membantu perusahaan mengidentifikasi peluang pertumbuhan dan mengembangkan strategi yang efektif.",
      features: [
        "Analisis bisnis dan riset pasar",
        "Perencanaan strategis",
        "Pengembangan model bisnis",
        "Optimalisasi proses operasional",
      ]
    },
    {
      title: "Manajemen Keuangan",
      description: "Layanan manajemen keuangan untuk membantu perusahaan mengelola keuangan dengan lebih efisien dan membuat keputusan finansial yang tepat.",
      features: [
        "Perencanaan dan analisis keuangan",
        "Budgeting dan forecasting",
        "Cash flow management",
        "Laporan keuangan dan audit internal",
      ]
    },
    {
      title: "Pelatihan & Pengembangan SDM",
      description: "Program pelatihan komprehensif untuk meningkatkan kompetensi karyawan dan produktivitas tim.",
      features: [
        "Leadership training",
        "Soft skills development",
        "Technical training",
        "Team building programs",
      ]
    },
    {
      title: "Transformasi Digital",
      description: "Membantu perusahaan mengadopsi teknologi digital untuk meningkatkan efisiensi dan daya saing bisnis.",
      features: [
        "Digital strategy development",
        "Implementasi sistem ERP",
        "E-commerce solutions",
        "Digital marketing",
      ]
    },
    {
      title: "Manajemen Proyek",
      description: "Layanan manajemen proyek profesional untuk memastikan proyek berjalan sesuai jadwal, anggaran, dan kualitas yang diharapkan.",
      features: [
        "Project planning dan scheduling",
        "Resource management",
        "Risk management",
        "Project monitoring dan control",
      ]
    },
    {
      title: "Business Intelligence",
      description: "Solusi business intelligence untuk membantu perusahaan membuat keputusan berdasarkan data dan insight yang akurat.",
      features: [
        "Data analytics",
        "Dashboard dan reporting",
        "Predictive analytics",
        "Performance metrics",
      ]
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Layanan Kami</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami menyediakan berbagai layanan bisnis profesional yang dirancang untuk membantu 
              perusahaan Anda mencapai tujuan dan pertumbuhan yang berkelanjutan
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow"
              >
                <h2 className="text-2xl font-bold mb-4 text-primary-700">
                  {service.title}
                </h2>
                <p className="text-gray-700 mb-6">
                  {service.description}
                </p>
                <div>
                  <h3 className="font-semibold mb-3 text-gray-800">Fitur Layanan:</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg 
                          className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-primary-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Tertarik dengan Layanan Kami?</h2>
            <p className="text-gray-700 mb-6">
              Hubungi kami untuk konsultasi gratis dan diskusikan bagaimana kami dapat membantu bisnis Anda
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

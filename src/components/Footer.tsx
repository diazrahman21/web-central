"use client";

export default function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Central Solusi Bisnis</h3>
            <p className="text-gray-400">
              Mitra terpercaya untuk solusi bisnis terpadu dan pengembangan perusahaan Anda.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Menu</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => handleScroll(e, 'home')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleScroll(e, 'about')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tentang
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleScroll(e, 'services')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Layanan
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleScroll(e, 'contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Konsultasi Bisnis</li>
              <li>Manajemen Keuangan</li>
              <li>Pelatihan SDM</li>
              <li>Transformasi Digital</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Jl. Contoh No. 123</li>
              <li>Jakarta Selatan, Indonesia</li>
              <li>+62 21 1234 5678</li>
              <li>info@centralsolusibisnis.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Central Solusi Bisnis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

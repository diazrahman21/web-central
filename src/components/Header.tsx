"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    // Only prevent default if we're on homepage
    if (isHomePage) {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    }
    // If not on homepage, let the link navigate normally (href will handle it)
  };

  return (
    <header className="bg-white/50 backdrop-blur-md shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className="flex items-center gap-3 text-2xl font-bold text-primary-600"
          >
            <Image 
              src="/logo_web.png" 
              alt="CSB Logo" 
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="leading-none">Centra Solusi Bisnis</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="/#about" 
              onClick={(e) => handleScroll(e, 'about')}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium text-[15px]"
            >
              Tentang
            </Link>
            <Link 
              href="/#services" 
              onClick={(e) => handleScroll(e, 'services')}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium text-[15px]"
            >
              Layanan
            </Link>
            <Link 
              href="/#portfolio" 
              onClick={(e) => handleScroll(e, 'portfolio')}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium text-[15px]"
            >
              Portfolio
            </Link>
            <Link 
              href="/#contact" 
              onClick={(e) => handleScroll(e, 'contact')}
              className="bg-primary-600 text-white px-6 py-2.5 rounded-lg hover:bg-primary-700 transition-colors font-medium text-[15px]"
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/#about" 
                onClick={(e) => handleScroll(e, 'about')}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                Tentang
              </Link>
              <Link 
                href="/#services" 
                onClick={(e) => handleScroll(e, 'services')}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                Layanan
              </Link>
              <Link 
                href="/#portfolio" 
                onClick={(e) => handleScroll(e, 'portfolio')}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                Portfolio
              </Link>
              <Link 
                href="/#contact" 
                onClick={(e) => handleScroll(e, 'contact')}
                className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors text-center font-medium"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

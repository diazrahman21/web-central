"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Initial load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Page transition on route change
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
        <div className="text-center">
          <div className="relative mb-8">
            {/* Animated logo placeholder */}
            <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-2xl flex items-center justify-center animate-bounce-slow">
              <svg className="w-12 h-12 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
            </div>
            
            {/* Spinning ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-2 animate-fade-in">Centra Solusi Bisnis</h2>
          <p className="text-primary-100 text-sm animate-fade-in-delay">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`transition-opacity duration-400 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
      {children}
    </div>
  );
}

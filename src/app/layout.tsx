import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Centra Solusi Bisnis - Solusi Bisnis Terpadu",
  description: "Centra Solusi Bisnis menyediakan solusi bisnis terpadu untuk membantu mengembangkan usaha Anda",
  keywords: "solusi bisnis, konsultan bisnis, pengembangan bisnis, centra solusi bisnis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <PageTransition>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </PageTransition>
      </body>
    </html>
  );
}

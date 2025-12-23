import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Centra Solusi Bisnis - Pendampingan LSP, LPK, Prodi & Jasa Akuntansi",
  description: "Pendampingan profesional pendirian LSP (Lembaga Sertifikasi Profesi), LPK (Lembaga Pelatihan Kerja), pembukaan Program Studi baru, serta jasa akuntansi dan konsultasi manajemen. Lebih Cepat Legal. Lebih Siap Operasional. Lebih Pasti Disetujui.",
  keywords: "LSP, LPK, lembaga sertifikasi profesi, lembaga pelatihan kerja, program studi baru, jasa akuntansi, konsultasi bisnis, KBLI 69201, KBLI 69202, KBLI 70209, pendampingan LSP, konsultan bisnis, centra solusi bisnis",
  authors: [{ name: "Centra Solusi Bisnis" }],
  creator: "Centra Solusi Bisnis",
  publisher: "PT. Dea Lili Consultant",
  openGraph: {
    title: "Centra Solusi Bisnis - Pendampingan LSP, LPK & Jasa Akuntansi",
    description: "Pendampingan profesional pendirian LSP, LPK, Program Studi baru & jasa akuntansi terpercaya",
    url: "https://centrasolusibisnis.com",
    siteName: "Centra Solusi Bisnis",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Centra Solusi Bisnis - Pendampingan LSP, LPK & Jasa Akuntansi",
    description: "Pendampingan profesional pendirian LSP, LPK, Program Studi baru & jasa akuntansi",
  },
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

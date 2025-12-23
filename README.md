# Central Solusi Bisnis - Professional Business Website

Website profile profesional untuk Central Solusi Bisnis dengan fitur SEO management untuk admin.

## 🚀 Fitur

### Frontend (Public Pages)
- **Homepage** dengan hero section dan preview layanan
- **Halaman Tentang Kami** dengan profil perusahaan, visi misi, dan nilai-nilai
- **Halaman Layanan** menampilkan 6 layanan bisnis lengkap
- **Halaman Blog** dengan daftar artikel dan detail artikel
- **Halaman Kontak** dengan form kontak dan informasi kontak lengkap
- Responsive design untuk semua perangkat
- Modern UI dengan Tailwind CSS

### Admin Dashboard (Hidden - /admin)
- **Manajemen Artikel** - CRUD lengkap untuk artikel/blog
  - Tambah, edit, hapus artikel
  - Auto-generate slug dari judul
  - Publikasi/draft artikel
  - Kategori dan metadata artikel
- **Manajemen Testimoni** - Kelola testimoni klien
  - Rating system (1-5 bintang)
  - Informasi klien lengkap
  - Show/hide testimoni
- **Manajemen Portfolio** - Showcase project klien
  - Detail proyek dan klien
  - Multiple services per project
  - Filter berdasarkan industri
- **SEO Management** - Kelola metadata untuk semua halaman
  - Meta title, description, keywords
  - Character counter untuk optimasi
  - Tips SEO built-in

## 🛠️ Tech Stack

- **Next.js 15** - React Framework dengan App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI Library

## 📋 Prasyarat

- Node.js 18+ atau lebih baru
- npm, yarn, pnpm, atau bun

## 🔧 Instalasi

1. Install dependencies:
```bash
npm install
```

2. Jalankan development server:
```bash
npm run dev
```

3. Buka browser dan akses [http://localhost:3000](http://localhost:3000)

## 📁 Struktur Project

```
Web CSB/
├── src/
│   ├── app/
│   │   ├── about/                    # Halaman Tentang Kami
│   │   ├── admin/                    # Admin Dashboard (Hidden)
│   │   │   ├── components/
│   │   │   │   ├── ArticleManagement.tsx      # CRUD Artikel
│   │   │   │   ├── TestimonialManagement.tsx  # CRUD Testimoni
│   │   │   │   ├── PortfolioManagement.tsx    # CRUD Portfolio
│   │   │   │   └── SeoManagement.tsx          # SEO Manager
│   │   │   └── page.tsx              # Admin Login & Dashboard
│   │   ├── blog/                     # Halaman Blog
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx          # Detail Artikel
│   │   │   └── page.tsx              # Daftar Artikel
│   │   ├── contact/                  # Halaman Kontak
│   │   ├── services/                 # Halaman Layanan
│   │   ├── globals.css               # Global styles
│   │   ├── layout.tsx                # Root layout
│   │   └── page.tsx                  # Homepage
│   └── components/
│       ├── Header.tsx                # Header navigasi
│       ├── Footer.tsx                # Footer
│       └── ContactForm.tsx           # Form kontak
├── public/                           # Static assets
├── .github/
│   └── copilot-instructions.md
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🎨 Halaman Website

### 1. Beranda (/)
Hero section dengan call-to-action, fitur unggulan, preview layanan, dan CTA section.

### 2. Tentang Kami (/about)
Profil perusahaan, visi & misi, nilai-nilai perusahaan, dan informasi tim.
Blog (/blog)
- Daftar artikel dengan filter kategori
- Detail artikel dengan related posts
- Newsletter subscription
- Share buttons (Facebook, Twitter, WhatsApp, LinkedIn)

### 5. Kontak (/contact)
Form kontak interaktif dan informasi kontak lengkap (alamat, telepon, email, jam operasional).

### 6. Admin Dashboard (/admin) 🔐
Dashboard lengkap untuk mengelola konten website:

#### 📝 Artikel Management
- Create, Read, Update, Delete artikel
- Auto-generate slug dari judul
- Rich text editor untuk konten
- Kategori artikel
- Publikasi/draft status
- Metadata (author, date, read time)

#### 💬 Testimoni Management
- Kelola testimoni klien
- Rating system (1-5 bintang)
- Informasi klien (nama, jabatan, perusahaan)
- Show/hide testimoni (halaman ini **disembunyikan** dari navigasi)
2. Masukkan password: `admin123`
3. Pilih tab yang ingin dikelola:
   - **Artikel** - Kelola blog posts
   - **Testimoni** - Kelola testimoni klien
   - **Portfolio Klien** - Kelola showcase project
   - **SEO** - Kelola metadata halaman

### Fitur Admin:
- ✅ **Create** - Tambah konten baru
- ✅ **Read** - Lihat semua konten
- ✅ **Update** - Edit konten yang ada
- ✅ **Delete** - Hapus konten (dengan konfirmasi)
- ✅ **Publish/Draft** - Control visibility
- ✅ **Auto-save** notification
- ✅ **Form validation**

> **⚠️ Catatan Penting:** 
> - Halaman admin tidak muncul di navigasi menu (hidden)
> - Akses langsung via URL: `/admin`
> - Dalam implementasi production:
>   - Gunakan sistem autentikasi yang proper (JWT, OAuth, dll)
>   - Simpan data ke database (PostgreSQL, MongoDB, dll)
>   - Implementasi API endpoints
>   - Tambahkan role-based access control
- Project details dan tahun

#### 🔍 SEO Management
- Meta title, description, keywords untuk setiap halaman
- Character counter untuk optimasi
- Tips SEO built-in
- Support untuk: Home, About, Services, Blog, Contactyek
- Business Intelligence

### 4. Kontak (/contact)
Form kontak interaktif dan informasi kontak lengkap (alamat, telepon, email, jam operasional).

### 5. Admin (/admin)
Dashboard untuk mengelola SEO metadata:
- Meta Title
- Meta Description
- Meta Keywords

**Password default:** `admin123`

## 🔐 Admin Access

Untuk mengakses admin dashboard:
1. Buka [http://localhost:3000/admin](http://localhost:3000/admin)
2. Masukkan password: `admin123`
3. Edit SEO metadata untuk setiap halaman
4. Klik "Simpan Semua Perubahan"

> **Catatan:** Dalam implementasi production, gunakan sistem autentikasi yang proper dan simpan data ke database.

## 🎨 Customization

### Mengubah Warna Tema
Edit file `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    // Ubah nilai warna di sini
  },
}
```

### Mengubah Informasi Kontak
Edit file `src/app/contact/page.tsx` dan `src/components/Footer.tsx`

### Menambah/Edit Layanan
Edit file `src/app/services/page.tsx` dan modifikasi array `services`

## 📦 Build untuk Production

```bash
npm run build
npm start
```

## 🚀 Deployment

Website ini dapat di-deploy ke berbagai platform:

### Vercel (Recommended)
1. Push code ke GitHub
2. Import project di [Vercel](https://vercel.com)
3. Deploy dengan satu klik

### Netlify
1. Push code ke GitHub
2. Import project di [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build untuk production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🔄 Update & Maintenance

Untuk mengupdate dependencies:
```bash
npm update
```

Untuk mengecek vulnerabilities:
```bash
npm audit
```

## 📄 License

Copyright © 2025 Central Solusi Bisnis. All rights reserved.

## 👨‍💻 Support

Untuk pertanyaan atau dukungan, hubungi:
- Email: info@centralsolusibisnis.com
- Phone: +62 21 1234 5678

---

Dibuat dengan ❤️ menggunakan Next.js dan TypeScript

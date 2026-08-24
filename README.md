# Pondok Pesantren Ibadurrahman

Website institusi pendidikan yang responsif, modular, dan sepenuhnya berbasis konfigurasi. Dibangun dengan Next.js/Vinext, React, TypeScript, dan Tailwind CSS.

## Fitur

- Beranda responsif dengan navigasi desktop dan mobile.
- Program dan kampus dengan halaman detail dinamis.
- Galeri, testimoni, modal video, dan formulir kontak.
- Konten, branding, navigasi, warna, serta urutan section dapat diubah dari folder `content/`.
- Metadata SEO, sitemap, robots, Open Graph, dan halaman 404.
- Struktur siap dihubungkan ke CMS.

## Menjalankan secara lokal

```bash
pnpm install
pnpm dev
```

Buka `http://localhost:3000`.

## Dokumentasi

- `CONTENT-GUIDE.md` — panduan mengganti isi dan identitas.
- `DUPLICATION-GUIDE.md` — panduan memakai proyek sebagai template brand lain.
- `ARCHITECTURE.md` — ringkasan arsitektur dan batas integrasi CMS.

## Build produksi

```bash
pnpm build
```

Kontak, alamat, media sosial, peta, dan URL video pada demo perlu diganti dengan data resmi sebelum penggunaan produksi.

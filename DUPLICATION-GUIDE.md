# Panduan Duplikasi Template

Template ini dapat dipakai untuk sekolah, pesantren, kursus, atau lembaga pendidikan lain.

## 1. Salin proyek

Duplikasi seluruh folder proyek ke lokasi baru. Jangan menghapus struktur `app`, `components`, `content`, `lib`, dan `public/assets`.

## 2. Ganti identitas utama

Buka `content/site.config.ts`, lalu ubah nama brand, logo, tagline, warna, kontak, media sosial, bahasa, dan navigasi.

## 3. Ganti aset

Masukkan logo dan gambar milik brand baru ke folder yang sesuai di `public/assets/`. Gunakan nama jelas seperti `hero-home.webp`, `program-tahfiz.webp`, atau `campus-putra.webp`.

## 4. Ganti isi

Perbarui `content/home.ts`, `content/programs.ts`, `content/campuses.ts`, `content/testimonials.ts`, `content/gallery.ts`, dan `content/footer.ts`.

## 5. Atur beranda

Susun ulang `sectionOrder` dan atur `visibility` di `content/home.ts`. Komponen tidak perlu diubah.

## 6. Periksa tautan

Pastikan seluruh menu, CTA, nomor telepon, WhatsApp, peta, video, dan media sosial menuju alamat yang benar.

## 7. Perbarui SEO

Ubah judul/deskripsi global di `app/layout.tsx`, pasang gambar `public/og.png`, dan isi `NEXT_PUBLIC_SITE_URL` dengan domain produksi.

## 8. Uji dan publikasikan

Periksa beranda, seluruh halaman detail, menu desktop/mobile, formulir, galeri, carousel, dan ukuran layar kecil sebelum publikasi.

## Checklist singkat

- Tidak ada nama atau kontak brand lama.
- Semua gambar memiliki izin penggunaan.
- Tidak ada tautan `#` yang tersisa.
- Formulir sudah terhubung ke layanan pengiriman.
- Alamat, telepon, email, dan peta sudah final.
- Kebijakan privasi sudah ditinjau pengelola.

# Panduan Mengubah Konten

Situs ini memisahkan isi dari komponen tampilan. Perubahan rutin dilakukan di folder `content/` dan `public/assets/`, bukan di komponen.

## Logo dan identitas

1. Simpan logo baru di `public/assets/logo/`.
2. Buka `content/site.config.ts`.
3. Ubah `brand.name`, `brand.shortName`, `brand.tagline`, dan `brand.logo`.
4. Ganti warna global pada `brand.colors`. Warna tersebut otomatis diterapkan ke seluruh situs melalui layout global.

## Font

Font utama dan font judul diatur sekali dalam `app/layout.tsx`. Ganti impor `Geist` atau `Lora`, lalu pertahankan nama variabel `--font-geist-sans` dan `--font-display` agar seluruh komponen ikut berubah.

## Hero dan urutan beranda

- Ubah judul, deskripsi, gambar, dan tombol di `content/home.ts` pada bagian `hero`.
- Letakkan gambar baru di `public/assets/hero/`.
- Ubah urutan blok melalui `sectionOrder`.
- Matikan blok tanpa menghapusnya dengan mengubah nilainya menjadi `false` pada `visibility`.

## Program

- Tambah atau ubah data pada `content/programs.ts`.
- `slug` menjadi alamat halaman, misalnya `tahfiz` menjadi `/programs/tahfiz`.
- Ubah `active` menjadi `false` untuk menyembunyikan program.
- Halaman detail dibuat otomatis dari data yang sama.

## Kampus

- Kelola nama, alamat, kontak, fasilitas, program, peta, dan gambar pada `content/campuses.ts`.
- Halaman detail kampus juga dibuat otomatis dari `slug`.

## Testimoni, galeri, dan video

- Testimoni: `content/testimonials.ts`.
- Galeri: `content/gallery.ts`; urutan ditentukan oleh `order`.
- Video: `content/home.ts` pada bagian `video`. Isi `videoUrl` dengan URL embed YouTube/Vimeo atau alamat MP4 yang sesuai.

## Kontak dan media sosial

Ubah `contact` dan `social` pada `content/site.config.ts`. Formulir saat ini mendemonstrasikan validasi, loading, error, dan sukses di sisi tampilan. Hubungkan fungsi pengiriman di `components/sections/ContactForm.tsx` ke layanan formulir atau API pilihan sebelum produksi.

## Menu dan bahasa

- Menu utama dan submenu: `navigation` di `content/site.config.ts`.
- Label bahasa: `locales` di file yang sama.
- Kamus awal bilingual: `content/translations.ts`. Untuk pelokalan penuh, sambungkan locale aktif pada batas konten di `lib/content-api.ts`.

## SEO

Metadata global berada di `app/layout.tsx`. Metadata program dan kampus dibuat otomatis dari datanya. Ubah domain produksi melalui `NEXT_PUBLIC_SITE_URL`.

## Menambah halaman

Buat folder baru di `app/nama-halaman/` dan tambahkan `page.tsx`. Gunakan `InnerHero`, `Section`, kartu, serta token warna/spacing yang sudah ada agar konsisten.

## Menghubungkan CMS

`lib/content-api.ts` adalah batas antara tampilan dan sumber data. Ganti isi fungsi dengan pemanggilan Sanity, Strapi, Contentful, WordPress, Supabase, Firebase, atau API sendiri tanpa mengubah komponen UI.

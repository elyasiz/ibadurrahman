# Arsitektur Template

Aliran data utama:

`content files / CMS → lib/content-api.ts → reusable components → routes`

## Sistem desain

Token warna, radius, spacing, lebar container, dan tipografi berada di bagian teratas `app/globals.css`. Seluruh halaman memakai komponen dan kelas yang sama sehingga perubahan global konsisten.

## Komponen

- `components/layout`: header, footer, dan hero halaman dalam.
- `components/sections`: blok beranda dan formulir.
- `components/cards`: kartu program dan kampus.
- `components/ui`: section dan judul section.

## Halaman dinamis

- `/programs/[slug]` dibentuk dari `content/programs.ts`.
- `/campuses/[slug]` dibentuk dari `content/campuses.ts`.

Menambah record aktif otomatis menambah kartu, halaman detail, metadata, dan entri sitemap.

## Admin/CMS readiness

Struktur tipe `Program`, `Campus`, `Testimonial`, dan `GalleryItem` dapat dipetakan langsung ke schema CMS. `lib/content-api.ts` sengaja menjadi satu pintu penggantian sumber data. Untuk drag-and-drop editor, simpan `sectionOrder` dan `visibility` sebagai field array dan boolean di CMS.

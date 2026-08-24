export type Program = {
  id: string;
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  longDescription: string;
  schedule: string;
  accent: string;
  features: string[];
  image: string;
  active: boolean;
};

export const programs: Program[] = [
  {
    id: 'tahfiz',
    slug: 'tahfiz',
    title: 'Tahfiz Al-Qur’an',
    eyebrow: 'Program Inti',
    description: 'Pendampingan hafalan yang terukur dengan penguatan tajwid, murajaah, dan adab terhadap Al-Qur’an.',
    longDescription: 'Program tahfiz dirancang bertahap sesuai kemampuan santri. Musyrif dan musyrifah mendampingi setoran, murajaah, perbaikan bacaan, serta pembiasaan interaksi yang dekat dengan Al-Qur’an.',
    schedule: 'Setiap hari',
    accent: 'yellow',
    features: ['Tahsin terstruktur', 'Halaqah kelompok kecil', 'Evaluasi hafalan berkala', 'Target personal santri'],
    image: '/assets/hero/kegiatan-kelas-ibadurrahman.jpeg',
    active: true,
  },
  {
    id: 'madrasah-diniyah',
    slug: 'madrasah-diniyah',
    title: 'Madrasah Diniyah',
    eyebrow: 'Keilmuan Islam',
    description: 'Kajian akidah, fikih, sirah, bahasa Arab, dan ilmu-ilmu dasar keislaman secara kontekstual.',
    longDescription: 'Kurikulum diniyah membantu santri memahami agama secara kokoh dan relevan. Materi disampaikan dengan pendekatan dialogis agar santri mampu menghubungkan ilmu dengan pilihan sehari-hari.',
    schedule: '5 hari per minggu',
    accent: 'green',
    features: ['Akidah dan akhlak', 'Fikih ibadah', 'Bahasa Arab', 'Sirah dan peradaban'],
    image: '/assets/gallery/literasi-santri-ibadurrahman.jpeg',
    active: true,
  },
  {
    id: 'pengembangan-santri',
    slug: 'pengembangan-santri',
    title: 'Pengembangan Santri',
    eyebrow: 'Kecakapan Hidup',
    description: 'Ruang untuk kepemimpinan, komunikasi, olahraga, seni, kewirausahaan, dan pengabdian masyarakat.',
    longDescription: 'Santri diberi kesempatan memimpin, bekerja dalam tim, memecahkan masalah, dan berkarya melalui proyek nyata. Program ini menumbuhkan percaya diri yang tetap rendah hati.',
    schedule: 'Pekan & proyek',
    accent: 'ivory',
    features: ['Organisasi santri', 'Public speaking', 'Olahraga dan seni', 'Proyek sosial'],
    image: '/assets/hero/kegiatan-kelas-ibadurrahman.jpeg',
    active: true,
  },
];

export function getProgram(slug: string) {
  return programs.find((program) => program.slug === slug && program.active);
}

export type EducationUnit = {
  id: string;
  slug: string;
  name: string;
  level: string;
  description: string;
  longDescription: string;
  focus: string[];
  programs: string[];
  image: string;
  imagePosition: string;
  active: boolean;
};

export const educationUnits: EducationUnit[] = [
  {
    id: 'ra',
    slug: 'ra-ibadurrahman',
    name: 'RA Ibadurrahman',
    level: 'Pendidikan Usia Dini',
    description: 'Fondasi awal untuk tumbuh, bermain, belajar, dan mengenal nilai-nilai Islam dalam lingkungan yang hangat.',
    longDescription: 'RA Ibadurrahman mendampingi masa awal pertumbuhan anak melalui pengalaman belajar yang menyenangkan, pembiasaan nilai Islam, dan interaksi yang sesuai dengan tahap perkembangannya.',
    focus: ['Pembiasaan nilai Islam', 'Kesiapan belajar', 'Kemandirian awal', 'Kreativitas dan motorik'],
    programs: ['Belajar melalui bermain', 'Pengenalan ibadah dan adab', 'Literasi dan numerasi awal', 'Kegiatan kreatif'],
    image: '/assets/gallery/literasi-santri-ibadurrahman.jpeg',
    imagePosition: '22% center',
    active: true,
  },
  {
    id: 'sdi',
    slug: 'sdi-ibadurrahman',
    name: 'SDI Ibadurrahman',
    level: 'Pendidikan Dasar',
    description: 'Membangun dasar akademik, keislaman, kemandirian, serta kebiasaan baik dalam kehidupan sehari-hari.',
    longDescription: 'SDI Ibadurrahman menjadi ruang bagi peserta didik untuk memperkuat kemampuan dasar, membangun kebiasaan belajar, serta menghidupkan adab dan nilai keislaman dalam keseharian.',
    focus: ['Fondasi akademik', 'Adab dan karakter', 'Kemandirian', 'Rasa ingin tahu'],
    programs: ['Pembelajaran akademik', 'Pendidikan keislaman', 'Literasi', 'Pengembangan minat'],
    image: '/assets/hero/kegiatan-kelas-ibadurrahman.jpeg',
    imagePosition: '48% center',
    active: true,
  },
  {
    id: 'smp-plus',
    slug: 'smp-plus-ibadurrahman',
    name: 'SMP Plus Ibadurrahman',
    level: 'Pendidikan Menengah Pertama',
    description: 'Mendampingi masa remaja dengan pembelajaran akademik, penguatan karakter, dan pengembangan potensi.',
    longDescription: 'SMP Plus Ibadurrahman mendampingi peserta didik melewati masa remaja dengan landasan nilai Islam, pembelajaran yang aktif, serta ruang untuk mengenali minat dan tanggung jawabnya.',
    focus: ['Penguatan akademik', 'Karakter remaja', 'Kepemimpinan', 'Eksplorasi potensi'],
    programs: ['Pembelajaran terintegrasi', 'Tahfiz dan keislaman', 'Literasi digital', 'Kegiatan pengembangan diri'],
    image: '/assets/hero/kegiatan-kelas-ibadurrahman.jpeg',
    imagePosition: '38% center',
    active: true,
  },
  {
    id: 'sma',
    slug: 'sma-ibadurrahman',
    name: 'SMA Ibadurrahman',
    level: 'Pendidikan Menengah Atas',
    description: 'Mempersiapkan peserta didik menjadi pribadi berilmu, berakhlak, mandiri, dan siap melanjutkan masa depan.',
    longDescription: 'SMA Ibadurrahman membantu peserta didik memperdalam wawasan, mematangkan karakter, dan mempersiapkan langkah berikutnya melalui pendampingan akademik serta pengembangan kecakapan hidup.',
    focus: ['Kesiapan akademik', 'Kematangan karakter', 'Kepemimpinan', 'Perencanaan masa depan'],
    programs: ['Pendalaman akademik', 'Tahfiz dan keislaman', 'Kecakapan hidup', 'Eksplorasi studi lanjut'],
    image: '/assets/gallery/literasi-santri-ibadurrahman.jpeg',
    imagePosition: '76% center',
    active: true,
  },
];

export function getEducationUnit(slug: string) {
  return educationUnits.find((unit) => unit.slug === slug && unit.active);
}

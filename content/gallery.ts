export type GalleryItem = {
  id: string;
  image: string;
  title: string;
  alt: string;
  category: string;
  order: number;
};

export const gallery: GalleryItem[] = [
  { id: 'halaqah', image: '/assets/hero/kegiatan-kelas-ibadurrahman.jpeg', title: 'Belajar Al-Qur’an', alt: 'Peserta didik Ibadurrahman belajar Al-Qur’an bersama guru di kelas', category: 'Pembelajaran', order: 1 },
  { id: 'kelas', image: '/assets/gallery/literasi-santri-ibadurrahman.jpeg', title: 'Budaya membaca', alt: 'Empat peserta didik Ibadurrahman membaca buku bersama di ruang literasi', category: 'Literasi', order: 2 },
  { id: 'ukhuwah', image: '/assets/hero/kegiatan-kelas-ibadurrahman.jpeg', title: 'Tumbuh bersama', alt: 'Kebersamaan peserta didik dalam kegiatan pembelajaran Al-Qur’an', category: 'Kehidupan Sekolah', order: 3 },
  { id: 'pengabdian', image: '/assets/gallery/literasi-santri-ibadurrahman.jpeg', title: 'Belajar mandiri', alt: 'Peserta didik membaca dan belajar mandiri bersama teman', category: 'Kegiatan', order: 4 },
  { id: 'murajaah', image: '/assets/hero/kegiatan-kelas-ibadurrahman.jpeg', title: 'Murajaah terarah', alt: 'Pendampingan murajaah Al-Qur’an di kelas Ibadurrahman', category: 'Tahfiz', order: 5 },
];

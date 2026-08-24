export type Campus = {
  id: string;
  slug: string;
  name: string;
  location: string;
  address: string;
  phone: string;
  email: string;
  description: string;
  image: string;
  facilities: string[];
  programs: string[];
  mapUrl: string;
  active: boolean;
};

export const campuses: Campus[] = [
  {
    id: 'kampus-putra',
    slug: 'kampus-putra',
    name: 'Kampus Putra',
    location: 'Kota Tangerang',
    address: 'Alamat lengkap dapat diperbarui melalui content/campuses.ts',
    phone: '+62 21 0000 0000',
    email: 'putra@ibadurrahman.sch.id',
    description: 'Lingkungan belajar dan asrama yang tertata untuk membangun fokus, kebersamaan, dan kemandirian santri putra.',
    image: '/assets/hero/kegiatan-kelas-ibadurrahman.jpeg',
    facilities: ['Masjid', 'Asrama santri', 'Ruang kelas', 'Perpustakaan', 'Lapangan olahraga'],
    programs: ['Tahfiz Al-Qur’an', 'Madrasah Diniyah', 'Pengembangan Santri'],
    mapUrl: 'https://maps.google.com',
    active: true,
  },
  {
    id: 'kampus-putri',
    slug: 'kampus-putri',
    name: 'Kampus Putri',
    location: 'Kota Tangerang',
    address: 'Alamat lengkap dapat diperbarui melalui content/campuses.ts',
    phone: '+62 21 0000 0000',
    email: 'putri@ibadurrahman.sch.id',
    description: 'Kampus yang aman dan hangat untuk mendampingi santri putri menuntut ilmu, berkarya, dan tumbuh percaya diri.',
    image: '/assets/gallery/literasi-santri-ibadurrahman.jpeg',
    facilities: ['Musala', 'Asrama santri', 'Ruang kelas', 'Ruang keterampilan', 'Area hijau'],
    programs: ['Tahfiz Al-Qur’an', 'Madrasah Diniyah', 'Pengembangan Santri'],
    mapUrl: 'https://maps.google.com',
    active: true,
  },
];

export function getCampus(slug: string) {
  return campuses.find((campus) => campus.slug === slug && campus.active);
}

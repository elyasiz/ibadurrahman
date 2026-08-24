export const homeContent = {
  hero: {
    eyebrow: 'Pondok Pesantren Ibadurrahman · Kota Tangerang',
    title: 'Tempat tumbuhnya generasi berilmu dan berakhlak.',
    description:
      'Lingkungan belajar yang hangat untuk mendampingi santri memahami Al-Qur’an, membangun adab, dan mengembangkan potensi terbaiknya.',
    primaryCTA: { label: 'Daftar Sekarang', href: '/admissions' },
    secondaryCTA: { label: 'Kenali Pesantren', href: '#tentang' },
    image: '/assets/hero/kegiatan-kelas-ibadurrahman.jpeg',
    imagePosition: 'center',
  },
  about: {
    eyebrow: 'Tentang Ibadurrahman',
    title: 'Pendidikan yang menyentuh akal, hati, dan keseharian.',
    description: 'Kami memadukan pendalaman ilmu agama, pembelajaran akademik, dan pembiasaan adab dalam lingkungan yang aman dan penuh keteladanan. Setiap santri didampingi untuk mengenali potensinya, disiplin dalam proses, dan bermanfaat bagi sesama.',
    image: '/assets/gallery/literasi-santri-ibadurrahman.jpeg',
    button: { label: 'Cerita Kami', href: '/about' },
  },
  values: [
    { number: '01', title: 'Berilmu', description: 'Membangun tradisi belajar yang mendalam, kritis, dan berlandaskan Al-Qur’an.' },
    { number: '02', title: 'Beradab', description: 'Menjadikan akhlak mulia sebagai ruh dalam belajar, bergaul, dan mengabdi.' },
    { number: '03', title: 'Mandiri', description: 'Melatih tanggung jawab, kepemimpinan, dan kecakapan hidup sejak dini.' },
  ],
  cta: {
    eyebrow: 'Penerimaan Santri Baru',
    title: 'Langkah besar dimulai dari lingkungan yang tepat.',
    description: 'Kenali program, alur pendaftaran, dan kehidupan santri di Ibadurrahman.',
    button: { label: 'Mulai Pendaftaran', href: '/admissions' },
  },
  video: {
    eyebrow: 'Kehidupan Pesantren',
    title: 'Belajar, bertumbuh, dan beribadah dalam satu perjalanan.',
    description: 'Saksikan gambaran keseharian santri—dari halaqah pagi, pembelajaran di kelas, hingga kegiatan pengembangan diri.',
    thumbnail: '/assets/hero/kegiatan-kelas-ibadurrahman.jpeg',
    videoUrl: '',
  },
  sectionOrder: ['about', 'values', 'cta', 'programs', 'campuses', 'testimonials', 'video', 'gallery', 'contact'] as const,
  visibility: {
    about: true,
    values: true,
    cta: true,
    programs: true,
    campuses: true,
    testimonials: true,
    video: true,
    gallery: true,
    contact: true,
  },
} as const;

export const siteConfig = {
  url: 'https://pondok-pesantren-ibadurrahman.maker-education-grou.chatgpt.site',
  brand: {
    name: 'Pondok Pesantren Ibadurrahman',
    shortName: 'Ibadurrahman',
    logo: '/assets/logo/ibadurrahman-logo.jpeg',
    tagline: 'Menumbuhkan ilmu, adab, dan kemandirian',
    colors: {
      primary: '#0a5a3a',
      secondary: '#fff3a8',
      accent: '#ffdd28',
      background: '#fffdf5',
      surface: '#f6f3e9',
      text: '#11271e',
      mutedText: '#617067',
      border: '#dedbd0',
    },
  },
  contact: {
    email: 'info@ibadurrahman.sch.id',
    phone: '+62 21 0000 0000',
    whatsapp: '6281200000000',
    address: 'Kota Tangerang, Banten',
  },
  social: {
    instagram: '#',
    facebook: '#',
    youtube: '#',
    tiktok: '#',
  },
  locales: [
    { code: 'id', label: 'ID' },
    { code: 'en', label: 'EN' },
  ],
  navigation: [
    {
      label: 'Program',
      href: '/programs',
      children: [
        { label: 'Tahfiz Al-Qur’an', href: '/programs/tahfiz' },
        { label: 'Madrasah Diniyah', href: '/programs/madrasah-diniyah' },
        { label: 'Pengembangan Santri', href: '/programs/pengembangan-santri' },
      ],
    },
    { label: 'Tentang Kami', href: '/about' },
    { label: 'Kehidupan Santri', href: '/campuses' },
    { label: 'Galeri', href: '/gallery' },
    { label: 'Kontak', href: '/contact' },
  ],
} as const;

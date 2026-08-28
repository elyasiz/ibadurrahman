export const siteConfig = {
  url: 'https://ibadurrahman.vercel.app',
  brand: {
    name: 'Yayasan Ibadurrahman',
    shortName: 'Ibadurrahman',
    logo: '/assets/logo/ibadurrahman-logo.jpeg',
    tagline: 'Pendidikan Islami dari RA hingga SMA',
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
    address: 'Kota Tangerang, Banten',
  },
  admissionsContacts: [
    {
      name: 'Qotrunada',
      phone: '+62 851-3308-5391',
      whatsapp: '6285133085391',
      avatar: '/assets/contacts/qotrunada.jpg',
      avatarPosition: '50% 65%',
    },
    {
      name: 'Admin Ibadurrahman',
      phone: '0896-7701-3192',
      whatsapp: '6289677013192',
      avatar: '/assets/logo/ibadurrahman-logo.jpeg',
      avatarPosition: 'center',
    },
  ],
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
      label: 'Unit Pendidikan',
      href: '/units',
      children: [
        { label: 'RA Ibadurrahman', href: '/units/ra-ibadurrahman' },
        { label: 'SDI Ibadurrahman', href: '/units/sdi-ibadurrahman' },
        { label: 'SMP Plus Ibadurrahman', href: '/units/smp-plus-ibadurrahman' },
        { label: 'SMA Ibadurrahman', href: '/units/sma-ibadurrahman' },
      ],
    },
    { label: 'Tentang Yayasan', href: '/about' },
    { label: 'Program Pendidikan', href: '/programs' },
    { label: 'Galeri', href: '/gallery' },
    { label: 'Pendaftaran', href: '/admissions' },
  ],
} as const;

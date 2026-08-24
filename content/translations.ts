export const translations = {
  id: {
    navigation: { admissions: 'Pendaftaran', contact: 'Kontak' },
    common: { learnMore: 'Pelajari Lebih Lanjut', viewAll: 'Lihat Semua' },
  },
  en: {
    navigation: { admissions: 'Admissions', contact: 'Contact' },
    common: { learnMore: 'Learn More', viewAll: 'View All' },
  },
} as const;

export type Locale = keyof typeof translations;

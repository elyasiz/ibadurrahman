export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  image?: string;
  videoUrl?: string;
  active: boolean;
};

export const testimonials: Testimonial[] = [
  { id: 'parent-01', quote: 'Kami melihat anak menjadi lebih disiplin, hangat kepada keluarga, dan semakin percaya diri menyampaikan pendapatnya.', name: 'Orang Tua Santri', role: 'Wali Santri', active: true },
  { id: 'alumni-01', quote: 'Di Ibadurrahman saya belajar bahwa hafalan harus terlihat dalam akhlak, tanggung jawab, dan cara memperlakukan orang lain.', name: 'Alumni Ibadurrahman', role: 'Alumni', active: true },
  { id: 'student-01', quote: 'Para ustaz dan teman-teman membuat proses belajar terasa dekat. Kami ditantang untuk mandiri, tetapi tidak pernah merasa sendirian.', name: 'Santri Ibadurrahman', role: 'Santri', active: true },
];

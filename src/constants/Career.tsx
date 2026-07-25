export const CV_FILE = '/CV-MUHAMMAD_GALIH_PRATAMA_PUTRA.pdf';

type CareerItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
};

export const CAREER_ITEMS: CareerItem[] = [
  {
    role: 'Laboratory Assistant',
    company: 'Lembaga Pengembangan Komputerisasi Universitas Gunadarma',
    period: 'Februari 2025 - Sekarang',
    location: 'Tangerang, Indonesia',
    description:
      'Mendampingi peserta selama sesi workshop praktik dan latihan pemrograman, menyiapkan perangkat serta software untuk sesi sertifikasi, dan menangani permasalahan teknis agar proses asesmen berjalan lancar.',
  },
  {
    role: 'Web Developer',
    company: 'Medina Studio',
    period: 'Maret 2025 - Juni 2025',
    location: 'Tangerang, Indonesia',
    description:
      'Membangun website company profile untuk kursus tata rias menggunakan WordPress dan Elementor, merancang layout responsif, serta berkoordinasi langsung dengan klien untuk menerjemahkan kebutuhan bisnis ke dalam solusi website.',
  },
];

type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  location: string;
  note: string;
};

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    institution: 'Universitas Gunadarma',
    degree: 'Sarjana Sistem Informasi',
    period: 'September 2023 - Sekarang',
    location: 'Tangerang, Indonesia',
    note: 'IPK: 3,73',
  },
];

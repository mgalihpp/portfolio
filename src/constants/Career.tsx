import type { Language } from '@/providers/LanguageProvider';

export const CV_FILE = 'https://eujut19kua.ufs.sh/f/DovWuZwOIqaWDU62WOwOIqaWfdlJGN1mFP6Vy4uER0esBMAc';

type Localized = Record<Language, string>;

type CareerItem = {
  role: Localized;
  company: string;
  period: Localized;
  location: string;
  description: Localized;
};

export const CAREER_ITEMS: CareerItem[] = [
  {
    role: {
      en: 'Laboratory Assistant',
      id: 'Asisten Laboratorium',
    },
    company: 'Lembaga Pengembangan Komputerisasi Universitas Gunadarma',
    period: {
      en: 'February 2025 - Present',
      id: 'Februari 2025 - Sekarang',
    },
    location: 'Tangerang, Indonesia',
    description: {
      en: 'Guiding participants through hands-on workshop sessions and programming exercises, preparing devices and software for certification sessions, and troubleshooting technical issues so assessments run smoothly.',
      id: 'Mendampingi peserta selama sesi workshop praktik dan latihan pemrograman, menyiapkan perangkat serta software untuk sesi sertifikasi, dan menangani permasalahan teknis agar proses asesmen berjalan lancar.',
    },
  },
  {
    role: {
      en: 'Web Developer',
      id: 'Web Developer',
    },
    company: 'Medina Studio',
    period: {
      en: 'March 2025 - June 2025',
      id: 'Maret 2025 - Juni 2025',
    },
    location: 'Tangerang, Indonesia',
    description: {
      en: 'Built a company profile website for a makeup course using WordPress and Elementor, designed responsive layouts, and worked directly with the client to translate business needs into a fitting website solution.',
      id: 'Membangun website company profile untuk kursus tata rias menggunakan WordPress dan Elementor, merancang layout responsif, serta berkoordinasi langsung dengan klien untuk menerjemahkan kebutuhan bisnis ke dalam solusi website.',
    },
  },
];

type EducationItem = {
  institution: string;
  degree: Localized;
  period: Localized;
  location: string;
  note: Localized;
};

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    institution: 'Universitas Gunadarma',
    degree: {
      en: "Bachelor's Degree in Information Systems",
      id: 'Sarjana Sistem Informasi',
    },
    period: {
      en: 'September 2023 - Present',
      id: 'September 2023 - Sekarang',
    },
    location: 'Tangerang, Indonesia',
    note: {
      en: 'GPA: 3.73',
      id: 'IPK: 3,73',
    },
  },
];

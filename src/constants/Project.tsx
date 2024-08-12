import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPostgresql,
  SiReact,
  SiThreedotjs,
  SiJavascript,
  SiFlask,
  SiPython,
  SiMysql,
} from 'react-icons/si';

const ICON_SIZE: number = 24;

export const PROJECTS_ITEMS: Project[] = [
  {
    url: 'https://guruai.my.id',
    name: 'Guru AI',
    techStack: [
      {
        label: 'TypeScript',
        icon: <SiTypescript size={ICON_SIZE} color='#3078C7' />,
      },
      { label: 'React.js', icon: <SiReact size={ICON_SIZE} color='#149FCB' /> },
      {
        label: 'Next.js',
        icon: <SiNextdotjs size={ICON_SIZE} />,
      },
      {
        label: 'Tailwind CSS',
        icon: <SiTailwindcss size={ICON_SIZE} color='#38BDF8' />,
      },
      {
        label: 'PostgreSQL',
        icon: <SiPostgresql size={ICON_SIZE} color='#336690' />,
      },
      {
        label: 'Three.js',
        icon: <SiThreedotjs size={ICON_SIZE} color='#689EFE' />,
      },
    ],
    description:
      'Guru AI Teacher Language Speech provides AI-based language and speech recognition services to help users improve their language skills.',
    image: 'https://utfs.io/f/979aeaad-44e1-4608-b72b-aacbedd646b1-1rnwpq.webp',
    imageAlt: 'Guru AI preview image',
  },
  {
    url: 'https://music-player-nine-lime.vercel.app',
    name: 'Music Player',
    techStack: [
      {
        label: 'Javascript',
        icon: <SiJavascript size={ICON_SIZE} color='#FDDC01' />,
      },
      {
        label: 'React.js',
        icon: <SiReact size={ICON_SIZE} color='#149FCB' />,
      },
      {
        label: 'Flask',
        icon: <SiFlask size={ICON_SIZE} />,
      },
      {
        label: 'Python',
        icon: <SiPython size={ICON_SIZE} color='#3078C7' />,
      },
      {
        label: 'MySQL',
        icon: <SiMysql size={ICON_SIZE} color='#336690' />,
      },
    ],
    description: 'Music Player is a music streaming web application.',
    image:
      'https://utfs.io/f/585f8435-ac9b-44a6-9c26-c2a970d4d310-q3sxud.webp',
    imageAlt: 'Music Player preview image',
  },
];

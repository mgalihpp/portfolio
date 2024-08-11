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
    image: 'https://guruai.my.id/images/prev1.webp',
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
      'https://raw.githubusercontent.com/mgalihpp/music_player/main/docs/preview5.png',
    imageAlt: 'Music Player preview image',
  },
];

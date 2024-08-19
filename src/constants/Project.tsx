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
  SiMongodb,
} from 'react-icons/si';

const ICON_SIZE: number = 24;

export const PROJECTS_ITEMS: Project[] = [
  {
    url: 'https://guruai.my.id',
    name: 'Guru AI',
    techStack: [
      {
        label: 'TypeScript',
        icon: <SiTypescript size={ICON_SIZE} color="#3078C7" />,
      },
      { label: 'React.js', icon: <SiReact size={ICON_SIZE} color="#149FCB" /> },
      {
        label: 'Next.js',
        icon: <SiNextdotjs size={ICON_SIZE} />,
      },
      {
        label: 'Tailwind CSS',
        icon: <SiTailwindcss size={ICON_SIZE} color="#38BDF8" />,
      },
      {
        label: 'PostgreSQL',
        icon: <SiPostgresql size={ICON_SIZE} color="#336690" />,
      },
      {
        label: 'Three.js',
        icon: <SiThreedotjs size={ICON_SIZE} color="#689EFE" />,
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
        icon: <SiJavascript size={ICON_SIZE} color="#FDDC01" />,
      },
      {
        label: 'React.js',
        icon: <SiReact size={ICON_SIZE} color="#149FCB" />,
      },
      {
        label: 'Flask',
        icon: <SiFlask size={ICON_SIZE} />,
      },
      {
        label: 'Python',
        icon: <SiPython size={ICON_SIZE} color="#3078C7" />,
      },
      {
        label: 'MySQL',
        icon: <SiMysql size={ICON_SIZE} color="#336690" />,
      },
    ],
    description: 'Music Player is a music streaming web application.',
    image: 'https://utfs.io/f/585f8435-ac9b-44a6-9c26-c2a970d4d310-q3sxud.webp',
    imageAlt: 'Music Player preview image',
  },
  {
    url: 'https://yourtube-six.vercel.app/',
    name: 'YourTube - Youtube Clone',
    techStack: [
      {
        label: 'TypeScript',
        icon: <SiTypescript size={ICON_SIZE} color="#3078C7" />,
      },
      {
        label: 'React.js',
        icon: <SiReact size={ICON_SIZE} color="#149FCB" />,
      },
      {
        label: 'Next.js',
        icon: <SiNextdotjs size={ICON_SIZE} />,
      },
      {
        label: 'Tailwind CSS',
        icon: <SiTailwindcss size={ICON_SIZE} color="#38BDF8" />,
      },
      {
        label: 'PostgreSQL',
        icon: <SiPostgresql size={ICON_SIZE} color="#336690" />,
      },
    ],
    description: 'YourTube is a clone of YouTube.',
    image: 'https://utfs.io/f/6fc6fbac-7dad-4226-8d14-d40983091008-61i9fp.webp',
    imageAlt: 'YourTube preview image',
  },
  // {
  //   url: 'https://taskmaker-sage.vercel.app/',
  //   name: 'TaskMaker',
  //   techStack: [
  //     {
  //       label: 'TypeScript',
  //       icon: <SiTypescript size={ICON_SIZE} color="#3078C7" />,
  //     },
  //     {
  //       label: 'React.js',
  //       icon: <SiReact size={ICON_SIZE} color="#149FCB" />,
  //     },
  //     {
  //       label: 'Next.js',
  //       icon: <SiNextdotjs size={ICON_SIZE} />,
  //     },
  //     {
  //       label: 'Tailwind CSS',
  //       icon: <SiTailwindcss size={ICON_SIZE} color="#38BDF8" />,
  //     },
  //     {
  //       label: 'MongoDB',
  //       icon: <SiMongodb size={ICON_SIZE} color="#00ED64" />,
  //     },
  //   ],
  //   description:
  //     'TaskMaker is a web application that allows you to manage your tasks.',
  //   image: 'https://utfs.io/f/7fe7a55c-9ebb-4e24-a68d-f198abf166b2-61i79h.webp',
  //   imageAlt: 'TaskMaker preview image',
  // },
  {
    url: 'https://github.com/mgalihpp/borce-ecommerce/',
    name: 'Borce Ecommerce',
    techStack: [
      {
        label: 'React.js',
        icon: <SiReact size={ICON_SIZE} color="#149FCB" />,
      },
      {
        label: 'Next.js',
        icon: <SiNextdotjs size={ICON_SIZE} />,
      },
      {
        label: 'TypeScript',
        icon: <SiTypescript size={ICON_SIZE} color="#3078C7" />,
      },
      {
        label: 'Tailwind CSS',
        icon: <SiTailwindcss size={ICON_SIZE} color="#38BDF8" />,
      },
      {
        label: 'MongoDB',
        icon: <SiMongodb size={ICON_SIZE} color="#00ED64" />,
      },
    ],
    description:
      'E-commerce web application that allows users to buy and sell products.',
    image: 'https://utfs.io/f/1aee372b-4959-4728-a803-54410f77a701-61iblg.webp',
    imageAlt: 'Borce Ecommerce preview image',
  },
];

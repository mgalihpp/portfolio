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
  SiPrisma,
  SiFirebase,
  SiOpenai,
  SiRust,
  SiVuedotjs,
  SiVite,
  SiExpress,
  SiSolidity,
  SiEthereum,
  SiTrpc,
  SiReactquery,
  SiTelegram,
  SiRedux,
  SiNodedotjs,
} from 'react-icons/si';

const ICON_SIZE: number = 24;

const TECH = {
  ts: {
    label: 'TypeScript',
    icon: <SiTypescript size={ICON_SIZE} color="#3078C7" />,
  },
  js: {
    label: 'Javascript',
    icon: <SiJavascript size={ICON_SIZE} color="#FDDC01" />,
  },
  react: { label: 'React.js', icon: <SiReact size={ICON_SIZE} color="#149FCB" /> },
  next: { label: 'Next.js', icon: <SiNextdotjs size={ICON_SIZE} /> },
  vue: { label: 'Vue.js', icon: <SiVuedotjs size={ICON_SIZE} color="#41B883" /> },
  tailwind: {
    label: 'Tailwind CSS',
    icon: <SiTailwindcss size={ICON_SIZE} color="#38BDF8" />,
  },
  postgres: {
    label: 'PostgreSQL',
    icon: <SiPostgresql size={ICON_SIZE} color="#336690" />,
  },
  mysql: { label: 'MySQL', icon: <SiMysql size={ICON_SIZE} color="#336690" /> },
  mongo: { label: 'MongoDB', icon: <SiMongodb size={ICON_SIZE} color="#00ED64" /> },
  prisma: { label: 'Prisma', icon: <SiPrisma size={ICON_SIZE} color="#2C3648" /> },
  firebase: {
    label: 'Firebase',
    icon: <SiFirebase size={ICON_SIZE} color="#FFCA2F" />,
  },
  ai: { label: 'AI SDK', icon: <SiOpenai size={ICON_SIZE} /> },
  rust: { label: 'Rust', icon: <SiRust size={ICON_SIZE} color="#CE422B" /> },
  vite: { label: 'Vite', icon: <SiVite size={ICON_SIZE} color="#689EFE" /> },
  express: { label: 'Express.js', icon: <SiExpress size={ICON_SIZE} /> },
  node: { label: 'Node.js', icon: <SiNodedotjs size={ICON_SIZE} color="#418A3F" /> },
  trpc: { label: 'tRPC', icon: <SiTrpc size={ICON_SIZE} color="#398CCB" /> },
  reactQuery: {
    label: 'React Query',
    icon: <SiReactquery size={ICON_SIZE} color="#FF4055" />,
  },
  redux: { label: 'Redux', icon: <SiRedux size={ICON_SIZE} color="#764BBD" /> },
  solidity: {
    label: 'Solidity',
    icon: <SiSolidity size={ICON_SIZE} color="#363636" />,
  },
  ethereum: {
    label: 'Ethereum',
    icon: <SiEthereum size={ICON_SIZE} color="#627EEA" />,
  },
  telegram: {
    label: 'Telegram Bot',
    icon: <SiTelegram size={ICON_SIZE} color="#26A5E4" />,
  },
  three: {
    label: 'Three.js',
    icon: <SiThreedotjs size={ICON_SIZE} color="#689EFE" />,
  },
  flask: { label: 'Flask', icon: <SiFlask size={ICON_SIZE} /> },
  python: { label: 'Python', icon: <SiPython size={ICON_SIZE} color="#3078C7" /> },
} satisfies Record<string, TechStack>;

export const PROJECTS_ITEMS: Project[] = [
  {
    url: 'https://zyvo-zeta.vercel.app',
    name: 'Zyvo',
    image: '/projects/zyvo.png',
    imageAlt: 'Zyvo preview image',
    techStack: [
      TECH.ts,
      TECH.next,
      TECH.react,
      TECH.tailwind,
      TECH.prisma,
      TECH.trpc,
      TECH.ai,
    ],
    description:
      'AI-assisted CV/resume builder with live-preview editor, AI writing help, 9 designer templates, and print-quality PDF/PNG export.',
  },
  {
    url: 'https://warungmamania.vercel.app',
    name: 'Warung POS',
    image: '/projects/warungmamania.png',
    imageAlt: 'Warung POS preview image',
    techStack: [
      TECH.ts,
      TECH.next,
      TECH.react,
      TECH.tailwind,
      TECH.prisma,
      TECH.reactQuery,
    ],
    description:
      'Point of sale application for small shops, handling product catalog, transactions, and sales reports.',
  },
  {
    url: 'https://katalis-ai-xi.vercel.app',
    name: 'Katalis AI',
    image: '/projects/katalis-ai.png',
    imageAlt: 'Katalis AI preview image',
    techStack: [TECH.ts, TECH.next, TECH.react, TECH.tailwind, TECH.firebase, TECH.ai],
    description:
      'AI assistant for Indonesian MSME owners to manage finances, stock, and debts using only their voice.',
  },
  {
    url: 'https://github.com/mgalihpp/hyperliquid-tracker',
    image: "https://github.com/mgalihpp/hyperliquid-tracker/raw/main/docs/dashboard-preview.png",
    imageAlt: "Hyperliquid Tracker Dashboard Preview",
    name: 'Hyperliquid Tracker',
    techStack: [TECH.ts, TECH.next, TECH.react, TECH.tailwind, TECH.reactQuery],
    description:
      'Real-time Hyperliquid wallet tracker with multi-wallet support, PnL alerts, liquidation monitoring, and an MCP server for AI clients.',
  },
  {
    url: 'https://forgy-forge.vercel.app/',
    name: 'Prompt Forge',
    image: '/projects/prompt-forge.png',
    imageAlt: 'Prompt Forge preview image',
    techStack: [TECH.ts, TECH.next, TECH.react, TECH.tailwind, TECH.prisma, TECH.ai],
    description:
      'Rewrites a quick thought into a structured, model-ready prompt for chat, image, code, writing, or research.',
  },
  {
    url: 'https://fiilo-gilt.vercel.app',
    name: 'Fiilo',
    image: '/projects/fiilo.png',
    imageAlt: 'Fiilo preview image',
    techStack: [TECH.ts, TECH.next, TECH.react, TECH.tailwind, TECH.prisma, TECH.ai],
    description:
      'Lets AI take over your file management, organizing and making sense of your documents automatically.',
  },
  {
    url: 'https://vibe-coder-tau.vercel.app',
    name: 'Vibe Coder',
    image: '/projects/vibe-coder.png',
    imageAlt: 'Vibe Coder preview image',
    techStack: [TECH.ts, TECH.next, TECH.react, TECH.tailwind, TECH.prisma, TECH.trpc],
    description:
      'AI app builder that turns natural language prompts into working applications, inspired by Lovable.',
  },
  {
    url: 'https://github.com/mgalihpp/vexis',
    name: 'Vexis',
    techStack: [TECH.ts, TECH.react, TECH.rust, TECH.tailwind],
    description:
      'Modern web-based attendance system built with high performance and security as the main priorities.',
  },
  {
    url: 'https://trywear-web.vercel.app',
    name: 'TryWear',
    image: '/projects/trywear.png',
    imageAlt: 'TryWear preview image',
    techStack: [TECH.ts, TECH.next, TECH.react, TECH.tailwind, TECH.express],
    description:
      'Modern e-commerce platform featuring a Virtual Try-On experience so shoppers can preview clothing before buying.',
  },
  {
    url: 'https://guruai.my.id',
    name: 'Guru AI',
    techStack: [
      TECH.ts,
      TECH.react,
      TECH.next,
      TECH.tailwind,
      TECH.postgres,
      TECH.three,
    ],
    description:
      'Guru AI Teacher Language Speech provides AI-based language and speech recognition services to help users improve their language skills.',
    image: 'https://utfs.io/f/979aeaad-44e1-4608-b72b-aacbedd646b1-1rnwpq.webp',
    imageAlt: 'Guru AI preview image',
  },
  {
    url: 'https://prd-generator-sepia-three.vercel.app',
    image: 'https://github.com/mgalihpp/prd-generator/raw/main/.github/image4.png',
    imageAlt: 'PRD Generator preview image',
    name: 'PRD Generator',
    techStack: [TECH.ts, TECH.next, TECH.react, TECH.tailwind, TECH.ai],
    description:
      'Three-step Product Requirements Document generator with intelligent architecture planning, powered by OpenRouter.',
  },
  {
    url: 'https://nexus-plum-three.vercel.app',
    name: 'Nexus',
    image: '/projects/nexus.png',
    imageAlt: 'Nexus preview image',
    techStack: [TECH.ts, TECH.vue, TECH.tailwind, TECH.vite],
    description:
      'Conference landing page bringing together global leaders and visionaries for two days of insights and breakthroughs.',
  },
  {
    url: 'https://github.com/mgalihpp/my-dlmm-bot',
    image: '/projects/dlmm.png',
    imageAlt: 'DLMM Bot preview image',
    name: 'DLMM Bot',
    techStack: [TECH.ts, TECH.node, TECH.telegram],
    description:
      'Telegram bot for managing Meteora DLMM liquidity positions directly from your phone.',
  },
  {
    url: 'https://decentralized-greeting-board.vercel.app',
    name: 'Greeting Board',
    techStack: [TECH.ts, TECH.react, TECH.solidity, TECH.ethereum, TECH.tailwind],
    description:
      'Decentralized greeting board running on the Ethereum Sepolia blockchain, built with Hardhat and Web3.',
  },
  {
    url: 'https://mgalihpp.site',
    name: 'Reddit Clone',
    techStack: [TECH.ts, TECH.react, TECH.express, TECH.redux, TECH.postgres],
    description:
      'Full-stack Reddit clone with communities, posts, voting, and nested comments.',
  },
  {
    url: 'https://music-player-nine-lime.vercel.app',
    name: 'Music Player',
    techStack: [TECH.js, TECH.react, TECH.flask, TECH.python, TECH.mysql],
    description: 'Music Player is a music streaming web application.',
    image: 'https://utfs.io/f/585f8435-ac9b-44a6-9c26-c2a970d4d310-q3sxud.webp',
    imageAlt: 'Music Player preview image',
  },
  {
    url: 'https://yourtube-six.vercel.app/',
    name: 'YourTube - Youtube Clone',
    techStack: [TECH.ts, TECH.react, TECH.next, TECH.tailwind, TECH.postgres],
    description: 'YourTube is a clone of YouTube.',
    image: 'https://utfs.io/f/6fc6fbac-7dad-4226-8d14-d40983091008-61i9fp.webp',
    imageAlt: 'YourTube preview image',
  },
  {
    url: 'https://github.com/mgalihpp/borce-ecommerce/',
    name: 'Borce Ecommerce',
    techStack: [TECH.react, TECH.next, TECH.ts, TECH.tailwind, TECH.mongo],
    description:
      'E-commerce web application that allows users to buy and sell products.',
    image: 'https://utfs.io/f/1aee372b-4959-4728-a803-54410f77a701-61iblg.webp',
    imageAlt: 'Borce Ecommerce preview image',
  },
];

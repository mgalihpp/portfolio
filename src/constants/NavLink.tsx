import { AiOutlineHome } from 'react-icons/ai';
import { FaRegPaperPlane } from 'react-icons/fa';
import { GoProjectSymlink } from 'react-icons/go';
import { SiAboutdotme } from 'react-icons/si';
import { TbWriting } from 'react-icons/tb';
import type { TranslationKey } from '@/constants/locales/en';

const ICON_SIZE: number = 24;

type NavLinkItem = {
  icon: JSX.Element;
  pathname: string;
  labelKey: TranslationKey;
};

export const NAVLINK_ITEMS: NavLinkItem[] = [
  {
    icon: <AiOutlineHome size={ICON_SIZE} />,
    pathname: '/',
    labelKey: 'nav.home',
  },
  {
    icon: <SiAboutdotme size={ICON_SIZE} />,
    pathname: '/about',
    labelKey: 'nav.about',
  },
  {
    icon: <GoProjectSymlink size={ICON_SIZE} />,
    pathname: '/projects',
    labelKey: 'nav.projects',
  },
  {
    icon: <TbWriting size={ICON_SIZE} />,
    pathname: '/blog',
    labelKey: 'nav.blogs',
  },
  {
    icon: <FaRegPaperPlane size={ICON_SIZE} />,
    pathname: '/contact',
    labelKey: 'nav.contact',
  },
];

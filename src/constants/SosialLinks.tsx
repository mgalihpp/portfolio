import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from 'react-icons/fa6';

const ICON_SIZE: number = 20;

export const SOCIAL_LINKS = [
  {
    icon: <FaGithub size={ICON_SIZE} />,
    url: 'https://github.com/mgalihpp',
    label: 'GitHub',
    backgroundColor: '#262626',
  },
  {
    icon: <FaLinkedin size={ICON_SIZE} />,
    url: 'https://www.linkedin.com/in/mgalihpp',
    label: 'LinkedIn',
    backgroundColor: '#0A66C2',
  },
  {
    icon: <FaInstagram size={ICON_SIZE} />,
    url: 'https://www.instagram.com/mgalihpp/',
    label: 'Instagram',
    backgroundColor: 'linear-gradient(to right, #f9ce34, #ee2a7b, #6228d7)',
  },
  {
    icon: <FaXTwitter size={ICON_SIZE} />,
    url: 'https://x.com/stunobG',
    label: 'Twitter',
    backgroundColor: '#262626',
  },
  {
    icon: <FaFacebook size={ICON_SIZE} />,
    url: 'https://www.facebook.com/muhammad.galihpp/',
    label: 'Facebook',
    backgroundColor: '#0966FE',
  },
];

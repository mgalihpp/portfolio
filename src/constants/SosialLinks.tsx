import {
  FiLinkedin,
  FiGithub,
  FiInstagram,
  FiFacebook,
} from 'react-icons/fi';

const ICON_SIZE: number = 20;

const Xicon = ({ size }: { size: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.1564 21.1109C20.0918 21.2286 19.9968 21.3267 19.8814 21.3951C19.766 21.4636 19.6343 21.4998 19.5001 21.5H15.0001C14.8739 21.5 14.7497 21.4681 14.6391 21.4073C14.5285 21.3465 14.435 21.2587 14.3673 21.1522L10.5714 15.1869L5.05512 21.2544C4.92065 21.3988 4.73466 21.4845 4.53748 21.4927C4.34029 21.5009 4.14781 21.4311 4.00176 21.2984C3.8557 21.1657 3.76785 20.9807 3.75725 20.7836C3.74665 20.5866 3.81415 20.3933 3.94512 20.2456L9.73606 13.8706L3.86731 4.65313C3.79503 4.53973 3.75457 4.40898 3.75016 4.27458C3.74575 4.14018 3.77756 4.00707 3.84226 3.88918C3.90695 3.77129 4.00215 3.67296 4.11789 3.60449C4.23363 3.53603 4.36565 3.49993 4.50012 3.5H9.00012C9.12635 3.50004 9.25052 3.53194 9.36114 3.59274C9.47176 3.65353 9.56524 3.74127 9.63293 3.84781L13.4289 9.81312L18.9451 3.74562C19.0796 3.60117 19.2656 3.51555 19.4628 3.50731C19.6599 3.49907 19.8524 3.56888 19.9985 3.70161C20.1445 3.83435 20.2324 4.01929 20.243 4.21636C20.2536 4.41343 20.1861 4.60674 20.0551 4.75438L14.2642 11.1247L20.1329 20.3478C20.2048 20.4613 20.2449 20.5919 20.249 20.7262C20.2531 20.8604 20.2211 20.9933 20.1564 21.1109Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export const SOCIAL_LINKS = [
  {
    icon: <FiGithub size={ICON_SIZE}  />,
    url: 'https://github.com/mgalihpp',
    label: 'GitHub',
    backgroundColor: '#262626',
  },
  {
    icon: <FiLinkedin size={ICON_SIZE} />,
    url: 'https://www.linkedin.com/in/',
    label: 'LinkedIn',
    backgroundColor: '#0A66C2',
  },
  {
    icon: <FiInstagram size={ICON_SIZE} />,
    url: 'https://www.instagram.com/mgalihpp/',
    label: 'Instagram',
    backgroundColor: 'linear-gradient(to right, #f9ce34, #ee2a7b, #6228d7)',
  },
  {
    icon: <Xicon size={ICON_SIZE} />,
    url: 'https://x.com/mgalihppp',
    label: 'Twitter',
    backgroundColor: '#262626',
  },
  {
    icon: <FiFacebook size={ICON_SIZE} />,
    url: 'https://www.facebook.com/muhammad.galihpp/',
    label: 'Facebook',
    backgroundColor: '#0966FE',
  },
];

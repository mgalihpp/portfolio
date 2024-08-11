import { Link } from 'react-router-dom';

interface SocialCardProps {
  url: string;
  ariaLabel: string;
  icon: React.ReactElement;
  label: string;
  backgroundColor: string;
}

export default function SocialCard({
  url,
  ariaLabel,
  icon,
  label,
  backgroundColor,
}: SocialCardProps) {
  return (
    <li>
      <Link
        to={url}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={ariaLabel}
        style={{
          backgroundColor: backgroundColor,
          backgroundImage: backgroundColor,
        }}
        className='flex cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-medium text-primary-dark md:text-base lg:hover:scale-[1.08]'
      >
        {icon}
        {label}
      </Link>
    </li>
  );
}

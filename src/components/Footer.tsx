import { SOCIAL_LINKS } from '@/constants/SosialLinks';
import { Separator } from './Separator';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='mb-[104px] px-8 md:mb-6'>
      <Separator className='my-8' />

      <ul className='mt-8 flex flex-wrap justify-center gap-5 text-sm'></ul>

      <p className='mb-2 mt-16 text-center text-sm font-medium md:text-base'>
        Reach me out at
      </p>

      <ul className='flex justify-center gap-4'>
        {SOCIAL_LINKS.map((item, index) => (
          <li key={index}>
            <Link
              to={item.url}
              aria-label={item.label}
              target='_blank'
              rel='referrer noopener'
              className='cursor-pointer'
            >
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>

      <p className='mt-8 text-center text-sm'>
        mgalihpp &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}

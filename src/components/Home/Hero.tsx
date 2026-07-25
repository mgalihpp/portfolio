import { motion } from 'framer-motion';
import Ping from '@/components/elements/Ping';
import { Link } from 'react-router-dom';
import { SiGmail } from 'react-icons/si';
import { Separator } from '@/components/Separator';
import { useLanguage } from '@/providers/LanguageProvider';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h1 className='primary mb-4 text-xl font-bold min-[347px]:text-2xl md:text-3xl'>
        {t('hero.greeting')} <span className='gradient__text'>Galih</span>
        <div className='ml-1 inline-block animate-waving-hand'>👋</div>
      </h1>

      <ul className='secondary mb-4 list-disc space-y-1 pl-4 text-sm md:text-lg'>
        <li>{t('hero.role')}</li>
        <li>{t('hero.study')}</li>
        <li>
          {t('hero.build')}{' '}
          <span className='gradient__text'>{t('hero.buildHighlight')}</span>.
        </li>
      </ul>

      <p className='secondary mb-4 text-sm leading-relaxed md:text-lg'>
        {t('hero.working')}
      </p>

      <div className='mb-4 flex items-center gap-2'>
        <Ping />
        <p className='primary text-sm md:text-lg'>{t('hero.available')}</p>
      </div>

      <Link
        to='/contact'
        aria-label={t('hero.contactMe')}
        className='primary border__gradient flex w-fit items-center gap-3 rounded-md p-3 text-sm font-bold md:text-lg lg:mb-[39px]'
      >
        <SiGmail />
        {t('hero.contactMe')}
      </Link>

      <Separator className='my-8' />
    </motion.section>
  );
};

export default Hero;

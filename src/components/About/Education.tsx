import { motion } from 'framer-motion';
import { Separator } from '@/components/Separator';
import { EDUCATION_ITEMS } from '@/constants/Career';
import { useLanguage } from '@/providers/LanguageProvider';

export default function Education() {
  const { language, t } = useLanguage();

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className='primary text-lg font-semibold md:text-xl'>
        {t('education.title')}
      </h2>

      <div className='relative mt-4'>
        <div
          className='absolute left-0 top-[5px] bottom-0 w-0.5 -translate-x-1/2 bg-secondary-light md:top-[9px] dark:bg-secondary-dark'
          aria-hidden='true'
        />
        <ul className='space-y-4'>
          {EDUCATION_ITEMS.map((item) => (
            <li
              key={item.institution}
              className='relative pl-6'
            >
              <span
                className='absolute left-0 top-[5px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-secondary-light ring-2 ring-white md:top-[9px] dark:bg-secondary-dark dark:ring-black'
                aria-hidden='true'
              />
            <h3 className='primary text-sm font-bold md:text-lg'>
              {item.institution}
            </h3>
            <p className='secondary text-sm md:text-base'>
              {item.degree[language]}
            </p>
            <p className='secondary text-xs md:text-sm'>
              {item.period[language]} · {item.location}
            </p>
            <p className='secondary mt-1 text-sm'>{item.note[language]}</p>
          </li>
        ))}
              </ul>
      </div>

      <Separator className='my-8' />
    </motion.section>
  );
}

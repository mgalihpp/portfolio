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

      <ul className='mt-4 space-y-4'>
        {EDUCATION_ITEMS.map((item) => (
          <li
            key={item.institution}
            className='border-l-2 border-solid border-secondary-light pl-4 dark:border-secondary-dark'
          >
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

      <Separator className='my-8' />
    </motion.section>
  );
}

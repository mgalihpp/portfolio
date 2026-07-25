import { motion } from 'framer-motion';
import { BiSolidDownvote } from 'react-icons/bi';
import { MdOutlineWorkHistory } from 'react-icons/md';
import { CAREER_ITEMS, CV_FILE } from '@/constants/Career';
import { useLanguage } from '@/providers/LanguageProvider';

const Career = () => {
  const { language, t } = useLanguage();

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <div className='mb-2 flex items-center gap-2 text-lg md:text-xl'>
        <MdOutlineWorkHistory size={20} />
        <h2 className='primary font-bold'>{t('career.title')}</h2>
      </div>

      <div className='relative mb-6 mt-4'>
        <div
          className='absolute left-0 top-[5px] bottom-0 w-0.5 -translate-x-1/2 bg-secondary-light md:top-[9px] dark:bg-secondary-dark'
          aria-hidden='true'
        />
        <ul className='space-y-6'>
          {CAREER_ITEMS.map((item) => (
            <li
              key={`${item.company}-${item.period.en}`}
              className='relative pl-6'
            >
              <span
                className='absolute left-0 top-[5px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-secondary-light ring-2 ring-white md:top-[9px] dark:bg-secondary-dark dark:ring-black'
                aria-hidden='true'
              />
            <h3 className='primary text-sm font-bold md:text-lg'>
              {item.role[language]}
            </h3>
            <p className='secondary text-sm md:text-base'>{item.company}</p>
            <p className='secondary text-xs md:text-sm'>
              {item.period[language]} · {item.location}
            </p>
            <p className='secondary mt-2 text-sm leading-relaxed'>
              {item.description[language]}
            </p>
          </li>
        ))}
        </ul>
      </div>

      <a
        href={CV_FILE}
        download
        target='_blank'
        rel='noopener noreferrer'
        aria-label={t('career.downloadCv')}
        className='secondary mb-8 flex w-fit cursor-pointer items-center gap-3 pl-0.5 text-sm font-bold transition-all duration-300 md:text-lg'
      >
        <div className='overflow-hidden border-b-2 border-solid border-secondary-light dark:border-secondary-dark'>
          <BiSolidDownvote className='animate-rain-arrow' />
        </div>
        {t('career.downloadCv')}
      </a>
    </motion.section>
  );
};

export default Career;

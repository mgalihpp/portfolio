import { motion } from 'framer-motion';
import { BiSolidDownvote } from 'react-icons/bi';
import { MdOutlineWorkHistory } from 'react-icons/md';
import { CAREER_ITEMS, CV_FILE } from '@/constants/Career';

const Career = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <div className='mb-2 flex items-center gap-2 text-lg md:text-xl'>
        <MdOutlineWorkHistory size={20} />
        <h2 className='primary font-bold'>Career</h2>
      </div>

      <ul className='mb-6 mt-4 space-y-6'>
        {CAREER_ITEMS.map((item) => (
          <li
            key={`${item.company}-${item.period}`}
            className='border-l-2 border-solid border-secondary-light pl-4 dark:border-secondary-dark'
          >
            <h3 className='primary text-sm font-bold md:text-lg'>{item.role}</h3>
            <p className='secondary text-sm md:text-base'>{item.company}</p>
            <p className='secondary text-xs md:text-sm'>
              {item.period} · {item.location}
            </p>
            <p className='secondary mt-2 text-sm leading-relaxed'>
              {item.description}
            </p>
          </li>
        ))}
      </ul>

      <a
        href={CV_FILE}
        download
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Download CV'
        className='secondary mb-8 flex w-fit cursor-pointer items-center gap-3 pl-0.5 text-sm font-bold transition-all duration-300 md:text-lg'
      >
        <div className='overflow-hidden border-b-2 border-solid border-secondary-light dark:border-secondary-dark'>
          <BiSolidDownvote className='animate-rain-arrow' />
        </div>
        Download CV
      </a>
    </motion.section>
  );
};

export default Career;

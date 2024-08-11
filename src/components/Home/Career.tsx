import { motion } from 'framer-motion';
import { BiSolidDownvote } from 'react-icons/bi';
import { MdOutlineWorkHistory } from 'react-icons/md';
import { Link } from 'react-router-dom';

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

      <Link
        to={'https://github.com/mgalihpp'}
        target='_blank'
        rel='noopener noreferrer'
        className='secondary mb-8 flex cursor-pointer items-center gap-3 pl-0.5 text-sm font-bold transition-all duration-300 md:text-lg'
      >
        <div className='overflow-hidden border-b-2 border-solid border-secondary-light dark:border-secondary-dark'>
          <BiSolidDownvote className='animate-rain-arrow' />
        </div>
        Download CV
      </Link>
    </motion.section>
  );
};

export default Career;

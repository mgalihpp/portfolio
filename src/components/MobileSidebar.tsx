import { NAVLINK_ITEMS } from '@/constants/NavLink';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

function MobileSideBar() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleBarIconClick = () => {
    toggleModal();
  };

  const modalVariants = {
    hidden: {
      y: '-100vh',
    },
    visible: {
      y: 0,
      transition: {
        type: 'tween', // Set transition type to 'tween'
        duration: 0.3, // Specify duration
      },
    },
    exit: {
      y: '-100vh',
      transition: {
        type: 'tween',
        duration: 0.2,
        delay: 0.3,
      },
    },
  };

  const linkItemVariants = {
    hidden: { opacity: 0, y: '50%' },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut', // Add ease-out easing function
      },
    },
    exit: {
      opacity: 0,
      y: '50%',
      transition: {
        duration: 0.1,
        ease: 'easeOut', // Add ease-out easing function
      },
    },
  };

  const navLinksVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  return (
    <div className='sticky top-0 bg-primary-dark dark:bg-neutral-950 z-10'>
      <header className='container mx-auto hidden items-center justify-between p-2 max-md:flex'>
        <div className='flex items-center gap-4'>
          <img
            src='https://utfs.io/f/12fca9d9-7b76-4c9e-9d0d-e3d87ffc6c1d-wh4i21.webp'
            alt='mgalihpp avatar'
            className='border__color size-10 rounded-full'
            loading='lazy'
          />

          <div className='hidden flex-col lg:flex'>
            <h2 className='primary text-base font-medium md:text-lg'>
              mgalihpp
            </h2>
            <p className='secondary text-sm md:text-base'>-</p>
          </div>
        </div>

        <ul className='flex cursor-pointer items-center gap-6 text-neutral-900 dark:text-white'>
          <li>
            <ThemeToggle />
          </li>
          <li>
            <button onClick={handleBarIconClick}>
              <FaBars size={20} className='text-neutral-900 dark:text-white' />
            </button>
          </li>
        </ul>

        <AnimatePresence>
          {showModal && (
            <motion.div
              className='fixed inset-0 z-30 flex items-center justify-center bg-neutral-100 dark:bg-neutral-900'
              variants={modalVariants}
              initial='hidden'
              animate='visible'
              exit='exit'
            >
              <FaTimes
                className='absolute right-4 top-6 cursor-pointer text-neutral-900 dark:text-white'
                onClick={toggleModal}
                style={{ fontSize: '16px' }}
              />
              <nav className='relative w-full'>
                <motion.ul
                  className='flex h-full flex-col items-center justify-center gap-8'
                  variants={navLinksVariants}
                  initial='hidden'
                  animate='visible'
                  exit='exit'
                >
                  {NAVLINK_ITEMS.map((item, index) => (
                    <motion.li key={index} variants={linkItemVariants}>
                      <Link
                        onClick={toggleModal}
                        to={item.pathname}
                        className='cursor-pointer text-2xl font-light text-neutral-900 dark:text-white'
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}

export default MobileSideBar;

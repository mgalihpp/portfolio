import { motion } from 'framer-motion';
import Ping from './elements/Ping';

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h1 className='primary mb-4 text-xl font-bold min-[347px]:text-2xl md:text-3xl'>
        Call me <span className='gradient__text'>Galih</span>
        <div className='ml-1 inline-block animate-waving-hand'>👋</div>
      </h1>

      <ul className='secondary mb-4 list-disc space-y-1 pl-4 text-sm md:text-lg'>
        <li>Fullstack Developer</li>
        <li>
          I build <span className='gradient__text'>something interesting</span>.
        </li>
      </ul>

      <p className='secondary mb-4 text-sm leading-relaxed md:text-lg'>
        Working within the ReactJS
      </p>

      <div className='mb-4 flex items-center gap-2'>
        <Ping />
        <p className='primary text-sm md:text-lg'>
          Available for hire
        </p>
      </div>
    </motion.section>
  );
};

export default Hero;

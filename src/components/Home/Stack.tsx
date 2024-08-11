import { STACKS } from '@/constants/Stacks';
import { motion } from 'framer-motion';
import { HiOutlineCode } from 'react-icons/hi';
import Marquee from '../elements/Marquee';
import StackCard from '../cards/StackCard';

const Stack = () => {
  const stackInArray: Array<[string, JSX.Element]> = Object.entries(
    STACKS,
  ).sort(() => Math.random() - 0.5);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <div className='primary mb-5 flex items-center gap-2'>
        <HiOutlineCode />
        <h2 className='font-bold'>Stacks</h2>
      </div>

      <div className='flex flex-col md:max-w-[calc(100vw-156px)] lg:max-w-[720px]'>
        {Array.from({ length: 2 }, (_, index) => {
          const slider = [...stackInArray].sort(() => Math.random() - 0.5);

          return (
            <Marquee key={index} direction={index % 2 === 0 ? 'left' : 'right'}>
              {slider.map(([name, icon], index) => (
                <StackCard key={index} name={name} icon={icon} />
              ))}
            </Marquee>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Stack;

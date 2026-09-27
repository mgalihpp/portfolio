import type * as React from 'react';
import { useEntrance } from '@/hooks/useEntrance';
import { useEffect, useMemo, useState } from 'react';
import { STACKS } from '@/constants/Stacks';
import { motion } from 'framer-motion';
import { HiOutlineCode } from 'react-icons/hi';
import Marquee from '../elements/Marquee';
import StackCard from '../cards/StackCard';
import { useLanguage } from '@/providers/LanguageProvider';

type StackEntry = [string, React.JSX.Element];

const shuffle = (entries: StackEntry[]): StackEntry[] =>
  [...entries].sort(() => Math.random() - 0.5);

const Stack = () => {
  const { t } = useLanguage();

  const baseStacks = useMemo<StackEntry[]>(
    () => Object.entries(STACKS),
    [],
  );
  const [rows, setRows] = useState<StackEntry[][]>([baseStacks, baseStacks]);

  useEffect(() => {
    setRows([shuffle(baseStacks), shuffle(baseStacks)]);
  }, [baseStacks]);

  return (
    <motion.section
      initial={useEntrance({opacity: 0, y: 50})}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <div className='primary mb-5 flex items-center gap-2'>
        <HiOutlineCode />
        <h2 className='font-bold'>{t('stacks.title')}</h2>
      </div>

      <div className='flex flex-col md:max-w-[calc(100vw-156px)] lg:max-w-[720px]'>
        {rows.map((slider, index) => (
          <Marquee key={index} direction={index % 2 === 0 ? 'left' : 'right'}>
            {slider.map(([name, icon], cardIndex) => (
              <StackCard key={`${name}-${cardIndex}`} name={name} icon={icon} />
            ))}
          </Marquee>
        ))}
      </div>
    </motion.section>
  );
};

export default Stack;

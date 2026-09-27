import { motion } from 'framer-motion';
import { useEntrance } from '@/hooks/useEntrance';
import type { FC } from 'react';
import { Separator } from '@/components/Separator';

type TextProps = {
  text: string;
};

const Text: FC<TextProps> = ({ text }) => {
  const textEntrance = useEntrance({opacity: 0, y: 50});
  return (
    <motion.section
      initial={textEntrance}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <p className='secondary mb-8 leading-relaxed'>{text}</p>

      <Separator className='my-8' />
    </motion.section>
  );
};

export default Text;

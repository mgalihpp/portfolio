import { motion } from 'framer-motion';
import { FC } from 'react';
import { Separator } from '@/components/Separator';

type TextProps = {
  text: string;
};

const Text: FC<TextProps> = ({ text }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <p className='secondary mb-8 leading-relaxed'>{text}</p>

      <Separator className='my-8' />
    </motion.section>
  );
};

export default Text;

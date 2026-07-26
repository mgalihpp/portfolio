import { AI_TOOLS } from '@/constants/AiTools';
import { motion } from 'framer-motion';
import { HiSparkles } from 'react-icons/hi2';
import StackCard from '../cards/StackCard';
import { useLanguage } from '@/providers/LanguageProvider';

const AiTools = () => {
  const { t } = useLanguage();

  const aiToolsInArray: Array<[string, JSX.Element]> = Object.entries(AI_TOOLS);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <div className='primary mb-5 mt-10 flex items-center gap-2'>
        <HiSparkles />
        <h2 className='font-bold'>{t('aiTools.title')}</h2>
      </div>

      <div className='flex flex-wrap gap-2'>
        {aiToolsInArray.map(([name, icon], index) => (
          <StackCard key={index} name={name} icon={icon} />
        ))}
      </div>
    </motion.section>
  );
};

export default AiTools;

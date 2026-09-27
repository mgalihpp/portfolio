import { motion } from 'framer-motion';
import { useLanguage } from '@/providers/LanguageProvider';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <h2 className='primary text-lg font-semibold md:text-xl'>
        {t('about.contact.title')}
      </h2>
      <p className='secondary mt-4 leading-relaxed'>{t('about.contact.text')}</p>
    </motion.section>
  );
}

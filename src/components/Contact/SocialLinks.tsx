import { SOCIAL_LINKS } from '@/constants/SosialLinks';
import { motion } from 'framer-motion';
import SocialCard from '../cards/SosialCard';
import { useLanguage } from '@/providers/LanguageProvider';

export default function SocialLinks() {
  const { t } = useLanguage();
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className='primary text-lg font-semibold md:text-xl'>{t('contact.findMeOn')}</h2>

      <ul className='mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap'>
        {SOCIAL_LINKS.map((item, index) => (
          <SocialCard
            key={index}
            url={item.url}
            ariaLabel={item.label}
            icon={item.icon}
            label={item.label}
            backgroundColor={item.backgroundColor}
          />
        ))}
      </ul>
    </motion.section>
  );
}

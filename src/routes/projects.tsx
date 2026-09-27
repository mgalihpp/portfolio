import { createFileRoute } from '@tanstack/react-router';
import PageTitle from '@/components/elements/PageTitle';
import Card from '@/components/Projects/Card';
import { PROJECTS_ITEMS } from '@/constants/Project';
import { motion } from 'framer-motion';
import { useLanguage } from '@/providers/LanguageProvider';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/projects')({
  head: () =>
    pageHead({
      title: 'Projects | mgalihpp',
      description:
        'Selected projects by Muhammad Galih Pratama Putra, built with React, TypeScript, and modern web technologies.',
      path: '/projects',
    }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const { t } = useLanguage();
  return (
    <div className="px-8 pb-5 pt-8">
      <PageTitle title={t('page.projects.title')} description={t('page.projects.description')} />
      <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0 }}>
        <ul className="grid sm:grid-cols-2 gap-8">
          {PROJECTS_ITEMS.map((project, index) => (
            <Card key={index} {...project} />
          ))}
        </ul>
      </motion.section>
    </div>
  );
}

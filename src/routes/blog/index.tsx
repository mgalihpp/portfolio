import { createFileRoute } from '@tanstack/react-router';
import { fetchBlogs } from '../../server/blog';
import BlogSection from '../../components/blog/BlogSection';
import PageTitle from '@/components/elements/PageTitle';
import { useLanguage } from '@/providers/LanguageProvider';

export const Route = createFileRoute('/blog/')({
  loader: async () => fetchBlogs(),
  head: () => ({
    meta: [
      { title: 'Blog | mgalihpp' },
      { name: 'description', content: 'Blog posts about frontend, backend, and fullstack.' },
    ],
  }),
  component: BlogListPage,
});

function BlogListPage() {
  const blogs = Route.useLoaderData();
  const { t } = useLanguage();
  return (
    <div className="px-8 pb-5 pt-8">
      <PageTitle title={t('page.blogs.title')} description={t('page.blogs.description')} />
      <BlogSection blogs={blogs} />
    </div>
  );
}

import { createFileRoute } from '@tanstack/react-router';
import { fetchBlogs } from '../../server/blog';
import BlogSection from '../../components/blog/BlogSection';
import PageTitle from '@/components/elements/PageTitle';
import { useLanguage } from '@/providers/LanguageProvider';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/blog/')({
  loader: async () => fetchBlogs(),
  head: () =>
    pageHead({
      title: 'Blog | mgalihpp',
      description:
        'Blog posts by Muhammad Galih Pratama Putra about frontend, backend, React, and fullstack development.',
      path: '/blog',
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

import { createFileRoute } from '@tanstack/react-router';
import { fetchBlogs } from '../../server/blog';
import BlogSection from '../../components/blog/BlogSection';

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
  return (
    <main style={{ padding: 24 }}>
      <h1>Blog</h1>
      <BlogSection blogs={blogs} />
    </main>
  );
}

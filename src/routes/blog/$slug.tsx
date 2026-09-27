import { createFileRoute, Link } from '@tanstack/react-router';
import { format } from 'date-fns';
import { HiOutlineClock, HiOutlineEye } from 'react-icons/hi';
import { fetchBlogBySlug } from '../../server/blog';
import { imageUrlFor } from '../../lib/blog-utils';
import Article from '../../components/blog/Article';
import Aside from '../../components/blog/Aside';

export const Route = createFileRoute('/blog/$slug')({
  loader: async ({ params }) => fetchBlogBySlug({ data: { slug: params.slug } }),
  head: ({ loaderData }) => {
    const blog = loaderData?.[0];
    return {
      meta: [
        { title: blog ? `${blog.title} | mgalihpp` : 'Post not found' },
        { name: 'description', content: blog?.description ?? '' },
      ],
    };
  },
  component: BlogDetailPage,
});

function BlogDetailPage() {
  const [blog] = Route.useLoaderData();
  if (!blog) {
    return (
      <main style={{ padding: 24 }}>
        <p>Post not found.</p>
        <Link to="/blog">Back to blog</Link>
      </main>
    );
  }
  return (
    <main style={{ padding: 24 }}>
      <img
        src={imageUrlFor(blog.mainImage.asset.url).url()}
        alt={blog.title}
        width={1200}
        height={480}
        style={{ borderRadius: 8 }}
      />
      <h1 style={{ marginTop: 16 }}>{blog.title}</h1>
      <p>
        Written on {format(new Date(blog.publishedAt), 'dd MMMM yyyy')} by {blog.author.name}
      </p>
      <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <HiOutlineClock /> {blog.readingTime}
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <HiOutlineEye /> {blog.views?.toLocaleString() ?? 0}
        </span>
      </div>
      <hr style={{ margin: '32px 0' }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        <Article content={blog.content} />
        <Aside content={blog.content} />
      </div>
    </main>
  );
}

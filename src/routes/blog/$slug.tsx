import { createFileRoute, Link } from '@tanstack/react-router';
import { imageUrlFor } from '@/lib/utils';
import { format } from 'date-fns';
import { HiOutlineClock, HiOutlineEye } from 'react-icons/hi';
import { Separator } from '@/components/Separator';
import Article from '../../components/blog/Article';
import Aside from '../../components/blog/Aside';
import { useLanguage } from '@/providers/LanguageProvider';
import { fetchBlogBySlug } from '../../server/blog';
import { SITE_URL, pageHead } from '@/lib/seo';

export const Route = createFileRoute('/blog/$slug')({
  loader: async ({ params }) => fetchBlogBySlug({ data: { slug: params.slug } }),
  head: ({ loaderData, params }) => {
    const blog = loaderData?.[0];
    const path = `/blog/${params.slug}`;
    if (!blog) {
      return pageHead({
        title: 'Post not found | mgalihpp',
        description: 'The requested blog post could not be found.',
        path,
      });
    }
    const postImage = blog.mainImage?.asset?.url;
    const base = pageHead({
      title: `${blog.title} | mgalihpp`,
      description: blog.description,
      path,
      image: postImage,
      type: 'article',
    });
    return {
      ...base,
      meta: [
        ...base.meta,
        { property: 'article:published_time', content: blog.publishedAt },
        { property: 'article:author', content: blog.author.name },
        ...blog.categories.map((category) => ({
          property: 'article:tag',
          content: category.title,
        })),
      ],
      scripts: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: blog.title,
            description: blog.description,
            image: postImage,
            url: `${SITE_URL}${path}`,
            datePublished: blog.publishedAt,
            author: {
              '@type': 'Person',
              name: blog.author.name,
            },
          }),
        },
      ],
    };
  },
  component: BlogDetailPage,
});

function BlogDetailPage() {
  const { t } = useLanguage();
  const [blog] = Route.useLoaderData();

  if (!blog) {
    return (
      <div className="mx-auto flex h-[484px] flex-col items-center justify-center space-y-4">
        <p className="primary text-lg">{t('blog.postNotFound')}</p>
        <Link
          to="/blog"
          aria-current="page"
          className="cursor-pointer rounded-md bg-neutral-950 px-3 py-2 text-sm text-white shadow-lg shadow-neutral-500/20 transition active:scale-95 dark:bg-neutral-100 dark:text-neutral-900"
        >
          {t('blog.back')}
        </Link>
      </div>
    );
  }

  return (
    <div className="sm:p-8">
      <section>
        <img
          src={imageUrlFor(blog.mainImage.asset.url).url()}
          alt={t('blog.imageOf', { title: blog.title })}
          className="rounded-md"
          width={1200}
          height={480}
        />

        <h1 className="primary mt-4 text-2xl font-bold md:text-3xl">
          {blog.title}
        </h1>
        <div className="flex secondary mb-4 mt-1 text-sm font-medium leading-relaxed flex-wrap">
          <p>
            {t('blog.writtenOn')} {format(new Date(blog.publishedAt), 'dd MMMM yyyy')} {t('blog.by')}
          </p>
          <div className="flex items-center gap-2 ml-1">
            {blog.author.name}
            <img
              className="w-4 h-4 rounded-full"
              src={imageUrlFor(blog.author.image.asset._ref).url()}
              alt={t('blog.altAvatar', { name: blog.author.name })}
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex gap-2 text-sm font-medium">
          <div className="flex items-center gap-1">
            <HiOutlineClock className="text-base" />
            <span className="gradient__text">{blog.readingTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <HiOutlineEye className="text-base" />
            <span className="gradient__text">
              {blog.views.toLocaleString() ?? 0}
            </span>
          </div>
        </div>

        <Separator className="my-8 border-dashed" />

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 lg:gap-8">
          <Article content={blog.content} />
          <Aside content={blog.content} />
        </div>
      </section>
    </div>
  );
}

import clsx from 'clsx';
import { format } from 'date-fns';
import { Link } from '@tanstack/react-router';
import { HiOutlineClock, HiOutlineEye } from 'react-icons/hi';
import { useRef } from 'react';
import { cn, imageUrlFor } from '../../lib/blog-utils';
import { useImagePreloader } from '../../hooks/useImagePreloader';
import { incrementBlogViews } from '../../server/blog';
import { Skeleton } from './primitives';
import type { BlogItem } from '../../lib/blog-types';

interface BlogCardProps {
  blog: BlogItem;
  checkTagged?: (tag: string) => boolean;
}

export default function BlogCard({ blog, checkTagged }: BlogCardProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const imageLoaded = useImagePreloader(imgRef);

  const handleCardClick = async () => {
    try {
      await incrementBlogViews({ data: { blogId: blog._id } });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <li
      className="rounded-md border shadow-lg transition-transform duration-200 lg:hover:scale-[1.03]"
      onClick={handleCardClick}
    >
      <Link
        to="/blog/$slug"
        params={{ slug: blog.slug.current }}
        aria-label={`Read ${blog.title}`}
        className="group flex h-full flex-col"
      >
        <div className="relative">
          {!imageLoaded && <Skeleton className="h-52 w-full rounded-t-md" />}
          <img
            ref={imgRef}
            src={imageUrlFor(blog.mainImage.asset.url).url()}
            alt={blog.title}
            width={1200}
            height={480}
            className={cn('h-auto w-auto rounded-t-md', {
              blur: !imageLoaded,
            })}
            loading="eager"
            style={{ display: imageLoaded ? 'block' : 'none' }}
          />
          <div className="absolute bottom-2 right-2 flex gap-1">
            {blog.categories.map((tag, index) => (
              <span
                key={index}
                className={clsx(
                  checkTagged?.(tag.title)
                    ? 'bg-black text-white'
                    : 'bg-neutral-200 dark:bg-neutral-800',
                  'rounded-md px-2 py-1 text-xs',
                )}
              >
                {tag.title}
              </span>
            ))}
          </div>
        </div>
        <div className="p-4">
          <h2 className="font-bold leading-relaxed md:text-lg">{blog.title}</h2>
          <div className="mt-2 flex gap-2 text-sm font-medium">
            <div className="flex items-center gap-1">
              <HiOutlineClock className="text-base" />
              <span>{blog.readingTime} min read</span>
            </div>
            <div className="flex items-center gap-1">
              <HiOutlineEye className="text-base" />
              <span>{blog.views?.toLocaleString() ?? '0'} views</span>
            </div>
          </div>
          <p className="mb-2 mt-4 text-sm font-semibold">
            {format(new Date(blog.publishedAt), 'MMMM dd, yyyy')}
          </p>
          <p className="text-sm leading-relaxed">{blog.description}</p>
        </div>
      </Link>
    </li>
  );
}

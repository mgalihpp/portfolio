import clsx from 'clsx';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { HiOutlineClock, HiOutlineEye } from 'react-icons/hi';
import { cn, imageUrlFor } from '@/lib/utils';
import { incrementViews } from '@/helpers/incrementViews';
import { useImagePreloader } from '@/hooks/useImagePreloader';
import { useRef } from 'react';
import { Skeleton } from '../elements/Skeleton';

interface BlogCardProps {
  _id: string;
  image: string;
  tags: Categories[];
  title: string;
  author: string;
  readingTime: string;
  views: number;
  releaseDate: string;
  description: string;
  slug: string;
  checkTagged?: (tag: string) => boolean;
}

export default function BlogCard({
  _id,
  image,
  tags,
  title,
  readingTime,
  views,
  releaseDate,
  description,
  slug,
  checkTagged,
}: BlogCardProps) {
  const imgRef = useRef<HTMLImageElement>(null);

  const imageLoaded = useImagePreloader(imgRef);
  const handleCardClick = async () => {
    try {
      await incrementViews({ blog_id: _id });
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <li
      className="border__color rounded-md bg-transparent shadow-lg transition-transform duration-200 dark:bg-neutral-800 dark:shadow-none lg:hover:scale-[1.03]"
      onClick={handleCardClick}
    >
      <Link
        to={`/blog/${slug}`}
        aria-label={`Read more about the ${title} article`}
        className="group flex h-full flex-col"
      >
        <div className="relative">
          {!imageLoaded && <Skeleton className="h-52 w-full rounded-t-md" />}
          <img
            ref={imgRef}
            src={imageUrlFor(image).url()}
            alt={`Image of ${title}`}
            width={1200}
            height={480}
            className={cn('h-auto w-auto rounded-t-md', {
              blur: !imageLoaded,
              'remove-blur': imageLoaded,
            })}
            loading="eager"
            style={{
              display: imageLoaded ? 'block' : 'none',
            }}
          />

          <div className="absolute bottom-2 right-2 flex gap-1">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={clsx(
                  checkTagged?.(tag.title)
                    ? 'bg-gradient-linear text-primary-light'
                    : 'bg-neutral-200 dark:bg-neutral-800',
                  'rounded-md px-2 py-1 text-xs'
                )}
              >
                {tag.title}
              </span>
            ))}
          </div>
        </div>

        <div className="p-4">
          <h2 className="primary font-bold leading-relaxed md:h-[84px] md:text-lg lg:h-14">
            {title}
          </h2>

          <div className="mt-2 flex gap-2 text-sm font-medium">
            <div className="flex items-center gap-1">
              <HiOutlineClock className="text-base" />
              <span className="gradient__text">{readingTime} min read</span>
            </div>

            <div className="flex items-center gap-1">
              <HiOutlineEye className="text-base" />
              <span className="gradient__text">
                {views?.toLocaleString() ?? '0'} views
              </span>
            </div>
          </div>

          <p className="primary mb-2 mt-4 text-sm font-semibold">
            {format(new Date(releaseDate), 'MMMM dd, yyyy')}
          </p>

          <p className="secondary text-sm leading-relaxed">{description}</p>
        </div>
      </Link>
    </li>
  );
}

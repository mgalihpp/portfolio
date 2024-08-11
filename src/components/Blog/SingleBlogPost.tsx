import { Link, useLoaderData } from 'react-router-dom';
import Meta from '../elements/Meta';
import { imageUrlFor } from '@/lib/utils';
import { format } from 'date-fns';
import { HiOutlineClock, HiOutlineEye } from 'react-icons/hi';
import { Separator } from '../Separator';
import Article from './Article';
import Aside from './Aside';

export default function SingleBlogPost() {
  const [blog] = useLoaderData() as BlogItem[];

  if (!blog) {
    return (
      <div className='mx-auto flex h-[484px] flex-col items-center justify-center space-y-4'>
        <p className='primary text-lg'>Blog not found</p>
        <Link
          to='/blogs'
          aria-current='page'
          className='cursor-pointer rounded-md bg-neutral-950 px-3 py-2 text-sm text-white shadow-lg shadow-neutral-500/20 transition active:scale-95 dark:bg-neutral-100 dark:text-neutral-900'
        >
          Back
        </Link>
      </div>
    );
  }

  return (
    <div className='p-8'>
      <Meta
        title={blog.title}
        description={blog.description}
        keyword={blog.title}
        openGraph={{
          authors: blog.author.name,
          images: blog.mainImage.asset.url,
          locale: 'id_ID',
        }}
      />
      <section>
        <img
          src={imageUrlFor(blog.mainImage.asset.url).url()}
          alt={`Image of ${blog.title}`}
          className='rounded-md'
          width={1200}
          height={480}
        />

        <h1 className='primary mt-4 text-2xl font-bold md:text-3xl'>
          {blog.title}
        </h1>
        <p className='secondary mb-4 mt-1 text-sm font-medium leading-relaxed'>
          Written on {format(new Date(blog.publishedAt), 'dd MMMM yyyy')} by{' '}
          {blog.author.name}
        </p>

        <div className='flex gap-2 text-sm font-medium'>
          <div className='flex items-center gap-1'>
            <HiOutlineClock className='text-base' />
            <span className='gradient__text'>{blog.readingTime}</span>
          </div>
          <div className='flex items-center gap-1'>
            <HiOutlineEye className='text-base' />
            <span className='gradient__text'>
              {blog.views.toLocaleString() ?? 0}
            </span>
          </div>
        </div>

        <Separator className='my-8 border-dashed' />

        <div className='flex flex-col-reverse lg:grid lg:grid-cols-3 lg:gap-8'>
          <Article content={blog.content} />
          <Aside content={blog.content} />
        </div>
      </section>
    </div>
  );
}

import BlogSection from '@/components/Blog/BlogSection';
import PageTitle from '@/components/elements/PageTitle';
import { useLoaderData } from 'react-router-dom';

const Blogs = () => {
  const blogs = useLoaderData() as BlogItem[];

  return (
    <>
      <PageTitle
        title='Blogs'
        description='Share thoughts and tutorials on web development.'
      />
      <BlogSection blogs={blogs} />
    </>
  );
};

export default Blogs;

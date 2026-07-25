import BlogSection from '@/components/Blog/BlogSection';
import PageTitle from '@/components/elements/PageTitle';
import { useLoaderData } from 'react-router-dom';
import { useLanguage } from '@/providers/LanguageProvider';

const Blogs = () => {
  const blogs = useLoaderData() as BlogItem[];
  const { t } = useLanguage();

  return (
    <>
      <PageTitle
        title={t('page.blogs.title')}
        description={t('page.blogs.description')}
      />
      <BlogSection blogs={blogs} />
    </>
  );
};

export default Blogs;

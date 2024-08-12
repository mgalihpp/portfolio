import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import BlogCard from './BlogCard';
import SearchBlog from './SearchBlog';

interface BlogSectionProps {
  blogs: BlogItem[];
}

export default function BlogSection(props: BlogSectionProps) {
  const [search, setSearch] = useState<string>('');
  const [sortedBlogs, setSortedBlogs] = useState<BlogItem[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState(sortedBlogs);

  const sortBlogsByDate = useCallback(() => {
    const sorted = [...props.blogs];
    sorted.sort((a, b) => {
      const dateA = new Date(a.publishedAt);
      const dateB = new Date(b.publishedAt);
      return dateB.getTime() - dateA.getTime();
    });
    setSortedBlogs(sorted);
  }, [props.blogs]);

  useEffect(() => {
    sortBlogsByDate();
  }, [sortBlogsByDate]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const lowercaseInput = event.target.value.toLowerCase();
    setSearch(lowercaseInput);
  };

  useEffect(() => {
    setFilteredBlogs(
      sortedBlogs.filter(
        (blog) =>
          blog.title.toLowerCase().includes(search.toLowerCase()) ||
          blog.description.toLowerCase().includes(search.toLowerCase()) ||
          search
            .toLowerCase()
            .split(' ')
            .every((cat) =>
              blog.categories.some((category) => category.title.includes(cat))
            )
      )
    );
  }, [search, sortedBlogs]);

  const toggleTag = (tag: string) => {
    const tagsInSearch = search.split(' ').filter((t) => t.trim() !== '');
    if (tagsInSearch.includes(tag)) {
      setSearch(tagsInSearch.filter((t) => t !== tag).join(' '));
    } else {
      setSearch([...tagsInSearch, tag].join(' '));
    }
  };

  const checkTagged = (tag: string) => {
    return search.split(' ').includes(tag);
  };

  const checkDisabled = (tag: string) => {
    if (search === '') return false;

    const searchTerms = search
      .toLowerCase()
      .split(' ')
      .filter((t) => t.trim() !== '');

    const relatedBlogs = sortedBlogs.filter((blog) =>
      searchTerms.some(
        (term) =>
          blog.title.toLowerCase().includes(term) ||
          blog.description.toLowerCase().includes(term) ||
          blog.categories.some((category) => category.title.includes(term))
      )
    );

    return (
      !relatedBlogs.some((blog) =>
        blog.categories.some((category) => category.title.includes(tag))
      ) && !searchTerms.includes(tag)
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <SearchBlog
        search={search}
        handleSearch={handleSearch}
        toggleTag={toggleTag}
        checkDisabled={checkDisabled}
        checkTagged={checkTagged}
      />

      {filteredBlogs.length > 0 ? (
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 grid gap-4 sm:grid-cols-2"
        >
          {filteredBlogs.map((blog: BlogItem) => (
            <BlogCard
              key={blog._id}
              _id={blog._id}
              author={blog.author.name}
              image={blog.mainImage.asset.url}
              tags={blog.categories}
              title={blog.title}
              readingTime={blog.readingTime}
              views={blog.views}
              releaseDate={blog.publishedAt}
              description={blog.description}
              slug={blog.slug.current}
              checkTagged={checkTagged}
            />
          ))}
        </motion.ul>
      ) : (
        <div
          className="pb-12 pt-20 lg:flex lg:justify-center
        lg:h-80 lg:pb-0 lg:pt-8"
        >
          <h2
            className="gradient__text
              m-auto w-fit
              text-lg  font-bold
              md:text-xl"
          >
            Sorry, not found
          </h2>
        </div>
      )}
    </motion.section>
  );
}

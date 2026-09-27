import clsx from 'clsx';
import { motion } from 'framer-motion';
import { BLOG_TAGS } from '../../constants/blog-tags';
import { Tag } from './primitives';

interface SearchBlogProps {
  search: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  toggleTag: (tag: string) => void;
  checkTagged: (tag: string) => boolean;
  checkDisabled: (tag: string) => boolean;
}

export default function SearchBlog({
  search,
  handleSearch,
  toggleTag,
  checkTagged,
  checkDisabled,
}: SearchBlogProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <label htmlFor="search">Search blog</label>
        <input
          id="search"
          type="search"
          placeholder="Search by title, description, or tag..."
          value={search}
          onChange={handleSearch}
          className={clsx('mt-2 w-full px-2 py-3', 'rounded-md bg-transparent border')}
          autoComplete="off"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-8 mt-2 flex flex-wrap justify-start gap-2 text-sm"
      >
        <span>Choose topic:</span>
        {BLOG_TAGS.map((tag) => (
          <Tag
            key={tag}
            onClick={() => toggleTag(tag)}
            disabled={checkDisabled(tag)}
          >
            {checkTagged(tag) ? <span>{tag}</span> : tag}
          </Tag>
        ))}
      </motion.div>
    </>
  );
}

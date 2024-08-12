import client from '@/client';
import groq from 'groq'
import { buildQuery } from './query';

interface GetBlogsParams {
  query: string;
  tags: string;
  page: string;
}

export function getBlog({
  query,
  tags,
  page,
}: GetBlogsParams): Promise<BlogItem[]> | undefined {
  try {
    const blogs: Promise<BlogItem[]> = client.fetch(
      groq`${buildQuery({
        type: 'post',
        query,
        tags,
        page: parseInt(page),
      })}{
      _id,
      title,
      slug,
      readingTime,
      views,
      publishedAt,
      description,
      mainImage{
        asset->{
            _id,
            url
        }
      },
      categories[]->{
        title
        },
      author->{
        name,
        image
      },
      content
      }`,
    );

    return blogs;
  } catch (error) {
    console.error(error);
  }
}

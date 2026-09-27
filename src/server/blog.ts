import { createServerFn } from '@tanstack/react-start';
import groq from 'groq';
import { getSanityClient } from '../lib/sanity';
import { buildQuery } from '../lib/query';
import type { BlogItem } from '../lib/blog-types';

const blogProjection = `{
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
}`;

export const fetchBlogs = createServerFn({ method: 'GET' }).handler(
  async (): Promise<BlogItem[]> => {
    const client = getSanityClient();
    const query = groq`${buildQuery({
      type: 'post',
      query: '',
      tags: '',
      page: 1,
    })}${blogProjection}`;
    return client.fetch(query);
  },
);

export const fetchBlogBySlug = createServerFn({ method: 'GET' })
  .inputValidator((data: { slug: string }) => data)
  .handler(async ({ data }): Promise<BlogItem[]> => {
    const client = getSanityClient();
    const query = groq`${buildQuery({
      type: 'post',
      query: data.slug,
      tags: '',
      page: 1,
    })}${blogProjection}`;
    return client.fetch(query);
  });

export const incrementBlogViews = createServerFn({ method: 'POST' })
  .inputValidator((data: { blogId: string }) => data)
  .handler(async ({ data }) => {
    try {
      const client = getSanityClient();
      if (!process.env.SANITY_TOKEN) return { ok: false, reason: 'no-token' };
      const currentViews = await client.fetch<number>(
        groq`*[_type == "post" && _id == "${data.blogId}"][0].views`,
      );
      await client
        .transaction()
        .patch(data.blogId, { set: { views: (currentViews ?? 0) + 1 } })
        .commit();
      return { ok: true };
    } catch (error) {
      console.error(error);
      return { ok: false };
    }
  });

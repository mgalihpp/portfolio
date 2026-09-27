import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { createImageUrlBuilder } from '@sanity/image-url';
import { createClient } from '@sanity/client';
import type { BlogItem } from './blog-types';

const publicClient = createClient({
  projectId: 'g4pufrpg',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-08-31',
});

const builder = createImageUrlBuilder(publicClient);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function imageUrlFor(source: string) {
  return builder.image(source).auto('format').fit('max');
}

export function extractHeadings(blocks: BlogItem['content']) {
  const headings: Array<{ level: number; text: string; headingId: string }> = [];
  blocks.forEach((block) => {
    if (block._type === 'block' && block.style?.startsWith('h')) {
      const level = parseInt(block.style.slice(1));
      if (level >= 1 && level <= 6 && block.children?.[0]) {
        headings.push({
          level,
          text: block.children[0].text,
          headingId: block._key,
        });
      }
    }
  });
  return headings;
}

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import imageUrlBuilder from '@sanity/image-url';
import client from '@/client';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const normalizePath = (path: string) => path.replace(/\/+$/, '');

const builder = imageUrlBuilder(client);
export function imageUrlFor(source: string) {
  return builder.image(source).auto('format').fit('max');
}

export const extractHeadings = (blocks: BlockType[]) => {
  const headings: Headings[] = [];

  blocks.forEach((block) => {
    if (block._type === 'block' && block.style === 'h1') {
      headings.push({
        level: 1,
        text: block.children[0].text,
        headingId: block._key,
      });
    } else if (block._type === 'block' && block.style === 'h2') {
      headings.push({
        level: 2,
        text: block.children[0].text,
        headingId: block._key,
      });
    } else if (block._type === 'block' && block.style === 'h3') {
      headings.push({
        level: 3,
        text: block.children[0].text,
        headingId: block._key,
      });
    } else if (block._type === 'block' && block.style === 'h4') {
      headings.push({
        level: 4,
        text: block.children[0].text,
        headingId: block._key,
      });
    } else if (block._type === 'block' && block.style === 'h5') {
      headings.push({
        level: 5,
        text: block.children[0].text,
        headingId: block._key,
      });
    } else if (block._type === 'block' && block.style === 'h6') {
      headings.push({
        level: 5,
        text: block.children[0].text,
        headingId: block._key,
      });
    }
  });

  return headings;
};

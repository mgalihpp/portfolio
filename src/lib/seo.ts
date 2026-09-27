export const SITE_URL = 'https://mgalihpp.site';
export const SITE_NAME = 'mgalihpp';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/OIG.jpg`;

interface PageHeadOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
}

export function pageHead({ title, description, path, image, type = 'website' }: PageHeadOptions) {
  const url = `${SITE_URL}${path}`;
  const img = image ?? DEFAULT_OG_IMAGE;
  return {
    meta: [
      { title },
      { name: 'description', content: description },
      { property: 'og:site_name', content: SITE_NAME },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:type', content: type },
      { property: 'og:image', content: img },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: img },
    ],
    links: [{ rel: 'canonical', href: url }],
  };
}

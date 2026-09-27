export interface BlogCategory {
  title: string;
}

export interface BlogItem {
  publishedAt: string;
  description: string;
  categories: BlogCategory[];
  _id: string;
  title: string;
  slug: {
    _type: string;
    current: string;
  };
  readingTime: string;
  views: number;
  mainImage: {
    asset: {
      url: string;
      _id: string;
    };
  };
  author: {
    name: string;
    image: {
      asset: {
        _ref: string;
        _id: string;
      };
    };
  };
  content: Array<{
    _type: string;
    style: string;
    _key: string;
    children: Array<{ _type: string; text: string }>;
  }>;
}

export interface BuildQueryParams {
  type: string;
  query: string;
  tags: string;
  page: number;
  perPage?: number;
}

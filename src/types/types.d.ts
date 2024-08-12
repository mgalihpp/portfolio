interface TechStack {
  label: string;
  icon: JSX.Element;
}

interface Project {
  url: string;
  name: string;
  description: string;
  techStack: TechStack[];
  image: string;
  imageAlt: string;
}

interface BlogItem {
  publishedAt: string;
  description: string;
  categories: Categories[];
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
  content: BlockType[];
}

interface Categories {
  title: string;
}

interface BuildQueryParams {
  type: string;
  query: string;
  tags: string;
  page: number;
  perPage?: number;
}

interface Headings {
  level: number;
  text: string;
  headingId: string;
}

interface BlockType {
  _type: string;
  style: string;
  _key: string;
  children: {
    _type: string;
    text: string;
  }[];
}

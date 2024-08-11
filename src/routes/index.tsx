import SingleBlogPost from '@/components/Blog/SingleBlogPost';
import { getBlog } from '@/helpers/getBlog';
import RootBlogsLayout from '@/layouts/RootBlogsLayout';
import RootLayout from '@/layouts/RootLayout';
import { RouteObject } from 'react-router-dom';
import About from './About';
import Blogs from './Blogs';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <Home />,
        loader: () => {
          return new Promise((resolve) => setTimeout(() => resolve(true), 0));
        },
      },
      {
        path: 'about',
        element: <About />,
        loader: () => {
          return new Promise((resolve) => setTimeout(() => resolve(true), 0));
        },
      },
      {
        path: 'projects',
        element: <Projects />,
        loader: () => {
          return new Promise((resolve) => setTimeout(() => resolve(true), 0));
        },
      },
      {
        path: 'blogs',
        element: <RootBlogsLayout />,
        children: [
          {
            path: '',
            element: <Blogs />,
            loader: async () => {
              return getBlog({
                query: '',
                tags: '',
                page: '1',
              });
            },
          },
          {
            path: '/blogs/:slug',
            element: <SingleBlogPost />,
            loader: async ({ params }) => {
              return getBlog({
                query: params.slug ?? '',
                tags: '',
                page: '1',
              });
            },
          },
        ],
      },
      {
        path: 'contact',
        element: <Contact />,
        loader: () => {
          return new Promise((resolve) => setTimeout(() => resolve(true), 0));
        },
      },
    ],
  },
];

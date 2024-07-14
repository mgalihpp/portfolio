import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from '@/layouts/RootLayout';
import Home from '@/routes/Home';
import About from '@/routes/About';
import Projects from '@/routes/Projects';
import Blogs from '@/routes/Blogs';
import Contact from '@/routes/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'blogs',
        element: <Blogs />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

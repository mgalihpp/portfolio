import { Suspense, lazy } from 'react';
import { HeadContent, Scripts, createRootRoute, useRouter } from '@tanstack/react-router';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { LanguageProvider } from '@/providers/LanguageProvider';
import { PostHogAppProvider } from '@/providers/PostHogProvider';
import Footer from '@/components/Footer';
import MobileSideBar from '@/components/MobileSidebar';
import { PostHogPageView } from '@/components/PostHogPageView';
import Sidebar from '@/components/Sidebar';
import TopLoadingBar from '@/components/TopLoadingBar';
import indexCss from '../index.css?url';
import blogCss from '../styles/blogDetails.css?url';
import { NotFound } from '@/components/NotFound';

const TanStackDevtoolsShell = import.meta.env.DEV
  ? lazy(() =>
      Promise.all([
        import('@tanstack/react-devtools'),
        import('@tanstack/react-router-devtools'),
      ]).then(([devtools, routerDevtools]) => ({
        default: function DevtoolsWithRouterPanel() {
          const router = useRouter();
          const Shell = devtools.TanStackDevtools;
          const RouterPanel = routerDevtools.TanStackRouterDevtoolsPanel;
          return (
            <Shell
              plugins={[
                {
                  name: 'TanStack Router',
                  render: <RouterPanel router={router} />,
                },
              ]}
            />
          );
        },
      })),
    )
  : () => null;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#09090b' },
    ],
    links: [
      { rel: 'stylesheet', href: indexCss },
      { rel: 'stylesheet', href: blogCss },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap',
      },
      { rel: 'icon', type: 'image/jpeg', href: '/bba.jpg' },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
        <noscript>
          <style>{`[style*="opacity:0"],[style*="opacity: 0"]{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var k='vite-ui-theme';var t=localStorage.getItem(k)||'dark';if(t==='system'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.classList.add(t);})();`,
          }}
        />
      </head>
      <body>
        <PostHogAppProvider>
          <ThemeProvider defaultTheme="dark">
            <LanguageProvider>
              <PostHogPageView />
              <div className="md:flex lg:m-auto lg:max-w-5xl lg:justify-center">
                <Sidebar />
                <MobileSideBar />
                <div className="w-full lg:max-w-3xl">
                  <main>{children}</main>
                  <Footer />
                </div>
              </div>
              <TopLoadingBar />
            </LanguageProvider>
          </ThemeProvider>
        </PostHogAppProvider>
        <Suspense fallback={null}>
          <TanStackDevtoolsShell />
        </Suspense>
        <Scripts />
      </body>
    </html>
  );
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.css';
import { ThemeProvider } from '@/providers/ThemeProvider.tsx';
import { LanguageProvider } from '@/providers/LanguageProvider.tsx';
import { PostHogAppProvider } from '@/providers/PostHogProvider.tsx';
import App from '@/App';

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <PostHogAppProvider>
      <ThemeProvider defaultTheme='dark'>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ThemeProvider>
    </PostHogAppProvider>
  </React.StrictMode>,
);

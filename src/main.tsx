import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.css';
import { ThemeProvider } from '@/providers/ThemeProvider.tsx';
import App from '@/App';

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);

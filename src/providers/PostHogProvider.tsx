import { PostHogProvider as PostHogReactProvider } from '@posthog/react';

const POSTHOG_KEY =
  import.meta.env.VITE_POSTHOG_KEY ||
  import.meta.env.VITE_POSTHOG_PROJECT_TOKEN ||
  '';
const POSTHOG_HOST =
  import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com';

type PostHogAppProviderProps = {
  children: React.ReactNode;
};

export function PostHogAppProvider({ children }: PostHogAppProviderProps) {
  if (!POSTHOG_KEY) {
    if (import.meta.env.DEV) {
      console.warn(
        '[PostHog] VITE_POSTHOG_KEY is missing — analytics disabled.',
      );
    }
    return <>{children}</>;
  }

  return (
    <PostHogReactProvider
      apiKey={POSTHOG_KEY}
      options={{
        api_host: POSTHOG_HOST,
        defaults: '2025-05-24',
        capture_pageview: false,
        capture_pageleave: true,
        person_profiles: 'identified_only',
      }}
    >
      {children}
    </PostHogReactProvider>
  );
}

import { useEffect } from 'react';
import { useLocation } from '@tanstack/react-router';
import { usePostHog } from '@posthog/react';

export function PostHogPageView() {
  const location = useLocation();
  const posthog = usePostHog();

  useEffect(() => {
    posthog?.capture('$pageview');
  }, [location.pathname, location.search, posthog]);

  return null;
}

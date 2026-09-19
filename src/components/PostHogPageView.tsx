import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { usePostHog } from '@posthog/react';

export function PostHogPageView() {
  const location = useLocation();
  const posthog = usePostHog();

  useEffect(() => {
    posthog?.capture('$pageview');
  }, [location.pathname, location.search, posthog]);

  return null;
}

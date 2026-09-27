import { useRef, useEffect } from 'react';
import { useRouterState } from '@tanstack/react-router';
import LoadingBar from 'react-top-loading-bar';
import type { LoadingBarRef } from 'react-top-loading-bar';
const TopLoadingBar = () => {
  const ref = useRef<LoadingBarRef>(null);
  const isLoading = useRouterState({ select: (s) => s.isLoading });
  useEffect(() => { if (isLoading) ref.current?.continuousStart(); else ref.current?.complete(); }, [isLoading]);
  return <LoadingBar color="#8e9eab" ref={ref} />;
};
export default TopLoadingBar;

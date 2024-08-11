import { useRef, useEffect } from 'react';
import { useNavigation } from 'react-router-dom';
import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar';

const TopLoadingBar = () => {
  const ref = useRef<LoadingBarRef>(null);
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === 'loading') {
      ref.current?.continuousStart();
    } else {
      ref.current?.complete();
    }
  }, [navigation]);

  return <LoadingBar color='#b3ffab' ref={ref} />;
};

export default TopLoadingBar;

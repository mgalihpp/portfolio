import { useEffect, useState } from 'react';
import type { RefObject } from 'react';

export function useImagePreloader(ref: RefObject<HTMLImageElement | null>) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const imgElement = ref.current;
    if (imgElement) {
      const handleLoad = () => setImageLoaded(true);

      if (imgElement.complete && imgElement.naturalWidth > 0) {
        handleLoad();
      } else {
        imgElement.addEventListener('load', handleLoad);
      }

      return () => {
        imgElement.removeEventListener('load', handleLoad);
      };
    }
  }, [ref]);

  return imageLoaded;
}

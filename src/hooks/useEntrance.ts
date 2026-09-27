import { useEffect, useState } from 'react';

let animatedMountsEnabled = false;

export function enableAnimatedMounts() {
  animatedMountsEnabled = true;
}

export function EntranceEnabler() {
  useEffect(() => {
    enableAnimatedMounts();
  }, []);
  return null;
}

export function useEntrance<T>(entrance: T): T | false {
  const [initial] = useState<T | false>(() => {
    if (typeof window === 'undefined') return false;
    return animatedMountsEnabled ? entrance : false;
  });
  return initial;
}

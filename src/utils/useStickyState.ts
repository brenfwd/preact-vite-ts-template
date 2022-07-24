import { useState, useEffect } from "preact/hooks";

type json = string | number | boolean | null | json[] | { [x: string | number]: json };

export function useStickyState<T extends json>(
  key: string,
  initialValue: T | (() => T)
): [state: T, setState: (t: T) => void] {
  const [state, setState] = useState(() => {
    const value = initialValue instanceof Function ? initialValue() : initialValue;
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(value));
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
}

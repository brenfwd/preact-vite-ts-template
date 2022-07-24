import { useEffect, useState } from "preact/hooks";

import { deepEqual } from "./deepEqual";

export interface AsyncHookOptions {
  refreshInterval?: number;
  immediate?: boolean;
}

export type AsyncDataReturn<T, E = unknown> = {
  refresh: () => Promise<void>;
} & (
  | {
      pending: true;
      data: null;
      error: null;
    }
  | {
      pending: false;
      data: T;
      error: null;
    }
  | {
      pending: false;
      data: null;
      error: E;
    }
);

export type AsyncHook<T, E = unknown> = (options?: AsyncHookOptions) => AsyncDataReturn<T, E>;

export function createAsyncHook<T, E = unknown>(asyncFn: () => Promise<T>): AsyncHook<T, E> {
  return function (options: AsyncHookOptions = {}): AsyncDataReturn<T, E> {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<E | null>(null);
    const [pending, setPending] = useState(false);

    const refresh = async () => {
      if (data === null) setPending(true);
      try {
        const newData = await asyncFn();
        if (!deepEqual(newData, data, true)) {
          setData(newData);
        }
      } catch (e) {
        setError(e as E);
      } finally {
        if (data === null) setPending(false);
      }
    };

    useEffect(() => {
      if (options.immediate ?? true) {
        refresh();
      }
    }, []);

    useEffect(() => {
      if (options.refreshInterval) {
        const interval = setInterval(refresh, options.refreshInterval);
        return () => clearInterval(interval);
      }
    }, [options.refreshInterval]);

    return {
      refresh,
      pending,
      data,
      error,
    } as AsyncDataReturn<T, E>;
  };
}

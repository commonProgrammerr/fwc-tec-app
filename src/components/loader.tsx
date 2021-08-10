import React, { ReactNode } from 'react';
import { useAsyncRetry } from 'react-use';
import { FunctionReturningPromise, PromiseType } from 'react-use/lib/misc/types';

interface LoaderProps<T extends FunctionReturningPromise> {
  asyncFn: T
  loading?: ReactNode
  error?: (error?: Error) => ReactNode
  children: ((state?: PromiseType<ReturnType<T>>) => ReactNode)
}

function Loader<T extends FunctionReturningPromise>({
  asyncFn,
  children,
  loading,
  error
}: LoaderProps<T>) {
  const asyncState = useAsyncRetry(asyncFn)
  return (
    <>
      {
        asyncState.loading
          ? <>{loading}</>
          : asyncState.error
            ? <div className="flex flex-col">
              {error?.(asyncState.error)}
              <button
                onClick={asyncState.retry}
                className="
                rounded 
                py-1 px-2
                bg-indigo-300 
                hover:bg-indigo-500 
                self-center 
                text-white"
              >
                Tentar novamente
              </button>
            </div>
            : <>{children(asyncState.value)}</>
      }
    </>
  );
}

export default Loader;

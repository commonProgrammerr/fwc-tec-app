import { ReactNode } from 'react';

interface LoaderProps {
  assyncFn: () => Promise<any>
  children: ReactNode
  loading: ReactNode
  error: ReactNode
}

function Loader({ children }: LoaderProps) {
  return (
    <>
      <h1>Loader</h1>
      {children}
    </>
  );
}

export default Loader;

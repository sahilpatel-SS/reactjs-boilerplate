import { Suspense as ReactSuspense } from 'react';

const Loading = () => (
  <div>Loading...</div>
);

const SuspenseWrapper = ({ children, fallback = <Loading /> }) => {
  return (
    <ReactSuspense fallback={fallback}>
      {children}
    </ReactSuspense>
  );
};

export default SuspenseWrapper;

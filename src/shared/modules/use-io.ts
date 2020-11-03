import React from 'react';

const DEFAULT_IO_OPTIONS = {
  rootMargin: '0px',
  threshold: 1.0,
};

const useIntersectionObserver = (ref: any, options = {}, minIntersection = 0) => {
  const [isIntersecting, setIntersecting] = React.useState(false);

  const ioOptions = { ...DEFAULT_IO_OPTIONS, ...options };
  React.useEffect(() => {
    const observer = new window.IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting && entry.intersectionRatio > minIntersection);
    }, ioOptions);

    const { current } = ref;

    if (!current) {
      // tslint:disable-next-line: no-console
      console.error('Intersection Observer not connected because current ref is null');
      // tslint:disable-next-line: no-empty
      return () => {};
    }

    observer.observe(current);

    return () => observer.unobserve(current);
  }, [ref, ioOptions, minIntersection]);

  return [isIntersecting];
};

export default useIntersectionObserver;

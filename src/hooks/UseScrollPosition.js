import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('up');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollPosition = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      
      if (Math.abs(scrollY - lastScrollY) > 5) {
        setScrollDirection(direction);
        lastScrollY = scrollY > 0 ? scrollY : 0;
      }
      
      setScrollPosition(scrollY);
    };

    const throttledScrollHandler = throttle(updateScrollPosition, 100);
    
    window.addEventListener('scroll', throttledScrollHandler);
    return () => window.removeEventListener('scroll', throttledScrollHandler);
  }, []);

  return { scrollPosition, scrollDirection };
};

const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};
import { useState, useEffect } from 'react';

export const useTypewriter = (text, speed = 100, startDelay = 0) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!text) return;

    const timer = setTimeout(() => {
      let index = 0;
      const typeInterval = setInterval(() => {
        setDisplayText(text.slice(0, index + 1));
        index++;
        
        if (index >= text.length) {
          setIsComplete(true);
          clearInterval(typeInterval);
        }
      }, speed);

      return () => clearInterval(typeInterval);
    }, startDelay);

    return () => clearTimeout(timer);
  }, [text, speed, startDelay]);

  const reset = () => {
    setDisplayText('');
    setIsComplete(false);
  };

  return { displayText, isComplete, reset };
};
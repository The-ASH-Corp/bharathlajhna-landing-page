'use client';

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedCounter = ({ endValue, duration }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5,  
  });

  useEffect(() => {
    let start = 0;
    if (inView) {
      let startTime = null;

      const animateCounter = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const newCount = Math.min(Math.floor((progress / duration) * endValue), endValue);
        setCount(newCount);

        if (newCount < endValue) {
          requestAnimationFrame(animateCounter);
        }
      };

      requestAnimationFrame(animateCounter);
    }
  }, [inView, endValue, duration]);

  return (
    <span ref={ref}>
      {count}
    </span>
  );
};

export default AnimatedCounter;

import React, { useRef, useEffect } from 'react';
import styles from '../styles/ConveyorBelt.module.css'; 


const ConveyorBelt = ({ children }) => {
  const scrollContainerRef = useRef(null);
  const scrollIntervalRef = useRef(null);

  const startAutoScroll = () => {
    if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
    scrollIntervalRef.current = setInterval(() => {
      const { current } = scrollContainerRef;
      if (current) {
        current.scrollLeft += 2; 
      }
    }, 30); 
  };

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
    };
  }, []);

  const scroll = (direction) => {
    const { current } = scrollContainerRef;
    if (current) {
      const scrollAmount = 300; // adjust this value based on your needs
      const newScrollPosition = direction === 'left' ? current.scrollLeft - scrollAmount : current.scrollLeft + scrollAmount;
      current.scrollTo({ left: newScrollPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.conveyorWrapper}>
      <button onClick={() => scroll('left')} className={styles.scrollButton}>←</button>
      <div className={styles.conveyorBelt} ref={scrollContainerRef}>
        {children}
      </div>
      <button onClick={() => scroll('right')} className={styles.scrollButton}>→</button>
    </div>
  );
};

export default ConveyorBelt;


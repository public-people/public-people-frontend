import React from 'react';
import styles from './styles.scss';

export default function Button({ type, size }) {

  const rootCss = [
    styles.root,
    (size === 'large' ? styles.isLarge : null)
  ].join(' ');

  const search = (
    <svg version="1.2" width="0" height="0" className={rootCss} baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <path d="M97.8 86.9L77.2 66.3A41.8 41.8 0 0 0 58.9 3.4a41.8 41.8 0 0 0-33-.1A42 42 0 0 0 3.3 58.7 42 42 0 0 0 66.2 77l20.6 20.6a7.1 7.1 0 0 0 5.4 2.3c2.1 0 3.9-.8 5.4-2.3a7.4 7.4 0 0 0 2.3-5.4c.1-2-.6-3.8-2.1-5.3zM61.3 61.3a25.8 25.8 0 0 1-19 7.9c-7.4 0-13.8-2.6-19-7.9-5.3-5.3-7.9-11.6-7.9-19s2.6-13.8 7.9-19a25.8 25.8 0 0 1 19-7.9c7.4 0 13.8 2.6 19 7.9 5.3 5.3 7.9 11.6 7.9 19s-2.6 13.8-7.9 19zm0 0" />
    </svg>
  );

  const home = (
    <svg version="1.2" width="0" height="0" className={rootCss} baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <path d="M98.7,48.8c1.8-2,1.6-5.1-0.4-6.8L53.7,2.9c-2-1.8-5.3-1.7-7.3,0.1L1.6,44.1c-2,1.8-2.1,4.9-0.2,6.8l1.1,1.2 	c1.9,1.9,4.9,2.2,6.7,0.5l3.4-3v43.9c0,2.7,2.2,4.9,4.9,4.9h17.5c2.7,0,4.9-2.2,4.9-4.9V62.8h22.3v30.7c0,2.7,1.9,4.9,4.6,4.9h18.5 	c2.7,0,4.9-2.2,4.9-4.9V50.2c0,0,0.9,0.8,2.1,1.8c1.1,1,3.5,0.2,5.3-1.8L98.7,48.8z" />
    </svg>
  );

  switch (type) {
    case 'search': return search;
    case 'home': return home;
    default: return null;   
  }
}

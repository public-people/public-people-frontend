import React from 'react'
import styles from './styles.module.scss';

export default function Header({ percentage }) {
  return (
    <div className={styles.root} style={{ transform: `scaleX(0.${percentage})` }}/>
  );
}

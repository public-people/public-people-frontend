import React from 'react'
import styles from './styles.module.scss';

export default function Card({ title, children, level = 6, highlighted }) {
  const rootCss = [
    styles.root,
    (highlighted ? styles.isHighlighted : null),
  ].join(' ');

  const HeadingLevel = `h${level}`;

  return (
    <div className={rootCss}>
      {title ? <HeadingLevel className={styles.title}>{title}</HeadingLevel> : null }
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

import React from 'react'
import styles from './styles.module.scss';

export default function Card({ title, children, level = 6, highlighted, link, footer, height }) {
  const rootCss = [
    styles.root,
    (highlighted ? styles.isHighlighted : null),
    (link ? styles.isLink : null),
  ].join(' ');

  const titleCss = [
    styles.title,
    (link ? styles.isLink : null),
  ].join(' ');

  const removePadding = footer && height;
  const innerCss = [
    styles.inner,
    (removePadding ? styles.hasFooter : null),
  ].join(' ');


  const HeadingLevel = `h${level}`;

  return (
    <div className={rootCss} style={{ height }}>
      <div className={innerCss}>
        {title ? <HeadingLevel className={titleCss}>{title}</HeadingLevel> : null }
        <div className={styles.content}>
          {children}
        </div>
      </div>
      { footer ? <div className={styles.footer}>{footer}</div> : null}
    </div>
  )
}

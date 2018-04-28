import React from 'react'
import styles from './styles.scss';

export default function Button({ link, clickFn, children, primary, inline, utils }) {
  if (link) {
    return <a href={link} className={styles.root}>{children}</a>;
  }

  const rootCss = [
    styles.root,
    (primary ? styles.isPrimary : null),
    (inline ? styles.isInline : null),
    (utils ? utils : null),
  ].join(' ');

  return <button className={rootCss} onClick={clickFn}>{children}</button>;
}

import React from 'react'
import styles from './styles.module.scss';

export default function Input({ placeholder, utils, onChange, value }) {

  const mainCss = [
    styles.root,
    (utils ? utils : null),
  ].join(' ');

  return (
    <input className={mainCss} {...{ placeholder, value, onChange }} />
  );
}

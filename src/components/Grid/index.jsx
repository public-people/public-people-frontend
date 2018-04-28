import React from 'react'
import styles from './styles.module.scss';


export default function Grid({ start, items, utils }) {
  const rootCss = [
    styles.root,
    (start ? styles[`has-${start}Trigger`] : null),
    (utils ? utils : null),
  ].join(' ')


  const itemsMarkup = Object.keys(items).map((id) => {
    const itemCss = [
      styles.item,
      styles[`is-${items[id].size}`],
    ].join(' ');

    return (
      <div className={itemCss} key={id}>
        {items[id].markup}
      </div>
    )
  })

  return (
    <div className={rootCss}>
      <div className={styles.inner}>
        {itemsMarkup}
      </div>
    </div>
  )
}
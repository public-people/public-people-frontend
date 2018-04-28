import React from 'react'
import styles from './styles.module.scss';
import Button from './../Button/index.jsx';
import Icon from './../Icon/index.jsx';
import Input from './../Input/index.jsx';

export default function Header({ link, clickFn, children, primary }) {
  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <div className={styles.home}>
          <Button primary inline>
            <Icon type="home" />
          </Button>
        </div>
        <div className={styles.searchWrap}>
          <div className={styles.search}>
            <div className={styles.input}>
              <Input placeholder="Search" utils="rounded-r-0" />
            </div>
            <div className={styles.button}>
              <Button inline utils="rounded-l-0">
                <Icon type="search" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



// .Head
// .Head-wrap
//   .Head-home: button.Button.is-primary.is-inline.has-icon: +home
//   .Head-searchWrap
//     .Head-search.u-boxShadow1dp
//       .Head-input: input.Input.u-borderRadiusStart(placeholder="Search")
//       .Head-button: button.Button.is-inline.has-icon.u-boxShadowNone.u-borderRadiusEnd: +search

import React, { Fragment } from "react";
import styles from "./styles.module.scss";

export default function Main(props) {
  return (
    <Fragment>
      <a href="#main">Skip to main content.</a>
      <main id="main" className={styles.root}>
        {props.children}
      </main>
    </Fragment>
  );
}

import PropTypes from "prop-types";
import React, { Fragment } from "react";
import styles from "./styles.module.scss";

export default function Main(props) {
  // Destructuring assignment: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  const { utils, children } = props;

  const rootCss = [styles.root, utils].join(" ");

  return (
    <Fragment>
      <a className="skiplink" href="#main">
        Skip to main content.
      </a>
      <main id="main" className={rootCss}>
        {children}
      </main>
    </Fragment>
  );
}

Main.propTypes = {
  utils: PropTypes.string,
  children: PropTypes.node
};

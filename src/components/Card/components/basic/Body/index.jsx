import PropTypes from "prop-types";
import React from "react";
import styles from "./styles.module.scss";

export default function BasicBody(props) {
  // Destructuring assignment: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  const { utils } = props;
  const rootCss = [styles.root, utils].join(" ");
  return (
    <div className={rootCss}>
      <div>
        <div>Test</div>
      </div>
    </div>
  );
}

BasicBody.propTypes = {
  utils: PropTypes.string
};
BasicBody.defaultProps = {
  utils: null
};

import PropTypes from "prop-types";
import React from "react";
import styles from "./styles.module.scss";

export default function ResultsFooter(props) {
  // Destructuring assignment: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  const { utils, item } = props;
  const rootCss = [styles.root, utils].join(" ");
  return (
    <div className={rootCss}>
      <div>{`Memberships: ${item.memberships.length}`}</div>
    </div>
  );
}

ResultsFooter.propTypes = {
  utils: PropTypes.string,
  item: PropTypes.object.isRequired
};

ResultsFooter.defaultProps = {
  utils: null
};

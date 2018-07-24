import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import addPropsToChildren from "./../../utilities/js/addPropsToChildren";

export default function Grid(props) {
  const { start, utils, columns, children } = props;

  const rootCss = [styles.root, utils].join(" ");

  return (
    <div className={rootCss}>
      <div className={styles.inner}>
        {addPropsToChildren(children, { columns, start })}
      </div>
    </div>
  );
}

Grid.propTypes = {
  start: PropTypes.number.isRequired,
  utils: PropTypes.string,
  columns: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
};

Grid.defaultProps = {
  utils: null
};

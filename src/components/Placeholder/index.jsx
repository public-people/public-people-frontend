import PropTypes from "prop-types";
import React from "react";
import styles from "./styles.module.scss";

export default function Placeholder(props) {
  const { utils, style } = props;
  const rootCss = [styles.root, utils].join(" ");

  return (
    <div className={style}>
      <div>
        <div className={[styles.loadingBar, styles.bar1].join(" ")} />
        <div className={[styles.loadingBar, styles.bar2].join(" ")} />
        <div className={[styles.loadingBar, styles.bar3].join(" ")} />
        <div className={[styles.loadingBar, styles.bar4].join(" ")} />
      </div>
    </div>
  );
}

Placeholder.propTypes = {
  utils: PropTypes.string,
  styles: PropTypes.string,
  style: PropTypes.string
};

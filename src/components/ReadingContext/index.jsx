import React from "react";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";

export default function ReadingContext(props) {
  return (
    <div
      lang={props.lang}
      className={styles.root}
      dangerouslySetInnerHTML={{ __html: props.content }}
    />
  );
}
ReadingContext.propTypes = {
  language: PropTypes.string
};

ReadingContext.defaultProps = {
  language: null
};

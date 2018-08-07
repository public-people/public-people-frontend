import React from "react";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";

export default function ReadingContext(props) {
  const { utils } = props;

  const rootCss = [styles.root, utils].join(" ");
  return (
    <div
      lang={props.lang}
      className={rootCss}
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

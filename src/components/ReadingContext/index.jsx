import PropTypes from "prop-types";
import React from "react";
import styles from "./styles.module.scss";

export default function ReadingContext(props) {
  // Destructuring assignment: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  const { utils, lang, content } = props;

  const rootCss = [styles.root, utils].join(" ");
  return (
    <div
      lang={lang}
      className={rootCss}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
ReadingContext.propTypes = {
  lang: PropTypes.string,
  utils: PropTypes.string,
  content: PropTypes.string
};

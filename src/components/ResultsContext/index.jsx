import React from "react";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";

export default function ResultsContext(props) {
  const { utils } = props;
  {
    data.map(datum => {
      const Component = this.props.bar;
      return <Component anyProps={here} />;
    });
  }
  <Blah renderBar={dataFromBlah => <Bar data={dataFromBlah} />} />;
  const rootCss = [styles.root, utils].join(" ");
  return (
    <div
      lang={props.lang}
      className={rootCss}
      dangerouslySetInnerHTML={{ __html: props.content }}
    />
  );
}
ResultsContext.propTypes = {
  language: PropTypes.string
};

ResultsContext.defaultProps = {
  language: null
};

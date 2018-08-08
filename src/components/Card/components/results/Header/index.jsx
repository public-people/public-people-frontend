import PropTypes from "prop-types";
import React, { Fragment } from "react";
import styles from "./styles.module.scss";

export default function ResultsHeader(props) {
  const { utils } = props;
  const Heading = `h${props.headerLevel}`;
  const rootCss = [styles.root, utils].join(" ");
  return (
    <Fragment>
      <a className="skiplink" href={"#" + props.title}>
        {props.title}
      </a>
      <Heading className={rootCss}>Hello!</Heading>
    </Fragment>
  );
}

ResultsHeader.propTypes = {
  title: PropTypes.string.isRequired,
  headerLevel: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  utils: PropTypes.string
};

import Link from "gatsby-link";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import extractFirstLastWords from "../../../../../utilities/js/extractFirstLastWords";
import styles from "./styles.module.scss";

export default function ResultsHeader(props) {
  const { utils, item } = props;
  const Heading = `h${props.headerLevel}`;
  const rootCss = [styles.root, utils].join(" ");
  return (
    <Fragment>
      <a className="skiplink" href={"#" + props.title}>
        {props.title}
      </a>
      <Link
        className={rootCss + "title"}
        onClick={() => props.resetToken(item.name)}
        to={`/person?person=${encodeURI(extractFirstLastWords(item.name))}`}
      >
        <Heading className={rootCss}>{item.name}</Heading>
      </Link>
    </Fragment>
  );
}

ResultsHeader.propTypes = {
  title: PropTypes.string.isRequired,
  headerLevel: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  resetToken: PropTypes.func.isRequired,
  utils: PropTypes.string,
  item: PropTypes.shape({
    title: PropTypes.string
  })
};

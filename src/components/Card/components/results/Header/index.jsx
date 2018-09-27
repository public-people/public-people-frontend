import Link from "gatsby-link";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import extractFirstLastWords from "../../../../../utilities/js/extractFirstLastWords";
import styles from "./styles.module.scss";

export default function ResultsHeader(props) {
  const { utils, item, limit, offset, clickFn } = props;

  const Heading = `h${props.headerLevel}`;
  const rootCss = [styles.root, utils].join(" ");

  return (
    <Fragment>
      <Link
        className={`${rootCss} title`}
        onClick={() => clickFn(item.id, limit, offset)}
        to={`/person?personID=${item.id}&offset=${offset}&limit=${limit}`}
      >
        <Heading className={rootCss}>{item.name}</Heading>
      </Link>
    </Fragment>
  );
}

ResultsHeader.propTypes = {
  headerLevel: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  offset: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  utils: PropTypes.string,
  clickFn: PropTypes.func.isRequired,
  item: PropTypes.shape({
    title: PropTypes.string
  }).isRequired
};

ResultsHeader.defaultProps = {
  headerLevel: 1,
  utils: null
};

import React, { Fragment } from "react";
import styles from "./../styles.module.scss";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import { getNewUrl } from "./../lib/getNewUrl";
import { getPageArray } from "./../lib/getPageArray";
import { getOptions } from "./../lib/getOptions";

const callSearch = params => {
  switch (true) {
    case window.location.pathname === "/results" && params.phrase !== undefined:
      return params.getPeople(params.phrase, params.limit, params.newOffset);
    case window.location.pathname === "/person" &&
      params.personID !== undefined:
      return params.getPerson(params.personID, params.limit, params.newOffset);
    default:
      return new Error(
        "Pagination must be used on a valid results path and must contain a search token"
      );
  }
};

export default function Markup(props) {
  const {
    count,
    current_url,
    limit,
    offset,
    utils,
    offsetStep,
    getPerson,
    getPeople,
    phrase,
    personID
  } = props;
  const rootCss = [styles.root, utils].join(" ");

  if (count <= limit) {
    return null;
  }

  const options = getOptions(count, limit, offset, offsetStep);
  const pages = getPageArray({
    currPage: options.currPage,
    totalPages: options.totalPages
  });

  return (
    <div className={rootCss}>
      <div className={styles.paginationInner}>
        {pages.map((pageNo, i) => {
          const newOffset = (pageNo - 1) * offsetStep;

          return pageNo === options.currPage ? (
            <Link
              key={pageNo}
              to={getNewUrl(window.location.href, newOffset)}
              onClick={callSearch.bind(this, {
                getPerson,
                getPeople,
                phrase,
                personID,
                limit,
                newOffset
              })}
              className={`${styles.currPage} ${styles.page}`}
            >
              {pageNo}
            </Link>
          ) : (
            <Link
              key={pageNo}
              to={getNewUrl(window.location.href, newOffset)}
              onClick={callSearch.bind(this, {
                getPerson,
                getPeople,
                phrase,
                personID,
                limit,
                newOffset
              })}
              className={styles.page}
            >
              {pageNo}
            </Link>
          );
        })}
        &nbsp;
        {`of ${options.totalPages}`}
      </div>
    </div>
  );
}

Markup.propTypes = {
  utils: PropTypes.string
};

Markup.defaultProps = {};

import React, { Fragment } from "react";
import styles from "./../styles.module.scss";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import { getNewUrl } from "./../lib/getNewUrl";
import { getPageArray } from "./../lib/getPageArray";
import { getOptions } from "./../lib/getOptions";

const callSearch = params => {
  console.log("calling search", params);
  console.log(params.limit);
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

  console.log("pagination props", props);

  if (count <= limit) {
    return null;
  }

  const options = getOptions(count, limit, offset, offsetStep);
  const pages = getPageArray(options);

  return (
    <div className={rootCss}>
      Will page current page: {options.currPage}, totalPages:{" "}
      {options.totalPages}, options:{" "}
      {pages.map((pageNo, i) => {
        const newOffset = (pageNo - 1) * offsetStep;
        console.log("newOffset", newOffset);
        return (
          <Link
            key={i}
            to={getNewUrl(window.location.href, newOffset)}
            onClick={callSearch.bind(this, {
              getPerson,
              getPeople,
              phrase,
              personID,
              limit,
              newOffset
            })}
          >
            {pageNo}
          </Link>
        );
      })}
    </div>
  );
}

Markup.propTypes = {
  utils: PropTypes.string
};

Markup.defaultProps = {};

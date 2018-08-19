import React, { Fragment } from "react";
import styles from "./../styles.module.scss";
import PropTypes from "prop-types";
import Link from "gatsby-link";

const getArray = num => {
  return Array.from(new Array(num), (x, i) => i + 1);
};

const getPages = options => {
  const PGS_TO_SHOW = 5;
  const MIDPOINT = 3;
  const totalPages = options.totalPages;
  const currPage = options.currPages;

  switch (totalPages >= PGS_TO_SHOW) {
    case currPage <= MIDPOINT:
      return getArray(PGS_TO_SHOW).map(page => {
        return page;
      });
    case currPage > MIDPOINT && currPage <= totalPages - PGS_TO_SHOW:
      return getArray(PGS_TO_SHOW).map(page => {
        return page + currPage - MIDPOINT;
      });
    case currPage >= totalPages - PGS_TO_SHOW:
      return getArray(PGS_TO_SHOW5).map(page => {
        return page + totalPages - PGS_TO_SHOW;
      });
    default:
      return getArray(totalPages).map(page => {
        return page;
      });
  }
};

const getOptions = (count, limit, offset, offsetStep) => {
  const additionalPage = count % limit > 0 ? 1 : 0;
  return {
    currPage: offset === 0 ? 1 : offset / offsetStep,
    totalPages: additionalPage + (count - (count % limit)) / limit
  };
};

const getUrl = (currentURL, offset) => {
  console.log("currentURL", `${currentURL}`);
  const url = new URL(currentURL);
  const params = new URLSearchParams(url.search);
  params.set("offset", offset);
  console.log("newurl", `${url.pathname}?${params.toString()}`);
  return `${url.pathname}?${params.toString()}`;
};

const callSearch = (
  searchPerson,
  searchPeople,
  limit,
  offset,
  phrase,
  personID,
  path
) => {
  switch (true) {
    case path === "/results" && phrase !== undefined:
      return searchPeople(phrase, limit, offset);
    case path === "/person" && personID !== undefined:
      return searchPeople(personID, limit, offset);
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
    searchPerson,
    searchPeople,
    phrase,
    personID
  } = props;
  const rootCss = [styles.root, utils].join(" ");

  const callingCallSearch = param => {
    console.log("param, param1", param);
    callSearch(
      param.searchPerson,
      param.searchPeople,
      param.limit,
      param.newOffset,
      param.phrase,
      param.personID,
      window.location.pathname
    );
  };

  if (count <= limit) {
    return null;
  }

  const options = getOptions(count, limit, offset, offsetStep);
  const pages = getPages(options);
  console.log("options", options);
  // console.log("options", options);
  return (
    <div className={rootCss}>
      Will page current page: {options.currPage}, totalPages:{" "}
      {options.totalPages}, options:{" "}
      {pages.map((pageNo, i) => {
        const newOffset = (pageNo - 1) * offsetStep;
        return (
          <Link
            key={pageNo * i}
            to={getUrl(window.location.href, newOffset)}
            onClick={callingCallSearch.bind(this, {
              searchPerson,
              searchPeople,
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

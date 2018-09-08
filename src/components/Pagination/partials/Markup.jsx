import React, { Fragment } from "react";
import styles from "./../styles.module.scss";
import PropTypes from "prop-types";
import Link from "gatsby-link";

const getArray = num => {
  return Array.from(new Array(num), (x, i) => i + 1);
};

const getPages = options => {
  console.log("options", options);
  // There are a few things to know before we can generate reliable pagination.
  // "PGS_TO_SHOW is obvious, maybe, as the number of pages we want selectable
  // on the component, eg  ... 3, 4, 5, 6, 7".
  // Midpoint is for picking the item in the middle. So current page in the above example
  // is 5.
  const PGS_TO_SHOW = 5;
  const MIDPOINT = 2;
  const totalPages = options.totalPages;
  const currPage = options.currPage;
  console.log(currPage);
  switch (totalPages >= PGS_TO_SHOW) {
    // Let's handle the easy ones out the gate.
    // If there are fewer pages than we decided to show, show these.

    // The thing is we, also only want to start moving the midpoint as the
    // user clicks past the first two, in this case. So we wait until the current page hits
    // midpoint before starting the shift the values.
    case currPage <= MIDPOINT:
      return getArray(PGS_TO_SHOW).map(page => {
        return page;
      });
    // When the current page goes beyond he midpoint, we shift. We started when the no. of pages
    //  crossed the midpoint, so if we now substract midpoint, we stay in place.
    case currPage > MIDPOINT && currPage <= totalPages - PGS_TO_SHOW:
      return getArray(PGS_TO_SHOW).map(page => {
        return page + currPage - MIDPOINT;
      });
    // At the end we might see, say, 267, 268, 269, 270, 271 for all after 267.
    // This item takes over where the second condition on the previous case closes.
    case currPage >= totalPages - PGS_TO_SHOW:
      return getArray(PGS_TO_SHOW).map(page => {
        return page + totalPages - PGS_TO_SHOW;
      });
    default:
      return [];
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
  console.log(
    "calling search",
    searchPerson,
    searchPeople,
    limit,
    offset,
    phrase,
    personID,
    path
  );
  switch (true) {
    case path === "/results" && phrase !== undefined:
      return searchPeople(phrase, limit, offset);
    case path === "/person" && personID !== undefined:
      return searchPerson(personID, limit, offset);
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

  return (
    <div className={rootCss}>
      Will page current page: {options.currPage}, totalPages:{" "}
      {options.totalPages}, options:{" "}
      {pages.map((pageNo, i) => {
        const newOffset = (pageNo - 1) * offsetStep;
        return (
          <Link
            key={i}
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

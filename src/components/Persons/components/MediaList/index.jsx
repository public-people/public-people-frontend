import PropTypes from "prop-types";
import React from "react";
import { parse, format } from "date-fns";
import styles from "./styles.module.scss";

export default function MediaList(props) {
  // Destructuring assignment: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  const { utils, item } = props;
  const rootCss = [styles.root, utils].join(" ");

  return (
    <li className={rootCss}>
      <span className="smallcaps smallcaps-dark-accent smallcaps-small">
        {format(parse(item.published_at), "YYYY-MM-DD")}
      </span>{" "}
      <em>{item.collection.label}</em>
      :&nbsp;
      <a href={item.source_url} rel="noopener noreferrer" target="_blank">
        {item.title}
      </a>
    </li>
  );
}

MediaList.propTypes = {
  utils: PropTypes.string,
  item: PropTypes.shape({
    id: PropTypes.string,
    published_at: PropTypes.string,
    title: PropTypes.string,
    source_url: PropTypes.string,
    collection: PropTypes.shape({
      label: PropTypes.string
    })
  }).isRequired
};

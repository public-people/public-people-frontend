import PropTypes from "prop-types";
import React from "react";
import styles from "./styles.module.scss";

export default function MediaList(props) {
  const { utils, item } = props;
  const rootCss = [styles.root, utils].join(" ");

  return (
    <li className={rootCss}>
      {item.published_at} – in <em>{item.collection.label}</em>:&nbsp;
      <a href={item.source_url}>{item.title}</a>
    </li>
  );
}

MediaList.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    published_at: PropTypes.string,
    title: PropTypes.string,
    source_url: PropTypes.string,
    collection: PropTypes.shape({
      label: PropTypes.string
    })
  })
};

// Card.defaultProps = {
//   title: null,
//   level: 6,
//   highlighted: false,
//   link: false,
//   footer: false,
//   height: null,
//   utils: null
// };

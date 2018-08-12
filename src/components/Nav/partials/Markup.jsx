import PropTypes from "prop-types";
import React from "react";
import styles from "../styles.module.scss";
import Link from "gatsby-link";

export default function Nav(props) {
  const { utils, links, cancelPromisesPeople, cancelPromisesPerson } = props;
  const cancelAllPromises = () => {
    cancelPromisesPeople("navigating away.");
    cancelPromisesPerson("navigating away.");
  };
  const rootCss = [styles.root, utils].join(" ");

  return (
    <nav className={rootCss}>
      {links.map((link, index) => (
        <Link
          onClick={cancelAllPromises}
          key={`key-${index}-${link.text}`}
          to={link.url}
        >
          {link.text}
        </Link>
      ))}
    </nav>
  );
}

Nav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired
};

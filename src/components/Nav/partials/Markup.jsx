import PropTypes from "prop-types";
import React from "react";
import Link from "gatsby-link";
// cuid www.npmjs.com/package/cuid
import cuid from "cuid";
import styles from "../styles.module.scss";

export default function Nav(props) {
  // Destructuring assignment: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  const { utils, links, getPersonCancel, getPeopleCancel } = props;

  const cancelCurrentRequests = () => {
    getPersonCancel();
    getPeopleCancel();
  };

  const rootCss = [styles.root, utils].join(" ");

  return (
    <nav className={rootCss}>
      {links.map(link => (
        <Link
          onClick={cancelCurrentRequests}
          key={cuid()}
          to={link.url}
          className={styles.link}
        >
          {link.text}
        </Link>
      ))}
    </nav>
  );
}

Nav.propTypes = {
  getPersonCancel: PropTypes.func,
  getPeopleCancel: PropTypes.func,
  utils: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired
};

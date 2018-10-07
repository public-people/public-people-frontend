import PropTypes from "prop-types";
import React, { Fragment } from "react";
import styles from "./styles.module.scss";
import Memberships from "./../Sidebar/components/Memberships";
import Pagination from "./../Pagination/index";

export default function Markup(props) {
  // Destructuring assignment: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  const { utils, children, sidebar, person, loadingPerson, error } = props;
  const Sidebar = sidebar;
  const rootCss = [styles.root, utils].join(" ");

  return (
    <Fragment>
      <a className="skiplink" href="#main">
        Skip to main content.
      </a>
      {sidebar && (
        <Fragment>
          <Sidebar
            style={styles.aside}
            data={person}
            loading={loadingPerson}
            error={error}
            // See: Render Props https://reactjs.org/docs/render-props.html
            render={data => <Memberships data={data} />}
          />
          <main id="main" className={styles.main}>
            {children}
          </main>
          <Pagination style={styles.pagination} />
        </Fragment>
      )}

      {!sidebar && (
        <main id="main" className={rootCss}>
          {children}
        </main>
      )}
    </Fragment>
  );
}

Markup.propTypes = {
  utils: PropTypes.string,
  sidebar: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object,
    PropTypes.func
  ]),
  results: PropTypes.array.isRequired,
  person: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
  children: PropTypes.node
};

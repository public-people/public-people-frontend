import PropTypes from "prop-types";
import React, { Fragment } from "react";
import styles from "./styles.module.scss";
import Memberships from "./../Sidebar/components/Memberships";
import Pagination from "./../Pagination/index";

export default function Markup(props) {
  // Destructuring assignment: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  const {
    utils,
    children,
    sidebar,
    person,
    loading,
    loadingPerson,
    error
  } = props;
  const Sidebar = sidebar;
  const rootCss = [styles.root, utils].join(" ");

  const stylePagination =
    loading || loadingPerson ? styles.loadingPage : styles.pagination;
  const main = loading || loadingPerson ? styles.loadingMain : styles.main;
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
            loading={loading}
            loadingPerson={loadingPerson}
            error={error}
            // See: Render Props https://reactjs.org/docs/render-props.html
            renderMemberships={data => (
              <Memberships data={data} utils="component" />
            )}
          />
          <main id="main" className={main}>
            {children}
            <Pagination style={stylePagination} />
          </main>
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
  loadingPerson: PropTypes.bool,
  results: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  person: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
  children: PropTypes.node
};

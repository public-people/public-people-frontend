import Link from "gatsby-link";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Helmet from "react-helmet";
import Button from "./../../Button";
import Icon from "./../../Icon";
import Input from "./../../Input";
import styles from "./../styles.module.scss";

const createForm = (
  phrase,
  updatePhraseWrap,
  initSearchWrap,
  limit,
  offset
) => (
  <form className={styles.searchWrap}>
    <div className={styles.search}>
      <div className={styles.input}>
        <Input
          placeholder="Search"
          utils="rounded-r-0"
          value={phrase}
          onChange={updatePhraseWrap}
        />
      </div>
      <div className={styles.button}>
        <Link
          to={`/results?phrase=${encodeURI(
            phrase
          )}&offset=${offset}&limit=${limit}`}
          onClick={initSearchWrap}
        >
          <Button inline submit utils="rounded-l-0">
            <Icon type="search" />
          </Button>
        </Link>
      </div>
    </div>
  </form>
);

export default function Markup(props) {
  // Destructuring assignment: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  const {
    phrase,
    updatePhrase,
    getPeopleCancel,
    getPersonCancel,
    getPeople,
    limit,
    ql,
    title
  } = props;
  const updatePhraseWrap = event => {
    updatePhrase(event.target.value);
  };
  const initSearchWrap = () => {
    // The ordering of these three functions is crucial.
    // The first cancels any previous unresolved request and the second initiates a new one.
    // Because the search button can be pressed from anywhere, all promises must be cancelled here.
    // This will also be true of navigation
    getPeopleCancel();
    getPersonCancel();
    phrase ? getPeople(phrase, limit, 0) : getPeople("", 15, 0);
  };

  return (
    <Fragment>
      <Helmet title={title}>
        <html lang={ql.site.siteMetadata.language} />
        <meta
          name="viewport"
          content="width=device-width initial-scale=1.0, shrink-to-fit=no"
        />
      </Helmet>
      <header className={styles.root}>
        <div className={styles.wrap}>
          <div className={styles.home}>
            <Link to="/">
              <Button primary inline>
                <Icon type="home" />
              </Button>
            </Link>
          </div>
          {createForm(phrase, updatePhraseWrap, initSearchWrap, limit, 0)}
        </div>
        {props.navigation ? props.navigation : null}
      </header>
    </Fragment>
  );
}

Markup.propTypes = {
  phrase: PropTypes.string,
  updatePhrase: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  navigation: PropTypes.element,
  ql: PropTypes.object,
  limit: PropTypes.number.isRequired,
  getPeopleCancel: PropTypes.func,
  getPersonCancel: PropTypes.func,
  getPeople: PropTypes.func
};

Markup.defaultProps = {
  phrase: ""
};

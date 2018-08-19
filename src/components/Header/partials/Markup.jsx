import Link from "gatsby-link";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Helmet from "react-helmet";
import Button from "./../../Button";
import Icon from "./../../Icon";
import Input from "./../../Input";
import styles from "./../styles.module.scss";

const buildLoadingMarkup = () => (
  <div className={styles.searchWrap}>
    <div className={styles.search}>
      <Input loading />
    </div>
  </div>
);

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
      <div className={"foo " + styles.button}>
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
  console.log("Header", props);
  const {
    loading,
    phrase,
    updatePhrase,
    initSearch,
    cancelPromisesPeople,
    cancelPromisesPerson,
    ql,
    limit,
    offset
  } = props;

  const updatePhraseWrap = event => updatePhrase(event.target.value);
  const initSearchWrap = () => {
    // The ordering of these three functions is crucial.
    // The first cancels any previous unresolved request and the second initates a new one.
    // Because the search button can be pressed from anywhere, all promises must be cancelled here.
    // This will also be true of navigation
    cancelPromisesPerson("initiated a new search");
    cancelPromisesPeople("initiated a new search");
    if (phrase) {
      initSearch(phrase, limit, offset);
    }
  };

  return (
    <Fragment>
      <Helmet title={props.title}>
        <html lang={props.ql.site.siteMetadata.language} />
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
          {!loading
            ? createForm(
                phrase,
                updatePhraseWrap,
                initSearchWrap,
                limit,
                offset
              )
            : buildLoadingMarkup()}
        </div>
        {props.navigation ? props.navigation : null}
      </header>
    </Fragment>
  );
}

Markup.propTypes = {
  loading: PropTypes.bool,
  phrase: PropTypes.string,
  updatePhrase: PropTypes.func.isRequired,
  initSearch: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  navigation: PropTypes.element
};

Markup.defaultProps = {
  loading: false,
  phrase: ""
};

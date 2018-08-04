import React, { Fragment } from "react";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import styles from "./../styles.module.scss";
import Button from "./../../Button";
import Icon from "./../../Icon";
import Input from "./../../Input";
import Helmet from "react-helmet";

const buildLoadingMarkup = () => (
  <div className={styles.searchWrap}>
    <div className={styles.search}>
      <Input loading />
    </div>
  </div>
);

const createForm = (phrase, updatePhraseWrap, initSearchWrap) => (
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
          to={`/results?phrase=${encodeURI(phrase)}`}
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
  const { loading, phrase, updatePhrase, initSearch, ql } = props;
  console.log("markup props", props);

  const updatePhraseWrap = event => updatePhrase(event.target.value);
  const initSearchWrap = () => initSearch(phrase);

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
            ? createForm(phrase, updatePhraseWrap, initSearchWrap)
            : buildLoadingMarkup()}
        </div>
      </header>
    </Fragment>
  );
}

Markup.propTypes = {
  loading: PropTypes.bool,
  phrase: PropTypes.string,
  updatePhrase: PropTypes.func.isRequired,
  initSearch: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

Markup.defaultProps = {
  loading: false,
  phrase: ""
};

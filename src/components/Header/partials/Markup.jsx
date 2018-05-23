import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styles from './../styles.module.scss';
import Button from './../../Button';
import Icon from './../../Icon';
import Input from './../../Input';


const buildLoadingMarkup = () => (
  <div className={styles.searchWrap}>
    <div className={styles.search}>
      <Input loading />
    </div>
  </div>
);


const createForm = (phrase, updatePhraseWrap, initSearchWrap) => {
  return (
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
          <Link to={`/results?phrase=${encodeURI(phrase)}`} onClick={initSearchWrap}>
            <Button inline submit utils="rounded-l-0">
              <Icon type="search" />
            </Button>
          </Link>
        </div>
      </div>
    </form>
  );
};


export default function Markup(props) {
  const {
    loading,
    phrase,
    updatePhrase,
    initSearch,
  } = props;

  const updatePhraseWrap = event => updatePhrase(event.target.value);
  const initSearchWrap = () => initSearch(phrase);

  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <div className={styles.home}>
          <Link to="/">
            <Button primary inline>
              <Icon type="home" />
            </Button>
          </Link>
        </div>
        {!loading ? createForm(phrase, updatePhraseWrap, initSearchWrap) : buildLoadingMarkup()}
      </div>
    </div>
  );
}


Markup.propTypes = {
  loading: PropTypes.bool,
  phrase: PropTypes.string,
  updatePhrase: PropTypes.func.isRequired,
  initSearch: PropTypes.func.isRequired,
};


Markup.defaultProps = {
  loading: false,
  phrase: '',
};

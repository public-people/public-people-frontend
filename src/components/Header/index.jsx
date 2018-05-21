import React from 'react';
import Link from 'gatsby-link';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import Button from './../Button';
import Icon from './../Icon';
import Input from './../Input';
import { updatePhrase as reduxUpdatePhrase } from './../../redux/modules/search';


const buildLoadingMarkup = () => (
  <div className={styles.searchWrap}>
    <div className={styles.search}>
      <Input loading />
    </div>
  </div>
);


const createForm = (phrase, updatePhraseWrap) => (
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
        <Link to={`/results?phrase=${encodeURI(phrase)}`}>
          <Button inline submit utils="rounded-l-0">
            <Icon type="search" />
          </Button>
        </Link>
      </div>
    </div>
  </form>
);


function Header({ loading, phrase, updatePhrase }) {
  const updatePhraseWrap = event => updatePhrase(event.target.value);

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
        {!loading ? createForm(phrase, updatePhraseWrap) : buildLoadingMarkup()}
      </div>
    </div>
  );
}


const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  phrase: state.search.phrase,
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  ...ownProps,
  updatePhrase: phrase => dispatch(reduxUpdatePhrase(phrase)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);


Header.propTypes = {
  loading: PropTypes.bool,
  phrase: PropTypes.string,
  updatePhrase: PropTypes.func.isRequired,
};


Header.defaultProps = {
  loading: false,
  phrase: '',
};

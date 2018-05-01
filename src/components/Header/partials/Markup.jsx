import React from 'react'
import Link from 'gatsby-link';
import styles from './../styles.module.scss';
import Button from './../../Button/index.jsx';
import Icon from './../../Icon/index.jsx';
import Input from './../../Input/index.jsx';


const getUrlParameter = (name) => {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};


export default function Header({ phrase, updatePhrase, loading }) {
  const updatePhraseWrap = event => updatePhrase(event.target.value);

  const createForm = () => {
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
            <Link to={`/results?phrase=${encodeURI(phrase)}`}>
              <Button inline submit utils="rounded-l-0">
                <Icon type="search" />
              </Button>
            </Link>
          </div>
        </div>
      </form>
    )
  }

  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <div className={styles.home}>
          <Link to='/'>
            <Button primary inline>
              <Icon type="home" />
            </Button>
          </Link>
        </div>
        {!loading ? createForm() : null}
      </div>
    </div>
  )
}
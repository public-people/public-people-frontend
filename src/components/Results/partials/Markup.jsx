import React from 'react';
import PropTypes from 'prop-types';
import styles from './../styles.module.scss';
import Card from './../../Card';
import Loader from './../../Loader';


const buildResults = results => results.map((item, index) => (
  <div
    key={item.id}
    className={styles.item}
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <Card
      title={item.name}
      link
      footer="Unknown amount of events"
      height={250}
    >
      <span className="font-bold block">Position Unknown</span>
      <span className="block italic">Organisation Unknown</span>
    </Card>
  </div>
));


export default function Markup({ loading, error, results }) {
  if (error === 'fail') {
    return (
      <div>
        Something went wrong. Please try again and get in touch if the problem persists
      </div>
    );
  }

  if (error === 'no-resuls') {
    return <div>No results were found for this search. Please try another search term</div>;
  }

  if (loading) {
    return <div className="text-center"><Loader /></div>;
  }


  return (
    <div className={styles.root}>
      {results ? buildResults(results) : null}
    </div>
  );
}


Markup.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  results: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })),
};


Markup.defaultProps = {
  loading: false,
  error: null,
  results: [],
};

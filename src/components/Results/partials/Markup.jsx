import React from 'react'
// import Link from 'gatsby-link';
import styles from './../styles.module.scss';
import Card from './../../Card/index.jsx';
// import Icon from './../../Icon/index.jsx';
// import Grid from './../../Grid/index.jsx';



export default function Markup({ phrase, loading, error, results }) {
  switch (error) {
    case 'fail': return <div>Something went wrong. Please try again and get in touch if the problem persists</div>;
    case 'no-resuls': return <div>No results were found for this search. Please try another search term</div>;
    default: null;
  }

  const buildResults = (results) => {
    return results.map((item, index) => {
      return (
        <div className={styles.item} style={{ animationDelay: `${index * 0.1}s` }}>
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
      )
    });
  }

  return (
    <div className={styles.root}>
      {results ? buildResults(results) : null}
    </div>
  )
}


import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./../styles.module.scss";
import Card from "./../../Card";
import FadeInWrap from "./../../FadeInWrap";
import Placeholder from "./../../Placeholder";

const buildResults = (results, props) => (
  <Fragment>
    <h1>{props.person}</h1>
    <ul>
      {results.map((item, index) => (
        <li
          className={"space-1"}
          key={item.id}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {item.published_at} – in <em>{item.collection.label}</em>:&nbsp;
          <a href={item.source_url}>{item.title}</a>
        </li>
      ))}
    </ul>
  </Fragment>
);

export default function Markup(props) {
  const { loading, error, results, person } = props;

  if (error === "no-results") {
    return (
      <div>
        No results were found for this search. Please try another search term
      </div>
    );
  }

  if (loading) {
    return [0, 1, 2, 3].map(index => (
      <div key={index} className={styles.item}>
        <FadeInWrap delay={index * 0.2}>
          <Placeholder utils="rounded-4" height={250} />
        </FadeInWrap>
      </div>
    ));
  }

  if (error) {
    return (
      <FadeInWrap>
        <div className="text-center">
          <Card highlighted title="Error" utils="max-w-4 ml-auto mr-auto">
            Something went wrong. Please try again at a later stage
          </Card>
        </div>
      </FadeInWrap>
    );
  }

  if (results.length < 1) {
    return (
      <FadeInWrap>
        <div className="text-center">
          <Card
            highlighted
            title="No people found"
            utils="max-w-4 ml-auto mr-auto"
          >
            No results were found for &ldquo;{props.person}&ldquo;.
          </Card>
        </div>
      </FadeInWrap>
    );
  }

  return (
    <div className={styles.root}>
      {results ? buildResults(results, props) : null}
    </div>
  );
}

Markup.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  person: PropTypes.string,
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      title: PropTypes.string,
      source_url: PropTypes.string,
      published_at: PropTypes.string
    })
  )
};

Markup.defaultProps = {
  loading: false,
  error: null,
  results: [],
  person: ""
};

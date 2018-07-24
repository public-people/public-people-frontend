import React from "react";
import PropTypes from "prop-types";
import styles from "./../styles.module.scss";
import Card from "./../../Card";
import BounceWrap from "./../../BounceWrap";
import Placeholder from "./../../Placeholder";
import Link from "gatsby-link";

const buildResults = (results, props) => {
  return (
    <div>
      <h1>{props.person}</h1>
      {results.map((item, index) => {
        return (
          <div
            key={item.id}
            className={styles.item}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <article title={item.name}>
              {item.published_at} – in <em>{item.collection.label}</em>:&nbsp;
              <a href={item.source_url}>{item.title}</a>
            </article>
          </div>
        );
      })}
    </div>
  );
};

export default function Markup(props) {
  const { loading, error, results, person } = props;
  console.log("persons props", props);

  if (error === "no-resuls") {
    return (
      <div>
        No results were found for this search. Please try another search term
      </div>
    );
  }

  if (loading) {
    return [0, 1, 2, 3].map(index => (
      <div key={index} className={styles.item}>
        <BounceWrap delay={index * 0.2}>
          <Placeholder utils="rounded-4" height={250} />
        </BounceWrap>
      </div>
    ));
  }

  if (error) {
    return (
      <BounceWrap>
        <div className="text-center">
          <Card highlighted title="Error" utils="max-w-4 ml-auto mr-auto">
            Something went wrong. Please try again at a later stage
          </Card>
        </div>
      </BounceWrap>
    );
  }

  if (results.length < 1) {
    return (
      <BounceWrap>
        <div className="text-center">
          <Card
            highlighted
            title="No people found"
            utils="max-w-4 ml-auto mr-auto"
          >
            No results were found for this &ldquo;{person}&rdquo;.
          </Card>
        </div>
      </BounceWrap>
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
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      title: PropTypes.string,
      source_url: PropTypes.string,
      published_at: PropTypes.string
    })
  ),
  person: PropTypes.string.isRequired,
  personToken: PropTypes.string.isRequired
};

Markup.defaultProps = {
  loading: false,
  error: null,
  results: []
};

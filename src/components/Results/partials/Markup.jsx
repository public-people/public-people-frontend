import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import styles from "./../styles.module.scss";
import Card from "./../../Card";
import FadeInWrap from "./../../FadeInWrap";
import Placeholder from "./../../Placeholder";
import extractFirstLastWords from "../../../utilities/js/extractFirstLastWords";
import { default as CardHeader } from "./../../Card/components/results/Header/index";
import { default as CardBody } from "./../../Card/components/results/Body/index";
import { default as CardFooter } from "./../../Card/components/results/Footer/index";

const buildResults = (results, props) =>
  results.map((item, index) => (
    <li className={"component dbl-space-2"} key={item.id}>
      <Link
        onClick={() => props.resetToken(item.name)}
        to={`/person?person=${encodeURI(extractFirstLastWords(item.name))}`}
      >
        <div
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
      </Link>
    </li>
  ));

export default function Markup(props) {
  const { loading, error, results, phrase, person, utils } = props;

  const rootCss = [styles.root, utils].join(" ");

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
            No result was found matching the query &ldquo;{phrase}&rdquo;,
            please try another phrase.
          </Card>
        </div>
      </FadeInWrap>
    );
  }

  return (
    <ul className={rootCss}>{results ? buildResults(results, props) : null}</ul>
  );
}

Markup.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    })
  ),
  phrase: PropTypes.string.isRequired
};

Markup.defaultProps = {
  loading: false,
  error: null,
  results: []
};

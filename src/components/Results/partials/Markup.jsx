import React, { Fragment } from "react";
import { default as CardHeader } from "../../Card/components/results/Header/index";
import Card from "./../../Card";
import FadeInWrap from "./../../FadeInWrap";
import Placeholder from "./../../Placeholder";
import styles from "./../styles.module.scss";
import PropTypes from "prop-types";

const buildResults = (results, props, offset, limit) => {
  console.log("FIIIIIRE");
  return results.map((item, index) => {
    console.log("item in item", item);
    return (
      <li className={"component flex"} key={item.id}>
        <Card
          header={
            <CardHeader
              clickFn={props.getPerson}
              item={item}
              headerLevel={2}
              offset={offset}
              limit={limit}
            />
          }
          footer="Unknown amount of events"
          title={item.name}
          link
          footer="Unknown amount of events"
          height={250}
        />
      </li>
    );
  });
};

export default function Markup(props) {
  const {
    loading,
    error,
    results,
    phrase,
    getPerson,
    utils,
    offset,
    limit
  } = props;
  const rootCss = [styles.root, utils].join(" ");
  console.log("FIIIIIRE1");
  if (error === false) {
    console.log("FIIIIIRE2");
    return (
      <div>
        No results were found for this search. Please try another search term
      </div>
    );
  }

  if (loading) {
    console.log("FIIIIIRE3");
    return [0, 1, 2, 3].map(index => (
      <div key={index} className={styles.item}>
        <FadeInWrap delay={index * 0.2}>
          <Placeholder utils="rounded-4" height={250} />
        </FadeInWrap>
      </div>
    ));
  }

  if (error.isError) {
    console.log("FIIIIIRE4");
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
    console.log("FIIIIIRE5");
    return (
      <FadeInWrap>
        <div className="text-center">
          <Card
            highlighted
            title="No people found"
            utils="max-w-4 ml-auto mr-auto"
          >
            No result was found matching the query &ldquo;
            {phrase}
            &rdquo;, please try another phrase.
          </Card>
        </div>
      </FadeInWrap>
    );
  }
  console.log("FIIIIIRE6");
  return (
    <Fragment>
      {results ? buildResults(results, props, offset, limit) : null}
    </Fragment>
  );
}

Markup.propTypes = {
  loading: PropTypes.bool,
  phrase: PropTypes.string.isRequired
};

Markup.defaultProps = {
  loading: false,
  error: null,
  results: []
};

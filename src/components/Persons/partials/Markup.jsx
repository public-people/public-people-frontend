import PropTypes from "prop-types";
import React, { Fragment } from "react";
import FadeInWrap from "./../../FadeInWrap";
import styles from "./../styles.module.scss";

const buildResults = (results, props, mediaList) => {
  console.log("mediaList", mediaList);
  const List = props.list;

  return (
    <Fragment>
      {mediaList.map((item, index) => (
        <List utils={"component"} key={item.id} item={item} />
      ))}
    </Fragment>
  );
};

export default function Markup(props) {
  console.log("props props", props);
  const { loading, error, results, list, utils, mediaList } = props;
  console.log("props props", props);
  const rootCss = [styles.root, utils].join(" ");

  if (error === false) {
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
          <div className="text-center">Loading</div>
        </FadeInWrap>
      </div>
    ));
  }

  if (error) {
    return (
      <FadeInWrap>
        <div className="text-center">Error</div>
      </FadeInWrap>
    );
  }

  if (results.length < 1) {
    return (
      <FadeInWrap>
        <div className="text-center">No results</div>
      </FadeInWrap>
    );
  }

  return (
    <Fragment>
      <h1 className={`${rootCss} component`}>{props.person}</h1>
      <Fragment>
        {results ? buildResults(results, props, mediaList) : null}
      </Fragment>
    </Fragment>
  );
}

Markup.propTypes = {
  list: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object,
    PropTypes.func
  ]),
  loading: PropTypes.bool,
  error: PropTypes.bool,
  person: PropTypes.string,
  mediaList: PropTypes.arrayOf(
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
  person: "",
  mediaList: []
};

import React, { Fragment } from "react";
// cuid www.npmjs.com/package/cuid
import cuid from "cuid";
import FadeInWrap from "./../../FadeInWrap";
import styles from "./../styles.module.scss";

const buildResults = (results, props, mediaList) => {
  const List = props.list;

  return (
    <Fragment>
      {results.media.map((item, index) => (
        <List utils="component" key={item.id} item={item} />
      ))}
    </Fragment>
  );
};

export default function Markup(props) {
  const { loading, error, results, list, utils } = props;
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
      <div key={cuid()} className={styles.item}>
        <FadeInWrap delay={index * 0.2}>
          <div className="text-center">Loading</div>
        </FadeInWrap>
      </div>
    ));
  }

  if (error.isError) {
    return (
      <FadeInWrap>
        <div className="text-center">Error</div>
      </FadeInWrap>
    );
  }

  if (results.media.length < 1) {
    return (
      <FadeInWrap>
        <div className="text-center">No results</div>
      </FadeInWrap>
    );
  }

  return (
    <Fragment>
      <h1 className={`${rootCss} component`}>{props.person}</h1>
      <Fragment>{results ? buildResults(results, props) : null}</Fragment>
    </Fragment>
  );
}

// Markup.propTypes = {
//   list: PropTypes.oneOfType([
//     PropTypes.element,
//     PropTypes.object,
//     PropTypes.func
//   ]),
//   loading: PropTypes.bool,
//   error: PropTypes.bool,
//   person: PropTypes.string,
//   mediaList: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       title: PropTypes.string,
//       source_url: PropTypes.string,
//       published_at: PropTypes.string
//     })
//   )
// };

// Markup.defaultProps = {
//   loading: false,
//   error: null,
//   results: [],
//   person: "",
//   mediaList: []
// };

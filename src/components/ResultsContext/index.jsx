import { connect } from "react-redux";
import { getPeople } from "./../../redux/modules/search/people";
import Container from "./partials/Container";

/* eslint-disable react/prop-types */

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  results: state.people.results,
  message: state.people.text,
  loading: state.people.loading,
  phrase: state.people.phrase,
  error: state.people.error,
  limit: state.page.limit,
  offset: state.page.offset
});

const mapDispatchToProps = dispatch => ({
  getPeople: (phrase, limit, offset) =>
    dispatch(getPeople(phrase, limit, offset))
});

const ResultsContext = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
export default ResultsContext;

/* eslint-enable react/prop-types */

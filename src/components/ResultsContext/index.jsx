import { connect } from "react-redux";
import { getPeople } from "./../../redux/modules/search/people";
import Container from "./partials/Container";

/* eslint-disable react/prop-types */

// Understanding React - Redux and mapStateToProps: https://stackoverflow.com/questions/38202572/understanding-react-redux-and-mapstatetoprops

// React - Redux: https://redux.js.org/faq/reactredux

// What is mapDispatchToProps?: https://stackoverflow.com/questions/39419237/what-is-mapdispatchtoprops

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  results: state.people.results,
  message: state.people.text,
  loading: state.people.loading,
  loadingPerson: state.person.loading,
  phrase: state.people.phrase,
  error: state.people.error,
  limit: state.page.limit,
  offset: state.page.offset,
  person: state.person.results
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

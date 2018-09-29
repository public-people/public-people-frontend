import { connect } from "react-redux";
import { getPeople } from "./../../redux/modules/search/people";
import { getPerson } from "./../../redux/modules/search/person";
import Container from "./partials/Container";
import extractQueryString from "./../../utilities/js/extractQueryString";

/* eslint-disable react/prop-types */

// Understanding React - Redux and mapStateToProps: https://stackoverflow.com/questions/38202572/understanding-react-redux-and-mapstatetoprops

// React - Redux: https://redux.js.org/faq/reactredux

// What is mapDispatchToProps?: https://stackoverflow.com/questions/39419237/what-is-mapdispatchtoprops

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

const getDataOnRouteChangeOrEntry = () => {
  const phrase = extractQueryString("phrase", window.location.search) || "";
  const personID = Number(
    extractQueryString("personID", window.location.search)
  );
  const limit = extractQueryString("limit", window.location.search);
  const offset = extractQueryString("offset", window.location.search);

  if (window.location.pathname === "/person") {
    return getPerson(personID, limit, offset);
  }
  if (window.location.pathname === "/results") {
    return getPeople(phrase, limit, offset);
  }
};

const mapDispatchToProps = dispatch => ({
  getPeople: (phrase, limit, offset) =>
    dispatch(getPeople(phrase, limit, offset)),
  getPerson: (personID, limit, offset) =>
    dispatch(getPerson(personID, limit, offset)),
  getDataOnRouteChangeOrEntry: () => dispatch(getDataOnRouteChangeOrEntry())
});

const Results = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
export default Results;

/* eslint-enable react/prop-types */

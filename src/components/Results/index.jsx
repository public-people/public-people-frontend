import { connect } from "react-redux";
import { clearPeopleState } from "./../../redux/modules/search/people";
import {
  getPerson,
  clearPersonState
} from "./../../redux/modules/search/person";

import Container from "./partials/Container";

/* eslint-disable react/prop-types */

// Understanding React - Redux and mapStateToProps: https://stackoverflow.com/questions/38202572/understanding-react-redux-and-mapstatetoprops

// React - Redux: https://redux.js.org/faq/reactredux

// What is mapDispatchToProps?: https://stackoverflow.com/questions/39419237/what-is-mapdispatchtoprops

const mapStateToProps = (state, ownProps) => {
  if (ownProps.page === "frontpage") {
    return {
      ...ownProps,
      results: state.frontpage.results,
      message: state.frontpage.text,
      loading: state.frontpage.loading,
      error: state.frontpage.error,
      limit: state.page.limit,
      offset: state.page.offset
    };
  } else {
    return {
      ...ownProps,
      results: state.people.results,
      message: state.people.text,
      loading: state.people.loading,
      phrase: state.people.phrase,
      error: state.people.error,
      limit: state.page.limit,
      offset: state.page.offset
    };
  }
};

const mapDispatchToProps = dispatch => ({
  getPerson: (personID, limit, offset) =>
    dispatch(getPerson(personID, limit, offset)),
  clearPeopleState: () => clearPeopleState(),
  clearPersonState: () => clearPersonState()
});

const Results = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
export default Results;

/* eslint-enable react/prop-types */

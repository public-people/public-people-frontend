/* eslint react/prop-types: 0 */

import { connect } from "react-redux";
import Container from "./partials/Container";
import {
  setPhrase,
  getPeople,
  getPeopleCancel
} from "./../../redux/modules/search/people";
import {
  getPerson,
  getPersonCancel
} from "./../../redux/modules/search/person";

// Understanding React - Redux and mapStateToProps: https://stackoverflow.com/questions/38202572/understanding-react-redux-and-mapstatetoprops

// React - Redux: https://redux.js.org/faq/reactredux

// What is mapDispatchToProps?: https://stackoverflow.com/questions/39419237/what-is-mapdispatchtoprops

const mapStateToProps = (state, ownProps) => ({
  count: state.page.count,
  limit: state.page.limit,
  offset: state.page.offset,
  offsetStep: state.page.offsetStep,
  phrase: state.people.phrase,
  personID: state.person.personID
});

const mapDispatchToProps = dispatch => ({
  getPeople: (phrase, limit, offset) => {
    dispatch(getPeopleCancel());
    dispatch(getPeople(phrase, limit, offset));
  },
  getPerson: (personID, limit, offset) => {
    dispatch(getPersonCancel());
    dispatch(getPerson(personID, limit, offset));
  }
});

const Results = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
export default Results;

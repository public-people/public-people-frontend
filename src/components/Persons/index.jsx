import { connect } from "react-redux";
import { getPerson } from "./../../redux/modules/search/person";
import Container from "./partials/Container";

/* eslint react/prop-types: 0 */

// Understanding React - Redux and mapStateToProps: https://stackoverflow.com/questions/38202572/understanding-react-redux-and-mapstatetoprops

// React - Redux: https://redux.js.org/faq/reactredux

// What is mapDispatchToProps?: https://stackoverflow.com/questions/39419237/what-is-mapdispatchtoprops

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  mediaList: state.person.mediaList,
  results: state.person.results,
  message: state.person.text,
  loading: state.person.loading,
  personID: state.person.personID,
  error: state.people.error,
  limit: state.page.limit,
  offset: state.page.offset
});

const mapDispatchToProps = dispatch => ({
  getPerson: (person, limit, offset) => {
    dispatch(getPerson(person, limit, offset));
  }
});

const Persons = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

export default Persons;

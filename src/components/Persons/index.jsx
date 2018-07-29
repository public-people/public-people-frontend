import { connect } from "react-redux";
import { initSearch as initSearchPeople } from "./../../redux/modules/search/people/people";
import { initSearch as initSearchPerson } from "./../../redux/modules/search/person/person";
import Container from "./partials/Container";

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  results: state.person.results,
  message: state.person.text,
  loading: state.person.loading,
  person: state.person.person,
  personToken: state.person.personToken,
  error: state.people.error
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  ...ownProps,
  initSearchPeople: phrase => dispatch(initSearchPeople(phrase)),
  initSearchPerson: personToken => dispatch(initSearchPerson(personToken))
});

const Results = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

export default Results;

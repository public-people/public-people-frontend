import { connect } from "react-redux";
import { initSearch as initSearchPeople } from "./../../redux/modules/search/people/people";
import { setPerson } from "./../../redux/modules/search/person/person";
import Container from "./partials/Container";

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  results: state.people.results,
  message: state.people.text,
  loading: state.people.loading,
  phrase: state.people.phrase,
  error: state.people.error
});

const mapDispatchToProps = dispatch => ({
  initSearchPeople: phrase => dispatch(initSearchPeople(phrase)),
  resetToken: person => dispatch(setPerson(person))
});

const Results = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
export default Results;

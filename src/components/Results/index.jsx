import { connect } from "react-redux";
import { initSearch as initSearchPeople } from "./../../redux/modules/search/people/people";
import { setPersonID } from "./../../redux/modules/search/person/person";
import Container from "./partials/Container";

const mapStateToProps = (state, ownProps) => {
  console.log("state1", state);
  return {
    ...ownProps,
    results: state.people.results,
    message: state.people.text,
    loading: state.people.loading,
    phrase: state.people.phrase,
    error: state.people.error
  };
};

const mapDispatchToProps = dispatch => ({
  initSearchPeople: phrase => dispatch(initSearchPeople(phrase)),
  resetToken: personID => dispatch(setPersonID(personID))
});

const Results = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
export default Results;

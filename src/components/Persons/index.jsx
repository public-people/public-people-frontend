import { connect } from "react-redux";
import { initSearch as initSearchPerson } from "./../../redux/modules/search/person/person";
import Container from "./partials/Container";

const mapStateToProps = (state, ownProps) => {
  console.log("persons state", state);
  return {
    ...ownProps,
    results: state.person.results,
    message: state.person.text,
    loading: state.person.loading,
    person: state.person.person,
    error: state.people.error
  };
};

const mapDispatchToProps = dispatch => ({
  initSearchPerson: person => dispatch(initSearchPerson(person))
});

const Persons = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

export default Persons;

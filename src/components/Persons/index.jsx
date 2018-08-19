import { connect } from "react-redux";
import { initSearch as initSearchPerson } from "./../../redux/modules/search/person/person";
import Container from "./partials/Container";

const mapStateToProps = (state, ownProps) => {
  console.log("persons state", state);
  return {
    ...ownProps,
    mediaList: state.person.mediaList,
    results: state.person.results,
    message: state.person.text,
    loading: state.person.loading,
    personID: state.person.personID,
    error: state.people.error,
    limit: state.page.limit,
    offset: state.page.offset
  };
};

const mapDispatchToProps = dispatch => ({
  initSearchPerson: (person, limit, offset) =>
    dispatch(initSearchPerson(person, limit, offset))
});

const Persons = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

export default Persons;

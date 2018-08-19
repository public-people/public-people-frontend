import { connect } from "react-redux";
import {
  initSearch as initSearchPeople,
  cancelPromises as cancelPromisesPeople,
  setPhrase
} from "./../../redux/modules/search/people/people";
import Container from "./partials/Container";
import {
  initSearch as initSearchPerson,
  cancelPromises as cancelPromisesPerson,
  setPersonID
} from "./../../redux/modules/search/person/person";

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    count: state.page.count,
    current_url: state.page.current_url,
    limit: state.page.limit,
    offset: state.page.offset,
    offsetStep: state.page.offsetStep,
    phrase: state.people.phrase,
    personID: state.person.personID
  };
};

const mapDispatchToProps = dispatch => ({
  searchPeople: (phrase, limit, offset) => {
    dispatch(cancelPromisesPeople("changed page"));
    dispatch(setPhrase(phrase));
    dispatch(initSearchPeople(phrase, limit, offset));
  },
  searchPerson: (personID, limit, offset) => {
    dispatch(cancelPromisesPerson("changed page"));
    dispatch(setPersonID(personID));
    dispatch(initSearchPerson(personID, limit, offset));
  }
});

const Results = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
export default Results;

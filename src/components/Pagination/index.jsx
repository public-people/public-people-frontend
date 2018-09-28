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

const mapStateToProps = (state, ownProps) => {
  return {
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

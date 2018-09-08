import { connect } from "react-redux";
import { getPeople } from "./../../redux/modules/search/people";
import { getPerson } from "./../../redux/modules/search/person";
import Container from "./partials/Container";

const mapStateToProps = (state, ownProps) => {
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
};

const mapDispatchToProps = dispatch => ({
  getPeople: (phrase, limit, offset) =>
    dispatch(getPeople(phrase, limit, offset)),
  getPerson: (personID, limit, offset) =>
    dispatch(getPerson(personID, limit, offset))
});

const Results = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
export default Results;

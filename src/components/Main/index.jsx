import { connect } from "react-redux";
import Markup from "./Markup";

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  results: state.people.results,
  message: state.people.text,
  loading: state.people.loading,
  loadingPerson: state.person.loading,
  phrase: state.people.phrase,
  error: state.people.error,
  limit: state.page.limit,
  offset: state.page.offset,
  person: state.person.results
});

const mapDispatchToProps = dispatch => ({
  getPeople: (phrase, limit, offset) =>
    dispatch(getPeople(phrase, limit, offset))
});

const Main = connect(
  mapStateToProps,
  mapDispatchToProps
)(Markup);
export default Main;

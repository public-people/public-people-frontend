import { connect } from 'react-redux';
import { initSearch } from './../../redux/modules/people';
import Container from './partials/Container';


const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  results: state.people.results,
  message: state.people.text,
  loading: state.people.loading,
  phrase: state.people.phrase,
  error: state.people.error,
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  ...ownProps,
  initSearch: phrase => dispatch(initSearch(phrase)),
});


const Results = connect(mapStateToProps, mapDispatchToProps)(Container);
export default Results;

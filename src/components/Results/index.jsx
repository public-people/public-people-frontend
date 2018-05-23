import { connect } from 'react-redux';
import { initUpdate as reduxInitUpdate } from './../../redux/modules/people';
import Container from './partials/Container';


const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  results: state.people.results,
  message: state.people.text,
  loading: state.people.loading,
  phrase: state.people.phrase,
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  ...ownProps,
  initUpdate: phrase => dispatch(reduxInitUpdate(phrase)),
});


const Results = connect(mapStateToProps, mapDispatchToProps)(Container);
export default Results;

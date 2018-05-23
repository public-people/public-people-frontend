import { connect } from 'react-redux';
import { setPhrase as reduxSetPhrase } from './../../redux/modules/people';
import Markup from './partials/Markup';


const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  phrase: state.people.phrase,
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  ...ownProps,
  updatePhrase: phrase => dispatch(reduxSetPhrase(phrase)),
});


const Header = connect(mapStateToProps, mapDispatchToProps)(Markup);
export default Header;

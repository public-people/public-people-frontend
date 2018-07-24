import { connect } from "react-redux";
import {
  setPhrase,
  initSearch
} from "./../../redux/modules/search/people/people";
import Markup from "./partials/Markup";

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  phrase: state.people.phrase
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  ...ownProps,
  updatePhrase: phrase => dispatch(setPhrase(phrase)),
  initSearch: phrase => dispatch(initSearch(phrase))
});

const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(Markup);
export default Header;

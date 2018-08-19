import { connect } from "react-redux";
import {
  initSearch,
  setPhrase,
  cancelPromises as cancelPromisesPeople
} from "./../../redux/modules/search/people/people";
import { cancelPromises as cancelPromisesPerson } from "./../../redux/modules/search/person/person";
import Markup from "./partials/Markup";

const mapStateToProps = (state, ownProps) => {
  console.log("state", state);
  return {
    ...ownProps,
    phrase: state.people.phrase
  };
};

const mapDispatchToProps = dispatch => ({
  cancelPromisesPeople: reason => dispatch(cancelPromisesPeople(reason)),
  cancelPromisesPerson: reason => dispatch(cancelPromisesPerson(reason)),
  updatePhrase: phrase => dispatch(setPhrase(phrase)),
  initSearch: phrase => dispatch(initSearch(phrase))
});

const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(Markup);
export default Header;

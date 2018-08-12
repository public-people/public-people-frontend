import { connect } from "react-redux";
import {
  initSearch,
  setPhrase,
  cancelPromises as cancelPromisesPeople
} from "./../../redux/modules/search/people/people";
import { cancelPromises as cancelPromisesPerson } from "./../../redux/modules/search/person/person";
import Markup from "./partials/Markup";

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  phrase: state.people.phrase
});

const mapDispatchToProps = dispatch => ({
  cancelPromisesPeople: reason => dispatch(cancelPromisesPeople(reason)),
  cancelPromisesPerson: reason => dispatch(cancelPromisesPerson(reason))
});

const Nav = connect(
  mapStateToProps,
  mapDispatchToProps
)(Markup);
export default Nav;

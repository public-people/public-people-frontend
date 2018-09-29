import { connect } from "react-redux";
import { getPeopleCancel } from "./../../redux/modules/search/people";
import { getPersonCancel } from "./../../redux/modules/search/person";
import Markup from "./partials/Markup";

// Understanding React - Redux and mapStateToProps: https://stackoverflow.com/questions/38202572/understanding-react-redux-and-mapstatetoprops

// React - Redux: https://redux.js.org/faq/reactredux

// What is mapDispatchToProps?: https://stackoverflow.com/questions/39419237/what-is-mapdispatchtoprops

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  phrase: state.people.phrase
});

const mapDispatchToProps = dispatch => ({
  getPeopleCancel: () => dispatch(getPeopleCancel()),
  getPersonCancel: () => dispatch(getPersonCancel())
});

const Nav = connect(
  mapStateToProps,
  mapDispatchToProps
)(Markup);
export default Nav;

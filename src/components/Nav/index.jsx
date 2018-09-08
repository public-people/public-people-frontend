import { connect } from "react-redux";
import { getPeopleCancel } from "./../../redux/modules/search/people";
import { getPersonCancel } from "./../../redux/modules/search/person";
import Markup from "./partials/Markup";

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

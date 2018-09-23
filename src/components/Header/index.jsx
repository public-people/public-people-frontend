import { connect } from "react-redux";
import {
  getPeople,
  setPhrase,
  getPeopleCancel,
  updatePhrase
} from "./../../redux/modules/search/people";
import { getPersonCancel } from "./../../redux/modules/search/person";
import Markup from "./partials/Markup";

const mapStateToProps = (state, ownProps) => {
  console.log("state1", state);
  return {
    phrase: state.people.phrase,
    limit: state.page.limit,
    offset: state.page.offset
  };
};

const mapDispatchToProps = dispatch => ({
  getPeople: (phrase, limit, offset) =>
    dispatch(getPeople(phrase, limit, offset)),
  getPeopleCancel: reason => dispatch(getPeopleCancel(reason)),
  getPersonCancel: reason => dispatch(getPersonCancel(reason)),
  updatePhrase: phrase => dispatch(setPhrase(phrase))
});

const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(Markup);
export default Header;

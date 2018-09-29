import { connect } from "react-redux";
import {
  getPeople,
  setPhrase,
  getPeopleCancel
} from "./../../redux/modules/search/people";
import { getPersonCancel } from "./../../redux/modules/search/person";
import Markup from "./partials/Markup";

// Understanding React - Redux and mapStateToProps: https://stackoverflow.com/questions/38202572/understanding-react-redux-and-mapstatetoprops

// React - Redux: https://redux.js.org/faq/reactredux

// What is mapDispatchToProps?: https://stackoverflow.com/questions/39419237/what-is-mapdispatchtoprops

const mapStateToProps = state => ({
  phrase: state.people.phrase,
  limit: state.page.limit,
  offset: state.page.offset
});

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

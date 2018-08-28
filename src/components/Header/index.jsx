import { connect } from "react-redux";
import {
  initSearch,
  setPhrase,
  cancelPromises as cancelPromisesPeople
} from "./../../redux/modules/search/people/people";
import { cancelPromises as cancelPromisesPerson } from "./../../redux/modules/search/person/person";
import Markup from "./partials/Markup";
import { fetchUser } from "./../../redux/epics/users";
import { fetchPeople } from "./../../redux/epics/getPeople";

const mapStateToProps = (state, ownProps) => {
  console.log("state", state);
  return {
    ...ownProps,
    phrase: state.people.phrase,
    limit: state.page.limit,
    offset: state.page.offset
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: name => dispatch(fetchUser(name)),
  fetchPeople: (phrase, offset, limit) =>
    dispatch(fetchPeople(phrase, offset, limit)),
  cancelPromisesPeople: reason => dispatch(cancelPromisesPeople(reason)),
  cancelPromisesPerson: reason => dispatch(cancelPromisesPerson(reason)),
  updatePhrase: phrase => dispatch(setPhrase(phrase)),
  initSearch: (phrase, limit, offset) =>
    dispatch(initSearch(phrase, limit, offset))
});

const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(Markup);
export default Header;

import isNode from "is-node";
import extractQueryString from "./utilities/js/extractQueryString";
import { getPeople, clearPeopleState } from "./redux/modules/search/people";
import { getPerson, clearPersonState } from "./redux/modules/search/person";
import { setAllPageMeta } from "./redux/modules/metadata/page";
import { getFrontpage } from "./redux/modules/search/frontpage";

export default function getDataOnRouteChangeOrEntry(props, store) {
  const { location } = props;
  const { lastPathname } = store.getState().page;
  const phrase = extractQueryString("phrase", location.search) || "";
  const personID = Number(extractQueryString("personID", location.search));
  const limit = Number(extractQueryString("limit", location.search));
  const offset = Number(extractQueryString("offset", location.search));

  if (lastPathname !== location.pathname) {
    store.dispatch(clearPeopleState());
    store.dispatch(clearPersonState());
    store.dispatch(
      setAllPageMeta({
        offset: 0,
        count: 0,
        lastPathname: String(location.pathname)
      })
    );
  }
  if (location.pathname === "/") {
    if (!isNode) {
      store.dispatch(getFrontpage());
    }
  }
  if (location.pathname === "/person") {
    store.dispatch(getPerson(personID, limit, offset));
  }
  if (location.pathname === "/results") {
    store.dispatch(getPeople(phrase, limit, offset));
  }
}

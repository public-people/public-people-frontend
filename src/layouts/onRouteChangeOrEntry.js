import extractQueryString from "../utilities/js/extractQueryString";
import { getPeople, clearPeopleState } from "../redux/modules/search/people";
import { getPerson, clearPersonState } from "../redux/modules/search/person";
import {
  setAllPageMeta,
  setPageMetaOffsetPath
} from "../redux/modules/metadata/page";
import { getFrontpage } from "../redux/modules/search/frontpage";

export default function getDataOnRouteChangeOrEntry(props, store) {
  const { location } = props;
  const lastPathname = store.getState().page.lastPathname;
  console.log("lastPathname", lastPathname);
  const pageChange = lastPathname !== location.pathname ? true : false;
  const phrase = extractQueryString("phrase", location.search) || "";
  const personID = Number(extractQueryString("personID", location.search));
  const limit = Number(extractQueryString("limit", location.search));
  const offset = Number(extractQueryString("offset", location.search));

  if (pageChange) {
    console.log("pagechange");
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
    store.dispatch(getFrontpage());
  }
  if (location.pathname === "/person") {
    store.dispatch(getPerson(personID, limit, offset));
  }
  if (location.pathname === "/results") {
    store.dispatch(getPeople(phrase, limit, offset));
  }
}

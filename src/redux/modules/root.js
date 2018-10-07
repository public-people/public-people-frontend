import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import { getPersonEpic } from "../epics/getPerson";
import { getPeopleEpic } from "../epics/getPeople";
import { getFrontPageEpic } from "../epics/getFrontPage";
import person from "./search/person";
import people from "./search/people";
import frontpage from "./search/frontpage";
import page from "./metadata/page";

export const rootEpic = combineEpics(
  getPeopleEpic,
  getPersonEpic,
  getFrontPageEpic
);

export const rootReducer = combineReducers({
  page,
  people,
  person,
  frontpage
});

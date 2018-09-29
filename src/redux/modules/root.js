import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import { getPersonEpic } from "../epics/getPerson";
import { getPeopleEpic } from "../epics/getPeople";
import person from "./search/person";
import people from "./search/people";
import page from "./metadata/page";

export const rootEpic = combineEpics(getPeopleEpic, getPersonEpic);

export const rootReducer = combineReducers({
  page,
  people,
  person
});

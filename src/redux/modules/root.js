import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import ping, { pingEpic } from "../epics/ping";
import users, { fetchUserEpic } from "../epics/users";
import person from "./search/person/person";
import people from "./search/people/people";
import page from "./metadata/page/page";

export const rootEpic = combineEpics(pingEpic, fetchUserEpic);

export const rootReducer = combineReducers({
  page,
  people,
  person,
  ping,
  users
});

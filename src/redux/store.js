import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { batchedSubscribe } from "redux-batched-subscribe";
import thunk from "redux-thunk";
import initialState from "./initialState";
import people from "./modules/search/people/people";
import person from "./modules/search/person/person";
import page from "./modules/metadata/page/page";

const reducers = combineReducers({ people, person, page });
const middleware = applyMiddleware(thunk);
const otherEnhancers = batchedSubscribe(notify => notify());
const enhancers = composeWithDevTools(middleware, otherEnhancers);

export default createStore(reducers, initialState, enhancers);

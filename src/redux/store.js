import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { batchedSubscribe } from "redux-batched-subscribe";
import thunk from "redux-thunk";
import initialState from "./initialState";

import { createEpicMiddleware } from "redux-observable";
import { rootEpic, rootReducer } from "./modules/root";

const epicMiddleware = createEpicMiddleware();
const middleware = applyMiddleware(thunk, epicMiddleware);
const otherEnhancers = batchedSubscribe(notify => notify());
const enhancers = composeWithDevTools(middleware, otherEnhancers);

export default function configureStore() {
  const store = createStore(rootReducer, initialState, enhancers);

  epicMiddleware.run(rootEpic);

  return store;
}

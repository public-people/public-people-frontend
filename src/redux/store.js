import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { batchedSubscribe } from "redux-batched-subscribe";
import { createEpicMiddleware } from "redux-observable";
// Redux - Observable: https://redux-observable.js.org/
import initialState from "./initialState";
import { rootEpic, rootReducer } from "./modules/root";

const epicMiddleware = createEpicMiddleware();
const middleware = applyMiddleware(epicMiddleware);
const otherEnhancers = batchedSubscribe(notify => notify());
const enhancers = composeWithDevTools(middleware, otherEnhancers);

export default function configureStore() {
  const store = createStore(rootReducer, initialState, enhancers);

  epicMiddleware.run(rootEpic);

  return store;
}

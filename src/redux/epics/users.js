import { ajax } from "rxjs/ajax";
import { ofType } from "redux-observable";
import { mergeMap, map } from "rxjs/operators";

const FETCH_USER = "users/FETCH_USER";
const FETCH_USER_FULFILLED = "users/FETCH_USER_FULFILLED";

export default function reducer(state = {}, action) {
  console.log("state", state, "action", action);
  switch (action.type) {
    case FETCH_USER_FULFILLED:
      return {
        ...state,
        // `login` is the username
        [action.payload.login]: action.payload
      };

    default:
      return state;
  }
}

// action creators
export const fetchUser = username => ({ type: FETCH_USER, payload: username });
export const fetchUserFulfilled = payload => ({
  type: FETCH_USER_FULFILLED,
  payload
});

// epic
export const fetchUserEpic = action$ =>
  action$.pipe(
    ofType(FETCH_USER),
    mergeMap(action =>
      ajax
        .getJSON(`https://api.github.com/users/${action.payload}`)
        .pipe(map(response => fetchUserFulfilled(response)))
    )
  );

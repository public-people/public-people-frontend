import { ajax } from "rxjs/ajax";
import { ofType } from "redux-observable";
import { switchMap, map, tap, takeUntil, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { config } from "./../../runtime.config";
import extractFirstLastWords from "../../utilities/js/extractFirstLastWords";

const FETCH_USER = "users/FETCH_USER";
const FETCH_USER_FULFILLED = "users/FETCH_USER_FULFILLED";
const FETCH_USER_REJECTED = "users/FETCH_USER_REJECTED";
const CANCEL_PROMISES = "search/people/CANCEL_PROMISES";

export default function reducer(state = {}, action) {
  console.log("state, action", state, action);
  switch (action.type) {
    case FETCH_USER_FULFILLED:
      return {
        ...state,
        person: { ...action.payload }
      };
    case FETCH_USER_REJECTED:
      return {
        ...state,
        error: { ...action.payload }
      };

    default:
      return state;
  }
}

// action creators
export const fetchUser = payload => ({
  type: FETCH_USER,
  payload: {
    personID: payload.personID,
    offset: payload.offset,
    limit: payload.limit
  }
});
export const fetchUserFulfilled = payload => ({
  type: FETCH_USER_FULFILLED,
  payload: {
    media: payload.media,
    personal: payload.personal
  }
});

export const fetchUserRejected = payload => ({
  type: FETCH_USER_REJECTED,
  payload,
  error: true
});

export const fetchUserEpic = action$ =>
  action$.pipe(
    ofType(FETCH_USER),
    switchMap(action =>
      ajax
        .getJSON(
          `${config.api.publicpeople}/persons/${action.payload.personID}`
        )
        .pipe(
          switchMap(
            response =>
              ajax.getJSON(
                `${config.api.alephapi}/search?q="${encodeURI(
                  extractFirstLastWords(response.name)
                )}?limit=${action.payload.limit}&offset=${
                  action.payload.offset
                }/`
              ),
            (response, media) => ({ response, media })
          ),
          tap(response => console.log("response", response)),
          map(response =>
            fetchUserFulfilled({
              media: response.media,
              personal: response.response
            })
          ),
          tap(response => console.log("response2", response)),
          catchError(error =>
            of({
              type: FETCH_USER_REJECTED,
              payload: {
                error: true,
                status: error.xhr.response.status,
                message: error.xhr.response.message
              }
            })
          ),
          takeUntil(action$.pipe(ofType(CANCEL_PROMISES)))
        )
    )
  );

const query = `query {
  person(id: 13838) {
    id
    name
    memberships {
      organization {
        name
      }
      role

    }
  }
}`;

// export const fetchUserEpic2 = action$ =>
//   action$.pipe(
//     tap(x => {
//       console.log("lala", x.type);
//       return x;
//     }),
//     ofType(FETCH_USER),
//     switchMap(action =>
//       ajax.get(encodeURI(`${config.api.publicpeopleql}${query}`)).pipe(
//         map(response => fetchUserFulfilled(response)),
//         takeUntil(
//           action$.pipe(
//             tap(x => console.log("bar", x.type)),
//             ofType(CANCEL_PROMISES)
//           )
//         )
//       )
//     )
//   );

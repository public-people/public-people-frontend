import { ajax } from "rxjs/ajax";
import { ofType } from "redux-observable";
import {
  switchMap,
  map,
  tap,
  takeUntil,
  catchError,
  flatMap
} from "rxjs/operators";
import { of, concat } from "rxjs";
import { config } from "./../../runtime.config";
import extractFirstLastWords from "../../utilities/js/extractFirstLastWords";

const FETCH_USER = "users/FETCH_USER";
const FETCH_USER_FULFILLED = "users/FETCH_USER_FULFILLED";
const FETCH_USER_REJECTED = "users/FETCH_USER_REJECTED";
const CANCEL_PROMISES = "search/people/CANCEL_PROMISES";

const SET_PAGE_META = "metadata/page/SET_PAGE_META";
const GET_PERSON = "search/person/GET_PERSON";
const GET_PERSON_FAILURE = "search/people/GET_PERSON_FAILURE";
const GET_PERSON_SUCCESS = "search/people/GET_PERSON_SUCCESS";
const GET_PERSON_CANCEL = "search/people/GET_PERSON_CANCEL";

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
export const getPerson = payload => ({
  type: GET_PERSON,
  payload: {
    personID: payload.personID,
    offset: payload.offset,
    limit: payload.limit
  }
});
export const getPersonSuccess = payload => ({
  type: GET_PERSON_SUCCESS,
  payload: {
    media: payload.media,
    personal: payload.personal
  }
});

export const getPersonFailure = payload => ({
  type: GET_PERSON_FAILURE,
  payload,
  error: true
});

export const getQueryURIencoded = id => {
  return encodeURI(`query {
  person(id: ${id}) {
    id
    name
    memberships {
      organization {
        name
      }
      role

    }
  }
}`);
};

export const getPersonEpic = action$ =>
  action$.pipe(
    ofType(GET_PERSON),
    switchMap(action =>
      ajax
        .getJSON(
          `${config.api.publicpeople}/persons/${action.payload.personID}`
        )
        .pipe(
          flatMap(
            response =>
              ajax.getJSON(
                `${config.api.alephapi}/search?q="${encodeURI(
                  extractFirstLastWords(response.name)
                )}"&limit=${action.payload.limit}&offset=${
                  action.payload.offset
                }`
              ),
            (response, media) => ({ response, media })
          ),
          tap(response => console.log("response", response)),
          switchMap(response =>
            concat(
              of({
                type: SET_PAGE_META,
                payload: {
                  count: response.media.total,
                  offset: action.payload.offset
                }
              }),
              of({
                type: GET_PERSON_SUCCESS,
                payload: {
                  media: response.media,
                  personal: response.response
                }
              })
            )
          ),
          tap(response => console.log("response2", response)),
          catchError(error =>
            of({
              type: GET_PERSON_FAILURE,
              payload: {
                message: error.message,
                status: error.xhr.status,
                statusText: error.xhr.statusText
              }
            })
          ),
          takeUntil(action$.pipe(ofType(GET_PERSON_CANCEL)))
        )
    )
  );

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

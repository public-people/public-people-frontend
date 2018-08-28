import { ajax } from "rxjs/ajax";
import { ofType } from "redux-observable";
import {
  switchMap,
  map,
  tap,
  takeUntil,
  catchError,
  concatAll,
  flatMap
} from "rxjs/operators";
import { of } from "rxjs";
import { config } from "./../../runtime.config";
import extractFirstLastWords from "../../utilities/js/extractFirstLastWords";
import { encode } from "punycode";

const FETCH_PEOPLE = "poople/FETCH_PEOPLE";
const FETCH_PEOPLE_FULFILLED = "poople/FETCH_PEOPLE_FULFILLED";
const FETCH_PEOPLE_REJECTED = "poople/FETCH_PEOPLE_REJECTED";
const FETCH_PEOPLE_REJECTED2 = "poople/FETCH_PEOPLE_REJECTED2";
const CANCEL_PROMISES = "search/people/CANCEL_PROMISES";

export default function reducer(state = {}, action) {
  console.log("state, action", state, action);
  switch (action.type) {
    case FETCH_PEOPLE_FULFILLED:
      return {
        ...state,
        person: { ...action.payload }
      };
    case FETCH_PEOPLE_REJECTED:
      return {
        ...state,
        error: { ...action.payload }
      };

    default:
      return state;
  }
}

// action creators
export const fetchPeople = (phrase, offset, limit) => ({
  type: FETCH_PEOPLE,
  payload: {
    phrase: phrase,
    offset: offset,
    limit: limit
  }
});

export const fetchPeopleFulfilled = payload => ({
  type: FETCH_PEOPLE_FULFILLED,
  payload
});

export const fetchPeopleRejected = payload => ({
  type: FETCH_PEOPLE_REJECTED,
  error: payload.error,
  message: payload.payload.message,
  status: payload.payload.status
});

const getQueryURIencoded = arr => {
  return encodeURI(`fragment userFields on PersonType {
    id
    name
    memberships {
      organization {
        name
      }
      role

    }
  }

  query {
    ${arr.map(id => `person_${id}: person(id: ${id}) { ...userFields }`)}
  }`);
};

export const fetchPeopleEpic = action$ =>
  action$.pipe(
    ofType(FETCH_PEOPLE),
    switchMap(action =>
      ajax
        .getJSON(
          `${config.api.publicpeople}/persons/?search=${encodeURI(
            action.payload.phrase
          )}&limit=${action.payload.limit}&offset=${action.payload.offset}`
        )
        .pipe(
          map(response =>
            ajax
              .getJSON(
                `${config.api.publicpeopleql}${getQueryURIencoded(
                  response.results.map(item => item.id)
                )}`
              )
              .pipe(
                map(response => fetchPeopleFulfilled({ response })),
                catchError(error =>
                  of({
                    type: FETCH_PEOPLE_REJECTED,
                    payload: error.xhr.response,
                    error: true
                  })
                )
              )
          ),
          concatAll(),
          catchError(error =>
            of({
              type: FETCH_PEOPLE_REJECTED,
              payload: error.xhr.response,
              error: true
            })
          ),
          takeUntil(action$.pipe(ofType(CANCEL_PROMISES)))
        )
    )
  );

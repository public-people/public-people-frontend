import { ajax } from "rxjs/ajax";
import { ofType } from "redux-observable";
// Redux - Observable: https://redux-observable.js.org/
import { switchMap, flatMap, takeUntil, catchError } from "rxjs/operators";
// RxJs Operators: https://www.learnrxjs.io/operators/
import { of, concat } from "rxjs";
import { config } from "./../../runtime.config";

const GET_FRONTPAGE = "search/frontpage/GET_FRONTPAGE";
const GET_FRONTPAGE_FAILURE = "search/frontpage/GET_FRONTPAGE_FAILURE";
const GET_FRONTPAGE_SUCCESS = "search/frontpage/GET_FRONTPAGE_SUCCESS";
const GET_FRONTPAGE_CANCEL = "search/frontpage/GET_FRONTPAGE_CANCEL";

export const getQueryURIencoded = arr =>
  encodeURI(`fragment userFields on PersonType {
    id
    name
    memberships {
      id
      role
      startDate
      endDate
      area {
        id
      }
      organization {
        id
        name
      }
    }
  }
  query {
    ${arr.map(id => `person_${id}: person(id: ${id}) { ...userFields }`)}
  }`);

const frontPageIdQuery = [
  13912,
  13967,
  7780,
  13968,
  8227,
  13204,
  13614,
  13977,
  13708,
  13958,
  7531,
  13622
];

export const getFrontPageEpic = action$ =>
  action$.pipe(
    ofType(GET_FRONTPAGE),
    switchMap(() =>
      ajax
        .getJSON(
          `${config.api.publicpeopleql}${getQueryURIencoded(frontPageIdQuery)}`
        )
        .pipe(
          flatMap(response =>
            of({
              type: GET_FRONTPAGE_SUCCESS,
              payload: Object.values(response.data)
            })
          ),
          catchError(error =>
            of({
              type: GET_FRONTPAGE_FAILURE,
              payload: {
                message: error.message,
                status: error.xhr.status,
                statusText: error.xhr.statusText
              }
            })
          ),
          takeUntil(action$.pipe(ofType(GET_FRONTPAGE_CANCEL)))
        )
    )
  );

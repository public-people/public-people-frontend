import { ajax } from "rxjs/ajax";
import { ofType } from "redux-observable";
// Redux - Observable: https://redux-observable.js.org/
import { switchMap, flatMap, takeUntil, catchError } from "rxjs/operators";
// RxJs Operators: https://www.learnrxjs.io/operators/
import { of, concat } from "rxjs";
import { config } from "./../../runtime.config";

const GET_PEOPLE = "search/people/GET_PEOPLE";
const SET_PAGE_META = "metadata/page/SET_PAGE_META";
const GET_PEOPLE_FAILURE = "search/people/GET_PEOPLE_FAILURE";
const GET_PEOPLE_SUCCESS = "search/people/GET_PEOPLE_SUCCESS";
const GET_PEOPLE_CANCEL = "search/people/GET_PEOPLE_CANCEL";

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

export const getPeopleEpic = action$ =>
  action$.pipe(
    ofType(GET_PEOPLE),
    switchMap(action =>
      concat(
        ajax
          .getJSON(
            `${config.api.publicpeople}/persons/?search=${encodeURI(
              action.payload.phrase
            )}&limit=${action.payload.limit}&offset=${action.payload.offset}`
          )
          .pipe(
            flatMap(
              response =>
                response.count > 0
                  ? concat(
                      of({
                        type: SET_PAGE_META,
                        payload: {
                          count: response.count,
                          offset: action.payload.offset
                        }
                      }),
                      ajax
                        .getJSON(
                          `${config.api.publicpeopleql}${getQueryURIencoded(
                            response.results.map(item => item.id)
                          )}`
                        )
                        .pipe(
                          flatMap(responseTwo =>
                            of({
                              type: GET_PEOPLE_SUCCESS,
                              payload: Object.values(responseTwo.data)
                            })
                          )
                        )
                    )
                  : concat(
                      of({
                        type: SET_PAGE_META,
                        payload: {
                          count: response.count,
                          offset: action.payload.offset
                        }
                      }),
                      of({
                        type: GET_PEOPLE_SUCCESS,
                        payload: response
                      })
                    )
            ),
            catchError(error =>
              of({
                type: GET_PEOPLE_FAILURE,
                payload: {
                  message: error.message,
                  status: error.xhr.status,
                  statusText: error.xhr.statusText
                }
              })
            ),
            takeUntil(action$.pipe(ofType(GET_PEOPLE_CANCEL)))
          )
      )
    )
  );

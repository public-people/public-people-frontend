import { ajax } from "rxjs/ajax";
import { ofType } from "redux-observable";
import { switchMap, takeUntil, catchError, flatMap, tap } from "rxjs/operators";
import { of, concat } from "rxjs";
import { config } from "./../../runtime.config";
import extractFirstLastWords from "../../utilities/js/extractFirstLastWords";

const SET_PAGE_META = "metadata/page/SET_PAGE_META";
const GET_PERSON = "search/person/GET_PERSON";
const GET_PERSON_FAILURE = "search/people/GET_PERSON_FAILURE";
const GET_PERSON_SUCCESS = "search/people/GET_PERSON_SUCCESS";
const GET_PERSON_CANCEL = "search/people/GET_PERSON_CANCEL";

export const getQueryURIencoded = id =>
  encodeURI(`query {
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

export const getPersonEpic = action$ =>
  action$.pipe(
    ofType(GET_PERSON),
    switchMap(action =>
      ajax
        .getJSON(
          `${config.api.publicpeopleql}${getQueryURIencoded(
            action.payload.personID
          )}`
        )
        .pipe(
          flatMap(
            response =>
              ajax.getJSON(
                `${config.api.alephapi}/search?q="${encodeURI(
                  extractFirstLastWords(response.data.person.name)
                )}"&limit=${action.payload.limit}&offset=${
                  action.payload.offset
                }`
              ),
            (response, media) => ({ response, media })
          ),
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

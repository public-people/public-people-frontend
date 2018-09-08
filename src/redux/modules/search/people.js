import createPromiseToken from "../../../utilities/js/createPromiseToken";
import fetchWrapper from "../../../utilities/js/fetchWrapper";
import { config } from "../../../runtime.config";
import peopleFetchWrapper from "./../../../utilities/js/peopleFetchWrapper";

const GET_PEOPLE = "search/people/GET_PEOPLE";
const GET_PEOPLE_FAILURE = "search/people/GET_PEOPLE_FAILURE";
const GET_PEOPLE_SUCCESS = "search/people/GET_PEOPLE_SUCCESS";
const GET_PEOPLE_CANCEL = "search/people/GET_PEOPLE_CANCEL";
const SET_PHRASE = "search/people/SET_PHRASE";

export default function reducer(state = {}, action = {}) {
  console.log("people1", state, action);
  switch (action.type) {
    case GET_PEOPLE_CANCEL:
      return state;

    case GET_PEOPLE:
      return {
        ...state,
        phrase: action.payload.phrase,
        limit: action.payload.limit,
        offset: action.payload.offset,
        loading: true,
        error: {
          ...state.error,
          isError: null
        }
      };

    case GET_PEOPLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: {
          isError: true,
          status: action.payload.status,
          statusText: action.payload.statusText,
          message: action.payload.message,
          text: "Lorum errom"
        }
      };

    case GET_PEOPLE_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.payload,
        error: {
          isError: false,
          status: null,
          message: null,
          text: null
        }
      };

    case GET_PEOPLE_CANCEL:
      return state;

    case SET_PHRASE:
      return {
        ...state,
        phrase: action.payload
      };

    default:
      return state;
  }
}

// export const getPeopleCount = payload => ({
//   type: GET_PEOPLE_COUNT,
//   payload: {
//     count: payload.count
//   }
// });

export const getPeople = (phrase, offset, limit) => ({
  type: GET_PEOPLE,
  payload: {
    phrase: phrase,
    offset: offset,
    limit: limit
  }
});

export const getPeopleCancel = () => ({
  type: GET_PEOPLE_CANCEL
});

export const getPeopleSuccess = payload => ({
  type: GET_PEOPLE_SUCCESS,
  payload: {
    results: payload
  }
});

export function setPhrase(phrase) {
  return {
    type: SET_PHRASE,
    payload: phrase
  };
}

export const getPeopleFailure = payload => ({
  type: GET_PEOPLE_FAILURE,
  payload: {
    text: "Lorum errum",
    message: payload.payload.message,
    status: payload.payload.status
  }
});

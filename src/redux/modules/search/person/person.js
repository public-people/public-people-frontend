import createPromiseToken from "../../../../utilities/js/createPromiseToken";
import fetchWrapper from "../../../../utilities/js/fetchWrapper";
import extractFirstLastWords from "../../../../utilities/js/extractFirstLastWords";
import { config } from "../../../../runtime.config";
import personFetchWrapper from "../../../../utilities/js/personFetchWrapper";

const SET_PERSON = "search/person/SET_PERSON";
const SET_PERSON_TOKEN = "search/person/SET_PERSON_TOKEN";
const SET_PERSON_ID = "search/person/SET_PERSON_ID";
const SET_LOADING = "search/person/SET_LOADING";
const SEND_REQUEST = "search/person/SEND_REQUEST";
const CLEAR_REQUEST = "search/person/CLEAR_REQUEST";
const RESOLVE_REQUEST = "search/person/RESOLVE_REQUEST";
const CANCEL_PROMISES = "search/person/CANCEL_PROMISES";
const SET_MEDIA = "search/person/SET_MEDIA ";
const SET_COUNT = "metadata/page/SET_COUNT";
const SET_CURRENT_URL = "metadata/page/SET_CURRENT_URL";
const SET_OFFSET = "metadata/page/SET_OFFSET";

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case SET_PERSON_ID:
      return { ...state, personID: action.payload };
    case SET_PERSON:
      return { ...state, person: action.payload };
    case SET_PERSON_TOKEN:
      return { ...state, personToken: action.payload };

    case SET_LOADING:
      return { ...state, loading: action.payload };

    case SET_MEDIA:
      return {
        ...state,
        mediaList: action.payload
      };

    case SEND_REQUEST:
      return { ...state, fetchToken: action.payload };

    case CLEAR_REQUEST:
      return {
        ...state,
        fetchToken: {
          ...state.fetchToken,
          cancelled: `Cancelled due to ${action.payload}`
        }
      };

    case RESOLVE_REQUEST:
      return {
        ...state,
        results: action.payload.results,
        error: action.error,
        loading: false
      };

    default:
      return state;
  }
}

export function setPerson(person) {
  return { type: SET_PERSON, payload: person };
}

export function setPersonID(id) {
  return { type: SET_PERSON_ID, payload: id };
}

export function setPersonToken(personToken) {
  return {
    type: SET_PERSON_TOKEN,
    payload: extractFirstLastWords(personToken)
  };
}

export function setLoading(newState) {
  return {
    type: SET_LOADING,
    payload: newState
  };
}

export function clearRequest(reason) {
  return {
    type: CLEAR_REQUEST,
    payload: reason
  };
}

export function cancelPromises(reason) {
  console.log("reason1", reason);
  // See "How to dispatch a Redux action with a timeout?"
  // https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559
  // for help with this code.
  return (dispatch, getState) => {
    const currStateToken = getState().person.fetchToken;
    if (currStateToken !== undefined && currStateToken.token !== undefined) {
      currStateToken.token.cancel(reason);
      dispatch({
        type: CANCEL_PROMISES,
        payload: reason
      });
    }
  };
}

export function initSearch(personID, limit, offset) {
  const callPromise = (promise, dispatch, getState) => {
    return promise
      .then(results => {
        if (results.media_list.results.length > 0) {
          const mediaList = results.media_list.results;
          dispatch({
            type: SET_MEDIA,
            payload: results.media_list.results
          });
          dispatch({
            type: SET_COUNT,
            payload: results.media_list.total
          });
          return dispatch({
            type: RESOLVE_REQUEST,
            payload: {
              results
            },
            error: null
          });
        }

        return dispatch({
          type: RESOLVE_REQUEST,
          payload: {
            results: [],
            text: "No results were returned, please try another search phrase"
          },
          error: false
        });
      })
      .catch(error => {
        console.warn(error);

        return dispatch({
          type: RESOLVE_REQUEST,
          payload: {
            results: [],
            text: "An error occured, please try searching again"
          },
          error: true
        });
      });
  };

  return (dispatch, getState) => {
    dispatch({
      type: SET_LOADING,
      payload: true
    });

    clearRequest();

    dispatch({
      type: CLEAR_REQUEST,
      payload: "new request being sent"
    });

    dispatch({ type: SET_PERSON_ID, payload: personID });
    dispatch({ type: SET_OFFSET, payload: offset });
    const url = `${
      config.api.publicpeople
    }/persons/${personID}?limit=${limit}&offset=${offset}`;

    dispatch({ type: SET_CURRENT_URL, payload: url });
    const incomingToken = getState().person.fetchToken.token;
    const token = createPromiseToken(
      callPromise(personFetchWrapper(url, limit, offset), dispatch),
      incomingToken
    );

    dispatch({
      type: SEND_REQUEST,
      payload: token,
      meta: {
        url
      }
    });
  };
}

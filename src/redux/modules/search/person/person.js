import createPromiseToken from "../../../../utilities/js/createPromiseToken";
import fetchWrapper from "../../../../utilities/js/fetchWrapper";
import extractFirstLastWords from "../../../../utilities/js/extractFirstLastWords";
import { config } from "../../../../runtime.config";

const SET_PERSON = "search/person/SET_PERSON";
const SET_PERSON_TOKEN = "search/person/SET_PERSON_TOKEN";
const SET_LOADING = "search/person/SET_LOADING";
const SEND_REQUEST = "search/person/SEND_REQUEST";
const CLEAR_REQUEST = "search/person/CLEAR_REQUEST";
const RESOLVE_REQUEST = "search/person/RESOLVE_REQUEST";
const CANCEL_PROMISES = "search/person/CANCEL_PROMISES";

export default function reducer(state = {}, action = {}) {
  console.log("person state", state);
  switch (action.type) {
    case SET_PERSON:
      return { ...state, person: action.payload };
    case SET_PERSON_TOKEN:
      return { ...state, personToken: action.payload };

    case SET_LOADING:
      return { ...state, loading: action.payload };

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
  // See "How to dispatch a Redux action with a timeout?"
  // https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559
  // for help with this code.
  return (dispatch, getState) => {
    if (getState().person.fetchToken !== undefined) {
      getState().person.fetchToken.token.cancel(reason);
      dispatch({
        type: CANCEL_PROMISES,
        payload: reason
      });
    } else {
      dispatch({
        type: CANCEL_PROMISES,
        payload: "Not cancelled"
      });
    }
  };
}

export function initSearch(person) {
  console.log("person1", person);
  return dispatch => {
    dispatch({
      type: SET_LOADING,
      payload: true
    });

    clearRequest();

    dispatch({
      type: CLEAR_REQUEST,
      payload: "new request being sent"
    });

    dispatch({ type: SET_PERSON, payload: person });

    dispatch({ type: SET_PERSON_TOKEN, payload: person });

    const url = `${config.api.alephi}?q="${encodeURI(
      extractFirstLastWords(person)
    )}"`;
    const request = fetchWrapper(url);
    const token = createPromiseToken(request);

    dispatch({
      type: SEND_REQUEST,
      payload: token,
      meta: {
        url
      }
    });

    token.request
      .then(({ results }) => {
        if (results.length > 0) {
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
}

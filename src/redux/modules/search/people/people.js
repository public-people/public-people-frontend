import createPromiseToken from "../../../../utilities/js/createPromiseToken";
import fetchWrapper from "../../../../utilities/js/fetchWrapper";
import { config } from "../../../../runtime.config";
import peopleFetchWrapper from "./../../../../utilities/js/peopleFetchWrapper";

const SET_PHRASE = "search/people/SET_PHRASE";
const SET_LOADING = "search/people/SET_LOADING";
const SEND_REQUEST = "search/people/SEND_REQUEST";
const CLEAR_REQUEST = "search/people/CLEAR_REQUEST";
const RESOLVE_REQUEST = "search/people/RESOLVE_REQUEST";
const CANCEL_PROMISES = "search/people/CANCEL_PROMISES";
const SET_COUNT = "metadata/page/SET_COUNT";
const SET_CURRENT_URL = "metadata/page/SET_CURRENT_URL";
const SET_OFFSET = "metadata/page/SET_OFFSET";

export default function reducer(state = {}, action = {}) {
  console.log("people", state, action);
  switch (action.type) {
    case SET_PHRASE:
      return {
        ...state,
        phrase: action.payload
      };

    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };

    case SEND_REQUEST:
      return {
        ...state,
        fetchToken: action.payload
      };

    case CLEAR_REQUEST:
      return {
        ...state,
        fetchToken: {
          ...state.fetchToken,
          token: {
            cancelled: false,
            cancel: `Cancelled due to ${action.payload}`
          }
        }
      };
    case CANCEL_PROMISES:
      return {
        ...state,
        fetchToken: {
          ...state.fetchToken,
          cancel: `Cancelled due to ${action.payload}`
        }
      };

    case RESOLVE_REQUEST:
      return {
        ...state,
        results: action.payload.results,
        error: action.error,
        loading: false,
        count: action.payload.count
      };

    default:
      return state;
  }
}

export function setPhrase(phrase) {
  return {
    type: SET_PHRASE,
    payload: phrase
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
  console.log("reason2", reason);
  // See "How to dispatch a Redux action with a timeout?"
  // https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559
  // for help with this code.
  return (dispatch, getState) => {
    console.log("inside da promise");
    dispatch({
      type: CANCEL_PROMISES,
      payload: reason
    });
    const currStateToken = getState().people.fetchToken;
    if (currStateToken !== undefined && currStateToken.token !== undefined) {
      currStateToken.token.cancel(reason);
      currStateToken.cancelled = true;
      dispatch({
        type: CANCEL_PROMISES,
        payload: reason
      });
    }
  };
}

export function initSearch(phrase, limit, offset) {
  const callPromise = (promise, dispatch, getState) => {
    return promise
      .then(data => {
        if (data.results.length > 0) {
          const results = data.results;
          const count = data.count;
          dispatch({
            type: SET_COUNT,
            payload: count
          });
          return dispatch({
            type: RESOLVE_REQUEST,
            payload: {
              results,
              count
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
    dispatch({ type: SET_OFFSET, payload: offset });
    const url = `${config.api.publicpeople}/persons/?search=${encodeURI(
      phrase
    )}&limit=${limit}&offset=${offset}`;

    dispatch({ type: SET_CURRENT_URL, payload: url });

    const token = createPromiseToken(
      callPromise(peopleFetchWrapper(url), dispatch)
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

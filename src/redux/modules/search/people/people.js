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

export default function reducer(state = {}, action = {}) {
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
  // See "How to dispatch a Redux action with a timeout?"
  // https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559
  // for help with this code.
  return (dispatch, getState) => {
    const currStateToken = getState().people.fetchToken;
    if (currStateToken !== undefined && currStateToken.token !== undefined) {
      currStateToken.token.cancel(reason);
      dispatch({
        type: CANCEL_PROMISES,
        payload: reason
      });
    } else {
      dispatch({
        type: CANCEL_PROMISES,
        payload: "... Scratch that; not cancelled."
      });
    }
  };
}

export function initSearch(phrase) {
  const callPromise = (promise, dispatch) => {
    console.log("dispatch1", dispatch);
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

    const url = `${config.api.publicpeople}/persons/?search=${encodeURI(
      phrase
    )}`;

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

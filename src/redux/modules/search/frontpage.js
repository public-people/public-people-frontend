const GET_FRONTPAGE = "search/frontpage/GET_FRONTPAGE";
const GET_FRONTPAGE_FAILURE = "search/frontpage/GET_FRONTPAGE_FAILURE";
const GET_FRONTPAGE_SUCCESS = "search/frontpage/GET_FRONTPAGE_SUCCESS";
const GET_FRONTPAGE_CANCEL = "search/frontpage/GET_FRONTPAGE_CANCEL";
const CLEAR_FRONTPAGE_STATES = "search/frontpage/CLEAR_FRONTPAGE_STATES";

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case GET_FRONTPAGE:
      return {
        ...state,
        loading: true,
        error: {
          ...state.error,
          isError: null
        }
      };

    case GET_FRONTPAGE_FAILURE:
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

    case GET_FRONTPAGE_SUCCESS:
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

    case GET_FRONTPAGE_CANCEL:
      return {
        ...state,
        loading: false,
        error: {
          isError: false,
          status: null,
          message: null,
          text: null
        }
      };
    case CLEAR_FRONTPAGE_STATES:
      return {
        ...state,
        loading: false,
        error: {
          isError: false,
          status: null,
          message: null,
          text: null
        }
      };

    default:
      return state;
  }
}

export const getFrontpage = () => ({
  type: GET_FRONTPAGE
});

export const getFrontpageCancel = () => ({
  type: GET_FRONTPAGE_CANCEL
});

export const getFrontpageSuccess = payload => ({
  type: GET_FRONTPAGE_SUCCESS,
  payload: {
    results: payload
  }
});

export const getFrontpageFailure = payload => ({
  type: GET_FRONTPAGE_FAILURE,
  payload: {
    text: "Lorum errum",
    message: payload.payload.message,
    status: payload.payload.status
  }
});

export const clearFrontpageState = () => ({
  type: CLEAR_FRONTPAGE_STATES
});

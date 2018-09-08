const GET_PERSON = "search/person/GET_PERSON";
const GET_PERSON_FAILURE = "search/people/GET_PERSON_FAILURE";
const GET_PERSON_SUCCESS = "search/people/GET_PERSON_SUCCESS";
const GET_PERSON_CANCEL = "search/people/GET_PERSON_CANCEL";

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case GET_PERSON_CANCEL:
      return state;

    case GET_PERSON:
      return {
        ...state,
        personID: action.payload.personID,
        limit: action.payload.limit,
        offset: action.payload.offset,
        loading: true,
        error: {
          ...state.error,
          isError: null
        }
      };

    case GET_PERSON_FAILURE:
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

    case GET_PERSON_SUCCESS:
      return {
        ...state,
        loading: false,
        results: {
          personal: action.payload.personal,
          media: action.payload.media.results
        },
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

export const getPerson = (personID, limit, offset) => ({
  type: GET_PERSON,
  payload: {
    personID: personID,
    offset: offset,
    limit: limit
  }
});

export const getPersonSuccess = payload => ({
  type: GET_PERSON_SUCCESS,
  payload: {
    media: payload.media,
    personal: payload.personal
  }
});

export const getPersonFailure = payload => ({
  type: GET_PERSON_FAILURE,
  payload,
  error: true
});

export const getPersonCancel = payload => ({
  type: GET_PERSON_CANCEL,
  payload,
  error: true
});

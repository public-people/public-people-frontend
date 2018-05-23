// import createPromiseToken from './../../utilities/js/createPromiseToken';
// import fetchWrapper from '../../utilities/js/fetchWrapper';


const SET_PHRASE = 'search/SET_PHRASE';
const SET_LOADING = 'search/SET_LOADING';
const SEND_REQUEST = 'search/SEND_REQUEST';
const CLEAR_REQUEST = 'search/CLEAR_REQUEST';
const RESOLVE_REQUEST = 'search/RESOLVE_REQUEST';


export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case SET_PHRASE: return {
      ...state,
      phrase: action.payload,
    };

    case SET_LOADING: return {
      ...state,
      loading: action.payload,
    };

    case SEND_REQUEST: return {
      ...state,
      fetchToken: action.payload,
    };

    case CLEAR_REQUEST: return {
      ...state,
      fetchToken: {
        ...state.fetchToken,
        cancelled: `Cancelled due to ${action.payload}`,
      },
    };

    case RESOLVE_REQUEST: return {
      ...state,
      results: action.payload.results,
      error: action.payload.error,
    };

    default: return state;
  }
}


export function setPhrase(phrase) {
  return {
    type: SET_PHRASE,
    payload: phrase,
  };
}

export function setLoading(newState) {
  return {
    type: SET_LOADING,
    payload: newState,
  };
}


export function clearRequest(reason) {
  return {
    type: CLEAR_REQUEST,
    payload: reason,
  };
}


export function initUpdate() {
  return (dispatch) => {
    dispatch(setPhrase('2222'));
  };
}

// return (dispatch) => { dispatch({
//     type: SET_LOADING,
//     payload: true,
//   });

//   console.log('sadasd');
//   clearRequest('new request being sent');

//   const url = `https://public-people.techforgood.org.za/api/persons/?search=${encodeURI(phrase)}`;
//   const request = fetchWrapper(url);
//   const token = createPromiseToken(request);

//   dispatch({
//     type: SEND_REQUEST,
//     payload: token,
//     meta: {
//       url,
//     },
//   });

//   token.request
//     .then((results) => {
//       if (results.length > 0) {
//         return dispatch({
//           type: RESOLVE_REQUEST,
//           payload: {
//             results,
//           },
//         });
//       }

//       return dispatch({
//         type: RESOLVE_REQUEST,
//         payload: {
//           results: [],
//           text: 'No results were returned, please try another search phrase',
//         },
//       });
//     })
//     .catch((error) => {
//       console.warn(error);

//       return dispatch({
//         type: RESOLVE_REQUEST,
//         payload: {
//           results: [],
//           text: 'An error occured, please try searching again',
//         },
//         error: true,
//       });
//     });
// };
//
// }

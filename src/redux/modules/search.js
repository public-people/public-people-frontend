const UPDATE = 'search/UPDATE';


export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case UPDATE: return {
      ...state,
      phrase: action.payload.phrase,
    };

    default: return state;
  }
}


export function updatePhrase(phrase) {
  return {
    type: UPDATE,
    payload: {
      phrase,
    },
  };
}

import { config } from "../../../../runtime.config";

const SET_COUNT = "metadata/page/SET_COUNT";

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case SET_COUNT:
      return {
        ...state,
        ...{
          count: action.payload,
          offset: 0,
          offsetStep: config.pagination.offsetStep,
          limit: config.pagination.limit
        }
      };

    default:
      return state;
  }
}

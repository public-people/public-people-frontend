import { config } from "../../../../runtime.config";

const SET_COUNT = "metadata/page/SET_COUNT";
const SET_CURRENT_URL = "metadata/page/SET_CURRENT_URL";

export default function reducer(state = {}, action = {}) {
  console.log("page", state, action);
  switch (action.type) {
    case SET_COUNT:
      return {
        ...state,
        ...{
          count: action.payload
        }
      };
    case SET_CURRENT_URL:
      return {
        ...state,
        ...{
          current_url: action.payload
        }
      };

    default:
      return state;
  }
}

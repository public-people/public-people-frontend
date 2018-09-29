import { config } from "../../../runtime.config";

const SET_PAGE_META = "metadata/page/SET_PAGE_META";
const SET_PAGE_META_OFFSET = "metadata/page/SET_PAGE_META_OFFSET";
const SET_CURRENT_URL = "metadata/page/SET_CURRENT_URL";
const SET_OFFSET = "metadata/page/SET_OFFSET";

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case SET_PAGE_META:
      return {
        ...state,
        count: Number(action.payload.count),
        offset: Number(action.payload.offset)
      };
    case SET_PAGE_META_OFFSET:
      return {
        ...state,
        offset: Number(action.payload.offset)
      };
    case SET_CURRENT_URL:
      return {
        ...state,
        ...{
          current_url: action.payload
        }
      };
    case SET_OFFSET:
      return {
        ...state,
        ...{
          offset: action.payload
        }
      };

    default:
      return state;
  }
}

export const setPageMetaOffset = offset => ({
  type: SET_PAGE_META_OFFSET,
  payload: {
    offset
  }
});

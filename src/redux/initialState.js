import { config } from "../runtime.config";

export default {
  people: {
    phrase: "",
    loading: true,
    activeFetchToken: null,
    results: {},
    notification: null,
    error: {
      isError: null,
      status: null,
      message: null,
      text: null
    }
  },
  person: {
    loading: true,
    personToken: "",
    results: {
      personal: [],
      media: []
    },
    error: {
      isError: null,
      status: null,
      message: null,
      text: null
    }
  },
  page: {
    count: 0,
    offset: 0,
    offsetStep: config.pagination.offsetStep,
    limit: config.pagination.limit,
    lastPathname: null
  }
};

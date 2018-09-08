import { config } from "../runtime.config";

export default {
  people: {
    phrase: "",
    loading: true,
    activeFetchToken: null,
    results: [],
    notification: null
  },
  person: {
    loading: true,
    personToken: "",
    results: {
      personal: [],
      media: []
    }
  },
  page: {
    count: 0,
    offset: 0,
    offsetStep: config.pagination.offsetStep,
    limit: config.pagination.limit
  }
};

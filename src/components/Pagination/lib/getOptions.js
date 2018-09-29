export const getOptions = (count, limit, offset, offsetStep) => {
  const additionalPage = count % limit > 0 ? 1 : 0;
  return {
    currPage: offset === 0 ? 1 : offset / offsetStep + 1,
    totalPages: additionalPage + (count - (count % limit)) / limit
  };
};

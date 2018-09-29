export const getNewUrl = (currentURL, offset) => {
  const url = new URL(currentURL);
  const params = new URLSearchParams(url.search);
  params.set("offset", offset);
  return `${url.pathname}?${params.toString()}`;
};

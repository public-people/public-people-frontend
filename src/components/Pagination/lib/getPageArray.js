export const getArray = num => Array.from(new Array(num), (x, i) => i + 1);

export const getPageArray = ({ totalPages, currPage }) => {
  // There are a few things to know before we can generate reliable pagination.
  // "PGS_TO_SHOW is obvious, maybe, as the number of pages we want selectable
  // on the component, eg  ... 3, 4, 5, 6, 7".
  // Midpoint is for picking the item in the middle. So current page in the above example
  // is 5.
  const PGS_TO_SHOW = 5;
  const MIDPOINT = 3;

  if (totalPages === 1) {
    return [];
  }

  if (totalPages <= PGS_TO_SHOW) {
    return getArray(totalPages);
  }

  switch (totalPages >= PGS_TO_SHOW) {
    // Let's handle the easy ones out the gate.
    // If there are fewer pages than we decided to show, show these.

    // The thing is we, also only want to start moving the midpoint as the
    // user clicks past the first two, in this case. So we wait until the current page hits
    // midpoint before starting the shift the values.
    case currPage <= MIDPOINT:
      return getArray(PGS_TO_SHOW).map(page => page);

    // When the current page goes beyond he midpoint, we shift. We started when the no. of pages
    //  crossed the midpoint, so if we now substract midpoint, we stay in place.

    case currPage > MIDPOINT && currPage <= totalPages - MIDPOINT:
      return getArray(PGS_TO_SHOW).map(page => page + currPage - MIDPOINT);

    // At the end we might see, say, 267, 268, 269, 270, 271 for all after 267.
    // This item takes over where the second condition on the previous case closes.

    case currPage >= totalPages - PGS_TO_SHOW:
      return getArray(PGS_TO_SHOW).map(page => page + totalPages - PGS_TO_SHOW);

    default:
      return [];
  }
};

import { config } from "../../runtime.config";

const sort = (arr, fn) => {
  // This is non-destructive so does not sort the input array. Instead it returns
  // a new array that has been sorted.
  return arr.concat().sort(fn);
};

const sortDateAsc = (a, b) => {
  return b.date - a.date;
};

const siftMemberships = arr => {
  // See "How JavaScript’s Reduce method works, when to use it, and some of the
  // cool things it can do" https://medium.freecodecamp.org/reduce-f47a7da511a9 for help
  // with this code.
  return arr.reduce(
    (acc, curr, index) => {
      // Membership end date is null or empty string means it's a current position.
      if (curr.end_date === null || curr.end_date === "") {
        acc.current[acc.current.length] = index;
      } else {
        acc.remainder[acc.remainder.length] = {
          index: index,
          date: new Date(curr.end_date)
        };
      }
      return acc;
    },
    {
      current: [],
      remainder: []
    }
  );
};

const get = url => {
  // See "Introduction to fetch()" https://developers.google.com/web/updates/2015/03/introduction-to-fetch for
  // help with this code.
  return fetch(url)
    .then(res => {
      if (res.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + res.status
        );
        return;
      }
      return res.json();
    })
    .catch(err => console.log(err));
};

export default function peopleFetchWrapper(url) {
  return new Promise((resolve, reject) => {
    return get(url).then(data => {
      console.log("data", data);
      // See "JavaScript Promises: an Introduction"
      // https://developers.google.com/web/fundamentals/primers/promises#creating_a_sequence for
      // help with this code.
      return Promise.all(
        data.results.map(datum => {
          // This splits the input into two categories, current and remainder. This is because when a membership
          // end date is null or an empty string, it means it's a current position. We store the index for lookup.
          // However where there is no empty string/null, we still need to retrieve the most recent membership,
          // so we need that array available for sorting without confounders.
          // We also store the index of each item for lookup later.
          const siftedCurrent = siftMemberships(datum.memberships);
          // Let's store whether or not there exists a current position.
          const currHasLength = siftedCurrent.current.length > 0;
          // Having discovered whether there is or isn't a current membership, if there is not, we need to sort the remainder.
          // If there is, we can skip it.
          const sortedRemainder = currHasLength
            ? undefined
            : sort(siftedCurrent.remainder, sortDateAsc);
          // If we have a current position, we set the index to that index. If we do not, we will have sorted just above,
          // and we can grab the index of the latest item.
          const latestPositionIndex = currHasLength
            ? siftedCurrent.current[0]
            : sortedRemainder[0].index;
          // For the sake of not having to sort the item again on render, we will store the value in either a
          // current_postion or latest_postion field on the incoming object. Which one is added again depends on
          // whether or not there is a current positon.
          const addToPerson = currHasLength
            ? (datum.current_postion = null)
            : (datum.latest_postion = null);
          // Now, we request the data for the relevant organisation. The base url is stored in config for ease of access.
          // "get()" is defined above.
          return get(
            `${config.api.publicpeople}/organizations/${
              datum.memberships[latestPositionIndex].organization
            }`
          )
            .then(res => {
              // We replace the id in the object with the relevant value.
              datum.memberships[latestPositionIndex].organization = res;
              // Then we store the whole membership object into a current_positon or latest_position field for later use.
              datum.current_postion === null
                ? (datum.current_postion =
                    datum.memberships[latestPositionIndex])
                : (datum.latest_postion =
                    datum.memberships[latestPositionIndex]);
              return datum;
            })
            .catch(err => {
              reject(
                new Error(
                  `Request failed inside secondary 'get()' with error: ${err}`
                )
              );
            });
        })
      )
        .then(res => {
          data.results = res;
          resolve(data);
        })
        .catch(err => {
          reject(
            new Error(`Request failed inside main 'get()' with error: ${err}`)
          );
        });
    });
  });
}

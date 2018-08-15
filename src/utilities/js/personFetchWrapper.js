import { config } from "../../runtime.config";
import extractFirstLastWords from "./extractFirstLastWords";

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
        acc.current[acc.current.length] = curr;
      } else {
        acc.remainder[acc.remainder.length] = {
          index: index,
          // The date conversion is for the sorting algo. We'll discard this transformation later.
          date: new Date(curr.end_date),
          entry: curr
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
          "Failed inside get()/fetch(). Looks like there was a problem. Status Code: " +
            res.status
        );
        return;
      }
      return res.json();
    })
    .catch(err => console.log(`Failed inside get()/fetch() with: ${err}`));
};

export default function personFetchWrapper(url) {
  // Apologies in advance, lots of mutation below.
  return new Promise((resolve, reject) => {
    // See "JavaScript Promises: an Introduction"
    // https://developers.google.com/web/fundamentals/primers/promises#creating_a_sequence for
    // help with this code.
    return get(url).then(data => {
      // We need two different datasets from two different apis to fulfill our needs here. First, we declate and array
      // which contains the data for both queries as well as a way to distinguish the queries.
      const dataToarray = [
        { name: data.name },
        { memberships: data.memberships || [] }
      ];
      // Using Promise.all allows us to run our queries all at once instead of in series. It also allows us to return all
      // the data at once.
      return Promise.all(
        dataToarray.map(curr => {
          if (curr.hasOwnProperty("name")) {
            return get(
              `${config.api.alephapi}/search?${encodeURI(
                extractFirstLastWords(data.name)
              )}`
              // Having returned the data, we add it to the object under media_list.
            ).then(res => (data.media_list = res));
          } else if (curr.memberships.length > 0) {
            return Promise.all(
              // This generates an array of promises to return with Promise.all. 'queriedMemberships' is a record of
              // which items have already been queried.
              curr.memberships.reduce(
                (acc, curr, index, arr) => {
                  // The keys we're querying are the organisational IDs. First we query if we've
                  // recorded them in 'queriedMemberships', which would mean that ID has been queries already.
                  if (
                    acc.queriedMemberships.hasOwnProperty(curr.organization) ===
                    false
                  ) {
                    // If we have not, we store an object with the key in 'queriedMemberships' and proceed.
                    // Next time around, then, we won't have to make that query a second time.
                    acc.queriedMemberships[curr.organization] = {};
                    acc.fetches[acc.fetches.length] = get(
                      `${config.api.publicpeople}/organizations/${encodeURI(
                        curr.organization
                      )}`
                    );
                  }
                  // At the end of the cycle, we return only the fetches.
                  return (acc = index + 1 === arr.length ? acc.fetches : acc);
                },
                {
                  fetches: [],
                  queriedMemberships: {}
                }
              )
            )
              .then(res => {
                // "res" here is the newly returned array wherein we've retrieve the correct organisational information
                // for each ID. We now overwrite the incoming object at the correct IDs. If this operation is ever slow,
                // this function should be inspected for optimisation (nested loops with no reduction, etc.).
                // Given that we hope this code is going to be unecessary/deleted, and that the number of inputs will
                // likely be sensible, it is left in for now, so I can ship. The no. of HTTP requests are likely worse.
                res.forEach(org => {
                  data.memberships.map(membership => {
                    if (org.id === membership.organization) {
                      membership.organization = org;
                    }
                  });
                });
                // This functions sorts through the memberships and returns into two collections any current position
                // and the remaining items.
                const siftedCurrent = siftMemberships(data.memberships);
                // Let's store whether or not there exists a current position.
                const currHasLength = siftedCurrent.current.length > 0;
                // Let's sort the remainder in ascending order. We'll overwrite the existing memberships with this shortly.
                const sortedRemainder = sort(
                  siftedCurrent.remainder,
                  sortDateAsc
                );
                // We add a current_postion or latest_postion field on the incoming object. Which one is depends on
                // whether or not there is a current positon.
                const addToPerson = currHasLength
                  ? (data.current_postion = siftedCurrent.current[0])
                  : (data.latest_postion = sortedRemainder[0].entry);
                data.memberships = sortedRemainder.map(item => item.entry);
                return res;
              })
              .catch(err =>
                reject(
                  new Error(
                    `Request failed inside inner Promise set with error: ${err}`
                  )
                )
              );
          }
        })
      )
        .then(resolve(data))
        .catch(err =>
          reject(err =>
            reject(
              new Error(
                `Request failed inside outer Promise set with error: ${err}`
              )
            )
          )
        );
    });
  });
}

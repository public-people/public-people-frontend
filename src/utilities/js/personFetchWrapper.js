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
  const membershipsSifted = arr.reduce(
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
  return membershipsSifted;
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

export default function personFetchWrapper(url) {
  return new Promise((resolve, reject) => {
    return get(url).then(data => {
      const dataToarray = [
        { name: data.name },
        { memberships: data.memberships || [] }
      ];
      return Promise.all(
        dataToarray.map(curr => {
          if (curr.hasOwnProperty("name")) {
            return get(
              `${config.api.alephapi}/search?${encodeURI(
                extractFirstLastWords(data.name)
              )}`
            ).then(res => (data.media_list = res));
          } else if (curr.memberships.length > 0) {
            return Promise.all(
              curr.memberships.reduce(
                (acc, curr, index, arr) => {
                  if (
                    acc.queriedMemberships.hasOwnProperty(curr.organization) ===
                    false
                  ) {
                    acc.queriedMemberships[curr.organization] = {};
                    acc.fetches[acc.fetches.length] = get(
                      `${config.api.publicpeople}/organizations/${encodeURI(
                        curr.organization
                      )}`
                    );
                  }
                  return (acc = index + 1 === arr.length ? acc.fetches : acc);
                },
                {
                  fetches: [],
                  queriedMemberships: {}
                }
              )
            ).then(res => {
              res.map(org => {
                data.memberships.map(membership => {
                  if (org.id === membership.organization) {
                    membership.organization = org;
                  }
                });
              });
              return res;
            });
          }
        })
      ).then(resolve(data));
    });
  });
}

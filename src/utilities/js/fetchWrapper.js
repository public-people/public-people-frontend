export default function fetchWrapper(url) {
  return new Promise((resolve, reject) => {
    // See Introduction to fetch() https://developers.google.com/web/updates/2015/03/introduction-to-fetch
    // for help with this code.

    fetch(url)
      .then(response => {
        if (!response.ok) {
          reject(response);
        }
        response
          .json()
          .then(data => {
            if (data.success === "false") {
              reject(new Error("Requested failed inside CKAN"));
            }
            resolve(data);
          })
          .catch(reject);
      })
      .catch(reject);
  });
}

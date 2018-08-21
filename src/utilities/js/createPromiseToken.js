export default function createPromiseToken(cbPromise, incomingToken) {
  console.log("incomingToken", incomingToken);
  let token = {
    cancelled: false,
    cancel: reason => {
      token.cancelled = `Cancelled due to ${reason}`;
    }
  };

  if (incomingToken !== undefined) {
    token = incomingToken;
  }

  const request = new Promise((resolve, reject) => {
    cbPromise
      .then(data => {
        if (token.cancelled === false) {
          console.log(
            "incomingToken.cancelled === false)",
            token.cancelled === false
          );
          resolve(data);
        } else {
          reject("cancelled");
        }
      })
      .catch(reject);
  });
  return { token, request };
}

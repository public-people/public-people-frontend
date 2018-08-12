export default function createPromiseToken(cbPromise) {
  const token = {
    cancelled: false,
    cancel: reason => {
      console.log("THIS HERE TOKEN HAS BEEN CANCELED");
      token.cancelled = `Cancelled due to ${reason}`;
    }
  };

  const request = new Promise((resolve, reject) => {
    cbPromise
      .then(data => {
        if (!token.cancelled) {
          resolve(data);
        }
      })
      .catch(reject);
  });
  console.log("token, request", token, request);
  return { token, request };
}

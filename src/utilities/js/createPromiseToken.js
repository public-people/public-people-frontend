export default function createPromiseToken(cbPromise) {
  const token = {
    cancelled: false,
    cancel: reason => {
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

  return { token, request };
}

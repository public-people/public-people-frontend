import createPromiseToken from './../createPromiseToken';


const dummyPromise = new Promise((resolve, reject) => {
  const error = false;
  if (error) {
    reject(new Error('fail'));
  }

  setTimeout(
    () => resolve('success'),
    2000,
  );
});


const token = createPromiseToken(dummyPromise);
const tokenForCancel = createPromiseToken(dummyPromise);
tokenForCancel.token.cancel('special test reason');


const expected = {
  request: token.request,
  token: {
    cancel: token.token.cancel,
    cancelled: false,
  },
};


test('Create promise', () => expect(token).toEqual(expected));
test('Promise cancelled is false', () => expect(token.token.cancelled).toBe(false));
test('Promise executes correctly', () => expect(token.request).resolves.toBe('success'));
test('Cancel fetch has reason inside', () => expect(tokenForCancel.token.cancelled).toBe('Cancelled due to special test reason'));

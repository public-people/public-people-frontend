import { ofType } from "redux-observable";
import { delay, mapTo } from "rxjs/operators";

export default function reducer(state = { isPinging: false }, action) {
  switch (action.type) {
    case "PING":
      return { isPinging: true };

    case "PONG":
      return { isPinging: false };

    default:
      return state;
  }
}

export const pingEpic = action$ =>
  action$.pipe(
    ofType("PING"),
    delay(1000), // Asynchronously wait 1000ms then continue
    mapTo({ type: "PONG" })
  );

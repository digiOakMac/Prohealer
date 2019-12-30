import { delay, mapTo } from "rxjs/operators";
import { ofType } from 'redux-observable';

import { ping, pong } from "./actions";

export const pingEpic = action$ => action$.pipe(
  ofType(ping.type),
  delay(1000), // Asynchronously wait 1000ms then continue
  mapTo(pong())
);

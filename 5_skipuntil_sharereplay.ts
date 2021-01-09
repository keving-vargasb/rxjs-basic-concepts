import { interval, fromEvent } from "rxjs";
import { skipUntil, shareReplay } from "rxjs/operators";

/**Skip until */
const interval$ = interval(1000);
const clickEvent$ = fromEvent(document, "click");

const emitAfterClick = interval$.pipe(skipUntil(clickEvent$));

export const skpiUntilSubscription = emitAfterClick.subscribe(v =>
  console.log(v)
);

/**shareReplay */
const emitAndShare = interval$.pipe(shareReplay());

export const shareReplaySubscription = emitAndShare.subscribe(v =>
  console.log(`ShareReplay ${v}`)
);

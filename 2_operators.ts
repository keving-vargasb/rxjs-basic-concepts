import { Observable, Observer } from "rxjs";
import { map, filter } from "rxjs/operators";

const firstObservable = new Observable(suscriber => {
  suscriber.next("This is a string");
  suscriber.next(1);
  suscriber.next(2);
  suscriber.complete();
});

const firstPipe = firstObservable.pipe(
  filter((r: any) => !isNaN(r)),
  map((r: any) => r + 10)
);

const firstObserver: Observer<any> = {
  next: x => console.log(x),
  error: err => console.error("There is an error", err),
  complete: () => console.log("Complete")
};

export const mySubscription = firstPipe.subscribe(firstObserver);

import { Observable, Observer } from "rxjs";

const firstObservable = new Observable(suscriber => {
  suscriber.next("This is a string");
  suscriber.next(1);
  suscriber.next(2);
  suscriber.error("This is a error");
});

const secondObservable = new Observable(suscriber => {
  suscriber.complete();
});

const myObserver: Observer<any> = {
  next: x => {
    if (isNaN(x)) {
      console.warn(`'${x}' is not a number`);
      return;
    }
    console.log(x + 10);
  },
  error: err => console.error("There is an error", err),
  complete: () => console.log("Complete")
};

firstObservable.subscribe(myObserver);
secondObservable.subscribe(myObserver);

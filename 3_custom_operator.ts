import { pipe, of } from "rxjs";
import { scan, map } from "rxjs/operators";

const toggle = () =>
  pipe(
    scan((acc, value: any) => {
      const newValue = value.a;
      if (newValue % 2 === 0) {
        acc.push(newValue);
      }
      return acc;
    }, [])
  );

const fakeData = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }];

const source = of(...fakeData).pipe(
  toggle(),
  map(x => `Hello ${x}`)
);

export const suscribtion = source.subscribe(console.log);

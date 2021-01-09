import { of } from "rxjs";
import { map, catchError } from "rxjs/operators";

export const exampleCathError = of(
  "Hola gente",
  "¿Cómo están?",
  "Espero que bien",
  "error"
)
  .pipe(
    map(v => {
      if (v === "error") throw "Mensaje incorrecto";
      return v;
    }),
    catchError(err => {
      throw `Error: ${err}`;
    })
  )
  .subscribe(
    x => console.log(`Next: ${x}`),
    err => console.log(err),
    () => console.log("Completed")
  );

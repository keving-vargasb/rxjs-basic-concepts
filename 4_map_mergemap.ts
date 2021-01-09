import { fromEvent } from "rxjs";
import { ajax } from "rxjs/ajax";
import { map, mergeMap } from "rxjs/operators";

const API_URL = "https://rickandmortyapi.com/api/character/";

const clickEvent$ = fromEvent(document, "click");

const clickManagement = clickEvent$.pipe(
  map(clickData => 10), //ID param mergeMap
  mergeMap(id => ajax.getJSON(`${API_URL}${id}`)),
  map((data: any) => `Character: ${data.name}`)
);

export const characterSubscription = clickManagement.subscribe(console.log);

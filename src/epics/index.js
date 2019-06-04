import { combineEpics, ofType } from "redux-observable";

//import { Observable } from "rxjs";
import { mergeMap, map, catchError, debounceTime } from "rxjs/operators";
import { ajax } from "rxjs/observable/dom/ajax";

import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/dom/ajax";
import "rxjs/add/observable/of";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/startWith";

import {
  REQUEST_GIFS,
  requestGifsFailure,
  requestGifsSuccess
} from "../actions";

/*
const url = `https://api.giphy.com/v1/gifs/search?api_key=SYuuhbO9kh4QEGNI6rH796Kkr76j1QoV&q=${term.replace(
  /\s/g,
  "+"
)}&limit=25&offset=0&rating=R&lang=en`;
const data = request.get(url);
*/

const requestGifEpic = action$ =>
  action$
    .ofType(REQUEST_GIFS)
    .debounceTime(500)
    .mergeMap(action =>
      Observable.ajax(
        `https://api.giphy.com/v1/gifs/search?api_key=SYuuhbO9kh4QEGNI6rH796Kkr76j1QoV&q=${action.payload.replace(
          /\s/g,
          "+"
        )}&limit=25&offset=0&rating=R&lang=en`
      )
        .map(response => requestGifsSuccess(response))
        .catch(error => requestGifsFailure(error))
    );
export const rootEpic = combineEpics(requestGifEpic);
/*
action$.pipe(
    ofType(REQUEST_GIFS),
    mergeMap(action =>
        Observable.ajax(
        `https://api.giphy.com/v1/gifs/search?api_key=SYuuhbO9kh4QEGNI6rH796Kkr76j1QoV&q=${action.payload.replace(
          /\s/g,
          "+"
        )}&limit=25&offset=0&rating=R&lang=en`
      ).pipe(
        map(response => requestGifsSuccess(response)),
        catchError(error => requestGifsFailure(error))
      )
    )*/

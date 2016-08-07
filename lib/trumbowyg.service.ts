/**
 * Created by monad on 2016. 7. 19..
 */
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
const loadjs = require("loadjs");
export const TRUMBOWYG_STYLES_URL = 'https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.1.1/ui/trumbowyg.min.css';
export const JQUERY_SCRIPT_URL = 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js';
export const TRUMBOWYG_SCRIPT_URL = 'https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.1.1/trumbowyg.min.js';


@Injectable()
export class TrumbowygService {

  constructor() {
    loadjs(JQUERY_SCRIPT_URL, {
      success: () => {
        loadjs([TRUMBOWYG_STYLES_URL, TRUMBOWYG_SCRIPT_URL], 'trumbowyg');
      },
      fail: (depsNotFound:any) => {}
    });
  }

  load():Observable<any> {
    const promise = new Promise((resolve, reject) => {
      //noinspection TypeScriptUnresolvedFunction
      loadjs.ready('trumbowyg', {
        success: () => {
          resolve(true);
        },
        fail: (depsNotFound:any) => {
          reject(depsNotFound);
        }
      });
    });

    return Observable.fromPromise(promise);
  }
}
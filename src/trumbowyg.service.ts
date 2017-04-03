import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/retry";
import "rxjs/add/operator/publishReplay";

const loadjs = require("loadjs");
export const TRUMBOWYG_STYLES_URL = 'https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.4.2/ui/trumbowyg.min.css';
export const JQUERY_SCRIPT_URL = 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js';
export const TRUMBOWYG_SCRIPT_URL = 'https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.4.2/trumbowyg.min.js';
declare const window: any;
declare function require(path: string) : any;

@Injectable()
export class TrumbowygService {

  private isLoaded$: Observable<boolean>;

  constructor() {
    this.isLoaded$ = Observable.create((observer: any) => {
      if(window && window["jQuery"] && window["jQuery"]().on) {
        loadjs([TRUMBOWYG_STYLES_URL, TRUMBOWYG_SCRIPT_URL], 'trumbowyg');
      } else {
        loadjs(JQUERY_SCRIPT_URL, 'jQuery');
        loadjs.ready('jQuery', {
          success: () => loadjs([TRUMBOWYG_STYLES_URL, TRUMBOWYG_SCRIPT_URL], 'trumbowyg')
        });
      }

      loadjs.ready('trumbowyg', {
        success: () => {
          observer.next(true);
          observer.complete();
        },
        error: (depsNotFound: any) => {
          observer.error(depsNotFound);
        }
      });
    })
      .retry(2)
      .publishReplay(1)
      .refCount();

  }

  loaded(): Observable<boolean> {
    return this.isLoaded$;
  }
}

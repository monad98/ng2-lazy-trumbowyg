import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/retry";
import "rxjs/add/operator/publishReplay";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import {LoadExternalFiles} from "./load-external-file.service";
import {fromPromise} from "rxjs/observable/fromPromise";

const JQUERY_SCRIPT_URL = 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js';
const TRUMBOWYG_PREFIX_URL = 'https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.4.2'
const TRUMBOWYG_STYLES_URL = TRUMBOWYG_PREFIX_URL + '/ui/trumbowyg.min.css';
const TRUMBOWYG_SCRIPT_URL = TRUMBOWYG_PREFIX_URL + '/trumbowyg.min.js';

declare const window: any;

@Injectable()
export class TrumbowygService {

  private isLoaded$: Observable<boolean>;
  private loadedLangs$: Array<any> = [];
  private loadFile: any;

  constructor(loadFiles: LoadExternalFiles) {
    const loadFiles$ = window && window["jQuery"] && window["jQuery"]().on ?
      fromPromise(loadFiles.load(TRUMBOWYG_STYLES_URL, TRUMBOWYG_SCRIPT_URL))
      : fromPromise(loadFiles.load(JQUERY_SCRIPT_URL))
        .switchMap(() => fromPromise(loadFiles.load(TRUMBOWYG_STYLES_URL, TRUMBOWYG_SCRIPT_URL)));

    this.loadFile = (file: string) => loadFiles.load(file);
    this.isLoaded$ = loadFiles$
      .map(() => true)
      .publishReplay(1)
      .refCount();
  }

  private loadTranslation(lang: any){
    if(!lang || this.loadedLangs$.indexOf(lang) !== -1 || lang === 'en'){
      return Promise.resolve();
    }else{
      let langUrl = `${TRUMBOWYG_PREFIX_URL}/langs/${lang}.min.js`;
      return this.loadFile(langUrl)
      .then(() => {
        this.loadedLangs$.push(lang);
        return Promise.resolve();
      });
    }
  }

  translationLoaded(lang: any): Observable<boolean> {
    return fromPromise(this.loadTranslation(lang)).map(() => true).publishReplay(1).refCount();
  }

  loaded(): Observable<boolean> {
    return this.isLoaded$;
  }
}

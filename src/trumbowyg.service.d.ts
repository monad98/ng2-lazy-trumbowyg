import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/retry";
import "rxjs/add/operator/publishReplay";
export declare const TRUMBOWYG_STYLES_URL = "https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.4.2/ui/trumbowyg.min.css";
export declare const JQUERY_SCRIPT_URL = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js";
export declare const TRUMBOWYG_SCRIPT_URL = "https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.4.2/trumbowyg.min.js";
export declare class TrumbowygService {
    private isLoaded$;
    constructor();
    loaded(): Observable<boolean>;
}

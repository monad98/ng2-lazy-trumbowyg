"use strict";
var Observable_1 = require("rxjs/Observable");
var loadjs = require("loadjs");
exports.TRUMBOWYG_STYLES_URL = 'https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.4.2/ui/trumbowyg.min.css';
exports.JQUERY_SCRIPT_URL = 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js';
exports.TRUMBOWYG_SCRIPT_URL = 'https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.4.2/trumbowyg.min.js';
var TrumbowygService = (function () {
    function TrumbowygService() {
        this.isLoaded$ = Observable_1.Observable.create(function (observer) {
            if (window && window["jQuery"] && window["jQuery"]().on) {
                loadjs([exports.TRUMBOWYG_STYLES_URL, exports.TRUMBOWYG_SCRIPT_URL], 'trumbowyg');
            }
            else {
                loadjs(exports.JQUERY_SCRIPT_URL, 'jQuery');
                loadjs.ready('jQuery', {
                    success: function () { return loadjs([exports.TRUMBOWYG_STYLES_URL, exports.TRUMBOWYG_SCRIPT_URL], 'trumbowyg'); }
                });
            }
            loadjs.ready('trumbowyg', {
                success: function () {
                    observer.next(true);
                    observer.complete();
                },
                error: function (depsNotFound) {
                    observer.error(depsNotFound);
                }
            });
        })
            .retry(2)
            .publishReplay(1)
            .refCount();
    }
    TrumbowygService.prototype.loaded = function () {
        return this.isLoaded$;
    };
    return TrumbowygService;
}());
exports.TrumbowygService = TrumbowygService;
//# sourceMappingURL=trumbowyg.service.js.map
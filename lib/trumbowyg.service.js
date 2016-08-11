"use strict";
/**
 * Created by monad on 2016. 7. 19..
 */
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var loadjs = require("loadjs");
exports.TRUMBOWYG_STYLES_URL = 'https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.1.1/ui/trumbowyg.min.css';
exports.JQUERY_SCRIPT_URL = 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js';
exports.TRUMBOWYG_SCRIPT_URL = 'https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.1.1/trumbowyg.min.js';
var TrumbowygService = (function () {
    function TrumbowygService() {
        if (window && window.jQuery && window.jQuery().on) {
            loadjs([exports.TRUMBOWYG_STYLES_URL, exports.TRUMBOWYG_SCRIPT_URL], 'trumbowyg');
        }
        else {
            loadjs(exports.JQUERY_SCRIPT_URL, {
                success: function () {
                    loadjs([exports.TRUMBOWYG_STYLES_URL, exports.TRUMBOWYG_SCRIPT_URL], 'trumbowyg');
                },
                fail: function (depsNotFound) { }
            });
        }
    }
    TrumbowygService.prototype.load = function () {
        var promise = new Promise(function (resolve, reject) {
            //noinspection TypeScriptUnresolvedFunction
            loadjs.ready('trumbowyg', {
                success: function () {
                    resolve(true);
                },
                fail: function (depsNotFound) {
                    reject(depsNotFound);
                }
            });
        });
        return Rx_1.Observable.fromPromise(promise);
    };
    TrumbowygService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TrumbowygService);
    return TrumbowygService;
}());
exports.TrumbowygService = TrumbowygService;
//# sourceMappingURL=trumbowyg.service.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/retry");
require("rxjs/add/operator/publishReplay");
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
TrumbowygService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], TrumbowygService);
exports.TrumbowygService = TrumbowygService;
//# sourceMappingURL=trumbowyg.service.js.map
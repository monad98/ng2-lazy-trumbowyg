import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { TrumbowygService } from "./trumbowyg.service";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/do";
import "rxjs/add/operator/switchMap";
export declare class Trumbowyg implements OnInit, OnDestroy {
    private el;
    private trumbowygService;
    initialContent: string;
    togglePreview: boolean;
    liveUpdate: boolean;
    update: Observable<boolean>;
    private savedContent;
    private loaded$;
    private content$;
    private loadedSubscription;
    private updateSubscription;
    constructor(el: ElementRef, trumbowygService: TrumbowygService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}

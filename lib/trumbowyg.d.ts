import {
  Component, ElementRef, OnDestroy, Input, OnInit, EventEmitter, Output
} from '@angular/core';
import {Observable, Subject, BehaviorSubject} from "rxjs/Rx";
import {TrumbowygService} from "./trumbowyg.service";
declare const jQuery: any;

export declare class Trumbowyg implements OnInit, OnDestroy {
  initialContent: string;
  togglePreview: boolean;
  update: Observable<boolean>;
  savedContent: EventEmitter<any>;
  content$: Subject<string>;
  loaded$: Observable<boolean>;
  loadedSubscription:any;
  updateSubscription:any;
  constructor(el: ElementRef, trumbowygService: TrumbowygService);
  ngOnInit(): void;
  ngOnDestroy(): void;
}

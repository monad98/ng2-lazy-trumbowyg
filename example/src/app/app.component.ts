import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-root',
  template: `
    <h2>Angular 2 Trumbowyg Update with <strong>Observable</strong> Example </h2>
    <p>Updated only when update button clicked</p>
    <trumbowyg [initialContent]="initialContentOne"  
               [options]="options1"
               [update]="update$" 
               (savedContent)="contentOne=$event">
      
    </trumbowyg>
    <button (click)="togglePreview()">Toggle Preview(with update)</button>
    <button *ngIf="showPreview" (click)="update$.next()">Update</button>
    <h2>Preview Mode {{showPreview ? 'On':'Off'}} </h2>
    <div *ngIf="showPreview" [innerHTML]="contentOne"></div>
    
    <br><br><br>
    
    <h2>Angular 2 Trumbowyg <strong>Live Update</strong> Example</h2>
    <trumbowyg liveUpdate="true" 
               [initialContent]="initialContentTwo"
               [options]="options2"
               (savedContent)="contentTwo=$event">
      
    </trumbowyg>
    <div [innerHTML]="contentTwo"></div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public showPreview: boolean = false;
  public initialContentOne: string = `<h2>This is an initial title One.</h2><p>This is an initial content.</p><p><img src="https://angular.io/assets/images/logos/angular/angular.svg" alt=""><br></p><p><br></p>`
  public initialContentTwo: string = `<h2>This is an initial title Two.</h2><p>This is an initial content.</p><p><img src="https://angular.io/generated/images/marketing/home/loved-by-millions.svg" alt=""><br></p><p><br></p>`
  public contentOne: string;
  public contentTwo: string;
  public update$: Subject<any> = new Subject();
  public options1: any = {
    autogrow: true,
    removeformatPasted: true,
    semantic: false,
    btns: [['bold', 'italic'], ['link'],['foreColor', 'backColor'], ['preformatted'], ['noembed'], ['upload']],
    lang: 'fr'
  };

  public options2: any = {
    lang: 'ru'
  };

  togglePreview() {
    this.showPreview = !this.showPreview;
    if(this.showPreview) this.update$.next();
  }

  constructor() {
    setTimeout(() => {
      this.initialContentOne = "<h1>Contents can be manually updated 2</h1>"
      this.update$.next(); // this is needed only when you use ChangeDetectionStrategy.OnPush strategy
    },2000);
  }
}

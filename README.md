# ng2-lazy-trumbowyg
Angular 2 Component for async loading of [Trumbowyg](https://alex-d.github.io/Trumbowyg/) wysiwyg editor

[plunker example app](https://plnkr.co/edit/dirpKmLNalUmz0mpdrk7?p=preview)

[Demo app with SystemJS (github)](https://github.com/monad98/ng2-lazy-trumbowyg-example)

[Demo app with Angular-CLI (github)](https://github.com/monad98/ng2-lazy-trumbowyg-example-angularCLI)

# Install
`
npm install ng2-lazy-trumbowyg --save
`

# Usage
import TrumbowygModule in `app.module.ts`
```javascript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TrumbowygModule} from 'ng2-lazy-trumbowyg';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, TrumbowygModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

include <trumbowyg> in component template
```javascript
import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'my-app',
  template: `
    <h2>Angular 2 Trumbowyg Update with <strong>Observable</strong> Example </h2>
    <p>Updated only when update button clicked</p>
    <trumbowyg [togglePreview]="showPreview" [initialContent]="initialContentOne" [update]="update$" (savedContent)="contentOne=$event"></trumbowyg>
    <button (click)="showPreview=!showPreview">Toggle Preview</button>
    <button (click)="update$.next();showPreview=true">update content with observable</button>
    <h2>Preview Mode {{showPreview ? 'On':'Off'}} </h2>
    <div *ngIf="showPreview">
      <p [innerHTML]="contentOne"></p>
    </div>
     <br><br><br>
    <h2>Angular 2 Trumbowyg <strong>Live Update</strong> Example</h2>
    <trumbowyg liveUpdate="true" togglePreview="true" [initialContent]="initialContentTwo" (savedContent)="contentTwo=$event"></trumbowyg>
    <div>
      <p [innerHTML]="contentTwo"></p>
    </div>
     
  `,
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AppComponent {
  private content: string;
  private showPreview: boolean = false;
  private initialContentOne: string = `<h2>This is an initial title One.</h2><p>This is an initial content.</p><p><img src="https://angular.io/resources/images/logos/standard/shield-large.png" alt=""><br></p><p><br></p>`
  private initialContentTwo: string = `<h2>This is an initial title Two.</h2><p>This is an initial content.</p><p><img src="https://github.com/Alex-D/Trumbowyg/raw/develop/banner.png" alt=""><br></p><p><br></p>`
  private contentOne: string;
  private contentTwo: string;
  update$: Subject<any> = new Subject();
}
```

# Build
`
npm run build
`

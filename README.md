# ng2-lazy-trumbowyg
Angular 2 Component for async loading of [Trumbowyg](https://alex-d.github.io/Trumbowyg/) wysiwyg editor
Only few users on your app use text editor. This module let Angular app load jQuery, Trumbowyg js files and css file only for the users who write something.

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
  public initialContentOne: string = `<h2>This is an initial title One.</h2><p>This is an initial content.</p><p><img src="https://angular.io/assets/images/home/loved-by-millions.png" alt=""><br></p><p><br></p>`
  public initialContentTwo: string = `<h2>This is an initial title Two.</h2><p>This is an initial content.</p><p><img src="https://github.com/Alex-D/Trumbowyg/raw/develop/banner.png" alt=""><br></p><p><br></p>`
  public contentOne: string;
  public contentTwo: string;
  public update$: Subject<any> = new Subject();
  public options1: any = {
    autogrow: true,
    removeformatPasted: true,
    semantic: false,
    btns: [['bold', 'italic'], ['link']],
    lang: 'fr'
  };

  public options2: any = {
    lang: 'ru'
  };

  togglePreview() {
    this.showPreview = !this.showPreview;
    if(this.showPreview) this.update$.next();
  }
}

```

# Build
`
npm run build
`

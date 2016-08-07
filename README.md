# ng2-lazy-trumbowyg
Angular 2 Component for lazy loading of Trumbowyg wysiwyg editor with [loadjs](https://github.com/muicss/loadjs)

[plunker example app](http://plnkr.co/edit/eFoz6G5Thnpy3J0vRlS4?p=preview) 

# Install
```
npm install ng2-lazy-trumbowyg
```

# Usage

```javascript
import { Component } from '@angular/core';
import { Trumbowyg } from ‘ng2-lazy-trumbowyg’
import { Subject } from 'rxjs/Rx'
@Component({
  selector: 'my-app',
  template: `
    <h1>Angular 2 Trumbowyg Example</h1>
    <trumbowyg [togglePreview]="showPreview" [initialContent]="initialContent" [update]="update$" (savedContent)="content=$event"></trumbowyg>
    <button (click)="showPreview=!showPreview">Toggle Preview</button>
    <button (click)="update$.next();showPreview=true">update content with observable</button>
    <h2>Preview Mode {{showPreview ? 'On':'Off'}}</h2>
    <div *ngIf="showPreview">
      <p [innerHTML]="content"></p>
    </div> 
  `,
  directives: [Trumbowyg]
})
export class AppComponent {
  private content: string;
  private showPreview: boolean = false;
  private initialContent: string = `<h2>This is an initial title.</h2><p>This is an initial content.</p><p><img src="https://angular.io/resources/images/logos/standard/shield-large.png" alt=""><br></p><p><br></p>`
  update$: Subject<boolean> = new Subject();
}
```
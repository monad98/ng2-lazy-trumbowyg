import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {TrumbowygModule} from 'ng2-lazy-trumbowyg';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //emoji doesn't work yet due to its dependency. table plug-in and insertaudio don't have icons.
    TrumbowygModule.forRoot({plugins: ['colors', 'noembed', 'preformatted', 'pasteimage', 'upload'], version: '2.9.4'})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

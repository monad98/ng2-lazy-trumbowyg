import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Trumbowyg} from "./src/trumbowyg.component";
import {TrumbowygService} from "./src/trumbowyg.service";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    Trumbowyg
  ],
  providers: [
    TrumbowygService
  ],
  exports: [
    Trumbowyg
  ]
})
export class TrumbowygModule {}
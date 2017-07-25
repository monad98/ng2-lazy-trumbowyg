import { NgModule } from '@angular/core';
import {Trumbowyg} from "./src/trumbowyg.component";
import {TrumbowygService} from "./src/trumbowyg.service";
import {LoadExternalFiles} from "./src/load-external-file.service";

@NgModule({
  imports: [],
  declarations: [ Trumbowyg ],
  providers: [ TrumbowygService, LoadExternalFiles ],
  exports: [ Trumbowyg ]
})
export class TrumbowygModule {}
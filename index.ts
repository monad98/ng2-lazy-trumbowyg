import { NgModule, ModuleWithProviders } from '@angular/core';
import {Trumbowyg} from "./src/trumbowyg.component";
import {TrumbowygService} from "./src/trumbowyg.service";
import {TrumbowygConfig} from "./src/trumbowyg.config";
import {LoadExternalFiles} from "./src/load-external-file.service";

@NgModule({
  imports: [],
  declarations: [ Trumbowyg ],
  providers: [ LoadExternalFiles, TrumbowygService ],
  exports: [ Trumbowyg ]
})

export class TrumbowygModule {
  static forRoot(config: TrumbowygConfig): ModuleWithProviders {
    return {
      ngModule: TrumbowygModule,
      providers: [
        { provide: TrumbowygConfig, useValue: config }
      ]
    };
  }
}

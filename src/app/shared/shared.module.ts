import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import {
  ApiService,
  DomService,
  CacheService,
  LoadingService,
} from './services';

import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  declarations: [
    LoadingComponent
  ],
  entryComponents: [
    LoadingComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ApiService,
        DomService,
        CacheService,
        LoadingService
      ]
    };
  }
}

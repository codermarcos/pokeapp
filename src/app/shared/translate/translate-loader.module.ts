import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

export const LoaderFunction = (http: HttpClient) => new TranslateHttpLoader(http, './i18n/', '.json');

export const TranslateLoaderModule = () => TranslateModule.forRoot({
  loader: {
    useFactory: LoaderFunction,
    provide: TranslateLoader,
    deps: [HttpClient]
  }
});

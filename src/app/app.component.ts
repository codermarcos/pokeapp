import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    const language = localStorage.getItem('_lang') || navigator.language.substr(0, 2);
    switch (language) {
      case 'pt' || 'en' || 'es':
        translate.setDefaultLang(language);
        break;

      default:
        translate.setDefaultLang('en');
        break;
    }
  }
}

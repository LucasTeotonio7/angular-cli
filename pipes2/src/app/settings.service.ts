import { Injectable } from '@angular/core';

// providers LOCALE_ID
import localePT from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePT, 'pt-BR');

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  getLocale(){
    return 'pt-BR'
  }

}

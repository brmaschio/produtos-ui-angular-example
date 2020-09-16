import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import br from '@angular/common/locales/br';

import { CepService } from './services/cep.service';

import { ConfirmationService, MessageService } from 'primeng/api';
import { ErrorHandlerService } from './services/error-handler.service';

registerLocaleData(br, 'pt-BR');

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    ErrorHandlerService,
    CepService,
    ConfirmationService,
    MessageService,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { CepService } from './services/cep.service';

import { ConfirmationService, MessageService } from 'primeng/api';
import { ErrorHandlerService } from './services/error-handler.service';

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
    MessageService
  ]
})
export class CoreModule { }

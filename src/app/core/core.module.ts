import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import br from '@angular/common/locales/br';
import { RouterModule } from '@angular/router';

import { CepService } from './services/cep.service';

import { ConfirmationService, MessageService } from 'primeng/api';
import { ErrorHandlerService } from './services/error-handler.service';
import { MenubarComponent } from './menubar/menubar.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

registerLocaleData(br, 'pt-BR');

@NgModule({
  declarations: [
    MenubarComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [
    ErrorHandlerService,
    CepService,
    ConfirmationService,
    MessageService,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  exports: [
    MenubarComponent
  ]
})
export class CoreModule { }

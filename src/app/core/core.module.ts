// Angular
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import br from '@angular/common/locales/br';
import { RouterModule } from '@angular/router';

// Projeto
import { CepService } from './services/cep.service';
import { ErrorHandlerService } from './services/error-handler.service';
import { MenubarComponent } from './menubar/menubar.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

// IU
import { ConfirmationService, MessageService } from 'primeng/api';

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
    // Angular
    { provide: LOCALE_ID, useValue: 'pt-BR' },

    // Projeto
    ErrorHandlerService,
    CepService,

    // UI
    ConfirmationService,
    MessageService,

  ],
  exports: [
    MenubarComponent
  ]
})
export class CoreModule { }

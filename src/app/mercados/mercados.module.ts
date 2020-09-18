// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Projeto
import { MercadosPesquisaComponent } from './mercados-pesquisa/mercados-pesquisa.component';
import { MercadosCadastroComponent } from './mercados-cadastro/mercados-cadastro.component';
import { MercadosService } from './mercados.service';
import { MercadosRoutingModule } from './mercados-routing.module';
import { SharedModule } from '../shared/shared.module';

// UI
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TabViewModule } from 'primeng/tabview';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

// Terceiros
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    MercadosPesquisaComponent,
    MercadosCadastroComponent
  ],
  imports: [
    // Angular
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,

    // Terceiros
    NgxMaskModule.forRoot(),

    // UI
    TableModule,
    ButtonModule,
    TooltipModule,
    CardModule,
    InputTextModule,
    SelectButtonModule,
    TabViewModule,
    ConfirmDialogModule,

    // Projeto
    SharedModule,
    MercadosRoutingModule,
  ],
  providers: [
    MercadosService
  ]
})
export class MercadosModule { }

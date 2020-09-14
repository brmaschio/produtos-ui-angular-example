import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MercadosPesquisaComponent } from './mercados-pesquisa/mercados-pesquisa.component';
import { MercadosCadastroComponent } from './mercados-cadastro/mercados-cadastro.component';
import { MercadosService } from './mercados.service';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TabViewModule } from 'primeng/tabview';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { NgxMaskModule } from 'ngx-mask'

@NgModule({
  declarations: [
    MercadosPesquisaComponent,
    MercadosCadastroComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    TableModule,
    ButtonModule,
    TooltipModule,
    CardModule,
    InputTextModule,
    SelectButtonModule,
    TabViewModule,
    ConfirmDialogModule,
  ],
  providers: [
    MercadosService
  ]
})
export class MercadosModule { }

// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Projeto
import { ProdutosPesquisaComponent } from './produtos-pesquisa/produtos-pesquisa.component';
import { ProdutosCadastroComponent } from './produtos-cadastro/produtos-cadastro.component';
import { ProdutosService } from './produtos.service';
import { SharedModule } from '../shared/shared.module';
import { ProdutosRoutingModule } from './produtos-routing.module';

// UI
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TabViewModule } from 'primeng/tabview';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    ProdutosPesquisaComponent,
    ProdutosCadastroComponent
  ],
  imports: [
    // Angular
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,

    // UI
    InputTextModule,
    ButtonModule,
    TableModule,
    CardModule,
    TooltipModule,
    ConfirmDialogModule,
    TabViewModule,
    SelectButtonModule,
    DropdownModule,

    // Projeto
    SharedModule,
    ProdutosRoutingModule,
  ],
  providers: [
    ProdutosService
  ]
})
export class ProdutosModule { }

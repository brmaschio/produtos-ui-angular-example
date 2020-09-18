import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';

import { MercadoriasComponent } from './mercadorias/mercadorias.component';
import { MercadoriasService } from './mercadorias.service';
import { SharedModule } from '../shared/shared.module';
import { MercadoriasCadastroComponent } from './mercadorias-cadastro/mercadorias-cadastro.component';

@NgModule({
  declarations: [
    MercadoriasComponent,
    MercadoriasCadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    TableModule,
    ButtonModule,
    ToggleButtonModule,
    InputTextModule,
    TooltipModule,
    InputNumberModule,
    SharedModule,
    DialogModule,
    DropdownModule
  ],
  providers: [
    MercadoriasService
  ]
})
export class MercadoriasModule { }

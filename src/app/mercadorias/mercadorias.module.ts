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

import { MercadoriasComponent } from './mercadorias/mercadorias.component';
import { MercadoriasService } from './mercadorias.service';

@NgModule({
  declarations: [
    MercadoriasComponent
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
    InputNumberModule
  ],
  providers: [
    MercadoriasService
  ]
})
export class MercadoriasModule { }

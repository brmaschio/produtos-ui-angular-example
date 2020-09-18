// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// UI
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';

// Projeto
import { MercadoriasComponent } from './mercadorias/mercadorias.component';
import { MercadoriasService } from './mercadorias.service';
import { SharedModule } from '../shared/shared.module';
import { MercadoriasCadastroComponent } from './mercadorias-cadastro/mercadorias-cadastro.component';
import { MercadoriasRoutingModule } from './mercadorias-routing.module';

@NgModule({
  declarations: [
    MercadoriasComponent,
    MercadoriasCadastroComponent
  ],
  imports: [
    // Angular
    CommonModule,
    FormsModule,

    // UI
    CardModule,
    TableModule,
    ButtonModule,
    ToggleButtonModule,
    InputTextModule,
    TooltipModule,
    InputNumberModule,
    DialogModule,
    DropdownModule,

    // Projeto
    SharedModule,
    MercadoriasRoutingModule,
  ],
  providers: [
    MercadoriasService
  ]
})
export class MercadoriasModule { }

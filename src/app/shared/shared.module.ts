// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// UI
import { TooltipModule } from 'primeng/tooltip';

// Projeto
import { TagButtonComponent } from './tag-button/tag-button.component';

@NgModule({
  declarations: [
    TagButtonComponent
  ],
  imports: [
    // Angular
    CommonModule,

    // UI
    TooltipModule
  ],
  exports: [
    TagButtonComponent
  ]
})
export class SharedModule { }

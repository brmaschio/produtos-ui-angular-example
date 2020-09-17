import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipModule } from 'primeng/tooltip';

import { TagButtonComponent } from './tag-button/tag-button.component';

@NgModule({
  declarations: [
    TagButtonComponent
  ],
  imports: [
    CommonModule,
    TooltipModule
  ],
  exports: [
    TagButtonComponent
  ]
})
export class SharedModule { }

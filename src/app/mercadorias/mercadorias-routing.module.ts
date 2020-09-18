import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../seguranca/auth.guard';
import { MercadoriasComponent } from './mercadorias/mercadorias.component';

const defaultRoles = ['ROLE_MERCADORIA'];

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    data: { roles: defaultRoles },
    component: MercadoriasComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MercadoriasRoutingModule { }

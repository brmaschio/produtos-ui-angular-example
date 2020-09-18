import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MercadosPesquisaComponent } from './mercados-pesquisa/mercados-pesquisa.component';
import { MercadosCadastroComponent } from './mercados-cadastro/mercados-cadastro.component';
import { AuthGuard } from '../seguranca/auth.guard';

const defaultRoles = ['ROLE_MERCADO'];

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    data: { roles: defaultRoles },
    component: MercadosPesquisaComponent
  },
  {
    path: 'novo',
    canActivate: [AuthGuard],
    data: { roles: defaultRoles },
    component: MercadosCadastroComponent
  },
  {
    path: ':id',
    canActivate: [AuthGuard],
    data: { roles: defaultRoles },
    component: MercadosCadastroComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MercadosRoutingModule { }

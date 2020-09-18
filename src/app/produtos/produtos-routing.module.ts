import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutosPesquisaComponent } from './produtos-pesquisa/produtos-pesquisa.component';
import { ProdutosCadastroComponent } from './produtos-cadastro/produtos-cadastro.component';
import { AuthGuard } from '../seguranca/auth.guard';

const defaultRoles = ['ROLE_PRODUTO'];

const routes: Routes = [
  {
    path: '',
    component: ProdutosPesquisaComponent,
    canActivate: [AuthGuard],
    data: { roles: defaultRoles }
  },
  {
    path: 'novo',
    component: ProdutosCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: defaultRoles }
  },
  {
    path: ':id',
    component: ProdutosCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: defaultRoles }
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }

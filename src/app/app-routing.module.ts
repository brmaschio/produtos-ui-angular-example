import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './seguranca/auth.guard';

import { ProdutosCadastroComponent } from './produtos/produtos-cadastro/produtos-cadastro.component';
import { ProdutosPesquisaComponent } from './produtos/produtos-pesquisa/produtos-pesquisa.component';
import { MercadosPesquisaComponent } from './mercados/mercados-pesquisa/mercados-pesquisa.component';
import { MercadosCadastroComponent } from './mercados/mercados-cadastro/mercados-cadastro.component';
import { MercadoriasComponent } from './mercadorias/mercadorias/mercadorias.component';
import { LoginComponent } from './seguranca/login/login.component';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  { path: 'produtos', canActivate: [AuthGuard], data: { roles: ['ROLE_PRODUTO'] }, component: ProdutosPesquisaComponent },
  { path: 'produtos/novo', canActivate: [AuthGuard], data: { roles: ['ROLE_PRODUTO'] }, component: ProdutosCadastroComponent },
  { path: 'produtos/:id', canActivate: [AuthGuard], data: { roles: ['ROLE_PRODUTO'] }, component: ProdutosCadastroComponent },
  { path: 'mercados', canActivate: [AuthGuard], data: { roles: ['ROLE_MERCADO'] }, component: MercadosPesquisaComponent },
  { path: 'mercados/novo', canActivate: [AuthGuard], data: { roles: ['ROLE_MERCADO'] }, component: MercadosCadastroComponent },
  { path: 'mercados/:id', canActivate: [AuthGuard], data: { roles: ['ROLE_MERCADO'] }, component: MercadosCadastroComponent },
  { path: 'mercadorias', canActivate: [AuthGuard], data: { roles: ['ROLE_MERCADORIA'] }, component: MercadoriasComponent },

  { path: 'nao-encontrado', component: PaginaNaoEncontradaComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch:  'full' },
  { path: '**', redirectTo: 'nao-encontrado' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

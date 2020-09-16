import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutosCadastroComponent } from './produtos/produtos-cadastro/produtos-cadastro.component';
import { ProdutosPesquisaComponent } from './produtos/produtos-pesquisa/produtos-pesquisa.component';
import { MercadosPesquisaComponent } from './mercados/mercados-pesquisa/mercados-pesquisa.component';
import { MercadosCadastroComponent } from './mercados/mercados-cadastro/mercados-cadastro.component';
import { MercadoriasComponent } from './mercadorias/mercadorias/mercadorias.component';

const routes: Routes = [
  { path: 'produtos', component: ProdutosPesquisaComponent },
  { path: 'produtos/novo', component: ProdutosCadastroComponent },
  { path: 'produtos/:id', component: ProdutosCadastroComponent },
  { path: 'mercados', component: MercadosPesquisaComponent },
  { path: 'mercados/novo', component: MercadosCadastroComponent },
  { path: 'mercados/:id', component: MercadosCadastroComponent },
  { path: 'mercadorias', component: MercadoriasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

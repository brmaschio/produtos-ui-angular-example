import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './seguranca/login/login.component';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [

  { path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) },
  { path: 'mercados', loadChildren: () => import('./mercados/mercados.module').then(m => m.MercadosModule) },
  { path: 'mercadorias', loadChildren: () => import('./mercadorias/mercadorias.module').then(m => m.MercadoriasModule) },

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

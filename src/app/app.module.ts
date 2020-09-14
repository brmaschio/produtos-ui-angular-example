import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MercadosModule } from './mercados/mercados.module';
import { ProdutosModule } from './produtos/produtos.module';
import { CoreModule } from './core/core.module';

import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MercadosModule,
    ProdutosModule,
    CoreModule,
    ToastModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

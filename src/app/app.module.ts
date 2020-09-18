// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Projeto
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SegurancaModule } from './seguranca/seguranca.module';
import { CoreModule } from './core/core.module';

// UI
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular
    BrowserModule,
    AppRoutingModule,

    // Projeto
    SegurancaModule,
    CoreModule,

    // UI
    ToastModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

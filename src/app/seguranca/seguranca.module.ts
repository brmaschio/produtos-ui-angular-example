// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Terceiros
import { JwtModule } from '@auth0/angular-jwt';

// Projeto
import { LoginComponent } from './login/login.component';
import { LogoutService } from './logout.service';
import { SecurityHttp } from './security-http';
import { AuthService } from './auth.service';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    // Responsavel Por Colocar o Token Nas Requisições Http
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:8080'],
        disallowedRoutes: ['http://localhost:8080/oauth/token'],
      },
    }),

  ],
  providers: [
    LogoutService,
    AuthService,
    SecurityHttp,
  ]
})
export class SegurancaModule { }

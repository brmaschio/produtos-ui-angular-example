import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.auth.isAccessTokenInvalido()) {

      return this.auth.obterNovoAccessToken().then(() => {

        if (this.auth.isAccessTokenInvalido()) {
          this.router.navigate(['/login']);
          return false;
        }

        return this.verificaPermicao(next);

      });

    }

    return this.verificaPermicao(next);

  }

  private verificaPermicao(next: ActivatedRouteSnapshot) {

    if (next.data.roles && this.auth.temPermissao(next.data.roles[0])){
      return true;
    }

    this.router.navigate(['/nao-encontrado']);
    return false;

  }

}

import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  oauthTokenUrl: string;
  jwtPayload: any;

  constructor(
    private http: HttpClient,
  ) {
    this.oauthTokenUrl = `${environment.apiUrl}/oauth/token`;
    this.carregaToken();
  }

  jwtHelper = new JwtHelperService();

  login(usuario: string, senha: string): Promise<void> {

    const header = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization', 'Basic dXN1YXJpb0V4ZW1wbG86c2VuaGFAdGVzdGU3ODk=');

    const headers = { headers: header, withCredentials: true };

    const body = `username=${usuario}&password=${senha}&grant_type=password`;

    return this.http.post<any>(this.oauthTokenUrl, body, headers).toPromise().then(response => {

      this.armazenarToken(response.access_token);

    }).catch(error => {

      return Promise.reject(error);

    });
  }

  obterNovoAccessToken(): Promise<void> {

    const header = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization', 'Basic dXN1YXJpb0V4ZW1wbG86c2VuaGFAdGVzdGU3ODk=');

    const headers = { headers: header, withCredentials: true };

    const body = 'grant_type=refresh_token';

    return this.http.post<any>(this.oauthTokenUrl, body, headers).toPromise().then(response => {

      this.armazenarToken(response.access_token);

      return Promise.resolve(null);

    }).catch(() => {
      return Promise.resolve(null);
    });

  }

  isAccessTokenInvalido() {

    const token = localStorage.getItem('token');

    return !token || this.jwtHelper.isTokenExpired(token);

  }

  temPermissao(permissao) {
    return this.jwtPayload && this.jwtPayload.authorities.includes(permissao);
  }

  limparAccessToken() {
    localStorage.removeItem('token');
    this.jwtPayload = null;
  }

  private armazenarToken(token: string) {

    const decodedToken = this.jwtHelper.decodeToken(token);
    this.jwtPayload = decodedToken;

    localStorage.setItem('token', token);

  }

  private carregaToken() {

    const token = localStorage.getItem('token');

    if (token) {
      this.armazenarToken(token);
    }

  }


}

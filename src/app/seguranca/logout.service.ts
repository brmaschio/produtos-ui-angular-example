import { Injectable } from '@angular/core';

import { SecurityHttp } from './security-http';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  tokensRenokeUrl: string;

  constructor(
    private http: SecurityHttp,
    private auth: AuthService,
  ) {
    this.tokensRenokeUrl = `${environment.apiUrl}/tokens/revoke`;
  }

  logout(): Promise<any> {

    return this.http.delete(this.tokensRenokeUrl, { withCredentials: true }).toPromise().then(() => {
      this.auth.limparAccessToken();
    });

  }

}

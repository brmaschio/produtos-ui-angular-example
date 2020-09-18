import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private router: Router,
  ) { }

  login(usuario: string, senha: string) {

    this.auth.login(usuario, senha).then(() => {

      this.router.navigate(['/mercados']);

    }).catch(erro => {
      this.errorHandler.handle(erro);
    });

  }

}

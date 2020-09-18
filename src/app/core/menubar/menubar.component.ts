import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/seguranca/auth.service';
import { LogoutService } from 'src/app/seguranca/logout.service';
import { ErrorHandlerService } from '../services/error-handler.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent {

  exibindoMenu = false;

  constructor(
    public auth: AuthService,
    private router: Router,
    private logoutService: LogoutService,
    private errorHandler: ErrorHandlerService,
  ) { }

  logout() {

    this.logoutService.logout().then(() => {

      this.router.navigate(['/login']);

    }).catch(error => {

      this.errorHandler.handle(error);

    });

  }

  menualt() {
    this.exibindoMenu = !this.exibindoMenu;
  }

}

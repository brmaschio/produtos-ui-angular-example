import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { MessageService } from 'primeng/api';

import { NotAuthenticatedError } from 'src/app/seguranca/security-http';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(
    private messageService: MessageService,
    private router: Router,
  ) { }

  handle(errorResponse: any) {

    // console.log(errorResponse);

    let msg = 'Erro Ao Processar Serviço';

    if (typeof errorResponse === 'string') {

      msg = errorResponse;

    } else if (errorResponse instanceof NotAuthenticatedError || errorResponse.error.error === 'invalid_token') {

      msg = 'Sua sessão expirou!';
      this.router.navigate(['/login']);

    } else if (errorResponse instanceof HttpErrorResponse && errorResponse.status >= 400 && errorResponse.status <= 499) {

      if (errorResponse.status === 403) {
        msg = 'Você não tem permissão para executar esta ação';
      }

      try {
        msg = errorResponse.error[0].mensagemErro;
      } catch (e) { }

    }

    this.messageService.add({ severity: 'error', detail: msg });

  }

}

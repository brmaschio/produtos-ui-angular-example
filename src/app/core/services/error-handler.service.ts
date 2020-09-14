import { Injectable } from '@angular/core';

import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(
    private messageService: MessageService
  ) { }

  handle(errorResponse: any) {

    // TODO criar
    console.log(errorResponse);

    this.messageService.add({
      severity: 'error',
      detail: 'Erro Ao Processar Serviço'
    });

  }

}

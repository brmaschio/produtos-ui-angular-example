import { Component } from '@angular/core';

import { LazyLoadEvent, MessageService } from 'primeng/api';

import { Mercadoria } from 'src/app/core/model';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';

import { MercadoriasFiltro, MercadoriasService } from '../mercadorias.service';

@Component({
  selector: 'app-mercadorias',
  templateUrl: './mercadorias.component.html',
  styleUrls: ['./mercadorias.component.scss']
})
export class MercadoriasComponent {

  filtro = new MercadoriasFiltro();
  mercadorias = Array<Mercadoria>();
  totalDeRegistros = 0;

  mercadoriasEditando: { [s: string]: any; } = {};

  constructor(
    private service: MercadoriasService,
    private errorHandlerService: ErrorHandlerService,
    private messageService: MessageService,
  ) { }

  mudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  limparPesquisa() {
    this.filtro = new MercadoriasFiltro();
    this.pesquisar();
  }

  pesquisar(pagina = 0) {

    this.filtro.pagina = pagina;

    this.service.buscarMercadorias(this.filtro).then(response => {

      this.mercadorias = response.content;
      this.totalDeRegistros = response.totalElements;

    }).catch(error => {
      this.errorHandlerService.handle(error);
    });

  }

  iniciarEdicaoLinha(mercadoria: Mercadoria) {
    this.mercadoriasEditando[mercadoria.id] = { ...mercadoria };
  }

  cancelarEdicaoLinha(mercadoria: Mercadoria, index: number) {
    this.mercadorias[index] = this.mercadoriasEditando[mercadoria.id];
  }

  salvarEdicaoLinha(mercadoria: Mercadoria, index: number) {

    this.service.atualizar(mercadoria).then(response => {

      delete this.mercadoriasEditando[mercadoria.id];
      this.mercadorias[index] = response;

      this.messageService.add({
        severity: 'success',
        summary: 'Sucesso',
        detail: 'Mercadoria Atualizada'
      });

    }).catch(error => {
      this.errorHandlerService.handle(error);
    });

  }

}

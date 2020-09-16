import { Component } from '@angular/core';

import { MercadosFiltro, MercadosService } from '../mercados.service';

import { ConfirmationService, LazyLoadEvent } from 'primeng/api';

import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';
import { Mercado } from 'src/app/core/model';

@Component({
  selector: 'app-mercados-pesquisa',
  templateUrl: './mercados-pesquisa.component.html',
  styleUrls: ['./mercados-pesquisa.component.scss']
})
export class MercadosPesquisaComponent {

  filtro = new MercadosFiltro();
  mercados = Array<Mercado>();
  totalDeRegistros = 0;

  constructor(
    private confirmationService: ConfirmationService,
    private service: MercadosService,
    private errorHandlerService: ErrorHandlerService,
  ) { }

  mudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  pesquisar(pagina = 0) {

    this.filtro.pagina = pagina;

    this.service.buscarMercados(this.filtro).then(response => {

      this.mercados = response.content;
      this.totalDeRegistros = response.totalElements;

    }).catch(error => {
      this.errorHandlerService.handle(error);
    });

  }

  alterarStatus(mercado: Mercado) {

    this.service.alterarStatus(mercado.id).then(response => {
      mercado.status = response.status;
    }).catch(error => {
      this.errorHandlerService.handle(error);
    });

  }

  urlImagem(mercadoImagem: string): string {
    return mercadoImagem ? mercadoImagem : 'assets/images/mercado-default.jpg';
  }

  limparPesquisa() {
    this.filtro = new MercadosFiltro();
    this.pesquisar();
  }

  excluir(mercado: Mercado) {

    this.confirmationService.confirm({
      message: 'Tem Certeza Que Desaja Exluir ' + mercado.nome,
      accept: () => {
        this.confirmaExcluir(mercado.id);
      }
    });
  }

  private confirmaExcluir(id: number) {

    this.service.excluir(id).then(() => {

      this.pesquisar(this.filtro.pagina);

    }).catch(error => {
      this.errorHandlerService.handle(error);
    });

  }

}

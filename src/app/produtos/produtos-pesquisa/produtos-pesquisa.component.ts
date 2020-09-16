import { Component } from '@angular/core';

import { ProdutosFiltro, ProdutosService } from '../produtos.service';

import { ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';
import { Produto } from 'src/app/core/model';

@Component({
  selector: 'app-produtos-pesquisa',
  templateUrl: './produtos-pesquisa.component.html',
  styleUrls: ['./produtos-pesquisa.component.scss']
})
export class ProdutosPesquisaComponent {

  filtro = new ProdutosFiltro();
  produtos = Array<Produto>();
  totalDeRegistros = 0;

  constructor(
    private confirmationService: ConfirmationService,
    private service: ProdutosService,
    private errorHandlerService: ErrorHandlerService,
  ) { }

  mudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  pesquisar(pagina = 0) {

    this.filtro.pagina = pagina;

    this.service.buscarProdutos(this.filtro).then(response => {

      this.produtos = response.content;
      this.totalDeRegistros = response.totalElements;

    }).catch(error => {
      this.errorHandlerService.handle(error);
    });

  }

  limparPesquisa() {
    this.filtro = new ProdutosFiltro();
    this.pesquisar();
  }

  alterarStatus(produto: Produto) {

    this.service.alterarStatus(produto.id).then(response => {

      produto.status = response.status;

    }).catch(error => {
      this.errorHandlerService.handle(error);
    });

  }

  urlImagem(mercadoImagem: string): string {
    return mercadoImagem ? mercadoImagem : 'assets/images/produto-default.jpg';
  }

  excluir(produto: Produto) {

    this.confirmationService.confirm({
      message: 'Tem Certeza Que Desaja Exluir ' + produto.nome,
      accept: () => {
        this.confirmaExcluir(produto.id);
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

import { Component, OnInit } from '@angular/core';

import { ProdutosFiltro } from '../produtos.service';

import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-produtos-pesquisa',
  templateUrl: './produtos-pesquisa.component.html',
  styleUrls: ['./produtos-pesquisa.component.scss']
})
export class ProdutosPesquisaComponent implements OnInit {

  filtro = new ProdutosFiltro;
  produtos = [];

  constructor(
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
  }

  pesquisar() {
    console.log('Pesquisar... ' + this.filtro.nome);
  }

  alterarStatus(id) {
    console.log('alterar status ' + id);
  }

  urlImagem(mercadoImagem): string {
    return mercadoImagem ? mercadoImagem : 'assets/images/produto-default.jpg';
  }

  excluir(produto) {

    this.confirmationService.confirm({
      message: 'Tem Certeza Que Desaja Exluir ' + produto.nome,
      accept: () => {
        this.confirmaExcluir(produto.id);
      }
    });
  }

  private confirmaExcluir(id: number) {

    console.log('Excluir', id)

  }

}

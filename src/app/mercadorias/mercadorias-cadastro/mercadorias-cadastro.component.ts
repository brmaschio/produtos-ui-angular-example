import { Component, Input, Output, EventEmitter } from '@angular/core';

import { MessageService } from 'primeng/api';

import { Mercado, Mercadoria, Produto } from 'src/app/core/model';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';
import { MercadosFiltro, MercadosService } from 'src/app/mercados/mercados.service';
import { ProdutosFiltro, ProdutosService } from 'src/app/produtos/produtos.service';
import { MercadoriasService } from '../mercadorias.service';

@Component({
  selector: 'app-mercadorias-cadastro',
  templateUrl: './mercadorias-cadastro.component.html',
  styleUrls: ['./mercadorias-cadastro.component.scss']
})
export class MercadoriasCadastroComponent {

  @Input() display = false;

  @Output() mercadoriaAdicionada = new EventEmitter();
  @Output() fecharDialog = new EventEmitter();

  mercados: Array<Mercado>;
  produtos: Array<Produto>;
  mercadoriaNova = new Mercadoria();
  filtroMercado = new MercadosFiltro();
  filtroProuto = new ProdutosFiltro();

  constructor(
    private mercadoService: MercadosService,
    private produtoService: ProdutosService,
    private errorHandlerService: ErrorHandlerService,
    private messageService: MessageService,
    private service: MercadoriasService,
  ) {

    this.filtroMercado.itensPorPagina = 1000;
    this.filtroProuto.itensPorPagina = 1000;

    this.mercadoriaNova.mercado = null;
    this.mercadoriaNova.produto = null;

  }

  salvar(form) {

    this.service.criar(this.mercadoriaNova).then(response => {

      form.reset();
      this.display = false;
      this.mercadoriaAdicionada.emit(response);

    }).catch(error => {
      this.errorHandlerService.handle(error);
    });

  }

  pesquisarProduto() {

    this.produtoService.buscarProdutos(this.filtroProuto).then(response => {

      this.produtos = response.content.map(produto => ({ label: produto.nome, value: produto }));

      this.messageService.add({
        severity: 'info',
        detail: 'Produtos Carregados'
      });

    }).catch(error => {
      this.errorHandlerService.handle(error);
    });

  }

  pesquisarMercado() {

    this.mercadoService.buscarMercados(this.filtroMercado).then(response => {

      this.mercados = response.content.map(mercado => ({ label: mercado.nome, value: mercado }));

      this.messageService.add({
        severity: 'info',
        detail: 'Mercados Carregados'
      });

    }).catch(error => {
      this.errorHandlerService.handle(error);
    });

  }

  fechar() {
    this.display = false;
    this.fecharDialog.emit(false);
  }

}

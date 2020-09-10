import { Component, OnInit } from '@angular/core';

import { MercadosFiltro } from '../mercados.service';

import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-mercados-pesquisa',
  templateUrl: './mercados-pesquisa.component.html',
  styleUrls: ['./mercados-pesquisa.component.scss']
})
export class MercadosPesquisaComponent implements OnInit {

  filtro = new MercadosFiltro;
  mercados = [];

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
    return mercadoImagem ? mercadoImagem : 'assets/images/mercado-default.jpg';
  }

  excluir(mercado) {

    this.confirmationService.confirm({
      message: 'Tem Certeza Que Desaja Exluir ' + mercado.nome,
      accept: () => {
        this.confirmaExcluir(mercado.id);
      }
    });
  }

  private confirmaExcluir(id: number) {

    console.log('Excluir', id)

  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Status } from 'src/app/core/model';
import { ProdutosService } from '../produtos.service';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-produtos-cadastro',
  templateUrl: './produtos-cadastro.component.html',
  styleUrls: ['./produtos-cadastro.component.scss']
})
export class ProdutosCadastroComponent implements OnInit {

  formulario: FormGroup;
  categorias = [];
  statusOptions = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service: ProdutosService,
    private errorHandlerService: ErrorHandlerService,
    private routerNav: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {

    this.statusOptions = Object.keys(Status).map(key => {
      return { label: Status[key], value: key };
    });

    this.buscaCategorias();
    this.criarFormulario();
    this.buscaExistente();

  }

  salvar() {

    if (this.editando) {
      this.atualizar();
    } else {
      this.adicionar();
    }

  }

  get editando(): boolean {
    return Boolean(this.formulario.value.id);
  }

  private atualizar() {

    this.service.atualizar(this.formulario.value).then(response => {

      this.formulario.patchValue(response);

      this.messageService.add({
        severity: 'success',
        summary: 'Sucesso',
        detail: 'Produto Salvo'
      });

    }).catch(error => {
      this.errorHandlerService.handle(error);
    });

  }

  private adicionar() {

    this.service.adicionar(this.formulario.value).then(response => {

      this.routerNav.navigate(['/produtos', response.id]);

      this.messageService.add({
        severity: 'success',
        summary: 'Sucesso',
        detail: 'Produto Salvo'
      });

    }).catch(error => {
      this.errorHandlerService.handle(error);
    });

  }

  private buscaExistente() {

    const id = this.route.snapshot.params[`id`];

    if (id) {

      this.service.buscarProdutoPorId(id).then(response => {

        this.formulario.patchValue(response);

      }).catch(error => {
        this.errorHandlerService.handle(error);
      });

    }

  }

  private criarFormulario() {

    this.formulario = this.formBuilder.group({
      id: null,
      nome: [null, Validators.required],
      status: ['ATIVO', Validators.required],
      imagem: null,
      codigoDeBarras: [null, Validators.required],
      categoria: [null, Validators.required],
    });

  }

  private buscaCategorias() {

    this.service.buscarCategorias().then(response => {

      this.categorias = response;

    }).catch(error => {
      this.errorHandlerService.handle(error);
    });

  }

}

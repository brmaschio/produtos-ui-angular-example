import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Status } from 'src/app/core/model';
import { ProdutosService } from '../produtos.service';

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
  ) { }

  ngOnInit(): void {

    this.statusOptions = Object.keys(Status).map(key => {
      return { label: Status[key], value: key }
    });

    // TODO
    this.buscaCategorias();

    this.criarFormulario();
    this.buscaExistente();

  }

  salvar() {
    console.log(this.formulario.value)
  }

  get editando(): boolean {
    return Boolean(this.formulario.value.id);
  }

  private buscaExistente() {

    let id = this.route.snapshot.params['id'];
    console.log(id);

  }

  private criarFormulario() {

    this.formulario = this.formBuilder.group({
      id: null,
      nome: [null, Validators.required],
      status: ['ATIVO', Validators.required],
      imagem: '',
      codigoDeBarras: [null, Validators.required],
      categoria: [null, Validators.required],
    });

  }

  private buscaCategorias() {

    this.service.buscarCategorias().then(response => {

      this.categorias = response;

    }).catch(() => {

    });

  }

}

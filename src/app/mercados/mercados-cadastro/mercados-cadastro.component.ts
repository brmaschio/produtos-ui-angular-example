import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { CepService } from 'src/app/core/cep.service';
import { Status } from 'src/app/core/model';

@Component({
  selector: 'app-mercados-cadastro',
  templateUrl: './mercados-cadastro.component.html',
  styleUrls: ['./mercados-cadastro.component.scss']
})
export class MercadosCadastroComponent implements OnInit {

  formulario: FormGroup;
  statusOptions = [];

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private cepService: CepService
  ) { }

  ngOnInit(): void {

    this.statusOptions = Object.keys(Status).map(key => {
      return { label: Status[key], value: key }
    });

    this.buscaExistente();
    this.criarFormulario();

  }

  salvar() {
    console.log(this.formulario.value)
  }

  buscaCep() {

      this.cepService.buscarCep(this.formulario.value.logradouro.cep).then(response => {

        const mercadoLogradouro = {
          logradouro: {
            bairro: response.bairro,
            cidade: response.localidade,
            endereco: response.logradouro,
            estado: response.uf,

          }
        }

        this.formulario.patchValue(mercadoLogradouro);

      }).catch(() => {

      });

  }

  habilitaPesquisaCep(): boolean {
    const cep = new String(this.formulario.value.logradouro.cep)
    return cep.length >= 8;
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
      cnpj: [null, [Validators.required, Validators.minLength(18), Validators.maxLength(18)]],
      nome: [null, Validators.required],
      nomeFantasia: [null, Validators.required],
      status: ['ATIVO', Validators.required],
      imagem: '',
      logradouro: this.formBuilder.group({
        endereco: null,
        numero: null,
        complemento: null,
        bairro: null,
        cep: [null, Validators.minLength(8)],
        cidade: null,
        estado: null,
        telefones: []
      })
    });

  }

}

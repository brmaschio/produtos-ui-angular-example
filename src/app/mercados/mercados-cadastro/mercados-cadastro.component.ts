import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CepService } from 'src/app/core/services/cep.service';
import { Mercado, Status } from 'src/app/core/model';
import { MercadosService } from '../mercados.service';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-mercados-cadastro',
  templateUrl: './mercados-cadastro.component.html',
  styleUrls: ['./mercados-cadastro.component.scss']
})
export class MercadosCadastroComponent implements OnInit {

  formulario: FormGroup;
  statusOptions = [];
  telefoneAdicionar: string;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private cepService: CepService,
    private service: MercadosService,
    private errorHandlerService: ErrorHandlerService,
    private routerNav: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {

    this.statusOptions = Object.keys(Status).map(key => {
      return { label: Status[key], value: key };
    });

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

  buscaCep() {

    this.cepService.buscarCep(this.formulario.value.logradouro.cep).then(response => {

      const mercadoLogradouro = {
        logradouro: {
          bairro: response.bairro,
          cidade: response.localidade,
          endereco: response.logradouro,
          estado: response.uf,

        }
      };

      this.formulario.patchValue(mercadoLogradouro);

      this.messageService.add({
        severity: 'info',
        detail: 'Endereço Encontrado Com CEP'
      });

    }).catch(() => {

      this.messageService.add({
        severity: 'error',
        detail: 'CEP Invalido'
      });

    });

  }

  habilitaPesquisaCep(): boolean {
    const cep = new String(this.formulario.value.logradouro.cep);
    return cep.length >= 8;
  }

  habilitaAdicionarTelefone(): boolean {
    const telefone = new String(this.telefoneAdicionar);
    return telefone.length >= 14;
  }

  removerTelefone(telefone: string) {

    const telefones = this.formulario.value.logradouro.telefones;

    const telefonePosicao = telefones.indexOf(telefone);
    telefones.splice(telefonePosicao, 1);

    this.formulario.value.logradouro.telefones = telefones;

  }

  adicionarTelefone() {

    const telefones = this.formulario.value.logradouro.telefones;
    telefones.push(this.telefoneAdicionar);
    this.formulario.value.logradouro.telefones = telefones;

    this.telefoneAdicionar = '';

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
        detail: 'Mercado Salvo'
      });

    }).catch(error => {
      this.errorHandlerService.handle(error);
    });

  }

  private adicionar() {

    this.service.adicionar(this.formulario.value).then(response => {

      this.routerNav.navigate(['/mercados', response.id]);

      this.messageService.add({
        severity: 'success',
        summary: 'Sucesso',
        detail: 'Mercado Salvo'
      });

    }).catch(error => {
      this.errorHandlerService.handle(error);
    });

  }

  private buscaExistente() {

    const id = this.route.snapshot.params[`id`];

    if (id) {

      this.service.buscarMercadoPorId(id).then(response => {

        this.formulario.patchValue(response);

      }).catch(error => {
        this.errorHandlerService.handle(error);
      });

    }

  }

  private criarFormulario() {

    this.formulario = this.formBuilder.group({
      id: null,
      cnpj: [null, [Validators.required, Validators.minLength(18)]],
      nome: [null, Validators.required],
      nomeFantasia: [null, Validators.required],
      status: ['ATIVO', Validators.required],
      imagem: null,
      logradouro: this.formBuilder.group({
        endereco: null,
        numero: null,
        complemento: null,
        bairro: null,
        cep: [null, Validators.minLength(8)],
        cidade: null,
        estado: null,
        telefones: [Array<string>()]
      })
    });

  }

}

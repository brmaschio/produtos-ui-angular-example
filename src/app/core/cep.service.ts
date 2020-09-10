import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  private viaCepURL: string;

  constructor(
    private http: HttpClient
  ) {
    this.viaCepURL = 'https://viacep.com.br/ws/';
  }


  buscarCep(cepPesquisa: string): Promise<any> {

    const cep = new String(cepPesquisa);

    if(cep && cep.length >= 8){

      return this.http.get<any>(`${this.viaCepURL}${cep}/json`).toPromise().then(response => {

        if(response.erro){
          throw new Error('Cep Invalido');
        }

        return response;

      })

    }

    throw new Error('Cep Invalido');

  }

}

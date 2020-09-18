import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { Mercado } from '../core/model';
import { SecurityHttp } from '../seguranca/security-http';

export class MercadosFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 10;
}

@Injectable({
  providedIn: 'root'
})
export class MercadosService {

  private mercadosURL: string;

  constructor(
    private http: SecurityHttp
  ) {
    this.mercadosURL = `${environment.apiUrl}/mercados`;
  }

  buscarMercados(filtro: MercadosFiltro): Promise<any> {

    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString(),
      }
    });

    if (filtro.nome) {
      params = params.append('nome', filtro.nome);
    }

    return this.http.get<any>(this.mercadosURL, { params }).toPromise();

  }

  buscarMercadoPorId(id: number): Promise<Mercado> {

    return this.http.get<Mercado>(`${this.mercadosURL}/${id}`).toPromise();

  }

  alterarStatus(id: number): Promise<Mercado> {

    return this.http.put<Mercado>(`${this.mercadosURL}/status/${id}`, {}).toPromise();

  }

  atualizar(mercado: Mercado): Promise<Mercado> {

    return this.http.put<Mercado>(`${this.mercadosURL}/${mercado.id}`, mercado).toPromise();

  }

  adicionar(mercado: Mercado): Promise<Mercado> {

    return this.http.post<Mercado>(this.mercadosURL, mercado).toPromise();

  }

  excluir(id: number): Promise<any> {

    return this.http.delete(`${this.mercadosURL}/${id}`).toPromise();

  }

}

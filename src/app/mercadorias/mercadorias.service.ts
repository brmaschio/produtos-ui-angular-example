import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Mercadoria } from '../core/model';

export class MercadoriasFiltro {
  produto: string;
  mercado: string;
  pagina = 0;
  itensPorPagina = 10;
}

@Injectable({
  providedIn: 'root'
})
export class MercadoriasService {

  private mercadoriasURL: string;

  constructor(
    private http: HttpClient
  ) {
    this.mercadoriasURL = `${environment.apiUrl}/mercadorias`;
  }

  buscarMercadorias(filtro: MercadoriasFiltro): Promise<any> {

    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString(),
      }
    });

    if (filtro.mercado){
      params = params.append('mercado', filtro.mercado);
    }

    if (filtro.produto){
      params = params.append('produto', filtro.produto);
    }

    return this.http.get<any>(this.mercadoriasURL, { params }).toPromise();

  }

  atualizar(mercadoria: Mercadoria): Promise<Mercadoria> {

    return this.http.put<Mercadoria>(`${this.mercadoriasURL}/${mercadoria.id}`, mercadoria).toPromise();

  }

}
